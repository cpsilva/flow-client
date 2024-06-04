import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IgxDialogComponent, IgxSelectComponent, IgxTreeComponent, IgxTreeNode, IgxTreeNodeComponent, IgxTreeSearchResolver } from 'igniteui-angular';

@Component({
    selector: 'app-arvore-processos',
    templateUrl: './arvore-processos.component.html',
    styleUrls: ['./arvore-processos.component.scss'],
})
export class ArvoreProcessosComponent implements AfterViewInit {
    @Input() data: any = [];
    public selected = '';
    public removeMessage = '';
    public uploadRealizado = false;
    public selectedNodeId: number = 0;

    @ViewChild('removerDialog', { read: IgxDialogComponent, static: true })
    public removerDialog: IgxDialogComponent;

    @ViewChild('tree', { read: IgxTreeComponent })
    public tree: IgxTreeComponent;

    @ViewChild(IgxSelectComponent, { static: true })
    public igxSelect: IgxSelectComponent;

    constructor(private router: Router) { }

    ngAfterViewInit(): void {
        
        this.tree.activeNodeChanged.subscribe(n => {
            const node = this.tree.nodes.filter(x => x.active);
            this.selectedNodeId = node[0].data.Id;
        });
    }

    public abrirMapeamento(mapeamentoProcessoId: number) {
        this.router.navigate([`/mapeamento-processo/${mapeamentoProcessoId}`]);
    }

    public abrirRemoverDialog(item) {
        this.removeMessage = `Deseja remover ${item.Name}?`;
        this.removerDialog.open();
    }

    public onDialogOKSelected(event) {
        event.dialog.close();
    }

    public limparSelecao(event: MouseEvent) {
        this.selected = '';
        event.stopPropagation();
    }

    public anexarArquivo() {
        this.uploadRealizado = true;
        console.log('upload feito')
    }
}

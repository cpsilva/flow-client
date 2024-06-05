import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IgxDialogComponent, IgxSelectComponent, IgxTreeComponent, IgxTreeNode, IgxTreeNodeComponent, IgxTreeSearchResolver } from 'igniteui-angular';

@Component({
    selector: 'app-process-tree',
    templateUrl: './process-tree.component.html',
    styleUrls: ['./process-tree.component.scss'],
})
export class ProcessTreeComponent implements AfterViewInit {
    @Input() data: any = [];
    public selected = '';
    public removeMessage = '';
    public isUploadCompleted = false;
    public selectedNodeId: number = 0;

    @ViewChild('removeDialog', { read: IgxDialogComponent, static: true })
    public removeDialog: IgxDialogComponent;

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

    public openProcessMap(processMapId: number) {
        this.router.navigate([`/process-map/${processMapId}`]);
    }

    public showRemoveDialog(item) {
        this.removeMessage = `Are you sure you want to remove ${item.Name}?`;
        this.removeDialog.open();
    }

    public onDialogOKSelected(event) {
        event.dialog.close();
    }

    public cleanSelecion(event: MouseEvent) {
        this.selected = '';
        event.stopPropagation();
    }

    public uploadFile() {
        this.isUploadCompleted = true;
    }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { DATA } from './data';
import { IgxSelectComponent } from 'igniteui-angular';

@Component({
    selector: 'app-processo',
    templateUrl: './processo.component.html',
    styleUrls: ['./processo.component.scss'],
})

export class ProcessoComponent implements OnInit {
    public localData: any[];
    public arvoreProcessos = DATA;
    @ViewChild(IgxSelectComponent, { static: true })
    public igxSelect: IgxSelectComponent;
    public selected = '';
    public uploadRealizado = false;

    constructor() {
        
    }

    public ngOnInit() {
       
    }

    public adicionarNovoProcesso(event) {
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

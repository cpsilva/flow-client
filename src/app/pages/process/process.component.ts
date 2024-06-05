import { Component, OnInit, ViewChild } from '@angular/core';
import { DATA } from './data';
import { IgxSelectComponent } from 'igniteui-angular';

@Component({
    selector: 'app-process',
    templateUrl: './process.component.html',
    styleUrls: ['./process.component.scss'],
})

export class ProcessComponent implements OnInit {
    public localData: any[];
    public processTree = DATA;
    @ViewChild(IgxSelectComponent, { static: true })
    public igxSelect: IgxSelectComponent;
    public selected = '';
    public isUploadCompleted = false;

    constructor() {
        
    }

    public ngOnInit() {
       
    }

    public addNewProcess(event) {
        this.processTree.push(event);
        event.dialog.close();
    }

    public cleanSelection(event: MouseEvent) {
        this.selected = '';
        event.stopPropagation();
    }

    public uploadFile() {
        this.isUploadCompleted = true;
    }
}

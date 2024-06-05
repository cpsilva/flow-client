import { Component } from '@angular/core';
@Component({
    selector: 'app-process-map',
    templateUrl: './process-map.component.html',
    styleUrls: ['./process-map.component.scss']
})
export class ProcessMapComponent {
    diagramUrl = null;
    importError?: Error;

    handleImported(event) {

        const {
            type,
            error,
            warnings
        } = event;

        if (type === 'error') {
            console.error('Failed to render diagram', error);
        }

        this.importError = error;
    }
}

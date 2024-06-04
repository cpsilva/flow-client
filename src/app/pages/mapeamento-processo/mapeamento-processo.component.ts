import { Component } from '@angular/core';
@Component({
    selector: 'app-mapeamento-processo',
    templateUrl: './mapeamento-processo.component.html',
    styleUrls: ['./mapeamento-processo.component.scss']
})
export class MapeamentoProcessoComponent {
    diagramUrl = null;
    importError?: Error;

    handleImported(event) {

        const {
            type,
            error,
            warnings
        } = event;

        if (type === 'success') {
            console.log(`Rendered diagram (%s warnings)`, warnings.length);
        }

        if (type === 'error') {
            console.error('Failed to render diagram', error);
        }

        this.importError = error;
    }
}

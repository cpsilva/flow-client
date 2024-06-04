import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  SimpleChanges,
  EventEmitter
} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

import type Canvas from 'diagram-js/lib/core/Canvas';
import type { ImportDoneEvent, ImportXMLResult } from 'bpmn-js';

import BpmnJS from 'bpmn-js/lib/Modeler';

import { from, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-diagram',
  template: `
    <div #ref class="diagram-container"></div>
  `,
  styles: [
    `
      .diagram-container {
        height: 100%;
        width: 100%;
      }
    `
  ]
})
export class DiagramComponent implements AfterContentInit, OnChanges, OnDestroy, OnInit {

  @ViewChild('ref', { static: true }) private el: ElementRef;
  @Input() private url?: string;
  @Output() private importDone: EventEmitter<ImportDoneEvent> = new EventEmitter();
  private bpmnJS: BpmnJS = new BpmnJS();

  constructor(private http: HttpClient) {
    this.bpmnJS.on<ImportDoneEvent>('import.done', ({ error }) => {
      if (!error) {
        this.bpmnJS.get<Canvas>('canvas').zoom('fit-viewport');
      }
    });
  }

  ngAfterContentInit(): void {
    this.bpmnJS.attachTo(this.el.nativeElement);
  }

  async ngOnInit(): Promise<void> {
    if (!this.url) {
      await this.bpmnJS.createDiagram().then(d => (warnings) => {
        this.importDone.emit({
          type: 'success',
          warnings
        });
      }, (error) => {
        this.importDone.emit({
          type: 'error',
          error: error
        });
      });
      return;
    }

    this.loadUrl(this.url);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.url.currentValue && !changes.url.isFirstChange) {
      this.loadUrl(changes.url.currentValue);
      return;
    }
  }

  ngOnDestroy(): void {
    this.bpmnJS.destroy();
  }

  loadUrl(url: string): Subscription {

    return (
      this.http.get(url, { responseType: 'text' }).pipe(
        switchMap((xml: string) => this.importDiagram(xml)),
        map(result => result.warnings),
      ).subscribe(
        (warnings) => {
          this.importDone.emit({
            type: 'success',
            warnings
          });
        },
        (err) => {
          this.importDone.emit({
            type: 'error',
            error: err
          });
        }
      )
    );
  }

  /**
   * Creates a Promise to import the given XML into the current
   * BpmnJS instance, then returns it as an Observable.
   *
   * @see https://github.com/bpmn-io/bpmn-js-callbacks-to-promises#importxml
   */
  private importDiagram(xml: string): Observable<ImportXMLResult> {
    return from(this.bpmnJS.importXML(xml));
  }
}

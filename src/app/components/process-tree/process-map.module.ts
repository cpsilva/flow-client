import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IgxButtonModule, IgxDialogModule, IgxIconModule, IgxInputGroupModule, IgxRippleModule, IgxSelectModule, IgxTooltipDirective, IgxTooltipModule, IgxTooltipTargetDirective, IgxTreeModule } from "igniteui-angular";
import { ProcessTreeComponent } from "./component/process-tree.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
      ProcessTreeComponent,
    ],
    imports: [
      CommonModule,
      BrowserModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      FlexLayoutModule,
      IgxTreeModule,
      IgxIconModule,
      IgxButtonModule,
      IgxRippleModule,
      IgxTooltipModule,
      IgxDialogModule,
      IgxInputGroupModule,
      IgxSelectModule,
    ],
    providers: [
    ],
    exports:[
        ProcessTreeComponent
    ]
  })
  export class ProcessTreeModule {
  }
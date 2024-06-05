import { ProcessComponent } from "./process/process.component";
import { ProfabricComponentsModule } from "@profabric/angular-components";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { FlexLayoutModule } from "@angular/flex-layout";
import { IgxButtonModule, IgxDialogModule, IgxIconModule, IgxInputGroupModule, IgxRippleModule, IgxSelectModule, IgxTreeModule } from "igniteui-angular";
import { NgModule } from "@angular/core";
import { MenuItemModule } from "@components/menu-item/menu-item.module";
import { ProcessMapComponent } from "./process-map/process-map.component";
import { DiagramComponent } from "./process-map/diagram/diagram.component";
import { ProcessTreeModule } from "@components/process-tree/process-map.module";

@NgModule({
    declarations: [
      ProcessMapComponent,
      DiagramComponent,
      ProcessComponent
    ],
    imports: [
      ProfabricComponentsModule,
      CommonModule,
      BrowserModule,
      HttpClientModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-top-right',
        preventDuplicates: true
      }),
      FlexLayoutModule,
      IgxTreeModule,
      IgxIconModule,
      IgxButtonModule,
      IgxRippleModule,
      IgxDialogModule,
      IgxInputGroupModule,
      IgxSelectModule,
      ProcessTreeModule,
      MenuItemModule
    ],
    providers: [
    ],
  })
  export class PagesModule {
  }
  
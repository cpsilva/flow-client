import { AtividadeComponent } from "./atividade/atividade.component";
import { MapeamentoProcessoComponent } from "./mapeamento-processo/mapeamento-processo.component";
import { TarefaComponent } from "./tarefa/tarefa.component";
import { DiagramComponent } from "./mapeamento-processo/diagram/diagram.component";
import { ProcessoComponent } from "./processo/processo.component";
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
import { ArvoreProcessosModule } from "@components/arvore-processos/arvore-processos.module";
import { MenuItemModule } from "@components/menu-item/menu-item.module";

@NgModule({
    declarations: [
      AtividadeComponent,
      MapeamentoProcessoComponent,
      TarefaComponent,
      DiagramComponent,
      ProcessoComponent
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
      ArvoreProcessosModule,
      MenuItemModule
    ],
    providers: [
    ],
  })
  export class PagesModule {
  }
  
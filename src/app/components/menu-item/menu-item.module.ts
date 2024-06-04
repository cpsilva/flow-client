import { NgModule } from "@angular/core";
import { MenuItemComponent } from "./component/menu-item.component";
import { ProfabricComponentsModule } from "@profabric/angular-components";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "@/app-routing.module";

@NgModule({
    declarations: [
      MenuItemComponent,
    ],
    imports: [
      ProfabricComponentsModule,
      CommonModule,
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
    ],
    providers: [
    ],
    exports:[
        MenuItemComponent
    ]
  })
  export class MenuItemModule {
  }
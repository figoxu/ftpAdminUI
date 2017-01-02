import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import { HttpModule, JsonpModule } from '@angular/http';
import appRoutes from "./app.routes";
import {APP_BASE_HREF} from "@angular/common";
import { DialogModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
    imports:[BrowserModule,
        HttpModule,JsonpModule,appRoutes
        ,
        GridModule,
        DialogModule
    ],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}

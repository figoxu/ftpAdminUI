import {NgModule,NO_ERRORS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DashBoardCmp} from "./dashboard.cmp";
import {NavModule} from "../common/nav/nav.module";
@NgModule({
    imports:[CommonModule,NavModule],
    declarations: [DashBoardCmp],
    schemas:[NO_ERRORS_SCHEMA]
})
export default class DashBoardModule{}
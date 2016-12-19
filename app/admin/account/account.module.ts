import {NgModule,NO_ERRORS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AccountCmp} from "./account.cmp";
import {NavModule} from "../common/nav/nav.module";
@NgModule({
    imports:[CommonModule,NavModule],
    declarations: [AccountCmp],
    schemas:[NO_ERRORS_SCHEMA]
})
export default class AccountModule{}
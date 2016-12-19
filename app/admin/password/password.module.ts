import {NgModule,NO_ERRORS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PasswordCmp} from "./password.cmp";
import {NavModule} from "../common/nav/nav.module";
@NgModule({
    imports:[CommonModule,NavModule],
    declarations: [PasswordCmp],
    schemas:[NO_ERRORS_SCHEMA]
})
export default class PasswordModule{}
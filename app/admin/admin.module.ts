import {NgModule,NO_ERRORS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminComponent} from "./admin.component";
import adminRoutes from "./admin.route";
import {NavModule} from "./common/nav/nav.module";
import AccountModule from "./account/account.module";
import DashBoardModule from "./dashboard/dashboard.module";
import PasswordModule from "./password/password.module";
@NgModule({
    imports:[CommonModule, adminRoutes,NavModule,AccountModule,DashBoardModule,PasswordModule],
    declarations: [AdminComponent],
    schemas:[NO_ERRORS_SCHEMA]
})
export default class AdminModule{}
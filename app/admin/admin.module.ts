import {NgModule,NO_ERRORS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminComponent} from "./admin.component";
import adminRoutes from "./admin.route";
import {NavModule} from "./common/nav/nav.module";
@NgModule({
    imports:[CommonModule, adminRoutes,NavModule],
    declarations: [AdminComponent],
    schemas:[NO_ERRORS_SCHEMA]
})
export default class AdminModule{}
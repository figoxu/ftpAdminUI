import {AdminComponent} from "./admin.component";
import {RouterModule} from "@angular/router";
const routes = [
    {path: '', component: AdminComponent}
];

export default RouterModule.forChild(routes);
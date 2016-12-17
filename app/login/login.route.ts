import {LoginComponent} from "./login.component";
import {RouterModule} from "@angular/router";
const routes = [
    {path: '', component: LoginComponent}
];

export default RouterModule.forChild(routes);
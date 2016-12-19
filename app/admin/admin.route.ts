import {AdminComponent} from "./admin.component";
import {RouterModule} from "@angular/router";
import {PasswordCmp} from "./password/password.cmp";
import {DashBoardCmp} from "./dashboard/dashboard.cmp";
import {AccountCmp} from "./account/account.cmp";
const routes = [
    {path: '', component: AdminComponent},
    {path: 'account', component: AccountCmp},
    {path: 'dashboard', component: DashBoardCmp},
    {path: 'password', component: PasswordCmp}
];

export default RouterModule.forChild(routes);
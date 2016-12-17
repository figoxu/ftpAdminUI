import {RouterModule} from "@angular/router";

const routes = [
    {path: '', loadChildren: 'app/home/home.module'},
    {path: 'contacts', loadChildren: 'app/contacts/contacts.module'},
    {path: 'login', loadChildren: 'app/login/login.module'},
    {path: 'admin', loadChildren: 'app/admin/admin.module'}
];


export default RouterModule.forRoot(routes);

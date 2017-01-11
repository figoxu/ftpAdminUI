import {Component,ViewChild } from '@angular/core';
import {NavComponent} from "../common/nav/nav.component";
@Component({
    selector:'admin-account',
    templateUrl:'app/admin/account/account.html'
})

export class AccountCmp {
    @ViewChild(NavComponent) nav:NavComponent;

    ngAfterViewInit() {
        this.nav.currentMenu="FTP账号"
    }

}
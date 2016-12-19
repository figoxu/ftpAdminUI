import {Component,ViewChild } from '@angular/core';
import {NavComponent} from "../common/nav/nav.component";
@Component({
    selector:'admin-pwd',
    templateUrl:'app/admin/password/password.html'
})

export class PasswordCmp {

    @ViewChild(NavComponent) nav:NavComponent;

    ngAfterViewInit() {
        this.nav.currentMenu="修改密码"
    }
}
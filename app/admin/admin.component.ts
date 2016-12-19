import {Component,ViewChild } from '@angular/core';
import {NavComponent} from "./common/nav/nav.component";
@Component({
    templateUrl:'app/admin/admin.html',
})

export class AdminComponent {
    @ViewChild(NavComponent) nav:NavComponent;

    ngAfterViewInit() {
        this.nav.currentMenu="统计报表"
    }
}


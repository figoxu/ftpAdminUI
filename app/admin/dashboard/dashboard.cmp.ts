import {Component,ViewChild } from '@angular/core';
import {NavComponent} from "../common/nav/nav.component";
@Component({
    selector:'admin-dashboard',
    templateUrl:'app/admin/dashboard/dashboard.html'
})

export class DashBoardCmp {

    @ViewChild(NavComponent) nav:NavComponent;

    ngAfterViewInit() {
        this.nav.currentMenu="统计报表"
    }
}
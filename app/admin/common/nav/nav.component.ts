import {Component,Input } from '@angular/core';
@Component({
    selector:'admin-header',
    templateUrl:'app/admin/common/nav/nav.html'
})

export class NavComponent {
    @Input() currentMenu :string

}
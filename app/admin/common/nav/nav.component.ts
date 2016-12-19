import {Component,Input } from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector:'admin-header',
    templateUrl:'app/admin/common/nav/nav.html'
})

export class NavComponent {
    @Input() currentMenu :string
    constructor(private router: Router) {
        console.log("hello figo")
    }
    nav(place :string){
        console.log("@clicked  @place:",place," @emnu:",this.currentMenu)
        if( this.currentMenu == place ){
            return;
        }else if (place=="统计报表"){
            this.router.navigate(['admin',"dashboard"])
        }else if (place=="FTP账号"){
            this.router.navigate(['admin',"account"])
        }else if (place=="修改密码"){
            this.router.navigate(['admin',"password"])
        }
    }
}
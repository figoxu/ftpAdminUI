import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Index} from "../index/index";

@Component({
    selector: 'login',
    templateUrl: 'app/components/login/login.html',
    styleUrls: [],
    providers: [],
    directives: [],
    pipes: []
})
export class Login {
    constructor(private router: Router) {
        console.log("login page init")
    }


    login(account, password) {
        console.log("@account:", account, " @password:", password)
        if(account=='admin'&&password=='admin'){
            console.log("login")
            this.router.navigate(['Index'])
        }else{
            console.log("login failure")
        }
    }
}


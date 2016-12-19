import {Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector:'login',
    templateUrl:'app/login/login.html'
})

export class LoginComponent {
    title="figo"
    constructor(private router: Router) {
        console.log("hello figo")
    }


    login(account :string,password :string){
        console.log("@account:",account," @password:",password)

        if(account=='admin'&&password=='admin'){
            console.log("login")
            this.router.navigate(['admin',"account"])
        }else{
            console.log("login failure")
        }
    }
}


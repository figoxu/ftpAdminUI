import {Component } from 'angular2/core';

@Component({
    selector:'login',
    templateUrl:'app/components/login/login.html',
  	styleUrls: [],
    providers: [],
    directives: [],
    pipes: []
})
export class Login {
title="figo"
    constructor() {
    console.log("hello figo")
    }


    login(account,password){
    console.log("@account:",account," @password:",password)
    
    }
}


import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from './login.service';

@Component({
	selector: 'login',
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};

    constructor(private loginService: LoginService) { }

    ngOnInit() {
        // reset login status
        //this.loginService.logout();
    }

    login() {
        this.loginService.login(this.model.email, this.model.password)
            .subscribe(function () {
            	location.reload();    
            });
    }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: '<p></p>',
    moduleId: module.id
})

export class LogoutComponent implements OnInit {
    model: any = {};

    constructor(private router: Router) { }

    ngOnInit() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');

        this.router.navigate(['dashboard']);
    }
}
import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service'

@Component({
  selector: 'login-full',
  templateUrl: './login-full.component.html'
})
export class LoginFullComponent implements OnInit {

	private loggedIn = false;

	constructor(private login: LoginService) {
		this.loggedIn = this.login.isLoggedIn();

		if (this.loggedIn) {
			location.href = "/dashboard";
		}
	}

	ngOnInit(): void {
		
	}
}
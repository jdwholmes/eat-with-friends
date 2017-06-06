import { Component, OnInit } from '@angular/core';

import { LoginService } from './login/login.service'

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

	private loggedIn = false;
	private name = "";

	constructor(private login: LoginService) {
		this.loggedIn = this.login.isLoggedIn();

		if (this.loggedIn) {
			this.name = this.login.getUser().firstname;
		}
	}

	ngOnInit(): void {
		
	}
}

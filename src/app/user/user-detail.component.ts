import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { User } from './user'
import { UserService } from './user.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
	user: User;

	constructor(
		private userService: UserService, 
		private loginService: LoginService,
		private router: Router) {}

	ngOnInit(): void {		

		if (!this.loginService.isLoggedIn()) {
			this.router.navigate(['login']);
		}

		this.userService.getCurrentUser()
			.subscribe(user => this.user = user)
	}

	save(): void {
		this.userService.update(this.user)
			.subscribe(function () {
				location.reload();
			});
	}
}

import { Component, OnInit } from '@angular/core';

import { User } from './user'
import { UserService } from './user.service';

@Component({
  selector: 'register-user',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
	user: any = {};

	constructor(private userService: UserService) {}

	ngOnInit(): void {
		
	}

	register(): void { 
		this.userService.create(this.user)
			.subscribe(function () {
				location.reload();
			});
	}
}

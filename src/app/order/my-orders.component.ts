import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Order } from './order'
import { OrderService } from './order.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'my-orders',
  templateUrl: './my-orders.component.html'
})
export class MyOrdersComponent implements OnInit {
	orders: Order[];

	constructor(
		private orderService: OrderService, 
		private loginService: LoginService,
		private router: Router) {}

	ngOnInit(): void {		

		if (!this.loginService.isLoggedIn()) {
			this.router.navigate(['dashboard']);
		}

		this.orderService.getMyOrders()
			.then(orders => this.orders = orders);
	}

	redirectToOrder(orderId: string) {
		this.router.navigate(['/order/' + orderId]);
	}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Order } from './order'
import { OrderItem } from './order-item'
import { OrderService } from './order.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html'
})
export class OrderDetailComponent implements OnInit {
	order: Order;
	orderItems: OrderItem[];
	item: any = {};
	orderId = "";

	constructor(
		private orderService: OrderService, 
		private loginService: LoginService,
		private route: ActivatedRoute,
		private router: Router) {}

	ngOnInit(): void {		

		if (!this.loginService.isLoggedIn()) {
			this.router.navigate(['dashboard']);
		}

		let params: any = this.route.snapshot.params;

		this.orderId = params.id;

		// Get the initial order details
		this.orderService.getOrder(this.orderId).subscribe(order => this.order = order);

		// Get all of the items against the order
		this.orderService.getOrderItems(this.orderId).then(orderItems => this.orderItems = orderItems)
	}

	addItem() {
		this.item.orderId = this.orderId;

		this.orderService.addItem(this.item)
			.subscribe(function (data) {
				location.reload();
			});
	}
}

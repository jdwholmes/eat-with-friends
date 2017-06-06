import { Component, OnInit } from '@angular/core';

import { Order } from './order'
import { OrderService } from './order.service';

@Component({
  selector: 'order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
	order: any = {};

	constructor(private orderService: OrderService) {}

	ngOnInit(): void {
		
	}

	create(): void {
		this.orderService.create(this.order)
			.subscribe(function (data) {
				location.href = "/order/" + data._id;
			});
	}
}

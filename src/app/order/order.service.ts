import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

import { AppConfig } from '../app.config';
import { Order } from './order';
import { OrderItem } from './order-item';

@Injectable()
export class OrderService {
    constructor(private http: Http, private config: AppConfig) { }

    create(order: Order) {
        // The order is created by the logged in user
        order.createdBy = JSON.parse(localStorage.getItem('currentUser'))._id;
        order.createdDate = new Date();

        return this.http.post(this.config.apiUrl + '/orders/create', order, this.jwt()).map((response: Response) => response.json());
    }

    getOrder(_id) {
        return this.http.get(this.config.apiUrl + '/orders/detail/' + _id, this.jwt()).map((response: Response) => response.json());
    }

    getMyOrders(): Promise<Order[]> {
        return this.http.get(this.config.apiUrl + '/orders/my-orders', this.jwt())
            .toPromise()
            .then(response => response.json() as Order[]);
    }

    addItem(item: OrderItem) {
        return this.http.post(this.config.apiUrl + '/orders/items/create', item, this.jwt());
    }

    getOrderItems(_id): Promise<OrderItem[]> {
        return this.http.get(this.config.apiUrl + '/orders/items/' + _id, this.jwt())
            .toPromise()
            .then(response => response.json() as OrderItem[]);
    }

    // private helper methods
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
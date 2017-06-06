import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { AppConfig } from '../app.config';
import { User } from './user';

@Injectable()
export class UserService {
    constructor(private http: Http, private config: AppConfig) { }

    getCurrentUser() {
        return this.http.get(this.config.apiUrl + '/users/current/', this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post(this.config.apiUrl + '/users/register', user, this.jwt());
    }

    update(user: User) {
        return this.http.put(this.config.apiUrl + '/users/' + user._id, user, this.jwt());
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
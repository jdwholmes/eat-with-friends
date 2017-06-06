import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { UserDetailComponent }   from './user/user-detail.component';
import { LoginFullComponent }   from './login/login-full.component';
import { LogoutComponent }   from './login/logout.component';
import { OrderComponent }   from './order/order.component';
import { OrderDetailComponent }   from './order/order-detail.component';
import { MyOrdersComponent }   from './order/my-orders.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'profile', component: UserDetailComponent },
  { path: 'login', component: LoginFullComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'order', component: OrderComponent },
  { path: 'order/:id', component: OrderDetailComponent },
  { path: 'orders/my-orders', component: MyOrdersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

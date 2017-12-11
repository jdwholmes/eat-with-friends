import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout.component';
import { LoginFullComponent } from './login/login-full.component';
import { RegisterComponent } from './user/register.component';
import { UserDetailComponent } from './user/user-detail.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailComponent } from './order/order-detail.component';
import { SideMenuComponent } from './menu/side-menu.component';
import { MyOrdersComponent } from './order/my-orders.component';

import { LoginService } from './login/login.service';
import { UserService } from './user/user.service';
import { AppConfig } from './app.config';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    UserDetailComponent,
    LoginFullComponent,
    LogoutComponent,
    OrderComponent,
    OrderDetailComponent,
    MyOrdersComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    LoginService,
    AppConfig,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

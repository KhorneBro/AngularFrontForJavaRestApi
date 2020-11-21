import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {RouterModule} from '@angular/router';
import {AdminBoardLayoutComponent} from './shared/layouts/admin-board-layout/admin-board-layout.component';
import {RegisterPageComponent} from './auth/register-page/register-page.component';
import {LoginPageComponent} from './auth/login-page/login-page.component';
import {ProfileComponent} from './admin-board/profile/profile.component';
import {AllUsersComponent} from './admin-board/all-users/all-users.component';
import {UserFormComponent} from './admin-board/user-form/user-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {authInterceptorProviders} from './shared/helpers/auth.interceptor';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    AdminBoardLayoutComponent,
    RegisterPageComponent,
    LoginPageComponent,
    ProfileComponent,
    AllUsersComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}

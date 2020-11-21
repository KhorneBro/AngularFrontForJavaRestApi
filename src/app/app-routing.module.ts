import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {LoginPageComponent} from './auth/login-page/login-page.component';
import {RegisterPageComponent} from './auth/register-page/register-page.component';
import {AdminBoardLayoutComponent} from './shared/layouts/admin-board-layout/admin-board-layout.component';
import {AllUsersComponent} from './admin-board/all-users/all-users.component';
import {ProfileComponent} from './admin-board/profile/profile.component';
import {UserFormComponent} from './admin-board/user-form/user-form.component';
import {AuthGuard} from './shared/helpers/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  },
  {
    path: '',
    component: AdminBoardLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'all', component: AllUsersComponent},
      {path: ':id', component: ProfileComponent},
      {path: 'create', component: UserFormComponent},
      {path: 'update/:id', component: UserFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

// {
//   path: '',
//     component: AuthLayoutComponent,
//   children: [
//   {path: '', redirectTo: 'signin', pathMatch: 'full'},
//   {path: 'signin', component: LoginPageComponent},
//   {path: 'signup', component: RegisterPageComponent}
// ]
// },

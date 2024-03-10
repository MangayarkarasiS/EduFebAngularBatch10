import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { ColorComponent } from './color/color.component';
import { CounterComponent } from './counter/counter.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentListHttpComponent } from './student/student-list-http/student-list-http.component';
import { StudentViewHttpComponent } from './student/student-view-http/student-view-http.component';
import { StudentDeleteHttpComponent } from './student/student-delete-http/student-delete-http.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './guard/auth.guard';
import { StudentAddHttpComponent } from './student/student-add-http/student-add-http.component';
import { StudentEditHttpComponent } from './student/student-edit-http/student-edit-http.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
 
  {path:'display',component:DisplayComponent,canActivate:[AuthGuard]},
  {path:'color',component:ColorComponent},
  {path:'counter',component:CounterComponent},
  {path:'student-list',component:StudentListComponent,canActivate:[AuthGuard]},
  {path:'student-list-http',component:StudentListHttpComponent},
  {path:'student-view-http/:sid',component:StudentViewHttpComponent},
  {path:'student-delete-http/:sid',component:StudentDeleteHttpComponent},
  {path:'student-add-http',component:StudentAddHttpComponent},
  {path:'student-edit-http/:sid',component:StudentEditHttpComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'',redirectTo:'/display',pathMatch:'full'},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

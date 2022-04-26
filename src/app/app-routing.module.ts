import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  
  {path:"login",component:LoginComponent}, 
  {path:"",component:HomeComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
const routes: Routes = [
/*   {path: '',pathMatch: 'full',redirectTo: 'home'},
  {path:'home',component:MainComponent},
  {path:'flowers',component:FlowersComponent}, */





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

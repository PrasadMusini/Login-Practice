import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './404/login.component';

const routes: Routes = [

  {path:'404',component:LoginComponent},
  {path:'demo',component:DemoComponent},
  {path:'',redirectTo:'/demo',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

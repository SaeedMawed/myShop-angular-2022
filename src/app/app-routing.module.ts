import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';

const routes: Routes = [
  { path:"",redirectTo:"/home",pathMatch:"full" },
  { path:"home",component:HomeComponent },
  { path:"cart",component:MycartComponent },
  { path:"login",component:LoginComponent },
  { path:"product/:id/details",component:ProductInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

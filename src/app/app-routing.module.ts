import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {path :"" , redirectTo : "" , pathMatch : "full"},
  {path:"" , component:HomepageComponent},
  {path:'add-product', component: AddProductComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

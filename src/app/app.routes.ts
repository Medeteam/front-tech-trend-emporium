import { LoginPageComponent } from '../app/components/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
    // { path: '/home', component: AppComponent},
    {path: 'login',component: LoginPageComponent},
    {path: 'products',component:ShopListComponent},
    { path: 'products/:id', component: ProductDetailComponent }, 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
// export default routes;
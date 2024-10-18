import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    {path: 'login',component: AuthLayoutComponent, data: {formType: 'login'}},
    {path: 'signup',component: AuthLayoutComponent, data: {formType: 'signup'}},
    {path: 'products',component:ShopListComponent},
    { path: 'products/:id', component: ProductDetailComponent }, 
    {path: 'wishlist',component: WishlistComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
// export default routes;
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    {path: 'login',component: AuthLayoutComponent, data: {formType: 'login'}},
    {path: 'signup',component: AuthLayoutComponent, data: {formType: 'signup'}},
    {path: 'forgot-password',component: AuthLayoutComponent, data: {formType: 'forgot'}},
    {path: 'products',component:ShopListComponent},
    { path: 'products/:id', component: ProductDetailComponent }, 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
// export default routes;
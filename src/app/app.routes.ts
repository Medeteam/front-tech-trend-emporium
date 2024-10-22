import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomeComponent } from './components/home/home.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { EmployeePortalComponent } from './components/employee-portal/employee-portal.component';
<<<<<<< HEAD
import { ProductsTableComponent } from './components/products-table/products-table.component';
<<<<<<< Updated upstream
=======
import { CartComponent } from './components/cart/cart.component';
>>>>>>> 994f110ff30039d649bfb4e7f9e8259fd559ff39
=======
import { UsersList } from './components/users-list/users-list.component';
>>>>>>> Stashed changes

export const routes: Routes = [
    { path: '', component: HomeComponent},
    {path: 'login',component: AuthLayoutComponent, data: {formType: 'login'}},
    {path: 'signup',component: AuthLayoutComponent, data: {formType: 'signup'}},
    {path: 'forgot-password',component: AuthLayoutComponent, data: {formType: 'forgot'}},
    {path: 'products',component:ShopListComponent},
    { path: 'products/:id', component: ProductDetailComponent }, 
    {path: 'wishlist',component: WishlistComponent},
    {path: 'employee-portal', component: EmployeePortalComponent},
<<<<<<< Updated upstream
<<<<<<< HEAD
    {path: 'employee-portal/products', component: ProductsTableComponent}
=======
    {path: 'cart', component: CartComponent}
>>>>>>> 994f110ff30039d649bfb4e7f9e8259fd559ff39
=======
    {path: 'employee-portal/products', component: ProductsTableComponent},
    {path: 'employee-portal/users', component: UsersList}

>>>>>>> Stashed changes
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
// export default routes;
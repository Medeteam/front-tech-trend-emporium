import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomeComponent } from './components/home/home.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { EmployeePortalComponent } from './components/employee-portal/employee-portal.component';
import { CartComponent } from './components/cart/cart.component';
import { UsersList } from './components/users-list/users-list.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { CreateEmployeeFormComponent } from './components/create-employee-form/create-employee-form.component';
import { FinalOrderComponent } from './components/final-order/final-order.component';
import { CreateProductFormComponent } from './components/create-product-form/create-product-form.component';
<<<<<<< HEAD
import { CreateCategoryFormComponent } from './components/create-category-form/create-category-form.component';
import { CategoriesTableComponent } from './components/categories-table/categories-table.component';
=======
>>>>>>> 3e1b61d8b467b5c4762f45d975f8615860b716fb

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login',component: AuthLayoutComponent, data: {formType: 'login'}},
    {path: 'signup',component: AuthLayoutComponent, data: {formType: 'signup'}},
    {path: 'forgot-password',component: AuthLayoutComponent, data: {formType: 'forgot'}},
    {path: 'products',component:ShopListComponent},
    {path: 'products/:id', component: ProductDetailComponent }, 
    {path: 'wishlist',component: WishlistComponent},
    {path: 'employee-portal', component: EmployeePortalComponent},
    {path: 'cart', component: CartComponent},
    {path: 'order-confirmation', component: OrderConfirmationComponent},
    {path: 'final-order', component: FinalOrderComponent},
    {path: 'employee-portal/products', component: ProductsTableComponent},
    {path: 'employee-portal/users', component: UsersList},
    {path: 'employee-portal/products/create', component: CreateProductFormComponent},
    {path: 'employee-portal/categories', component: CategoriesTableComponent},
    {path: 'employee-portal/categories/create', component: CreateCategoryFormComponent},
    {path: 'employee-portal/employees/create', component:CreateEmployeeFormComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
// export default routes;
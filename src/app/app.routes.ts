import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';

export const routes: Routes = [
    // { path: '/home', component: AppComponent},
    {path: 'login',component: AuthLayoutComponent, data: {formType: 'login'}},
    {path: 'signup',component: AuthLayoutComponent, data: {formType: 'signup'}}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
// export default routes;
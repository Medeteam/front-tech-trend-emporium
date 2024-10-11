import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
    // { path: '/home', component: AppComponent},
    {
        path: 'login',
        component: LoginPageComponent,
        title: 'Log in',
    }
];

// export default routes;
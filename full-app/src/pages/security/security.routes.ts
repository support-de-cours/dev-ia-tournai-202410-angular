import { Route } from "@angular/router";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";


export const routes: Route[] = [

    // Register
    {
        path: 'register', // site.com/register 
        component: RegisterComponent
    },

    // Login
    {
        path: 'login', // site.com/login 
        component: LoginComponent
    },
    
];
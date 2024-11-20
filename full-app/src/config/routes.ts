import { Routes } from '@angular/router';

import { routes as homepageRoutes } from '../pages/homepage/homepage.routes';
import { routes as aboutRoutes } from '../pages/about/about.routes';
import { routes as contactRoutes } from '../pages/contact/contact.routes';
import { routes as bookRoutes } from '../pages/book/book.routes';

//    site.com/
//    Error 404

//    site.com/home
//    site.com/about
//    site.com/contact
//    site.com/books 
// 🔒 site.com/book
//    site.com/book/:id
// 🔒 site.com/book/:id/edit
// 🔒 site.com/book/:id/delete

export const routes: Routes = [

    ...homepageRoutes,
    ...aboutRoutes,
    ...contactRoutes,
    ...bookRoutes,


    // --

    // Default Route
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },

    // Wildcard Route
    {
        path: '**',
        // component: NotFoundComponent
        loadComponent: () => import('./../pages/errors/not-found/not-found.component').then(c => c.NotFoundComponent)
    }
];

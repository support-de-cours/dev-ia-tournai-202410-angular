import { Route } from "@angular/router";
import { IndexComponent } from "./pages/index/index.component";
import { CreateComponent } from "./pages/create/create.component";
import { ReadComponent } from "./pages/read/read.component";
import { UpdateComponent } from "./pages/update/update.component";
import { DeleteComponent } from "./pages/delete/delete.component";
import { authenticatedGuard } from "../../core/guards/authenticated.guard";
import { canActivateGuard } from "../../core/guards/can-activate.guard";
import { canDeactivateGuard } from "../../core/guards/can-deactivate.guard";

//    site.com/books 
// 🔒 site.com/book
//    site.com/book/:id
// 🔒 site.com/book/:id/edit
// 🔒 site.com/book/:id/delete

export const routes: Route[] = [
    // Book Index
    {
        path: 'books', // site.com/books 
        component: IndexComponent
    },

    {
        path: 'book',
        children: [

            // Book Create
            {
                path: '', // site.com/book/
                component: CreateComponent,
                canActivate: [authenticatedGuard],
            },
        
            // Book Read
            {
                path: ':id',
                children: [
                    
                    // Book Read
                    {
                        path: '', // site.com/book/:id
                        component: ReadComponent
                    },

                    // Book Update
                    {
                        path: 'edit', // site.com/book/:id/edit
                        component: UpdateComponent
                    },
                
                    // Book Delete
                    {
                        path: 'delete', // site.com/book/:id/delete
                        component: DeleteComponent
                    },

                ]
            }
        ]
    }

];





// export const routes: Route[] = [
//     // Book Index
//     {
//         path: 'books',
//         component: IndexComponent
//     },

//     // Book Create
//     {
//         path: 'book',
//         component: CreateComponent
//     },

//     // Book Read
//     {
//         path: 'book/:id',
//         component: ReadComponent
//     },

//     // Book Update
//     {
//         path: 'book/:id/edit',
//         component: UpdateComponent
//     },

//     // Book Delete
//     {
//         path: 'book/:id/delete',
//         component: DeleteComponent
//     },
// ];
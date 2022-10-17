import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { CitysComponent } from './dashboard/dashboard.component'

export const routes: Routes = [
/*     {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'

    }, */
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'

    },
    {
        path: 'home',
        component: FullLayoutComponent,
        children: [
            {
                path: 'dashboard',
                component : CitysComponent
            }
        ]

    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
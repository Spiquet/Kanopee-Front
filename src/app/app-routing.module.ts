// import { PageNotFoundComponent } from './cores/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'visitor' },
    {
        path: '',
        loadChildren: () => import('./pages/visitor/visitor.module').then((m) => m.VisitorModule),
    },
    {
        path: 'log',
        loadChildren: () => import('./pages/connected/connected.module').then((m) => m.ConnectedModule),
    },
    // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}

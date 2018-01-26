import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { WriteComponent } from './write/write.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'new', component: NewComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: 'reviews/:id', component: ReviewsComponent },
    { path: 'write/:id', component: WriteComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    //   { path: '**', component: '/PageNotFoundComponent' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
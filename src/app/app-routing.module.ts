import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  { path: '',   redirectTo: '/book', pathMatch: 'full' },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

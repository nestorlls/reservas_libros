import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { CreateBookComponent } from './pages/create-book/create-book.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';

const routes: Routes = [
  {
    path: '',
    component: BookPageComponent,
  },
  {
    path: 'new-book',
    component: CreateBookComponent,
  },
  {
    path: 'edit-book/:id',
    component: EditBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}

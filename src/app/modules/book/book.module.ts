import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { TableComponent } from './components/table/table.component';
import { CreateBookComponent } from './pages/create-book/create-book.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    BookPageComponent,
    TableComponent,
    CreateBookComponent,
    EditBookComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatPaginatorModule,
  ],
})
export class BookModule {}

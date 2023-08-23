import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BookService } from '@modules/book/services/book.service';
import { DialogService } from '@shared/services/dialog.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'title',
    'author',
    'status',
    'edit',
    'delete',
  ];

  listBooks: any = [];
  dataSource: any;

  constructor(
    private _bookService: BookService,
    private _dialogService: DialogService
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this._bookService.getAllBooks$().subscribe((books) => {
      this.listBooks = books;
      this.dataSource = new MatTableDataSource(this.listBooks);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteBook(id: string | null) {
    this._bookService.getBookById$(id).subscribe((book) => {
      this._dialogService
        .openConfirmDialog(`¿Desea eliminar el libro ${book.title}?`)
        .afterClosed()
        .subscribe((result) => {
          if (result) {
            this._bookService.deleteBook$(id).subscribe(() => {
              this.loadData();
            });
          }
        });
    });
  }
}

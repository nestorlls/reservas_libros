import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Book } from '@core/Models/Book.model';
import { BookService } from '@modules/book/services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent {
  bookData!: Book;
  formEdit: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    author: new FormControl('', [Validators.required]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(15),
    ]),
  });
  message: string = '';
  id: string | null = '';

  constructor(
    private _activeRoute: ActivatedRoute,
    private _bookService: BookService
  ) {}

  ngOnInit(): void {
    this.id = this._activeRoute.snapshot.paramMap.get('id');
    this.getBookById(this.id);
  }

  private getBookById(id: string | null) {
    this._bookService.getBookById$(id).subscribe((data) => {
      this.formEdit = new FormGroup({
        title: new FormControl(data.title),
        author: new FormControl(data.author),
        description: new FormControl(data.description),
      });
    });
  }

  onSubmit() {
    const { title, author, description } = this.formEdit.value;
    this._bookService
      .updateBook$(title, author, description, this.id)
      .subscribe(
        (res) => {
          this.message = 'Libro actualizado';
        },
        (err) => {
          console.log(err);
        }
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '@modules/book/services/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent implements OnInit {
  formCreate: FormGroup = new FormGroup({});
  message: string = '';

  constructor(private _bookService: BookService, private _router: Router) {}

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      author: new FormControl('', [Validators.required]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(15),
      ]),
    });
  }

  onSubmit() {
    const { title, author, description } = this.formCreate.value;
    this._bookService
      .createBook$(title, author, description)
      .subscribe((res) => {
        this._router.navigate(['/book']);
      });
  }
}

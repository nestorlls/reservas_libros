import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BookService } from '@modules/book/services/book.service';
import { ReservationService } from '@modules/reservation/services/reservation.service';
import { UserService } from '@modules/user/services/user.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})
export class CreateFormComponent {
  formCreate: FormGroup = new FormGroup({});
  users: any[] = [];
  books: any[] = [];
  message: string | null = '';

  constructor(
    private _userService: UserService,
    private _bookService: BookService,
    private _reservationService: ReservationService,
    public dialogRef: MatDialogRef<CreateFormComponent>
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllBooks();
    this.formCreate = new FormGroup({
      user: new FormControl('', [Validators.required]),
      book: new FormControl('', [Validators.required]),
      date_reserved: new FormControl('', [Validators.required]),
      date_due: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(event: any) {
    event.preventDefault();
    const { user, book, date_reserved, date_due } = this.formCreate.value;
    this._reservationService
      .createReservation$(user, book, date_reserved, date_due)
      .subscribe((res) => {
        if (res.message) {
          this.message = res.message;
        } else {
          this.dialogRef.close();
        }
      });
  }

  private getAllUsers() {
    this._userService.getAllUsers$().subscribe((res) => {
      this.users = res;
    });
  }

  private getAllBooks() {
    this._bookService.getAllBooks$().subscribe((res) => {
      this.books = res;
    });
  }

  closeForm() {
    this.dialogRef.close();
  }
}

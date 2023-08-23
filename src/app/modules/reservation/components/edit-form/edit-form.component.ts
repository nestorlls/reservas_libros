import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookService } from '@modules/book/services/book.service';
import { ReservationService } from '@modules/reservation/services/reservation.service';
import { UserService } from '@modules/user/services/user.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent {
  formEdit: FormGroup = new FormGroup({});

  users: any[] = [];
  books: any[] = [];
  id: string | null = '';
  selectedUser: any;
  selectedBook: any;

  constructor(
    private _userService: UserService,
    private _bookService: BookService,
    private _reservationService: ReservationService,
    public dialogRef: MatDialogRef<EditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.id = this.data.message;
    this.formEdit = new FormGroup({
      user: new FormControl('', [Validators.required]),
      book: new FormControl('', [Validators.required]),
      date_reserved: new FormControl('', [Validators.required]),
      date_due: new FormControl('', [Validators.required]),
    });
    this.getAllUsers();
    this.getAllBooks();
    this.getReservationById(this.id);
  }

  onSubmit(event: any) {
    event.preventDefault();
    const { user, book, date_reserved, date_due } = this.formEdit.value;
    this._reservationService
      .updateReservation$(user, book, date_reserved, date_due, this.id)
      .subscribe((res) => {
        this.dialogRef.close();
      });
  }

  private getReservationById(id: string | null) {
    this._reservationService.getReservationById$(id).subscribe((data) => {
      this.selectedUser = data.user._id;
      this.selectedBook = data.book._id;
      this.formEdit = new FormGroup({
        user: new FormControl(data.user._id, [Validators.required]),
        book: new FormControl(data.book._id, [Validators.required]),
        date_reserved: new FormControl(data.date_reserved, [
          Validators.required,
        ]),
        date_due: new FormControl(data.date_due, [Validators.required]),
      });
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

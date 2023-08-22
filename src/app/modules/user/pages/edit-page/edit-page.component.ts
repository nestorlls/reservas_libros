import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@core/Models/User.model';
import { UserService } from '@modules/user/services/user.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
})
export class EditPageComponent implements OnInit {
  userData!: User;
  formEdit: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  message: string = '';
  id: string | null = '';

  constructor(
    private _activeRoute: ActivatedRoute,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this.id = this._activeRoute.snapshot.paramMap.get('id');
    this.getUserById(this.id);
  }

  private getUserById(id: string | null) {
    this._userService.getUserById$(id).subscribe((data) => {
      this.formEdit = new FormGroup({
        username: new FormControl(data.username),
        email: new FormControl(data.email),
      });
    });
  }

  onSubmit() {
    const { username, email } = this.formEdit.value;
    this._userService.updateUser$(username, email, this.id).subscribe(
      (res) => {
        this.message = 'Usuario actualizado';
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

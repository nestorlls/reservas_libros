import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@modules/user/services/user.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css'],
})
export class CreatePageComponent implements OnInit {
  formCreate: FormGroup = new FormGroup({});
  message: string = '';

  constructor(private _userService: UserService, private _router: Router) {}

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    const { username, email } = this.formCreate.value;
    this._userService.createUser$(username, email).subscribe(
      (res) => {
        this._router.navigate(['/users']);
      },
      (err) => {
        this.message = err.error.message;
        console.log(err.message);
      }
    );
  }
}

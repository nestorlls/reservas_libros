import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@core/Models/User.model';
import { UserService } from '@modules/user/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() userData!: any;
  @Input() btnText: string = '';

  form: FormGroup = new FormGroup({});

  constructor(private _userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', []),
      email: new FormControl('', []),
    });
  }

  onSubmit() {
    const { username, email } = this.form.value;

    this._userService.createUser$(username, email).subscribe((res) => {
      console.log(res);
    });
  }
}

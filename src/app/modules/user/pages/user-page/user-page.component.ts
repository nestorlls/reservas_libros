import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@core/Models/User.model';
import { UserService } from '@modules/user/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

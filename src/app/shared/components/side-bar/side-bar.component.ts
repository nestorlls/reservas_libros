import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  mainMenu: {
    defaultOptions: any[];
  } = {
    defaultOptions: [],
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Users',
        icon: 'uil uil-user',
        router: ['user'],
      },
      {
        name: 'Books',
        icon: 'uil uil-books',
        router: ['book'],
      },
      {
        name: 'Reservations',
        icon: 'uil uil-clipboard-notes',
        router: ['reservation'],
      },
    ];
  }
}

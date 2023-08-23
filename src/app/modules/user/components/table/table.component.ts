import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { User } from '@core/Models/User.model';
import { UserService } from '@modules/user/services/user.service';
import { RouterModule } from '@angular/router';
import { DialogService } from '@shared/services/dialog.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, RouterModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'username',
    'email',
    'edit',
    'delete',
  ];

  listUsers: User[] = [];
  dataSource: any;

  constructor(
    private _userService: UserService,
    private _dialogService: DialogService
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.loadData();
    this._userService.RefreshRequired$.subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this._userService.getAllUsers$().subscribe((users) => {
      this.listUsers = users;
      this.dataSource = new MatTableDataSource(this.listUsers);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteUser(IdUser: string) {
    this._userService.getUserById$(IdUser).subscribe((user) => {
      this._dialogService
        .openConfirmDialog(`Do you want to delete ${user.username}?`)
        .afterClosed()
        .subscribe((result) => {
          if (result) {
            this._userService.deleteUser$(IdUser).subscribe(() => {
              this.loadData();
            });
          }
        });
    });
  }
}

import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ReservationService } from '@modules/reservation/services/reservation.service';
import { DialogService } from '@shared/services/dialog.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'user',
    'book',
    'date_reserved',
    'date_due',
    'edit',
    'delete',
  ];

  listReservations: any = [];
  dataSource: any;

  constructor(
    private _reservationService: ReservationService,
    private _dialogService: DialogService
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.loadReservations();
    this._reservationService.RefreshRequired$.subscribe(() => {
      this.loadReservations();
    });
  }

  loadReservations() {
    this._reservationService.getAllReservations$().subscribe((res) => {
      this.listReservations = res;
      this.dataSource = new MatTableDataSource(this.listReservations);
      this.dataSource.paginator = this.paginator;
    });
  }

  openEdit(id: string | null) {
    this._dialogService.openEditFormDialogEdit(id);
  }

  deleteReservation(id: string | null) {
    this._reservationService.getReservationById$(id).subscribe((res) => {
      this._dialogService
        .openConfirmDialog(`¿Desea eliminar la reserva de ${res.book.title}?`)
        .afterClosed()
        .subscribe((result) => {
          if (result) {
            this._reservationService.deleteReservation$(id).subscribe(() => {
              this.loadReservations();
            });
          }
        });
    });
  }
}

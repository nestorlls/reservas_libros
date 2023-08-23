import { Component } from '@angular/core';
import { ReservationService } from '@modules/reservation/services/reservation.service';
import { DialogService } from '@shared/services/dialog.service';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css'],
})
export class ReservationPageComponent {
  constructor(
    private _reservationService: ReservationService,
    private _dialogService: DialogService
  ) {}

  openDialog() {
    this._dialogService.openFormDialogCreate();
  }
}

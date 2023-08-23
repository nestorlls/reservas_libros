import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateFormComponent } from '@modules/reservation/components/create-form/create-form.component';
import { EditFormComponent } from '@modules/reservation/components/edit-form/edit-form.component';
import { ModalComponent } from '@shared/components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openConfirmDialog(msg: string) {
    return this.dialog.open(ModalComponent, {
      width: '350px',
      height: '200px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        message: msg,
      },
    });
  }

  openFormDialogCreate() {
    return this.dialog.open(CreateFormComponent, {
      width: '600px',
      panelClass: 'form-dialog-container',
      disableClose: true,
    });
  }

  openEditFormDialogEdit(id: string | null) {
    return this.dialog.open(EditFormComponent, {
      width: '600px',
      panelClass: 'form-dialog-container',
      disableClose: true,
      data: {
        message: id,
      },
    });
  }
}

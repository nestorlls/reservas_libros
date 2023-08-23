import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import { TableComponent } from './components/table/table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditFormComponent } from './components/edit-form/edit-form.component';

@NgModule({
  declarations: [
    ReservationPageComponent,
    TableComponent,
    CreateFormComponent,
    EditFormComponent,
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
})
export class ReservationModule {}

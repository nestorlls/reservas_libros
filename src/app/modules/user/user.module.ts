import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { SharedModule } from '@shared/shared.module';
import { TableComponent } from './components/table/table.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [UserPageComponent, CreatePageComponent, EditPageComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    TableComponent,
    ReactiveFormsModule,
    MatDialogModule,
  ],
})
export class UserModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [SideBarComponent, FormComponent, ModalComponent],
  imports: [CommonModule, RouterModule],
  exports: [SideBarComponent, FormComponent, ModalComponent],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { DialogModule } from '@angular/cdk/dialog';

@NgModule({
  declarations: [SideBarComponent, ModalComponent],
  imports: [CommonModule, RouterModule, DialogModule],
  exports: [SideBarComponent, ModalComponent],
})
export class SharedModule {}

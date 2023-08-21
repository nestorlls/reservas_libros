import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [SideBarComponent],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('@modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'book',
    loadChildren: () =>
      import('@modules/book/book.module').then((m) => m.BookModule),
  },
  {
    path: 'reservation',
    loadChildren: () =>
      import('@modules/reservation/reservation.module').then(
        (m) => m.ReservationModule
      ),
  },
  {
    path: '**',
    redirectTo: '/user',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

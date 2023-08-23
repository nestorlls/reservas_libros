import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReservationService } from '@modules/reservation/services/reservation.service'; // Asegúrate

import { ReservationPageComponent } from './reservation-page.component';
import { MatDialog } from '@angular/material/dialog';
import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER } from '@angular/material/select';

describe('ReservationPageComponent', () => {
  let component: ReservationPageComponent;
  let fixture: ComponentFixture<ReservationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationPageComponent],
      imports: [HttpClientTestingModule],
      providers: [
        ReservationService,
        {
          provide: MatDialog,
          useValue: MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
        },
      ],
    });
    fixture = TestBed.createComponent(ReservationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

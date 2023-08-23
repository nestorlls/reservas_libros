import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookComponent } from './edit-book.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('EditBookComponent', () => {
  let component: EditBookComponent;
  let fixture: ComponentFixture<EditBookComponent>;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBookComponent],
      imports: [
        {
          provide: ActivatedRoute,
          useValue: spy,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(EditBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

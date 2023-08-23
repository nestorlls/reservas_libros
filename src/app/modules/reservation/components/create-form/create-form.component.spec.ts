import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { CreateFormComponent } from './create-form.component';

describe('CreateFormComponent', () => {
  let component: CreateFormComponent;
  let fixture: ComponentFixture<CreateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFormComponent],
      imports: [HttpClientTestingModule, MatDialogModule, ReactiveFormsModule],
      providers: [
        {
          provide: MatDialogRef,
          userValue: {},
        },
      ],
    });
    fixture = TestBed.createComponent(CreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

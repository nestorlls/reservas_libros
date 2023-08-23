import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookService } from '@modules/book/services/book.service';
import { UserService } from '@modules/user/services/user.service';
import { RouterTestingModule } from '@angular/router/testing';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [BookService, UserService, RouterTestingModule],
    });
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

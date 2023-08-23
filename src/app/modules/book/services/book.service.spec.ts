import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    const service: BookService = TestBed.inject(BookService);
    expect(service).toBeTruthy();
  });
});

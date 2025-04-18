import { TestBed } from '@angular/core/testing';

import { NoteDataStoreService } from './data-store.service';

describe('DataStoreService', () => {
  let service: NoteDataStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteDataStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

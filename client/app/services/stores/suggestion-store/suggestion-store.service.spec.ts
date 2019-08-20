import { TestBed } from '@angular/core/testing';

import { SuggestionStoreService } from './suggestion-store.service';

describe('SuggestionStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuggestionStoreService = TestBed.get(SuggestionStoreService);
    expect(service).toBeTruthy();
  });
});

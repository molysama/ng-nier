import { TestBed } from '@angular/core/testing';

import { FieldsetService } from './fieldset.service';

describe('FieldsetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FieldsetService = TestBed.get(FieldsetService);
    expect(service).toBeTruthy();
  });
});

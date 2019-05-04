import { TestBed } from '@angular/core/testing';

import { PalavraService } from './palavra.service';

describe('PalavraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PalavraService = TestBed.get(PalavraService);
    expect(service).toBeTruthy();
  });
});

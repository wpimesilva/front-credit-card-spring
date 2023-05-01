import { TestBed } from '@angular/core/testing';

import { EstudanteServiceService } from './estudante-service.service';

describe('EstudanteServiceService', () => {
  let service: EstudanteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudanteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

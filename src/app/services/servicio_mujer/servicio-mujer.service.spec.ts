import { TestBed } from '@angular/core/testing';

import { ServicioMujerService } from './servicio-mujer.service';

describe('ServicioMujerService', () => {
  let service: ServicioMujerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioMujerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

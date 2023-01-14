import { TestBed } from '@angular/core/testing';

import { ServicioNinoService } from './servicio-nino.service';

describe('ServicioNinoService', () => {
  let service: ServicioNinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioNinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

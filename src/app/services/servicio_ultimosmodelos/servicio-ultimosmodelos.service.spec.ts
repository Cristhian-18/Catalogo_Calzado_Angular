import { TestBed } from '@angular/core/testing';

import { ServicioUltimosmodelosService } from './servicio-ultimosmodelos.service';

describe('ServicioUltimosmodelosService', () => {
  let service: ServicioUltimosmodelosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioUltimosmodelosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

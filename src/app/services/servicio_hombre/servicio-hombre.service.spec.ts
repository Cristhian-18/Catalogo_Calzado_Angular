import { TestBed } from '@angular/core/testing';

import { ServicioHombreService } from './servicio-hombre.service';

describe('ServicioHombreService', () => {
  let service: ServicioHombreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioHombreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

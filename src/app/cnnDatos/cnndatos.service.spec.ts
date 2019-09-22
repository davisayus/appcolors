import { TestBed } from '@angular/core/testing';

import { CnndatosService } from './cnndatos.service';

describe('CnndatosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CnndatosService = TestBed.get(CnndatosService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { InstrutorGuardsService } from './instrutor.guards';

describe('InstrutorGuardsService', () => {
  let service: InstrutorGuardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstrutorGuardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

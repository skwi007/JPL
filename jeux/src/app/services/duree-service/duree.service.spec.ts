import { TestBed } from '@angular/core/testing';
import { IDuree } from './duree';

import { DureeService } from './duree.service';

describe('DureeService', () => {
  let service: DureeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DureeService);
  });

  it('Le service doit être créé', () => {
    expect(service).toBeTruthy();
  });
});

describe('GetDurees', () => {
  let service: DureeService;
  let durees: IDuree[] = [];

  beforeEach(() => {
    service = new DureeService();
    durees = service.getDurees();
  });

  it('la liste doit contenir des durées', () => {
    expect(durees.length).toBeGreaterThan(0);
  });
});

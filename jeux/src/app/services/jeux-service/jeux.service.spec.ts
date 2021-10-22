import { TestBed } from '@angular/core/testing';
import { IJeu } from './jeu';

import { JeuxService } from './jeux.service';

describe('Création JeuxService', () => {
  let service: JeuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JeuxService);
  });

  it('Le service doit être créé', () => {
    expect(service).toBeTruthy();
  });
});

describe('GetJeux', () => {
  let service: JeuxService;
  let jeux: IJeu[] = [];

  beforeEach(() => {
    service = new JeuxService();
    jeux = service.getJeux();
  });

  it('la liste doit contenir des jeux', () => {
    expect(jeux.length).toBeGreaterThan(0);
  });
});


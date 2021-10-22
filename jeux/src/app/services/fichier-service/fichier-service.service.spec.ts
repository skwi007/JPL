import { TestBed } from '@angular/core/testing';
import { IFichier } from './fichier';

import { FichierService } from './fichier-service.service';

describe('FichierService', () => {
  let service: FichierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FichierService);
  });

  it('Le service doit être créé', () => {
    expect(service).toBeTruthy();
  });
});

describe('GetFichiers', () => {
  let service: FichierService;
  let fichiers: IFichier[] = [];

  beforeEach(() => {
    service = new FichierService();
    fichiers = service.getFichiers();
  });

  it('la liste doit contenir des fichiers', () => {
    expect(fichiers.length).toBeGreaterThan(0);
  });
});
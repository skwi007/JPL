import { TestBed } from '@angular/core/testing';
import { IMateriel } from './materiel';

import { MaterielService} from './materiel-service.service';

describe('Création de MaterielService', () => {
  let service: MaterielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterielService);
  });

  it('Le service doit être créé', () => {
    expect(service).toBeTruthy();
  });
});

describe('GetMateriels', () => {
  let service: MaterielService;
  let materiels: IMateriel[] = [];

  beforeEach(() => {
    service = new MaterielService();
    materiels = service.getMateriels();
  });

  it('la liste doit contenir du matériel', () => {
    expect(materiels.length).toBeGreaterThan(0);
  });
});

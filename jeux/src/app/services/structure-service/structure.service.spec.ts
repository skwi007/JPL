import { TestBed } from '@angular/core/testing';
import { IStructure } from './structure';

import { StructureService } from './structure.service';

describe('StructureService', () => {
  let service: StructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StructureService);
  });

  it('Le service doit être créé', () => {
    expect(service).toBeTruthy();
  });
});

describe('GetStructures', () => {
  let service: StructureService;
  let structures: IStructure[] = [];

  beforeEach(() => {
    service = new StructureService();
    structures = service.getStructures();
  });

  it('la liste doit contenir du matériel', () => {
    expect(structures.length).toBeGreaterThan(0);
  });
});

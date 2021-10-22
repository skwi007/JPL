import { TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { ITerrain } from './terrain';

import { TerrainService } from './terrain-service.service';

describe('TerrainServiceService', () => {
  let service: TerrainService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
    service = TestBed.inject(TerrainService);
  });

  it('Le service doit être créé', () => {
    expect(service).toBeTruthy();
  });
});

describe('GetTerrains', () => {
  let service: TerrainService;
  let terrains: ITerrain[] = [];

  beforeEach(() => {
    service = new TerrainService();
    terrains = service.getTerrains();
  });

  it('la liste doit contenir les terrains', () => {
    expect(terrains.length).toBeGreaterThan(0);
  });
});

import { TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { IAge } from './age';

import { AgeService } from './age.service';

describe('AgeService', () => {
  let service: AgeService;

  beforeEach(() => {
    service = TestBed.inject(AgeService);
  });

  it('Le service doit être créé', () => {
    expect(service).toBeTruthy();
  });
});

describe('GetAges', () => {
  let service: AgeService;
  let ages: IAge[] = [];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [ AppModule ]
      })
      .compileComponents();
    service = new AgeService();
    ages = service.getAges();
  });

  it('la liste doit contenir des âges', () => {
    expect(ages.length).toBeGreaterThan(0);
  });
});

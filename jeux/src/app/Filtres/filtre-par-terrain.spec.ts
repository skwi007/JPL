import { TestBed } from "@angular/core/testing";
import { AppModule } from "../app.module";
import { JeuxListComponent } from "../components/jeux-list/jeux-list.component";
import { JeuxService } from "../services/jeux-service/jeux.service";
import { ITerrain } from "../services/terrain-service/terrain";
import { TerrainService } from "../services/terrain-service/terrain-service.service";
import { Filtres } from "./filtres";

describe('Filtre par terrain avec une liste vide', () => {
    let terrain: ITerrain[] = [];
    let service: JeuxService;
  
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ AppModule ]
          })
          .compileComponents();
      service = new JeuxService();
      Filtres.ancienneListePourLesTerrains = service.getJeux();
      Filtres.terrainsAFiltrer = terrain;
      Filtres.FiltreParTerrain();
    });
    
      it(`La liste doit contenir tous les éléments de départ`, () => {
        expect(JeuxListComponent.jeuxFiltres).toEqual(Filtres.ancienneListePourLesTerrains);
      });
      it(`Il doit y avoir autant d'éléments dans les listes`, () => {
          expect(JeuxListComponent.jeuxFiltres.length).toEqual(Filtres.ancienneListePourLesTerrains.length);
        });
    });

    describe(`Filtre par terrain avec une recherche avec un terrain plat et dégagé`, () => {
        let service: JeuxService;
        let terrainService: TerrainService;
        let terrains: ITerrain[] = [];
    
        beforeEach(async () => {
          await TestBed.configureTestingModule({
              declarations: [ AppModule ]
            })
            .compileComponents();
          service = new JeuxService();
          terrainService = new TerrainService();
          terrains = terrainService.getTerrains();
          Filtres.ancienneListePourLesTerrains = service.getJeux();
          Filtres.terrainsAFiltrer = terrains.filter(a=>a.Code == 'platEtDegage');
          Filtres.FiltreParTerrain();
        });
      
        it(`Il doit y avoir moins d'éléments dans la liste qui a été filtrée`, () => {
            expect(JeuxListComponent.jeuxFiltres.length).toBeLessThan(Filtres.ancienneListePourLesTerrains.length);
          });
    
          it(`La liste doit contenir le jeu 'La balle aux chasseurs'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'La balle aux chasseurs')).toEqual(Filtres.ancienneListePourLesTerrains.find(x => x.Nom == 'La balle aux chasseurs'));
          });
    
          it(`La liste ne doit pas contenir le jeu 'Le courant électrique'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Le courant électrique')).toEqual(undefined);
          });
      });

      describe(`Filtre par terrain avec une recherche avec un terrain Intérieur et un terrain Semi-aménagé`, () => {
        let service: JeuxService;
        let terrainService: TerrainService;
        let terrains: ITerrain[] = [];
    
        beforeEach(async () => {
          await TestBed.configureTestingModule({
              declarations: [ AppModule ]
            })
            .compileComponents();
          service = new JeuxService();
          terrainService = new TerrainService();
          terrains = terrainService.getTerrains();
          Filtres.ancienneListePourLesTerrains = service.getJeux();
          Filtres.terrainsAFiltrer = terrains.filter(a=>a.Code == 'interieur' || a.Code == 'semiAmenage');
          Filtres.FiltreParTerrain();
        });
      
        it(`Il doit y avoir moins d'éléments dans la liste qui a été filtrée`, () => {
            expect(JeuxListComponent.jeuxFiltres.length).toBeLessThan(Filtres.ancienneListePourLesTerrains.length);
          });
    
          it(`La liste doit contenir le jeu 'Le chifoumi géant'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Le chifoumi géant')).toEqual(Filtres.ancienneListePourLesTerrains.find(x => x.Nom == 'Le chifoumi géant'));
          });
          it(`La liste doit contenir le jeu 'Les ambassadeurs'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Les ambassadeurs')).toEqual(Filtres.ancienneListePourLesTerrains.find(x => x.Nom == 'Les ambassadeurs'));
          });
    
          it(`La liste ne doit pas contenir le jeu 'Le jeu des couleurs'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Le jeu des couleurs')).toEqual(undefined);
          });
      });

      describe(`Filtre par terrain avec une recherche avec un terrain Buissonneux, terrain Intérieur et un terrain Semi-aménagé puis en enlevant le terrain intérieur`, () => {
        let service: JeuxService;
        let terrainService: TerrainService;
        let terrains: ITerrain[] = [];
    
        beforeEach(async () => {
          await TestBed.configureTestingModule({
              declarations: [ AppModule ]
            })
            .compileComponents();
          service = new JeuxService();
          terrainService = new TerrainService();
          terrains = terrainService.getTerrains();
          Filtres.ancienneListePourLesTerrains = service.getJeux();
          Filtres.terrainsAFiltrer = terrains.filter(a=>a.Code == 'interieur' || a.Code == 'semiAmenage' || a.Code == 'buissonneux');
          Filtres.FiltreParTerrain();
          Filtres.terrainsAFiltrer = terrains.filter(a=>a.Code == 'semiAmenage' || a.Code == 'buissonneux');
          Filtres.FiltreParTerrain();
        });
      
        it(`Il doit y avoir moins d'éléments dans la liste qui a été filtrée`, () => {
            expect(JeuxListComponent.jeuxFiltres.length).toBeLessThan(Filtres.ancienneListePourLesTerrains.length);
          });
    
          it(`La liste doit contenir le jeu 'Le loup dans la forêt'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Le loup dans la forêt')).toEqual(Filtres.ancienneListePourLesTerrains.find(x => x.Nom == 'Le loup dans la forêt'));
          });
          it(`La liste doit contenir le jeu 'La chasse aux porcs épics'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'La chasse aux porcs épics')).toEqual(Filtres.ancienneListePourLesTerrains.find(x => x.Nom == 'La chasse aux porcs épics'));
          });
    
          it(`La liste ne doit pas contenir le jeu 'Les ambassadeurs'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Les ambassadeurs')).toEqual(undefined);
          });
      });
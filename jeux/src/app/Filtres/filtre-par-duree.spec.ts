import { TestBed } from "@angular/core/testing";
import { AppModule } from "../app.module";
import { JeuxListComponent } from "../components/jeux-list/jeux-list.component";
import { IDuree } from "../services/duree-service/duree";
import { DureeService } from "../services/duree-service/duree.service";
import { JeuxService } from "../services/jeux-service/jeux.service";
import { Filtres } from "./filtres";

describe('Filtre par durée avec une liste vide', () => {
    let durees: IDuree[] = [];
    let service: JeuxService;
  
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ AppModule ]
          })
          .compileComponents();
      service = new JeuxService();
      Filtres.ancienneListePourLesDurees = service.getJeux();
      Filtres.dureesAFiltrer = durees;
      Filtres.FiltreParDuree();
    });
    
      it(`La liste doit contenir tous les éléments de départ`, () => {
        expect(JeuxListComponent.jeuxFiltres).toEqual(Filtres.ancienneListePourLesDurees);
      });
      it(`Il doit y avoir autant d'éléments dans les listes`, () => {
          expect(JeuxListComponent.jeuxFiltres.length).toEqual(Filtres.ancienneListePourLesDurees.length);
        });
    });

    describe(`Filtre par durée avec une recherche avec 45 minutes`, () => {
        let service: JeuxService;
        let dureeService: DureeService;
        let durees: IDuree[] = [];
    
        beforeEach(async () => {
          await TestBed.configureTestingModule({
              declarations: [ AppModule ]
            })
            .compileComponents();
          service = new JeuxService();
          dureeService = new DureeService();
          durees = dureeService.getDurees();
          Filtres.ancienneListePourLesDurees = service.getJeux();
          Filtres.dureesAFiltrer = durees.filter(a=>a.Duree == 45);
          Filtres.FiltreParDuree();
        });
         
          it(`La liste doit contenir le jeu 'Jeu d'approche'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Jeu d\'approche')).toEqual(Filtres.ancienneListePourLesDurees.find(x => x.Nom == 'Jeu d\'approche'));
          });
    
          it(`La liste ne doit pas contenir le jeu 'Le courant électrique'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Le courant électrique')).toEqual(undefined);
          });
      });

      describe(`Filtre par durée avec une recherche avec 45 et 60 minutes`, () => {
        let service: JeuxService;
        let dureeService: DureeService;
        let durees: IDuree[] = [];
    
        beforeEach(async () => {
          await TestBed.configureTestingModule({
              declarations: [ AppModule ]
            })
            .compileComponents();
          service = new JeuxService();
          dureeService = new DureeService();
          durees = dureeService.getDurees();
          Filtres.ancienneListePourLesDurees = service.getJeux();
          Filtres.dureesAFiltrer = durees.filter(a=>a.Duree == 45 || a.Duree == 60);
          Filtres.FiltreParDuree();
        });
         
          it(`La liste doit contenir le jeu 'Jeu d'approche'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Jeu d\'approche')).toEqual(Filtres.ancienneListePourLesDurees.find(x => x.Nom == 'Jeu d\'approche'));
          });

          it(`La liste doit contenir le jeu 'Le chifoumi géant'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Le chifoumi géant')).toEqual(Filtres.ancienneListePourLesDurees.find(x => x.Nom == 'Le chifoumi géant'));
          });
    
          it(`La liste ne doit pas contenir le jeu 'Le courant électrique'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Le courant électrique')).toEqual(undefined);
          });
      });

      describe(`Filtre par durée avec une recherche avec 30 et 45 minutes puis en enlevant 45 minutes`, () => {
        let service: JeuxService;
        let dureeService: DureeService;
        let durees: IDuree[] = [];
    
        beforeEach(async () => {
          await TestBed.configureTestingModule({
              declarations: [ AppModule ]
            })
            .compileComponents();
          service = new JeuxService();
          dureeService = new DureeService();
          durees = dureeService.getDurees();
          Filtres.ancienneListePourLesDurees = service.getJeux();
          Filtres.dureesAFiltrer = durees.filter(a=>a.Duree == 45 || a.Duree == 30);
          Filtres.FiltreParDuree();
          Filtres.dureesAFiltrer = durees.filter(a=>a.Duree == 30);
          Filtres.FiltreParDuree();
        });
         
          it(`La liste doit contenir le jeu 'Les ambassadeurs'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Les ambassadeurs')).toEqual(Filtres.ancienneListePourLesDurees.find(x => x.Nom == 'Les ambassadeurs'));
          });
    
          it(`La liste ne doit pas contenir le jeu 'Jeu d'approche'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Jeu d\'approche')).toEqual(undefined);
          });
      });
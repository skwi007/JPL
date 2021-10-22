import { TestBed } from "@angular/core/testing";
import { AppModule } from "../app.module";
import { JeuxListComponent } from "../components/jeux-list/jeux-list.component";
import { IAge } from "../services/age-service/age";
import { AgeService } from "../services/age-service/age.service";
import { JeuxService } from "../services/jeux-service/jeux.service";
import { Filtres } from "./filtres";

describe('Filtre par âge avec une liste vide', () => {
    let age: IAge[] = [];
    let service: JeuxService;
  
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ AppModule ]
          })
          .compileComponents();
      service = new JeuxService();
      Filtres.ancienneListePourLesFichiers = service.getJeux();
      Filtres.agesAFiltrer = age;
      Filtres.FiltreParAge();
    });
    
      it(`La liste doit contenir tous les éléments de départ`, () => {
        expect(JeuxListComponent.jeuxFiltres).toEqual(Filtres.ancienneListePourLesAges);
      });
      it(`Il doit y avoir autant d'éléments dans les listes`, () => {
          expect(JeuxListComponent.jeuxFiltres.length).toEqual(Filtres.ancienneListePourLesAges.length);
        });
    });

    describe(`Filtre par âge avec une recherche avec le filtre 'petit'`, () => {
        let service: JeuxService;
        let serviceAge: AgeService;
        let ages: IAge[] = [];
    
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                declarations: [ AppModule ]
              })
              .compileComponents();
          service = new JeuxService();
          serviceAge = new AgeService();
          ages = serviceAge.getAges();
          Filtres.ancienneListePourLesAges = service.getJeux();
          Filtres.agesAFiltrer = ages.filter(a=>a.Code == 'petit');
          Filtres.FiltreParAge();
        });
      
        it(`Il doit y avoir moins d'éléments dans la liste qui a été filtrée`, () => {
            expect(JeuxListComponent.jeuxFiltres.length).toBeLessThan(Filtres.ancienneListePourLesAges.length);
          });
    
          it(`La liste doit contenir le jeu 'Le loup dans la forêt'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Le loup dans la forêt')).toEqual(Filtres.ancienneListePourLesAges.find(x => x.Nom == 'Le loup dans la forêt'));
          });
    
          it(`La liste ne doit pas contenir le jeu 'Le courant électrique'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Le courant électrique')).toEqual(undefined);
          });
      });

      
    describe(`Filtre par âge avec une recherche avec les 'petit' et 'grand'`, () => {
        let service: JeuxService;
        let serviceAge: AgeService;
        let ages: IAge[] = [];
    
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                declarations: [ AppModule ]
              })
              .compileComponents();
          service = new JeuxService();
          serviceAge = new AgeService();
          ages = serviceAge.getAges();
          Filtres.ancienneListePourLesAges = service.getJeux();
          Filtres.agesAFiltrer = ages.filter(a=>a.Code == 'petit' || a.Code == 'grand');
          Filtres.FiltreParAge();
        });
      
        it(`La liste doit être vide car il n'y a pas de jeu avec toutes les catégories d'âges`, () => {
            expect(JeuxListComponent.jeuxFiltres.length).toEqual(0);
          });
      });

      describe(`Filtre par âge avec une recherche avec les 'petit' 'moyen' et 'grand'`, () => {
        let service: JeuxService;
        let serviceAge: AgeService;
    
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                declarations: [ AppModule ]
              })
              .compileComponents();
          service = new JeuxService();
          serviceAge = new AgeService();
          Filtres.ancienneListePourLesAges = service.getJeux();
          Filtres.agesAFiltrer = serviceAge.getAges();
          Filtres.FiltreParAge();
        });
      
        it(`La liste doit être vide car il n'y a pas de jeu avec toutes les catégories d'âges`, () => {
            expect(JeuxListComponent.jeuxFiltres.length).toEqual(0);
          });
      });

      describe(`Filtre par âge avec une recherche avec les 'moyen' et 'grand' puis en enlevant grand`, () => {
        let service: JeuxService;
        let serviceAge: AgeService;
        let ages: IAge[] = [];
    
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                declarations: [ AppModule ]
              })
              .compileComponents();
          service = new JeuxService();
          serviceAge = new AgeService();
          ages = serviceAge.getAges();
          Filtres.ancienneListePourLesAges = service.getJeux();
          Filtres.agesAFiltrer = ages.filter(a=>a.Code == 'moyen' || a.Code == 'grand');
          Filtres.FiltreParAge();
          Filtres.agesAFiltrer = ages.filter(a=>a.Code == 'moyen');
          Filtres.FiltreParAge();
        });
      
        it(`La liste doit contenir le jeu 'La chasse aux porcs épics' avec des petits et moyens`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'La chasse aux porcs épics')).toEqual(Filtres.ancienneListePourLesAges.find(x => x.Nom == 'La chasse aux porcs épics'));
      });
    });
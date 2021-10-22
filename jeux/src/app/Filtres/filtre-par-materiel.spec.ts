import { TestBed } from "@angular/core/testing";
import { AppModule } from "../app.module";
import { JeuxListComponent } from "../components/jeux-list/jeux-list.component";
import { JeuxService } from "../services/jeux-service/jeux.service";
import { IMateriel } from "../services/materiel-service/materiel";
import { MaterielService } from "../services/materiel-service/materiel-service.service";
import { Filtres } from "./filtres";

describe('Filtre par matériel avec une liste vide', () => {
    let materiels: IMateriel[] = [];
    let service: JeuxService;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
          declarations: [ AppModule ]
        })
        .compileComponents();
      service = new JeuxService();
      Filtres.ancienneListePourLesMateriels = service.getJeux();
      Filtres.materielsAFiltrer = materiels;
      Filtres.FiltreParMateriel();
    });
    
      it(`La liste doit contenir tous les éléments de départ`, () => {
        expect(JeuxListComponent.jeuxFiltres).toEqual(Filtres.ancienneListePourLesMateriels);
      });
      it(`Il doit y avoir autant d'éléments dans les listes`, () => {
          expect(JeuxListComponent.jeuxFiltres.length).toEqual(Filtres.ancienneListePourLesMateriels.length);
        });
    });

    describe(`Filtre par matériel avec une balle`, () => {
        let service: JeuxService;
        let materielService: MaterielService;
        let materiels: IMateriel[] = [];
    
        beforeEach(async () => {
          await TestBed.configureTestingModule({
              declarations: [ AppModule ]
            })
            .compileComponents();
          service = new JeuxService();
          materielService = new MaterielService();
          materiels = materielService.getMateriels();
          Filtres.ancienneListePourLesMateriels = service.getJeux();
          Filtres.materielsAFiltrer = materiels.filter(a=>a.Code == 'Balle');
          Filtres.FiltreParMateriel();
        });
    
          it(`La liste doit contenir le jeu 'La balle aux chasseurs'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'La balle aux chasseurs')).toEqual(Filtres.ancienneListePourLesMateriels.find(x => x.Nom == 'La balle aux chasseurs'));
          });
    
          it(`La liste ne doit pas contenir le jeu 'Le courant électrique'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Le courant électrique')).toEqual(undefined);
          });
      });

      describe(`Filtre par matériel avec une Bancs et foulards`, () => {
        let service: JeuxService;
        let materielService: MaterielService;
        let materiels: IMateriel[] = [];
    
        beforeEach(async () => {
          await TestBed.configureTestingModule({
              declarations: [ AppModule ]
            })
            .compileComponents();
          service = new JeuxService();
          materielService = new MaterielService();
          materiels = materielService.getMateriels();
          Filtres.ancienneListePourLesMateriels = service.getJeux();
          Filtres.materielsAFiltrer = materiels.filter(a=>a.Code == 'Bancs, tabouret' || a.Code == 'Foulards');
          Filtres.FiltreParMateriel();
        });
      
        it(`Il doit y avoir moins d'éléments dans la liste qui a été filtrée`, () => {
            expect(JeuxListComponent.jeuxFiltres.length).toBeLessThan(Filtres.ancienneListePourLesMateriels.length);
          });
    
          it(`La liste doit contenir le jeu 'Le courant électrique'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Le courant électrique')).toEqual(Filtres.ancienneListePourLesMateriels.find(x => x.Nom == 'Le courant électrique'));
          });

          it(`La liste doit contenir le jeu 'Jeu d'approche'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Jeu d\'approche')).toEqual(Filtres.ancienneListePourLesMateriels.find(x => x.Nom == 'Jeu d\'approche'));
          });
    
          it(`La liste ne doit pas contenir le jeu 'La balle aux chasseurs'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'La balle aux chasseurs')).toEqual(undefined);
          });
      });

      describe(`Filtre par matériel avec tableau des couleurs, rien, baguette, puis en enlevant baguette et tableau des couleurs`, () => {
        let service: JeuxService;
        let materielService: MaterielService;
        let materiels: IMateriel[] = [];
    
        beforeEach(async () => {
          await TestBed.configureTestingModule({
              declarations: [ AppModule ]
            })
            .compileComponents();
          service = new JeuxService();
          materielService = new MaterielService();
          materiels = materielService.getMateriels();
          Filtres.ancienneListePourLesMateriels = service.getJeux();
          Filtres.materielsAFiltrer = materiels.filter(a=>a.Code == 'Rien' || a.Code == 'La tableau des couleurs, les 18 cartons colorés, les fiches-réponses, le tableau de vérification, un crayon et un sifflet' || a.Code == 'Baguette');
          Filtres.FiltreParMateriel();
          Filtres.materielsAFiltrer = materiels.filter(a=>a.Code == 'Rien');
          Filtres.FiltreParMateriel();
        });

          it(`La liste doit contenir le jeu 'La chasse aux porcs épics'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'La chasse aux porcs épics')).toEqual(Filtres.ancienneListePourLesMateriels.find(x => x.Nom == 'La chasse aux porcs épics'));
          });
    
          it(`La liste ne doit pas contenir le jeu 'La baguette'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'La baguette')).toEqual(undefined);
          });
          it(`La liste ne doit pas contenir le jeu 'Le jeu des couleurs'`, () => {
            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Le jeu des couleurs')).toEqual(undefined);
          });
      });
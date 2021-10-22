import { TestBed } from "@angular/core/testing";
import { AppModule } from "../app.module";
import { JeuxListComponent } from "../components/jeux-list/jeux-list.component";
import { IFichier } from "../services/fichier-service/fichier";
import { FichierService } from "../services/fichier-service/fichier-service.service";
import { JeuxService } from "../services/jeux-service/jeux.service";
import { Filtres } from "./filtres";

describe('Filtre par fichier avec une liste vide', () => {
    let fichier: IFichier[] = [];
    let service: JeuxService;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
          declarations: [ AppModule ]
        })
        .compileComponents();
      service = new JeuxService();
      Filtres.ancienneListePourLesFichiers = service.getJeux();
      Filtres.fichiersAFiltrer = fichier;
      Filtres.FiltreParFichier();
    });
    
      it(`La liste doit contenir tous les éléments de départ`, () => {
        expect(JeuxListComponent.jeuxFiltres).toEqual(Filtres.ancienneListePourLesFichiers);
      });
      it(`Il doit y avoir autant d'éléments dans les listes`, () => {
          expect(JeuxListComponent.jeuxFiltres.length).toEqual(Filtres.ancienneListePourLesFichiers.length);
        });
    });
  
    describe(`Filtre par fichier avec une recherche avec les Jeux Sportifs`, () => {
      let service: JeuxService;
      let serviceFichier: FichierService;
      let fichiers: IFichier[] = [];
  
      beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ AppModule ]
          })
          .compileComponents();
        service = new JeuxService();
        serviceFichier = new FichierService();
        fichiers = serviceFichier.getFichiers();
        Filtres.ancienneListePourLesFichiers = service.getJeux();
        Filtres.fichiersAFiltrer = fichiers.filter(a=>a.Code == 'sportifs');
        Filtres.FiltreParFichier();
      });
    
      it(`Il doit y avoir moins d'éléments dans la liste qui a été filtrée`, () => {
          expect(JeuxListComponent.jeuxFiltres.length).toBeLessThan(Filtres.ancienneListePourLesFichiers.length);
        });
  
        it(`La liste doit contenir le jeu 'La balle assise'`, () => {
          expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'La balle assise')).toEqual(Filtres.ancienneListePourLesFichiers.find(x => x.Nom == 'La balle assise'));
        });
  
        it(`La liste ne doit pas contenir le jeu 'Le courant électrique'`, () => {
          expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Le courant électrique')).toEqual(undefined);
        });
        it(`La liste ne doit pas contenir le jeu 'Jeu d'approche'`, () => {
          expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Jeu d\'approche')).toEqual(undefined);
        });
        it(`La liste ne doit pas contenir le jeu 'Che-Min-Libre'`, () => {
          expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Che-Min-Libre')).toEqual(undefined);
        });
    });
  
    describe(`Filtre par fichier avec une recherche avec les Jeux d'intérieur et  les Jeux du monde d'ici et d'ailleurs`, () => {
      let service: JeuxService;
      let serviceFichier: FichierService;
      let fichiers: IFichier[] = [];
  
      beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ AppModule ]
          })
          .compileComponents();
        service = new JeuxService();
        serviceFichier = new FichierService();
        fichiers = serviceFichier.getFichiers();
        Filtres.fichiersAFiltrer = fichiers.filter(a=>a.Code == 'monde' || a.Code == 'interieur');
        Filtres.ancienneListePourLesFichiers = service.getJeux();
        Filtres.FiltreParFichier();
      });
    
        it(`Il doit y avoir moins d'éléments dans la liste qui a été filtrée`, () => {
          expect(JeuxListComponent.jeuxFiltres.length).toBeLessThan(Filtres.ancienneListePourLesFichiers.length);
        });
  
        it(`La liste doit contenir le jeu 'Le courant électrique' du fichier Jeux d'intérieur`, () => {
          expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Le courant électrique')).toEqual(Filtres.ancienneListePourLesFichiers.find(x => x.Nom == 'Le courant électrique'));
        });

        it(`La liste doit contenir le jeu 'La balle aux chasseurs' du fichier Jeux du monde d'ici et d'ailleurs`, () => {
          expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'La balle aux chasseurs')).toEqual(Filtres.ancienneListePourLesFichiers.find(x => x.Nom == 'La balle aux chasseurs'));
        });
        
  
        it(`La liste ne doit pas contenir le jeu 'Le loup dans la forêt' d'un autre fichier`, () => {
          expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Le loup dans la forêt')).toEqual(undefined);
        });
        it(`La liste ne doit pas contenir le jeu 'La balle assise' d'un autre fichier`, () => {
          expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'La balle assise')).toEqual(undefined);

        });
        it(`La liste ne doit pas contenir le jeu 'Che-Min-Libre' d'un autre fichier`, () => {
          expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Che-Min-Libre')).toEqual(undefined);
        });
    });

    describe(`Filtre par fichier avec une recherche avec les Jeux d'intérieur, les Jeux du monde d'ici et d'ailleurs, Jeux de pleine nature et les Jeux d'autrefois, jeux d'avenir puis la suppression du fichier Jeux d'intérieur`, () => {
      let service: JeuxService;
      let serviceFichier: FichierService;
      let fichiers: IFichier[] = [];
  
      beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ AppModule ]
          })
          .compileComponents();
        service = new JeuxService();
        serviceFichier = new FichierService();
        fichiers = serviceFichier.getFichiers();
        Filtres.fichiersAFiltrer = fichiers.filter(a=>a.Code == 'monde' || a.Code == 'interieur' || a.Code == 'nature' ||a.Code == 'autrefois')
        Filtres.ancienneListePourLesFichiers = service.getJeux();
        Filtres.FiltreParFichier();
        Filtres.fichiersAFiltrer = fichiers.filter(a=>a.Code == 'monde' ||  a.Code == 'nature' || a.Code == 'autrefois');
        Filtres.FiltreParFichier();
      });
    
        it(`Il doit y avoir moins d'éléments dans la liste qui a été filtrée`, () => {
          expect(JeuxListComponent.jeuxFiltres.length).toBeLessThan(Filtres.ancienneListePourLesFichiers.length);
        });

        it(`La liste doit contenir le jeu 'La balle aux chasseurs' du fichier Jeux du monde d'ici et d'ailleurs`, () => {
          expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'La balle aux chasseurs')).toEqual(Filtres.ancienneListePourLesFichiers.find(x => x.Nom == 'La balle aux chasseurs'));
        });
  
        it(`La liste ne doit pas contenir le jeu 'Le courant électrique' du fichier Jeux d'intérieur`, () => {
          expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Le courant électrique')).toEqual(undefined);
        });

        it(`La liste ne doit pas contenir le jeu 'La balle assise' d'un autre fichier`, () => {
          expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'La balle assise')).toEqual(undefined);
        });
    });

import { TestBed } from "@angular/core/testing";
import { AppModule } from "../app.module";
import { JeuxListComponent } from "../components/jeux-list/jeux-list.component";
import { JeuxService } from "../services/jeux-service/jeux.service";
import { Filtres } from "./filtres";

describe('Filtre par nom avec un string vide', () => {
  InitialiseLeFiltreParNom('');
  
    it(`La liste doit contenir tous les éléments de départ`, () => {
      expect(JeuxListComponent.jeuxFiltres).toEqual(Filtres.ancienneListePourLesNoms);
    });
    it(`Il doit y avoir autant d'éléments dans les listes`, () => {
        expect(JeuxListComponent.jeuxFiltres.length).toEqual(Filtres.ancienneListePourLesNoms.length);
      });
  });

  describe(`Filtre par nom avec une recherche = 'ba'`, () => {
    InitialiseLeFiltreParNom('ba');
  
    it(`Il doit y avoir moins d'éléments dans la liste qui a été filtrée`, () => {
        expect(JeuxListComponent.jeuxFiltres.length).toBeLessThan(Filtres.ancienneListePourLesNoms.length);
      });

      it(`La liste doit contenir le jeu 'La baguette'`, () => {
        expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'La baguette')).toEqual(Filtres.ancienneListePourLesNoms.find(x => x.Nom == 'La baguette'));
      });

      it(`La liste ne doit pas contenir le jeu 'Le courant électrique'`, () => {
        expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Le courant électrique')).toEqual(undefined);
      });
  });

  describe(`Filtre par nom avec une recherche 'La baguette'`, () => {
    InitialiseLeFiltreParNom('La baguette');
  
    it(`Il doit y avoir un seul élément dans la liste filtrée`, () => {
        expect(JeuxListComponent.jeuxFiltres.length).toEqual(1);
      });

      it(`La liste doit contenir le jeu 'La baguette'`, () => {
        expect(JeuxListComponent.jeuxFiltres[0].Nom).toEqual('La baguette');
      });
  });

  describe(`Filtre par nom avec une recherche 'La baguette' puis par 'COURAN'`, () => {
    let service: JeuxService;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
          declarations: [ AppModule ]
        })
        .compileComponents();
      service = new JeuxService();
      Filtres.ancienneListePourLesNoms = service.getJeux();
      Filtres.nomAFiltrer = 'La baguette';
      Filtres.FiltreParNom();
      Filtres.nomAFiltrer = '';
      Filtres.FiltreParNom();
      Filtres.nomAFiltrer = 'COURAN';
      Filtres.FiltreParNom();
    });
    

    it(`Il doit y avoir un seul élément dans la liste filtrée`, () => {
        expect(JeuxListComponent.jeuxFiltres.length).toEqual(1);
      });

      it(`La liste doit contenir le jeu 'Le courant électrique'`, () => {
        expect('Le courant électrique').toEqual(JeuxListComponent.jeuxFiltres[0].Nom);
      });
  });

  describe(`Filtre par nom avec une recherche 'électrique' puis sans rien ''`, () => {
    let service: JeuxService;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
          declarations: [ AppModule ]
        })
        .compileComponents();
      service = new JeuxService();
      Filtres.ancienneListePourLesNoms = service.getJeux();
      Filtres.nomAFiltrer = 'électrique';
      Filtres.FiltreParNom();
      Filtres.nomAFiltrer = '';
      Filtres.FiltreParNom();
    });
    
    it(`La liste doit contenir tous les éléments de départ`, () => {
      expect(JeuxListComponent.jeuxFiltres).toEqual(Filtres.ancienneListePourLesNoms);
    });
    it(`Il doit y avoir autant d'éléments dans les listes`, () => {
        expect(JeuxListComponent.jeuxFiltres.length).toEqual(Filtres.ancienneListePourLesNoms.length);
      });
  });

  function InitialiseLeFiltreParNom(nomAChercher: string) {
    let service: JeuxService;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
          declarations: [ AppModule ]
        })
        .compileComponents();
      service = new JeuxService();
      Filtres.ancienneListePourLesNoms = service.getJeux();
      Filtres.nomAFiltrer = nomAChercher;
      Filtres.FiltreParNom();
    });
  }
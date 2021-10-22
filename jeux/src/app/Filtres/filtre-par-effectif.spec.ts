import { TestBed } from "@angular/core/testing";
import { AppModule } from "../app.module";
import { JeuxListComponent } from "../components/jeux-list/jeux-list.component";
import { JeuxService } from "../services/jeux-service/jeux.service";
import { Filtres } from "./filtres";

describe('Filtre par effectif sans préciser de nombre', () => {
    let effectif: number;
    let service: JeuxService;
  
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ AppModule ]
          })
          .compileComponents();
      service = new JeuxService();
      Filtres.ancienneListePourLesEffectifs = service.getJeux();
      Filtres.effectif = effectif;
      Filtres.FiltreParEffectif();
    });
    
      it(`La liste doit contenir tous les éléments de départ`, () => {
        expect(JeuxListComponent.jeuxFiltres).toEqual(Filtres.ancienneListePourLesEffectifs);
      });
      it(`Il doit y avoir autant d'éléments dans les listes`, () => {
          expect(JeuxListComponent.jeuxFiltres.length).toEqual(Filtres.ancienneListePourLesEffectifs.length);
        });
    });

    describe('Filtre par effectif avec un effectif de 0', () => {
        let service: JeuxService;
      
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                declarations: [ AppModule ]
              })
              .compileComponents();
          service = new JeuxService();
          Filtres.ancienneListePourLesEffectifs = service.getJeux();
          Filtres.effectif = 0;
          Filtres.FiltreParEffectif();
        });
        
          it(`La liste doit contenir tous les éléments de départ`, () => {
            expect(JeuxListComponent.jeuxFiltres).toEqual(Filtres.ancienneListePourLesEffectifs);
          });
          it(`Il doit y avoir autant d'éléments dans les listes`, () => {
              expect(JeuxListComponent.jeuxFiltres.length).toEqual(Filtres.ancienneListePourLesEffectifs.length);
            });
        });

        describe('Filtre par effectif avec un effectif de 1', () => {
            let service: JeuxService;
          
            beforeEach(async () => {
                await TestBed.configureTestingModule({
                    declarations: [ AppModule ]
                  })
                  .compileComponents();
              service = new JeuxService();
              Filtres.ancienneListePourLesEffectifs = service.getJeux();
              Filtres.effectif = 1;
              Filtres.FiltreParEffectif();
            });
            
              it(`La liste doit être vide`, () => {
                expect(JeuxListComponent.jeuxFiltres.length).toEqual(0);
              });
            });

            describe('Filtre par effectif avec un effectif de 8', () => {
                let service: JeuxService;
              
                beforeEach(async () => {
                    await TestBed.configureTestingModule({
                        declarations: [ AppModule ]
                      })
                      .compileComponents();
                  service = new JeuxService();
                  Filtres.ancienneListePourLesEffectifs = service.getJeux();
                  Filtres.effectif = 8;
                  Filtres.FiltreParEffectif();
                });
                
                it(`Il doit y avoir moins d'éléments dans la liste qui a été filtrée`, () => {
                    expect(JeuxListComponent.jeuxFiltres.length).toBeLessThan(Filtres.ancienneListePourLesEffectifs.length);
                  });

                it(`La liste doit contenir le jeu 'La balle aux chasseurs'`, () => {
                    expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'La balle aux chasseurs')).toEqual(Filtres.ancienneListePourLesEffectifs.find(x => x.Nom == 'La balle aux chasseurs'));
                  });
                });

                describe('Filtre par effectif avec un effectif de 900', () => {
                    let service: JeuxService;
                  
                    beforeEach(async () => {
                        await TestBed.configureTestingModule({
                            declarations: [ AppModule ]
                          })
                          .compileComponents();
                      service = new JeuxService();
                      Filtres.ancienneListePourLesEffectifs = service.getJeux();
                      Filtres.effectif = 900;
                      Filtres.FiltreParEffectif();
                    });
                    
                      it(`La liste doit être vide`, () => {
                        expect(JeuxListComponent.jeuxFiltres.length).toEqual(0);
                      });
                    });

                    describe('Filtre par effectif avec un effectif de 16', () => {
                        let service: JeuxService;
                      
                        beforeEach(async () => {
                            await TestBed.configureTestingModule({
                                declarations: [ AppModule ]
                              })
                              .compileComponents();
                          service = new JeuxService();
                          Filtres.ancienneListePourLesEffectifs = service.getJeux();
                          Filtres.effectif = 16;
                          Filtres.FiltreParEffectif();
                        });
                        
                        it(`La liste doit contenir le jeu 'La balle aux chasseurs'`, () => {
                            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'La balle aux chasseurs')).toEqual(Filtres.ancienneListePourLesEffectifs.find(x => x.Nom == 'La balle aux chasseurs'));
                          });
                        it(`La liste doit contenir le jeu 'Accroche-décroche'`, () => {
                            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'Accroche-décroche')).toEqual(Filtres.ancienneListePourLesEffectifs.find(x => x.Nom == 'Accroche-décroche'));
                          });
                        it(`La liste doit contenir le jeu 'La baguette'`, () => {
                            expect(JeuxListComponent.jeuxFiltres.find(x => x.Nom == 'La baguette')).toEqual(Filtres.ancienneListePourLesEffectifs.find(x => x.Nom == 'La baguette'));
                          });
                          
                        });

                        describe('Filtre par effectif avec un effectif de 8 puis en enlevant le filtre', () => {
                            let service: JeuxService;
                            let nombreIndefini: number;
                            beforeEach(async () => {
                                await TestBed.configureTestingModule({
                                    declarations: [ AppModule ]
                                  })
                                  .compileComponents();
                              service = new JeuxService();
                              Filtres.ancienneListePourLesEffectifs = service.getJeux();
                              Filtres.effectif = 8;
                              Filtres.FiltreParEffectif();
                              Filtres.effectif = nombreIndefini;
                              Filtres.FiltreParEffectif();
                            });
                            
                            it(`La liste doit contenir tous les éléments de départ`, () => {
                                expect(JeuxListComponent.jeuxFiltres).toEqual(Filtres.ancienneListePourLesEffectifs);
                              });
                              it(`Il doit y avoir autant d'éléments dans les listes`, () => {
                                  expect(JeuxListComponent.jeuxFiltres.length).toEqual(Filtres.ancienneListePourLesEffectifs.length);
                                });
                            });
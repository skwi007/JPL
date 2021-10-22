import { JeuxListComponent } from "../components/jeux-list/jeux-list.component";
import { IAge } from "../services/age-service/age";
import { IDuree } from "../services/duree-service/duree";
import { IFichier } from "../services/fichier-service/fichier";
import { IJeu } from "../services/jeux-service/jeu";
import { IMateriel } from "../services/materiel-service/materiel";
import { IStructure } from "../services/structure-service/structure";
import { ITerrain } from "../services/terrain-service/terrain";

export class Filtres{
  static nomAFiltrer: string = '';
  static jeuxFiltres: IJeu[]= [];
  static ancienneListePourLesNoms: IJeu[]= [];
  static ancienneListePourLesFichiers: IJeu[]= [];
  static fichiersAFiltrer: IFichier[] = [];
  static jeuxAFiltrer: IJeu[] = [];
  static ancienneListePourLesAges: IJeu[]= [];
  static agesAFiltrer: IAge[] = [];
  static ancienneListePourLesTerrains: IJeu[]= [];
  static terrainsAFiltrer: ITerrain[] = [];
  static ancienneListePourLesDurees: IJeu[]= [];
  static dureesAFiltrer: IDuree[] = [];
  static ancienneListePourLesEffectifs: IJeu[]= [];
  static effectif: number;
  static ancienneListePourLesMateriels: IJeu[]= [];
  static materielsAFiltrer: IMateriel[] = [];
  static ancienneListePourLesStructures: IJeu[]= [];
  static structuresAFiltrer: IStructure[] = [];

  static AppliquerLesFiltres() {
    this.FiltreParNom();
    this.FiltreParFichier();
    this.FiltreParAge();
    this.FiltreParTerrain();
    this.FiltreParDuree();
    this.FiltreParEffectif();
    this.FiltreParMateriel();
    this.FiltreParStructure();
  }

  static FiltreParNom(): void {
      if (this.nomAFiltrer.length >= 1) {
        JeuxListComponent.jeuxFiltres = this.ancienneListePourLesNoms.filter(x=>x.Nom.toLocaleLowerCase().includes(this.nomAFiltrer.toLocaleLowerCase()));
      }
      else {
        JeuxListComponent.jeuxFiltres = this.ancienneListePourLesNoms;
      }

      this.ancienneListePourLesFichiers = JeuxListComponent.jeuxFiltres;
    }
  
    static FiltreParFichier(): void {
      if (this.fichiersAFiltrer.length >= 1) {
        this.jeuxAFiltrer = [];
        for (let i = 0; i < this.fichiersAFiltrer.length; i++) {
          this.jeuxAFiltrer = [].concat(this.jeuxAFiltrer, this.ancienneListePourLesFichiers.filter(x=>x.Fichier === this.fichiersAFiltrer[i].Code));
          }
          JeuxListComponent.jeuxFiltres = this.jeuxAFiltrer;
        }
  
      else {
        JeuxListComponent.jeuxFiltres = this.ancienneListePourLesFichiers;
      }
      this.ancienneListePourLesAges = JeuxListComponent.jeuxFiltres;
  };
  
  static FiltreParAge(): void {
    if (this.agesAFiltrer.length > 0) {
      this.jeuxAFiltrer = [];
      let min: number = 99;
      let max: number = 0;
  
      for (let i = 0; i < this.agesAFiltrer.length; i++) {
        if (this.agesAFiltrer[i].Minimum < min)
        min = this.agesAFiltrer[i].Minimum;
        if (this.agesAFiltrer[i].Maximum > max)
        max = this.agesAFiltrer[i].Maximum;
      }
  
      JeuxListComponent.jeuxFiltres = [].concat(this.jeuxAFiltrer, this.ancienneListePourLesAges.filter(x=>x.AgeMinimum <= min && max <= x.AgeMaximum));
    }
    else {
      JeuxListComponent.jeuxFiltres = this.ancienneListePourLesAges;
    }
    this.ancienneListePourLesTerrains = JeuxListComponent.jeuxFiltres;
  };
  
  static FiltreParTerrain(): void {
    if (this.terrainsAFiltrer.length >= 1) {
      this.jeuxAFiltrer = [];
  
      for (let i = 0; i < this.terrainsAFiltrer.length; i++) {
        this.jeuxAFiltrer = [].concat(this.jeuxAFiltrer, this.ancienneListePourLesTerrains.filter(x=>x.Terrain === this.terrainsAFiltrer[i].Code));
        }
        JeuxListComponent.jeuxFiltres = this.jeuxAFiltrer;
    }
    else {
      JeuxListComponent.jeuxFiltres = this.ancienneListePourLesTerrains;
    }
    this.ancienneListePourLesDurees = JeuxListComponent.jeuxFiltres;
  };
  
  static FiltreParDuree(): void {
    if (this.dureesAFiltrer.length >= 1) {
      this.jeuxAFiltrer = [];
  
      for (let i = 0; i < this.dureesAFiltrer.length; i++) {
        this.jeuxAFiltrer = [].concat(this.jeuxAFiltrer, this.ancienneListePourLesDurees.filter(x=>x.Duree === this.dureesAFiltrer[i].Duree));
        }
        JeuxListComponent.jeuxFiltres = this.jeuxAFiltrer;
    }
    else {
      JeuxListComponent.jeuxFiltres = this.ancienneListePourLesDurees;
    }
    this.ancienneListePourLesEffectifs = JeuxListComponent.jeuxFiltres;
  }
  
  static FiltreParEffectif(): void {
    if (this.effectif > 0) {
      JeuxListComponent.jeuxFiltres = this.ancienneListePourLesEffectifs.filter(x=>x.EffectifMinimum <= this.effectif && x.EffectifMaximum >= this.effectif);
    }
    else {
      JeuxListComponent.jeuxFiltres = this.ancienneListePourLesEffectifs;
    }
    this.ancienneListePourLesMateriels = JeuxListComponent.jeuxFiltres;
  };
  
  static FiltreParMateriel(): void {
    if (this.materielsAFiltrer.length >= 1) {
      this.jeuxAFiltrer = [];
      for (let i = 0; i < this.materielsAFiltrer.length; i++) {
        this.jeuxAFiltrer = [].concat(this.jeuxAFiltrer, this.ancienneListePourLesMateriels.filter(x=>x.Materiel === this.materielsAFiltrer[i].Code));
        }
        JeuxListComponent.jeuxFiltres = this.jeuxAFiltrer;
      }
    else {
      JeuxListComponent.jeuxFiltres = this.ancienneListePourLesMateriels;
    }
    this.ancienneListePourLesStructures = JeuxListComponent.jeuxFiltres;
  };
  
    static FiltreParStructure(): void {
      if (this.structuresAFiltrer.length >= 1) {
        this.jeuxAFiltrer = [];
        for (let i = 0; i < this.structuresAFiltrer.length; i++) {
          this.jeuxAFiltrer = [].concat(this.jeuxAFiltrer, this.ancienneListePourLesStructures.filter(x=>x.Structure === this.structuresAFiltrer[i].Code));
          }
          JeuxListComponent.jeuxFiltres = this.jeuxAFiltrer;
        }
      else {
        JeuxListComponent.jeuxFiltres = this.ancienneListePourLesStructures;
      }
    };
  }

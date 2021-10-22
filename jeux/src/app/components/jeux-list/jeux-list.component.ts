import { Component, OnInit } from '@angular/core';
import { JeuxService } from '../../services/jeux-service/jeux.service';
import { IJeu } from '../../services/jeux-service/jeu';
import { FormControl } from '@angular/forms';
import { FichierService } from 'src/app/services/fichier-service/fichier-service.service';
import { IFichier } from 'src/app/services/fichier-service/fichier';
import { ITerrain } from 'src/app/services/terrain-service/terrain';
import { TerrainService } from 'src/app/services/terrain-service/terrain-service.service';
import { MaterielService } from 'src/app/services/materiel-service/materiel-service.service';
import { IMateriel } from 'src/app/services/materiel-service/materiel';
import { StructureService } from 'src/app/services/structure-service/structure.service';
import { IStructure } from 'src/app/services/structure-service/structure';
import { IAge } from 'src/app/services/age-service/age';
import { AgeService } from 'src/app/services/age-service/age.service';
import { IDuree } from 'src/app/services/duree-service/duree';
import { DureeService } from 'src/app/services/duree-service/duree.service';
import { Filtres } from 'src/app/Filtres/filtres'

@Component({
  selector: 'jeux-list',
  templateUrl: './jeux-list.component.html',
  styleUrls: ['./jeux-list.component.css']
})

export class JeuxListComponent implements OnInit {

  pageTitle = 'Liste des jeux';
  
  static jeuxFiltres: IJeu[] = [];
  jeux: IJeu[] = [];

  nomsFormControl = new FormControl();
  fichiersFormControl = new FormControl();
  fichierList: IFichier[] = [];
  terrainsFormControl = new FormControl();
  terrainList: ITerrain[] = [];
  materielsFormControl = new FormControl();
  materielList: IMateriel[] = [];
  structuresFormControl = new FormControl();
  structureList: IStructure[] = [];
  agesFormControl = new FormControl();
  ageList: IAge[] = [];
  dureesFormControl = new FormControl();
  dureeList: IDuree[] = [];
  effectifFormControl = new FormControl();

  constructor(private jeuxService: JeuxService, private fichierService: FichierService, private terrainService: TerrainService, 
    private materielService: MaterielService, private structureService: StructureService, private ageService: AgeService, private dureeService: DureeService) {
  }

  getJeuxAAfficher(){
    return JeuxListComponent.jeuxFiltres;
  }

  ngOnInit(): void {
    
    
    JeuxListComponent.jeuxFiltres = Filtres.ancienneListePourLesNoms = this.jeux = this.jeuxService.getJeux();
     
      this.fichierList = this.fichierService.getFichiers();
      this.ageList = this.ageService.getAges();
      this.terrainList = this.terrainService.getTerrains();
      this.dureeList = this.dureeService.getDurees();
      this.materielList = this.materielService.getMateriels();
      this.structureList = this.structureService.getStructures();
      
      this.nomsFormControl.valueChanges.subscribe(
        value=> {
          Filtres.nomAFiltrer = value;
          Filtres.AppliquerLesFiltres();
      }
      );

      this.fichiersFormControl.valueChanges.subscribe(
        value=> {
          Filtres.fichiersAFiltrer = value;
          Filtres.AppliquerLesFiltres();
      }
      );

      this.agesFormControl.valueChanges.subscribe(
        value=> {
          Filtres.agesAFiltrer = value;
          Filtres.AppliquerLesFiltres();
      }
      );

      this.terrainsFormControl.valueChanges.subscribe(
        value=> {
          Filtres.terrainsAFiltrer = value;
          Filtres.AppliquerLesFiltres();
        }
      );

      this.dureesFormControl.valueChanges.subscribe(
        value=> {
          Filtres.dureesAFiltrer = value;
          Filtres.AppliquerLesFiltres();
        }
      );

      this.effectifFormControl.valueChanges.subscribe(
        value=> {
          Filtres.effectif = value;
          Filtres.AppliquerLesFiltres();
        }
      );

      this.materielsFormControl.valueChanges.subscribe(
        value=> {
          Filtres.materielsAFiltrer = value;
          Filtres.AppliquerLesFiltres();
        }
      );

      this.structuresFormControl.valueChanges.subscribe(
        value=> {
          Filtres.structuresAFiltrer = value;
          Filtres.AppliquerLesFiltres();
        }
      );
  }
}

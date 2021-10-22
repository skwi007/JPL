import { Injectable } from '@angular/core';
import { ITerrain } from './terrain';

@Injectable({
  providedIn: 'root'
})
export class TerrainService {

    getTerrains(): ITerrain[] {
      return [
        {
          "Code": "buissonneux",
          "Nom": "Buissonneux",
          "ImageTerrainUrl":"assets/images/terrain/buissonneux.png"
        },
        {
          "Code": "semiAmenage",
          "Nom": "Semi-aménagé",
          "ImageTerrainUrl":"assets/images/terrain/semiAmenage.jpg"
        },
        {
          "Code": "interieur",
          "Nom": "Intérieur",
          "ImageTerrainUrl":"assets/images/terrain/interieur.PNG"
        },
        {
          "Code": "platEtDegage",
          "Nom": "Plat et dégagé",
          "ImageTerrainUrl":"assets/images/terrain/platEtDegage.png"
        }
    ]
    }
  }

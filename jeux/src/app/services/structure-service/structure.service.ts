
import { Injectable } from '@angular/core';
import { IStructure } from './structure';

@Injectable({
  providedIn: 'root'
})
export class StructureService {
    
    getStructures(): IStructure[] {
      return [
        {
            "Code":"coalition",
            "Nom":"Coalitions",
            "ImageStructureUrl":"assets/images/structure/coalitions.png"
        },
        {
            "Code":"coalitions, paradoxal",
            "Nom":"Coalitions et paradoxal",
            "ImageStructureUrl":"assets/images/structure/coalitions.png"
        },
        {
            "Code":"contre, paradoxal",
            "Nom":"Un contre tous et paradoxal",
            "ImageStructureUrl":"assets/images/structure/unContreTous.jpg"
        },
        {
            "Code":"contre",
            "Nom":"Un contre tous",
            "ImageStructureUrl":"assets/images/structure/unContreTous.jpg"
        }
        ,
        {
            "Code":"dissymetrique",
            "Nom":"Duel dissymétrique entre équipes",
            "ImageStructureUrl":"assets/images/structure/duelDissymetrique.png"
        }
        ,
        {
            "Code":"symetrique",
            "Nom":"Duel symétrique entre équipes",
            "ImageStructureUrl":"assets/images/structure/symetrique.png"
        }
        ,
        {
            "Code":"chacun",
            "Nom":"Chacun pour soi",
            "ImageStructureUrl":"assets/images/structure/chacun.png"
        }
    ]
    }
}

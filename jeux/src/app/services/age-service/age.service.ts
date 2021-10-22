import { Injectable } from '@angular/core';
import { IAge } from './age';

@Injectable({
  providedIn: 'root'
})
export class AgeService {
    
    getAges(): IAge[] {
      return [
        {
            "Code":"petit",
            "Nom":"9 à 11 ans",
            "ImageAgeUrl":"assets/images/age/petit.jpg",
            "Minimum": 9,
            "Maximum": 11
        },
            {
                "Code":"moyen",
                "Nom":"12 à 15 ans",
                "ImageAgeUrl":"assets/images/age/moyen.jpg",
                "Minimum": 12,
                "Maximum": 15
            },
            {
                "Code":"grand",
                "Nom":"16 à 99 ans",
                "ImageAgeUrl":"assets/images/age/grand.PNG",
                "Minimum": 16,
                "Maximum": 99
            }
    ]
    }
}

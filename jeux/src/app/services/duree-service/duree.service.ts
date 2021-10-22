import { Injectable } from '@angular/core';
import { IDuree } from './duree';

@Injectable({
  providedIn: 'root'
})
export class DureeService {
    
    getDurees(): IDuree[] {
      return [
        {
        "Duree":30,
        "ImageDureeUrl":"assets/images/duree/30.jpg"
        },
        {
        "Duree":45,
        "ImageDureeUrl":"assets/images/duree/45.jpg"
        },
        {
        "Duree":60,
        "ImageDureeUrl":"assets/images/duree/1h+.png"
        }
    ]
    }
}

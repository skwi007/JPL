import { Injectable } from '@angular/core';
import { IFichier } from './fichier';

@Injectable({
  providedIn: 'root'
})
export class FichierService {
    
    getFichiers(): IFichier[] {
      return [
        {
            "Code": "autrefois",
            "Nom": "Jeux d'autrefois, jeux d'avenir",
            "ImageFichierUrl":"assets/images/fichier/jeuxdautrefoisjeuxdavenir.PNG"
          },
          {
            "Code": "nature",
            "Nom": "Jeux de pleine nature",
            "ImageFichierUrl":"assets/images/fichier/jeuxdepleinenature.PNG"
          },
          {
            "Code": "interieur",
            "Nom": "Jeux d'intérieur",
            "ImageFichierUrl":"assets/images/fichier/jeuxdinterieur.jpg"
          },
          {
            "Code": "monde",
            "Nom": "Jeux du monde d'ici et d'ailleurs",
            "ImageFichierUrl":"assets/images/fichier/jeuxdumondedicietdailleurs.PNG"
          },
          {
            "Code": "sportifs",
            "Nom": "Jeux sportifs",
            "ImageFichierUrl":"assets/images/fichier/jeuxsportifs.PNG"
          }
    ]
    
    }
  }


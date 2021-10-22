import { Injectable } from '@angular/core';
import { IJeu } from './jeu';

@Injectable({
  providedIn: 'root'
})

export class JeuxService {    
  
    getJeux(): IJeu[] {

      return [
        {
        "Nom":"La baguette",
        "Fichier":"sportifs",
        "FichierNom":"Jeux sportifs",
        "ImageFichierUrl":"assets/images/fichier/jeuxsportifs.PNG",
        "Terrain":"platEtDegage",
        "TerrainNom":"Plat et dégagé",
        "ImageTerrainUrl":"assets/images/terrain/platEtDegage.png",
        "Duree":30,
        "ImageDureeUrl":"assets/images/duree/30.jpg",
        "EffectifMinimum":16,
        "EffectifOptimal":24,
        "EffectifMaximum":40,
        "Effectif":"16 / 24 / 40",
        "ImageEffectifUrl":"assets/images/effectif/16-24-40.png",
        "AgeMinimum":16,
        "AgeMaximum":99,
        "ImageAgeUrl":"assets/images/age/grand.PNG",
        "Age":"15 à 99 ans",
        "Materiel":"Baguette",
        "ImageMaterielUrl":"assets/images/materiel/baguette.png",
        "Structure":"dissymetrique",
        "StructureNom":"Duel dissymétrique entre équipes",
        "ImageStructureUrl":"assets/images/structure/duelDissymetrique.png"
      },
      {
        "Nom":"La balle assise",
        "Fichier":"sportifs",
        "FichierNom":"Jeux sportifs",
        "ImageFichierUrl":"assets/images/fichier/jeuxsportifs.PNG",
        "Terrain":"platEtDegage",
        "TerrainNom":"Plat et dégagé",
        "ImageTerrainUrl":"assets/images/terrain/platEtDegage.png",
        "Duree":30,
        "ImageDureeUrl":"assets/images/duree/30.jpg",
        "EffectifMinimum":14,
        "EffectifOptimal":20,
        "EffectifMaximum":30,
        "Effectif":"14 / 20 / 30",
        "ImageEffectifUrl":"assets/images/effectif/14-20-30.png",
        "AgeMinimum":16,
        "AgeMaximum":99,
        "Age":"15 à 99 ans",
        "ImageAgeUrl":"assets/images/age/grand.PNG",
        "Materiel":"Ballon",
        "ImageMaterielUrl":"assets/images/materiel/ballon.png",
        "Structure":"chacun",
        "StructureNom":"Chacun pour soi",
        "ImageStructureUrl":"assets/images/structure/chacun.png"
      },
      {
        "Nom":"Accroche-décroche",
        "Fichier":"monde",
        "FichierNom":"Jeux du monde d'ici et d'ailleurs",
        "ImageFichierUrl":"assets/images/fichier/jeuxdumondedicietdailleurs.PNG",
        "Terrain":"platEtDegage",
        "TerrainNom":"Plat et dégagé",
        "ImageTerrainUrl":"assets/images/terrain/platEtDegage.png",
        "Duree":30,
        "ImageDureeUrl":"assets/images/duree/30.jpg",
        "EffectifMinimum":12,
        "EffectifOptimal":16,
        "EffectifMaximum":24,
        "Effectif":"12 / 16 / 24",
        "ImageEffectifUrl":"assets/images/effectif/12-16-24.png",
        "AgeMinimum":12,
        "AgeMaximum":99,
        "Age":"12 à 99 ans",
        "ImageAgeUrl":"assets/images/age/moyengrand.jpg",
        "Materiel":"Rien",
        "ImageMaterielUrl":"assets/images/materiel/rien.png",
        "Structure":"chacun",
        "StructureNom":"Chacun pour soi",
        "ImageStructureUrl":"assets/images/structure/chacun.png"
      },
      {
        "Nom":"La balle aux chasseurs",
        "Fichier":"monde",
        "FichierNom":"Jeux du monde d'ici et d'ailleurs",
        "ImageFichierUrl":"assets/images/fichier/jeuxdumondedicietdailleurs.PNG",
        "Terrain":"platEtDegage",
        "TerrainNom":"Plat et dégagé",
        "ImageTerrainUrl":"assets/images/terrain/platEtDegage.png",
        "Duree":30,
        "ImageDureeUrl":"assets/images/duree/30.jpg",
        "EffectifMinimum":8,
        "EffectifOptimal":12,
        "EffectifMaximum":16,
        "Effectif":"8 / 12 / 16",
        "ImageEffectifUrl":"assets/images/effectif/8-12-16.png",
        "AgeMinimum":12,
        "AgeMaximum":99,
        "Age":"12 à 99 ans",
        "ImageAgeUrl":"assets/images/age/moyengrand.jpg",
        "Materiel":"Balle",
        "ImageMaterielUrl":"assets/images/materiel/balle.png",
        "Structure":"contre",
        "StructureNom":"Un contre tous",
        "ImageStructureUrl":"assets/images/structure/unContreTous.jpg"
      },
      {
        "Nom":"Les ambassadeurs",
        "Fichier":"interieur",
        "FichierNom":"Jeux d'intérieur",
        "ImageFichierUrl":"assets/images/fichier/jeuxdinterieur.jpg",
        "Terrain":"interieur",
        "TerrainNom":"Intérieur",
        "ImageTerrainUrl":"assets/images/terrain/interieur.PNG",
        "Duree":30,
        "ImageDureeUrl":"assets/images/duree/30.jpg",
        "EffectifMinimum":13,
        "EffectifOptimal":21,
        "EffectifMaximum":25,
        "Effectif":"13 / 21 / 25",
        "ImageEffectifUrl":"assets/images/effectif/13-21-25.png",
        "AgeMinimum":12,
        "AgeMaximum":99,
        "Age":"12 à 99 ans",
        "ImageAgeUrl":"assets/images/age/moyengrand.jpg",
        "Materiel":"Enveloppes, papier, crayons",
        "ImageMaterielUrl":"assets/images/materiel/enveloppes.png",
        "Structure":"coalition",
        "StructureNom":"Coalitions",
        "ImageStructureUrl":"assets/images/structure/coalitions.png"
      },
      {
        "Nom":"Le courant électrique",
        "Fichier":"interieur",
        "FichierNom":"Jeux d'intérieur",
        "ImageFichierUrl":"assets/images/fichier/jeuxdinterieur.jpg",
        "Terrain":"interieur",
        "TerrainNom":"Intérieur",
        "ImageTerrainUrl":"assets/images/terrain/interieur.PNG",
        "Duree":30,
        "ImageDureeUrl":"assets/images/duree/30.jpg",
        "EffectifMinimum":11,
        "EffectifOptimal":17,
        "EffectifMaximum":25,
        "Effectif":"11 / 17 / 25",
        "ImageEffectifUrl":"assets/images/effectif/11-17-25.png",
        "AgeMinimum":12,
        "AgeMaximum":99,
        "Age":"12 à 99 ans",
        "ImageAgeUrl":"assets/images/age/moyengrand.jpg",
        "Materiel":"Bancs, tabouret",
        "ImageMaterielUrl":"assets/images/materiel/banc.png",
        "Structure":"symetrique",
        "StructureNom":"Duel symétrique entre équipes",
        "ImageStructureUrl":"assets/images/structure/symetrique.png"
      },
      {
        "Nom":"Jeu d'approche",
        "Fichier":"nature",
        "FichierNom":"Jeux de pleine nature",
        "ImageFichierUrl":"assets/images/fichier/jeuxdepleinenature.PNG",
        "Terrain":"buissonneux",
        "TerrainNom":"Buissonneux",
        "ImageTerrainUrl":"assets/images/terrain/buissonneux.png",
        "Duree":45,
        "ImageDureeUrl":"assets/images/duree/45.jpg",
        "EffectifMinimum":10,
        "EffectifOptimal":16,
        "EffectifMaximum":30,
        "Effectif":"10 / 16 / 30",
        "ImageEffectifUrl":"assets/images/effectif/10-16-30.jpg",
        "AgeMinimum":12,
        "AgeMaximum":15,
        "Age":"12 à 15 ans",
        "ImageAgeUrl":"assets/images/age/moyen.jpg",
        "Materiel":"Foulards",
        "ImageMaterielUrl":"assets/images/materiel/foulards.jpg",
        "Structure":"contre",
        "StructureNom":"Un contre tous",
        "ImageStructureUrl":"assets/images/structure/unContreTous.jpg"
      },
      {
        "Nom":"La chasse aux porcs épics",
        "Fichier":"nature",
        "FichierNom":"Jeux de pleine nature",
        "ImageFichierUrl":"assets/images/fichier/jeuxdepleinenature.PNG",
        "Terrain":"semiAmenage",
        "TerrainNom":"Semi-aménagé",
        "ImageTerrainUrl":"assets/images/terrain/semiAmenage.jpg",
        "Duree":30,
        "ImageDureeUrl":"assets/images/duree/30.jpg",
        "EffectifMinimum":10,
        "EffectifOptimal":15,
        "EffectifMaximum":20,
        "Effectif":"10 / 15 / 20",
        "ImageEffectifUrl":"assets/images/effectif/10-15-20.png",
        "AgeMinimum":9,
        "AgeMaximum":15,
        "Age":"9 à 15 ans",
        "ImageAgeUrl":"assets/images/age/petitmoyen.png",
        "Materiel":"Rien",
        "ImageMaterielUrl":"assets/images/materiel/rien.png",
        "Structure":"dissymetrique",
        "StructureNom":"Duel dissymétrique entre équipes",
        "ImageStructureUrl":"assets/images/structure/duelDissymetrique.png"
      }
      ,
      {
        "Nom":"Le jeu des couleurs",
        "Fichier":"nature",
        "FichierNom":"Jeux de pleine nature",
        "ImageFichierUrl":"assets/images/fichier/jeuxdepleinenature.PNG",
        "Terrain":"buissonneux",
        "TerrainNom":"Buissonneux",
        "ImageTerrainUrl":"assets/images/terrain/buissonneux.png",
        "Duree":30,
        "ImageDureeUrl":"assets/images/duree/30.jpg",
        "EffectifMinimum":12,
        "EffectifOptimal":20,
        "EffectifMaximum":30,
        "Effectif":"12 / 20 / 30",
        "ImageEffectifUrl":"assets/images/effectif/12-20-30.png",
        "AgeMinimum":12,
        "AgeMaximum":99,
        "ImageAgeUrl":"assets/images/age/moyengrand.jpg",
        "Age":"12 à 99 ans",
        "Materiel":"La tableau des couleurs, les 18 cartons colorés, les fiches-réponses, le tableau de vérification, un crayon et un sifflet",
        "ImageMaterielUrl":"assets/images/materiel/tableauDesCouleurs.png",
        "Structure":"coalition",
        "StructureNom":"Coalitions",
        "ImageStructureUrl":"assets/images/structure/coalitions.png"
      }
      ,
      {
        "Nom":"Le loup dans la forêt",
        "Fichier":"nature",
        "FichierNom":"Jeux de pleine nature",
        "ImageFichierUrl":"assets/images/fichier/jeuxdepleinenature.PNG",
        "Terrain":"buissonneux",
        "TerrainNom":"Buissonneux",
        "ImageTerrainUrl":"assets/images/terrain/buissonneux.png",
        "Duree":30,
        "ImageDureeUrl":"assets/images/duree/30.jpg",
        "EffectifMinimum":8,
        "EffectifOptimal":16,
        "EffectifMaximum":20,
        "Effectif":"8 / 16 / 20",
        "ImageEffectifUrl":"assets/images/effectif/8-16-20.png",
        "AgeMinimum":9,
        "AgeMaximum":15,
        "ImageAgeUrl":"assets/images/age/petitmoyen.png",
        "Age":"9 à 15 ans",
        "Materiel":"Rien",
        "ImageMaterielUrl":"assets/images/materiel/rien.png",
        "Structure":"contre",
        "StructureNom":"Un contre tous",
        "ImageStructureUrl":"assets/images/structure/unContreTous.jpg"
      },
      {
        "Nom":"Che-Min-Libre",
        "Fichier":"autrefois",
        "FichierNom":"Jeux d'autrefois, jeux d'avenir",
        "ImageFichierUrl":"assets/images/fichier/jeuxdautrefoisjeuxdavenir.PNG",
        "Terrain":"platEtDegage",
        "TerrainNom":"Plat et dégagé",
        "ImageTerrainUrl":"assets/images/terrain/platEtDegage.png",
        "Duree":30,
        "ImageDureeUrl":"assets/images/duree/30.jpg",
        "EffectifMinimum":12,
        "EffectifOptimal":15,
        "EffectifMaximum":25,
        "Effectif":"12 / 15 / 25",
        "ImageEffectifUrl":"assets/images/effectif/12-15-25.png",
        "AgeMinimum":12,
        "AgeMaximum":99,
        "ImageAgeUrl":"assets/images/age/moyengrand.jpg",
        "Age":"12 à 99 ans",
        "Materiel":"Rien",
        "ImageMaterielUrl":"assets/images/materiel/rien.png",
        "Structure":"contre, paradoxal",
        "StructureNom":"Un contre tous et paradoxal",
        "ImageStructureUrl":"assets/images/structure/unContreTous.jpg"
      },
      {
        "Nom":"Le chifoumi géant",
        "Fichier":"autrefois",
        "FichierNom":"Jeux d'autrefois, jeux d'avenir",
        "ImageFichierUrl":"assets/images/fichier/jeuxdautrefoisjeuxdavenir.PNG",
        "Terrain":"semiAmenage",
        "TerrainNom":"Semi-aménagé",
        "ImageTerrainUrl":"assets/images/terrain/semiAmenage.jpg",
        "Duree":60,
        "ImageDureeUrl":"assets/images/duree/1h+.png",
        "EffectifMinimum":15,
        "EffectifOptimal":25,
        "EffectifMaximum":30,
        "Effectif":"15 / 25 / 30",
        "ImageEffectifUrl":"assets/images/effectif/15-25-30.png",
        "AgeMinimum":12,
        "AgeMaximum":99,
        "ImageAgeUrl":"assets/images/age/moyengrand.jpg",
        "Age":"12 à 99 ans",
        "Materiel":"Bristol, pinces à linge",
        "ImageMaterielUrl":"assets/images/materiel/bristol.png",
        "Structure":"coalitions, paradoxal",
        "StructureNom":"Coalitions et paradoxal",
        "ImageStructureUrl":"assets/images/structure/coalitions.png"
      }
    ];
    }
  }

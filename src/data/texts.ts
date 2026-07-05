import type { PracticeText } from '../types';
import { guruYoga } from './guru-yoga';
import { coeurPrajnaparamita } from './coeur-prajnaparamita';
import { vajrasattva } from './vajrasattva';
import { troisAmoncellements } from './trois-amoncellements';
import { pratiqueChenrezik } from './pratique-chenrezik';
import { pratiqueChenrezikThoungma } from './pratique-chenrezik-thoungma';
import { louangeManjushri } from './louange-manjushri';
import { mahakala } from './mahakala';
import { dewachen } from './dewachen';
import { sojong } from './sojong';
import { louange12Actes } from './louange-12-actes';
import { soutraLongevite } from './soutra-longevite';
import { dakaYeshe } from './daka-yeshe';
import { prieresLongueVie } from './prieres-longue-vie';
import { aspirationsConduiteExcellente } from './aspirations-conduite-excellente';
import { vajravidharan } from './vajravidharan';
import { sauverDesVies } from './sauver-des-vies';

const lojong7Points: PracticeText = {
  id: "lojong-7-points",
  title: "Lojong en 7 points",
  tibetanTitle: "བློ་སྦྱོང་དོན་བདུན་མ།",
  thumbnail: "/GuesheChekawa.jpg",
  sections: [],
};


export const textesPratique: PracticeText[] = [
  pratiqueChenrezik,
  pratiqueChenrezikThoungma,
  vajrasattva,
  guruYoga,
  mahakala,
  sauverDesVies,
  sojong,
];

export const textesSoutras: PracticeText[] = [
  troisAmoncellements,
  coeurPrajnaparamita,
  soutraLongevite,
  dakaYeshe,
  vajravidharan,
  aspirationsConduiteExcellente,
];

export const textesPrieres: PracticeText[] = [
  louangeManjushri,
  dewachen,
  louange12Actes,
  prieresLongueVie,
];

export const practiceTexts: PracticeText[] = [
  ...textesPratique,
  ...textesSoutras,
  ...textesPrieres,
  lojong7Points,
  {
    id: "rituel-tara",
    title: "Rituel de Tara",
    tibetanTitle: "སྒྲོལ་མའི་ཆོ་ག",
    thumbnail: "/TaraVerte.jpg",
    sections: [],
  } as PracticeText,
  {
    id: "amitabha",
    title: "Amitabha",
    tibetanTitle: "འོད་དཔག་མེད།",
    thumbnail: "/Amitabha.jpg",
    sections: [],
  } as PracticeText,
  {
    id: "milarepa",
    title: "Guru Yoga de Milarépa",
    tibetanTitle: "མི་ལའི་བླ་མའི་རྣལ་འབྱོར།",
    thumbnail: "/Milarepa.jpg",
    sections: [],
  } as PracticeText,
  {
    id: "aspirations-mahamoudra",
    title: "Aspirations du Mahamoudra",
    tibetanTitle: "ཕྱག་རྒྱ་ཆེན་པོའི་སྨོན་ལམ།",
    thumbnail: "/goldenRosary/12k3.jpeg",
    sections: [],
  } as PracticeText,
  {
    id: "37-pratiques",
    title: "Les 37 Pratiques",
    tibetanTitle: "རྒྱལ་བའི་སྲས་ཀྱི་ལག་ལེན་སོ་བདུན་མ།",
    thumbnail: "/GyalseThogme.jpg",
    sections: [],
  } as PracticeText,
];

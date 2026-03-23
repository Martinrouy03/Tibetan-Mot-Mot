import type { PracticeText } from '../types';
import { guruYoga } from './guru-yoga';
import { coeurPrajnaparamita } from './coeur-prajnaparamita';
import { vajrasattva } from './vajrasattva';
import { troisAmoncellements } from './trois-amoncellements';
import { souhaitsSamantabhadra } from './souhaits-samantabhadra';
import { pratiqueChenrezik } from './pratique-chenrezik';
import { pratiqueChenrezikThoungma } from './pratique-chenrezik-thoungma';
import { louangeManjushri } from './louange-manjushri';
import { mahakala } from './mahakala';
import { dewachen } from './dewachen';

export const practiceTexts: PracticeText[] = [
  pratiqueChenrezik,
  pratiqueChenrezikThoungma,
  troisAmoncellements,
  vajrasattva,
  louangeManjushri,
  guruYoga,
  souhaitsSamantabhadra,
  coeurPrajnaparamita,
  dewachen,
  mahakala,
];

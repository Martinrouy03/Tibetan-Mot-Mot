# Mot à Mot — conventions du projet

Application React + TypeScript + Vite + Redux Toolkit + React Router.
Textes bouddhistes tibétains avec découpage mot à mot.

## Stack
- React + TypeScript + Vite
- Redux Toolkit (`src/store/uiSlice.ts`)
- React Router (`/text/:textId`)
- Pas de librairie CSS externe

## Structure des données

Chaque texte de pratique est dans `src/data/<nom>.ts` et exporté via `src/data/texts.ts`.

### Types (`src/types/index.ts`)
```ts
interface Word { tibetan: string; phonetics: string; translation: string; }
type PhraseType = 'normal' | 'mantra' | 'instructions' | 'colophon' | 'image';
interface Phrase { id: string; type: PhraseType; tibetan: string; phonetics: string; translation: string; words: Word[]; src?: string; }
interface Section { id: string; title: string; phrases: Phrase[]; }
interface PracticeText { id: string; title: string; tibetanTitle: string; sections: Section[]; }
```

## Règles pour l'ajout de textes

### Format d'entrée utilisateur
Le texte est fourni sous cette forme :
```
།tibétain།
phonetique / groupe1 / groupe2 / groupe3
Traduction française complète de la phrase.
```

Les phonétiques sont divisées en groupes par `/`. Chaque groupe correspond à un mot ou groupe de mots tibétain.

### Règle OBLIGATOIRE : découpage mot à mot
**Toujours** créer le tableau `words` à partir des groupes phonétiques (`/`) et de la traduction fournie. Ne jamais laisser `words: []` pour les phrases `normal` sauf si explicitement demandé.

**La traduction de chaque mot doit être tirée uniquement des mots de la traduction française fournie.** Ne pas proposer plusieurs alternatives (ex: pas de `"victorieux/bouddhas"`), choisir un seul terme.

Exemple :
```
།ཇི་སྙེད་སུ་དག་ཕྱོགས་བཅུའི་འཇིག་རྟེན་ན།
dji nyé / sou dak / tcho tchu / djik ten na
Dans tous les mondes et dans les dix directions,
```
→
```ts
{
  tibetan: "།ཇི་སྙེད་སུ་དག་ཕྱོགས་བཅུའི་འཇིག་རྟེན་ན།",
  phonetics: "dji nyé / sou dak / tcho tchu / djik ten na",
  translation: "Dans tous les mondes et dans les dix directions,",
  words: [
    { tibetan: "ཇི་སྙེད་", phonetics: "dji nyé", translation: "autant que" },
    { tibetan: "སུ་དག་", phonetics: "sou dak", translation: "tous" },
    { tibetan: "ཕྱོགས་བཅུའི་", phonetics: "tcho tchu", translation: "des dix directions" },
    { tibetan: "འཇིག་རྟེན་ན་", phonetics: "djik ten na", translation: "dans le monde" },
  ],
}
```

### Phrases `mantra`
- `type: "mantra"`
- `translation: ""` (pas de traduction pour les mantras)
- `words: []` (pas de découpage)
- Affichage spécial non cliquable, tibétain ou phonétique selon le mode
- Exemple : mantra des 100 syllabes de Vajrasattva

```ts
{
  id: "vs-3-3",
  type: "mantra",
  tibetan: "།ཨོཾ་བཛྲ་སཏྭ...",
  phonetics: "om vajra sato samaya / manou palaya / ...",
  translation: "",
  words: [],
}
```

### Phrases `instructions` / `colophon`
- `phonetics: ""`
- `words: []`
- Indiquées par `[Instructions]` dans le texte source

### Phrases `image`
- `type: "image"`
- `tibetan: ""`, `phonetics: ""`, `translation: ""`
- `words: []`
- `src: "/nom-du-fichier.jpg"` (image dans `/public/`)
- Affiche l'image avec boutons +/- de taille

### Sections
- `title: ""` pour les sections sans titre (ex: intro)
- Une section peut avoir `phrases: []` (header vide, affiche juste le titre `<h3>`)
- Préfixes d'ID : `ss-` pour Souhaits Samantabhadra, `ta-` pour Trois Amoncellements, `gy-` pour Guru Yoga, etc.

### Sous-titres (`##` vs `#`)
- `#` = section principale → nouvelle `Section` dans le tableau
- `##` = sous-section → aussi une `Section`, mais visuellement subordonnée à la précédente

## Règles de communication

- **En cas de doute ou d'incohérence dans les données fournies** (décalage entre nombre de groupes phonétiques et mots de la traduction, ambiguïté sur un nom propre, données manquantes, etc.), toujours signaler le problème et demander validation avant de faire un choix.

## Règles de développement

- **Ne jamais utiliser un sous-agent Bash pour écrire des fichiers de données** — utiliser directement le tool `Write`
- Toujours vérifier la compilation avec `npx tsc --noEmit` après modification
- Committer et pusher uniquement quand l'utilisateur le demande explicitement
- Ne pas modifier `.claude/settings.local.json` dans les commits

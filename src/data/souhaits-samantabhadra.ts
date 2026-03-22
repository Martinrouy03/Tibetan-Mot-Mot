import type { PracticeText } from "../types";

export const souhaitsSamantabhadra: PracticeText = {
  id: "souhaits-samantabhadra",
  title: "Souhaits de Samantabhadra",
  tibetanTitle: "ཀུན་ཏུ་བཟང་པོའི་སྨོན་ལམ",
  audioSrc: "/audio/Samantabhadra.mp3",
  thumbnail: "/Samantabhadra.jpg",
  sections: [
    {
      id: "ss-intro",
      title: "",
      phrases: [
        {
          id: "ss-image",
          type: "image" as const,
          tibetan: "",
          phonetics: "",
          translation: "",
          src: "/Samantabhadra.jpg",
          words: [],
        },
        {
          id: "ss-intro-1",
          type: "instructions",
          tibetan: "རྒྱ་གར་སྐད་དུ། ཨཱརྱ་བྷ་དྲ་ཅརྱ་པྲ་ཎི་དྷཱ་ན་རཱ་ཇ།",
          phonetics: "",
          translation: "En sanskrit : arya bhadracarya pranidhāna rāja",
          words: [],
        },
        {
          id: "ss-intro-2",
          type: "instructions",
          tibetan: "བོད་སྐད་དུ། འཕགས་པ་བཟང་པོ་སྤྱོད་པའི་སྨོན་ལམ་གྱི་རྒྱལ་པོ།",
          phonetics: "",
          translation:
            "En tibétain : 'phags pa bzang po spyod pa'i smon lam gyi rgyal po",
          words: [],
        },
      ],
    },
    {
      id: "ss-hommage-mj",
      title: "Hommage à Manjushri",
      phrases: [
        {
          id: "ss-mj-1",
          type: "normal",
          tibetan: "འཕགས་པ་འཇམ་དཔལ་གཞོན་ནུར་གྱུར་པ་ལ་ཕྱག་འཚལ་ལོ།",
          phonetics:
            "p'ak pa / djampel / sheun nour / gyourpa la / tchak tsel lo",
          translation: "Je me prosterne devant le juvénile Manjushri.",
          words: [
            { tibetan: "འཕགས་པ་", phonetics: "p'ak pa", translation: "noble" },
            {
              tibetan: "འཇམ་དཔལ་",
              phonetics: "djampel",
              translation: "Manjushri",
            },
            {
              tibetan: "གཞོན་ནུར་",
              phonetics: "sheun nour",
              translation: "juvénile",
            },
            {
              tibetan: "གྱུར་པ་ལ་",
              phonetics: "gyourpa la",
              translation: "devant",
            },
            {
              tibetan: "ཕྱག་འཚལ་ལོ་",
              phonetics: "tchak tsel lo",
              translation: "je me prosterne",
            },
          ],
        },
      ],
    },
    {
      id: "ss-priere-header",
      title: "Prière à sept branches",
      phrases: [],
    },
    {
      id: "ss-hommage-b",
      title: "Branche de l'hommage",
      subtitle: true,
      phrases: [
        {
          id: "ss-hom-1",
          type: "normal",
          stanceNumber: 1,
          tibetan: "།ཇི་སྙེད་སུ་དག་ཕྱོགས་བཅུའི་འཇིག་རྟེན་ན།",
          phonetics: "dji nyé / sou dak / tcho tchu / djik ten na",
          translation: "Dans tous les mondes et dans les dix directions,",
          words: [
            {
              tibetan: "ཇི་སྙེད་",
              phonetics: "dji nyé",
              translation: "autant qu'il y en a",
            },
            { tibetan: "སུ་དག་", phonetics: "sou dak", translation: "tous" },
            {
              tibetan: "ཕྱོགས་བཅུའི་",
              phonetics: "tcho tchu",
              translation: "des dix directions",
            },
            {
              tibetan: "འཇིག་རྟེན་ན་",
              phonetics: "djik ten na",
              translation: "les mondes",
            },
          ],
        },
        {
          id: "ss-hom-2",
          type: "normal",
          tibetan: "།དུས་གསུམ་གཤེགས་པ་མི་ཡི་སེང་གེ་ཀུན།",
          phonetics: "du soum / chek pa / mi yi / seng gué kun",
          translation:
            "[Résident] les tathagatas des trois temps, lions parmi les hommes,",
          words: [
            {
              tibetan: "དུས་གསུམ་",
              phonetics: "du soum",
              translation: "trois temps",
            },
            {
              tibetan: "གཤེགས་པ་",
              phonetics: "chek pa",
              translation: "allés [tathagatas]",
            },
            {
              tibetan: "མི་ཡི་",
              phonetics: "mi yi",
              translation: "[parmi les] hommes",
            },
            {
              tibetan: "སེང་གེ་ཀུན་",
              phonetics: "seng gué kun",
              translation: "tous les lions",
            },
          ],
        },
        {
          id: "ss-hom-3",
          type: "normal",
          tibetan: "།བདག་གིས་མ་ལུས་དེ་དག་ཐམས་ཅད་ལ།",
          phonetics: "dak gui / ma lu / dé dak / t'am tché la",
          translation: "Moi, devant tous, sans exception,",
          words: [
            {
              tibetan: "བདག་གིས་",
              phonetics: "dak gui",
              translation: "Moi",
            },
            {
              tibetan: "མ་ལུས་",
              phonetics: "ma lu",
              translation: "sans exception",
            },
            { tibetan: "དེ་དག་", phonetics: "dé dak", translation: "ceux-là" },
            {
              tibetan: "ཐམས་ཅད་ལ་",
              phonetics: "t'am tché la",
              translation: "devant tous",
            },
          ],
        },
        {
          id: "ss-hom-4",
          type: "normal",
          tibetan: "།ལུས་དང་ངག་ཡིད་དང་བས་ཕྱག་བགྱིའོ།",
          phonetics: "lu dang / ngak yi / dang wé / tchak gyi'o",
          translation:
            "je m'incline joyeusement avec le corps, la parole et l'esprit.",
          words: [
            {
              tibetan: "ལུས་དང་",
              phonetics: "lu dang",
              translation: "[avec] le corps,",
            },
            {
              tibetan: "ངག་ཡིད་",
              phonetics: "ngak yi",
              translation: "la parole et l'esprit,",
            },
            {
              tibetan: "དང་བས་",
              phonetics: "dang wé",
              translation: "joyeusement",
            },
            {
              tibetan: "ཕྱག་བགྱིའོ་",
              phonetics: "tchak gyi'o",
              translation: "je m'incline",
            },
          ],
        },
        {
          id: "ss-hom-5",
          type: "normal",
          stanceNumber: 2,
          tibetan: "།བཟང་པོ་སྤྱོད་པའི་སྨོན་ལམ་སྟོབས་དག་གིས།",
          phonetics: "zang po / tcheu pai / meun lam / top dak gui",
          translation:
            "Par la force des aspirations de la conduite excellente,",
          words: [
            {
              tibetan: "བཟང་པོ་",
              phonetics: "zang po",
              translation: "excellente",
            },
            {
              tibetan: "སྤྱོད་པའི་",
              phonetics: "tcheu pai",
              translation: "conduite",
            },
            {
              tibetan: "སྨོན་ལམ་",
              phonetics: "meun lam",
              translation: "aspirations",
            },
            {
              tibetan: "སྟོབས་དག་གིས་",
              phonetics: "top dak gui",
              translation: "par la force pure des",
            },
          ],
        },
        {
          id: "ss-hom-6",
          type: "normal",
          tibetan: "།རྒྱལ་བ་ཐམས་ཅད་ཡིད་ཀྱིས་མངོན་སུམ་དུ།",
          phonetics: "gyalwa / t'am tché / yi kyi / ngeun soum dou",
          translation: "chaque bouddha invoqué devient manifeste.",
          words: [
            {
              tibetan: "རྒྱལ་བ་",
              phonetics: "gyalwa",
              translation: "bouddha",
            },
            { tibetan: "ཐམས་ཅད་", phonetics: "t'am tché", translation: "tous" },
            {
              tibetan: "ཡིད་ཀྱིས་",
              phonetics: "yi kyi",
              translation: "par l'esprit",
            },
            {
              tibetan: "མངོན་སུམ་དུ་",
              phonetics: "ngeun soum dou",
              translation: "clairement manifeste",
            },
          ],
        },
        {
          id: "ss-hom-7",
          type: "normal",
          tibetan: "།ཞིང་གི་རྡུལ་སྙེད་ལུས་རབ་བཏུད་པ་ཡིས།",
          phonetics: "shing gui / dul nyé / lu rap / tu pa yi",
          translation:
            "Avec autant de corps inclinés que d'atomes dans l'univers,",
          words: [
            {
              tibetan: "ཞིང་གི་",
              phonetics: "shing gui",
              translation: "de l'univers",
            },
            {
              tibetan: "རྡུལ་སྙེད་",
              phonetics: "dul nyé",
              translation: "autant que d'atomes",
            },
            {
              tibetan: "ལུས་རབ་",
              phonetics: "lu rap",
              translation: "corps",
            },
            {
              tibetan: "བཏུད་པ་ཡིས་",
              phonetics: "tu pa yi",
              translation: "inclinés",
            },
          ],
        },
        {
          id: "ss-hom-8",
          type: "normal",
          tibetan: "།རྒྱལ་བ་ཀུན་ལ་རབ་ཏུ་ཕྱག་འཚལ་ལོ།",
          phonetics: "gyal wa / kun la / rap tou / tchak tsel lo",
          translation: "je rends hommage profondément aux victorieux.",
          words: [
            {
              tibetan: "རྒྱལ་བ་",
              phonetics: "gyal wa",
              translation: "victorieux",
            },
            {
              tibetan: "ཀུན་ལ་",
              phonetics: "kun la",
              translation: "à tous",
            },
            {
              tibetan: "རབ་ཏུ་",
              phonetics: "rap tou",
              translation: "profondément",
            },
            {
              tibetan: "ཕྱག་འཚལ་ལོ་",
              phonetics: "tchak tsel lo",
              translation: "je rends hommage",
            },
          ],
        },
        {
          id: "ss-hom-9",
          type: "normal",
          stanceNumber: 3,
          tibetan: "།རྡུལ་གཅིག་སྟེང་ན་རྡུལ་སྙེད་སངས་རྒྱས་རྣམས།",
          phonetics: "dul tchik / teng na / dul nyé / sangyé nam",
          translation:
            "Sur chaque particule, autant de bouddhas que de particules",
          words: [
            {
              tibetan: "རྡུལ་གཅིག་",
              phonetics: "dul tchik",
              translation: "une particule",
            },
            { tibetan: "སྟེང་ན་", phonetics: "teng na", translation: "sur" },
            {
              tibetan: "རྡུལ་སྙེད་",
              phonetics: "dul nyé",
              translation: "autant que d'atomes",
            },
            {
              tibetan: "སངས་རྒྱས་རྣམས་",
              phonetics: "sangyé nam",
              translation: "des bouddhas",
            },
          ],
        },
        {
          id: "ss-hom-10",
          type: "normal",
          tibetan: "།སངས་རྒྱས་སྲས་ཀྱི་དབུས་ན་བཞུགས་པ་དག",
          phonetics: "sangyé / sé kyi / u na / shouk pa da",
          translation:
            "demeurent parmi les bodhisattvas, leurs fils spirituels.",
          words: [
            {
              tibetan: "སངས་རྒྱས་",
              phonetics: "sangyé",
              translation: "bouddhas",
            },
            {
              tibetan: "སྲས་ཀྱི་",
              phonetics: "sé kyi",
              translation: "fils",
            },
            {
              tibetan: "དབུས་ན་",
              phonetics: "u na",
              translation: "parmi",
            },
            {
              tibetan: "བཞུགས་པ་དག་",
              phonetics: "shouk pa da",
              translation: "demeurent",
            },
          ],
        },
        {
          id: "ss-hom-11",
          type: "normal",
          tibetan: "།དེ་ལྟར་ཆོས་ཀྱི་དབྱིངས་རྣམས་མ་ལུས་པ།",
          phonetics: "dé tar / tcheu kyi / ying nam / ma lu pa",
          translation: "Ainsi, le dharmadhatu, l'entière sphère d'existence,",
          words: [
            { tibetan: "དེ་ལྟར་", phonetics: "dé tar", translation: "ainsi" },
            {
              tibetan: "ཆོས་ཀྱི་དབྱིངས་རྣམས་",
              phonetics: "tcheu kyi ying nam",
              translation: "le dharmadhatu",
            },
            {
              tibetan: "མ་ལུས་པ་",
              phonetics: "ma lu pa",
              translation: "entier",
            },
          ],
        },
        {
          id: "ss-hom-12",
          type: "normal",
          tibetan: "།ཐམས་ཅད་རྒྱལ་བ་དག་གིས་གང་བར་མོས།",
          phonetics: "t'am tché / gyal wa / dak gui / gang war meu",
          translation: "est empli des bouddhas que j'invoque.",
          words: [
            { tibetan: "ཐམས་ཅད་", phonetics: "t'am tché", translation: "tout" },
            {
              tibetan: "རྒྱལ་བ་",
              phonetics: "gyal wa",
              translation: "victorieux",
            },
            {
              tibetan: "དག་གིས་",
              phonetics: "dak gui",
              translation: "[pluriel]",
            },
            {
              tibetan: "གང་བར་",
              phonetics: "gang war",
              translation: "rempli",
            },
            {
              tibetan: "མོས་",
              phonetics: "meu",
              translation: "j'invoque'",
            },
          ],
        },
        {
          id: "ss-hom-13",
          stanceNumber: 4,
          type: "normal",
          tibetan: "།དེ་དག་བསྔགས་པ་མི་ཟད་རྒྱ་མཚོ་རྣམས།",
          phonetics: "dé dak / ngak pa / mi zé / gyam tso nam",
          translation: "Par des océans inépuisables de louanges,",
          words: [
            { tibetan: "དེ་དག་", phonetics: "dé dak", translation: "ceux-là" },
            {
              tibetan: "བསྔགས་པ་",
              phonetics: "ngak pa",
              translation: "louanges",
            },
            {
              tibetan: "མི་ཟད་",
              phonetics: "mi zé",
              translation: "inépuisables",
            },
            {
              tibetan: "རྒྱ་མཚོ་རྣམས་",
              phonetics: "gyam tso nam",
              translation: "des océans",
            },
          ],
        },
        {
          id: "ss-hom-14",
          type: "normal",
          tibetan: "།དབྱངས་ཀྱི་ཡན་ལག་རྒྱ་མཚོའི་སྒྲ་ཀུན་གྱིས།",
          phonetics: "yang kyi / yen lak / gyam tseu / dra kun gyi",
          translation: "avec tous les tons d'une multitude de mélodies.",
          words: [
            {
              tibetan: "དབྱངས་ཀྱི་",
              phonetics: "yang kyi",
              translation: "mélodies",
            },
            {
              tibetan: "ཡན་ལག་",
              phonetics: "yen lak",
              translation: "aspects",
            },
            {
              tibetan: "རྒྱ་མཚོའི་",
              phonetics: "gyam tseu",
              translation: "de l'océan",
            },
            {
              tibetan: "སྒྲ་ཀུན་གྱིས་",
              phonetics: "dra kun gyi",
              translation: "tous les sons",
            },
          ],
        },
        {
          id: "ss-hom-15",
          type: "normal",
          tibetan: "།རྒྱལ་བ་ཀུན་གྱི་ཡོན་ཏན་རབ་བརྗོད་ཅིང༌།",
          phonetics: "gyal wa / kun gyi / yeun ten / rap djeu tching",
          translation: "Louant les qualités de tous les victorieux,",
          words: [
            {
              tibetan: "རྒྱལ་བ་",
              phonetics: "gyal wa",
              translation: "victorieux",
            },
            {
              tibetan: "ཀུན་གྱི་",
              phonetics: "kun gyi",
              translation: "de tous",
            },
            {
              tibetan: "ཡོན་ཏན་",
              phonetics: "yeun ten",
              translation: "qualités",
            },
            {
              tibetan: "རབ་བརྗོད་ཅིང་",
              phonetics: "rap djeu tching",
              translation: "louant parfaitement",
            },
          ],
        },
        {
          id: "ss-hom-16",
          type: "normal",
          tibetan: "།བདེ་བར་གཤེགས་པ་ཐམས་ཅད་བདག་གིས་བསྟོད།",
          phonetics: "dé war / chek pa / t'am tché / dak gui teu",
          translation: "j'honore tous les allés en la félicité.",
          words: [
            {
              tibetan: "བདེ་བར་",
              phonetics: "dé war",
              translation: "en félicité",
            },
            {
              tibetan: "གཤེགས་པ་",
              phonetics: "chek pa",
              translation: "allés [sugatas]",
            },
            { tibetan: "ཐམས་ཅད་", phonetics: "t'am tché", translation: "tous" },
            {
              tibetan: "བདག་གིས་བསྟོད་",
              phonetics: "dak gui teu",
              translation: "je rends hommage",
            },
          ],
        },
      ],
    },
    {
      id: "ss-offrande",
      title: "Branche de l'offrande",
      subtitle: true,
      phrases: [
        {
          id: "ss-off-1",
          stanceNumber: 5,
          type: "normal",
          tibetan: "།མེ་ཏོག་དམ་པ་ཕྲེང་བ་དམ་པ་དང་།",
          phonetics: "mé tok / dam pa / treng wa / dam pa dang",
          translation: "Des fleurs somptueuses, de magnifiques guirlandes,",
          words: [
            { tibetan: "མེ་ཏོག་", phonetics: "mé tok", translation: "fleurs" },
            {
              tibetan: "དམ་པ་",
              phonetics: "dam pa",
              translation: "somptueuses",
            },
            {
              tibetan: "ཕྲེང་བ་",
              phonetics: "treng wa",
              translation: "guirlandes",
            },
            {
              tibetan: "དམ་པ་དང་",
              phonetics: "dam pa dang",
              translation: "magnifiques,",
            },
          ],
        },
        {
          id: "ss-off-2",
          type: "normal",
          tibetan: "།སིལ་སྙན་རྣམས་དང་བྱུག་པ་གདུགས་མཆོག་དང༌།",
          phonetics: "sil nyen / nam dang / djouk pa / douk tchok dang",
          translation:
            "des cymbales cristallines, des onguents et des ombrelles sublimes,",
          words: [
            {
              tibetan: "སིལ་སྙན་",
              phonetics: "sil nyen",
              translation: "cymbales",
            },
            {
              tibetan: "རྣམས་དང་",
              phonetics: "nam dang",
              translation: "et aussi",
            },
            {
              tibetan: "བྱུག་པ་",
              phonetics: "djouk pa",
              translation: "onguents",
            },
            {
              tibetan: "གདུགས་མཆོག་དང་",
              phonetics: "douk tchok dang",
              translation: "et les ombrelles sublimes",
            },
          ],
        },
        {
          id: "ss-off-3",
          type: "normal",
          tibetan: "།མར་མེ་མཆོག་དང་བདུག་སྤོས་དམ་པ་ཡིས།",
          phonetics: "mar mé / tchok dang / douk peu / dam pa yi",
          translation: "des lampes étincelantes et de l'encens parfumé,",
          words: [
            { tibetan: "མར་མེ་", phonetics: "mar mé", translation: "lampes" },
            {
              tibetan: "མཆོག་དང་",
              phonetics: "tchok dang",
              translation: "sublimes et",
            },
            {
              tibetan: "བདུག་སྤོས་",
              phonetics: "douk peu",
              translation: "encens",
            },
            {
              tibetan: "དམ་པ་ཡིས་",
              phonetics: "dam pa yi",
              translation: "parfumé",
            },
          ],
        },
        {
          id: "ss-off-4",
          type: "normal",
          tibetan: "།རྒྱལ་བ་དེ་དག་ལ་ནི་མཆོད་པར་བགྱི།",
          phonetics: "gyal wa / dé dak / la ni / tcheu par gyi",
          translation: "Ô victorieux, je vous offre tout cela.",
          words: [
            {
              tibetan: "རྒྱལ་བ་",
              phonetics: "gyal wa",
              translation: "victorieux",
            },
            { tibetan: "དེ་དག་", phonetics: "dé dak", translation: "cela" },
            { tibetan: "ལ་ནི་", phonetics: "la ni", translation: "à" },
            {
              tibetan: "མཆོད་པར་བགྱི་",
              phonetics: "tcheu par gyi",
              translation: "j'offre",
            },
          ],
        },
        {
          id: "ss-off-5",
          stanceNumber: 6,
          type: "normal",
          tibetan: "།ན་བཟའ་དམ་པ་རྣམས་དང་དྲི་མཆོག་དང༌།",
          phonetics: "nap za / dam pa / nam tang / dri tchok dang",
          translation: "De vêtements fins, d'exquises effluves,",
          words: [
            {
              tibetan: "ན་བཟའ་",
              phonetics: "nap za",
              translation: "vêtements",
            },
            {
              tibetan: "དམ་པ་",
              phonetics: "dam pa",
              translation: "fins",
            },
            {
              tibetan: "རྣམས་དང་",
              phonetics: "nam tang",
              translation: "et aussi",
            },
            {
              tibetan: "དྲི་མཆོག་དང་",
              phonetics: "dri tchok dang",
              translation: "les effluves sublimes",
            },
          ],
        },
        {
          id: "ss-off-6",
          type: "normal",
          tibetan: "།ཕྱེ་མའི་ཕུར་མ་རི་རབ་མཉམ་པ་དང་།",
          phonetics: "tché mai / p'our ma / ri rap / nyam pa dang",
          translation:
            "des jarres emplies de poudres parfumées, [hautes] comme une montagne.",
          words: [
            {
              tibetan: "ཕྱེ་མའི་",
              phonetics: "tché mai",
              translation: "poudres",
            },
            {
              tibetan: "ཕུར་མ་",
              phonetics: "p'our ma",
              translation: "amas",
            },
            {
              tibetan: "རི་རབ་",
              phonetics: "ri rap",
              translation: "mont Meru",
            },
            {
              tibetan: "མཉམ་པ་དང་",
              phonetics: "nyam pa dang",
              translation: "égale à",
            },
          ],
        },
        {
          id: "ss-off-7",
          type: "normal",
          tibetan: "།བཀོད་པ་ཁྱད་པར་འཕགས་པའི་མཆོག་ཀུན་གྱིས།",
          phonetics: "keu pa / kyé par / p'ak pai / tchok kun gyi",
          translation: "un déploiement merveilleux, présenté avec raffinement,",
          words: [
            {
              tibetan: "བཀོད་པ་",
              phonetics: "keu pa",
              translation: "déploiement",
            },
            {
              tibetan: "ཁྱད་པར་",
              phonetics: "kyé par",
              translation: "merveilleux",
            },
            {
              tibetan: "འཕགས་པའི་",
              phonetics: "p'ak pai",
              translation: "sublimes",
            },
            {
              tibetan: "མཆོག་ཀུན་གྱིས་",
              phonetics: "tchok kun gyi",
              translation: "par tous les suprêmes",
            },
          ],
        },
        {
          id: "ss-off-8",
          type: "normal",
          tibetan: "།རྒྱལ་བ་དེ་དག་ལ་ཡང་མཆོད་པར་བགྱི།",
          phonetics: "gyal wa / dé dak / la yang / tcheu par gyi",
          translation: "Ô victorieux, je vous offre tout cela.",
          words: [
            {
              tibetan: "རྒྱལ་བ་",
              phonetics: "gyal wa",
              translation: "victorieux",
            },
            { tibetan: "དེ་དག་", phonetics: "dé dak", translation: "cela" },
            {
              tibetan: "ལ་ཡང་",
              phonetics: "la yang",
              translation: "à",
            },
            {
              tibetan: "མཆོད་པར་བགྱི་",
              phonetics: "tcheu par gyi",
              translation: "j'offre",
            },
          ],
        },
        {
          id: "ss-off-9",
          stanceNumber: 7,
          type: "normal",
          tibetan: "།མཆོད་པ་གང་རྣམས་བླ་མེད་རྒྱ་ཆེ་བ།",
          phonetics: "tcheu pa / gang nam / la mé / gya tché wa",
          translation: "Toutes ces offrandes vastes et sans pareilles",
          words: [
            {
              tibetan: "མཆོད་པ་",
              phonetics: "tcheu pa",
              translation: "offrandes",
            },
            {
              tibetan: "གང་རྣམས་",
              phonetics: "gang nam",
              translation: "toutes",
            },
            {
              tibetan: "བླ་མེད་",
              phonetics: "la mé",
              translation: "sans pareilles",
            },
            {
              tibetan: "རྒྱ་ཆེ་བ་",
              phonetics: "gya tché wa",
              translation: "vastes",
            },
          ],
        },
        {
          id: "ss-off-10",
          type: "normal",
          tibetan: "།དེ་དག་རྒྱལ་བ་ཐམས་ཅད་ལ་ཡང་མོས།",
          phonetics: "dé dak / gyal wa / t'am tché / la yang meu",
          translation: "témoignent de ma confiance en tous les bouddhas.",
          words: [
            {
              tibetan: "དེ་དག་",
              phonetics: "dé dak",
              translation: "ceci",
            },
            {
              tibetan: "རྒྱལ་བ་",
              phonetics: "gyal wa",
              translation: "victorieux",
            },
            { tibetan: "ཐམས་ཅད་", phonetics: "t'am tché", translation: "tous" },
            {
              tibetan: "ལ་ཡང་མོས་",
              phonetics: "la yang meu",
              translation: "aspirer",
            },
          ],
        },
        {
          id: "ss-off-11",
          type: "normal",
          tibetan: "།བཟང་པོ་སྤྱོད་ལ་དད་པའི་སྟོབས་དག་གིས།",
          phonetics: "zang po / tcheu la / dé pai / top dak gui",
          translation:
            "Avec toute la force de ma foi en la conduite excellente,",
          words: [
            {
              tibetan: "བཟང་པོ་",
              phonetics: "zang po",
              translation: "excellente",
            },
            {
              tibetan: "སྤྱོད་ལ་",
              phonetics: "tcheu la",
              translation: "conduite",
            },
            {
              tibetan: "དད་པའི་",
              phonetics: "dé pai",
              translation: "ma foi",
            },
            {
              tibetan: "སྟོབས་དག་གིས་",
              phonetics: "top dak gui",
              translation: "par la force pure de",
            },
          ],
        },
        {
          id: "ss-off-12",
          type: "normal",
          tibetan: "།རྒྱལ་བ་ཀུན་ལ་ཕྱག་འཚལ་མཆོད་པར་བགྱི།",
          phonetics: "gyal wa / kun la / tchak tsel / tcheu par gyi",
          translation: "je m'incline et les présente à tous les victorieux.",
          words: [
            {
              tibetan: "རྒྱལ་བ་",
              phonetics: "gyal wa",
              translation: "victorieux",
            },
            { tibetan: "ཀུན་ལ་", phonetics: "kun la", translation: "à tous" },
            {
              tibetan: "ཕྱག་འཚལ་",
              phonetics: "tchak tsel",
              translation: "je m'incline",
            },
            {
              tibetan: "མཆོད་པར་བགྱི་",
              phonetics: "tcheu par gyi",
              translation: "j'offre",
            },
          ],
        },
      ],
    },
    {
      id: "ss-confession",
      title: "Branche de la confession",
      subtitle: true,
      phrases: [
        {
          id: "ss-conf-1",
          stanceNumber: 8,
          type: "normal",
          tibetan: "།འདོད་ཆགས་ཞེ་སྡང་གཏི་མུག་དབང་གིས་ནི།",
          phonetics: "deu tchak / shé dang / ti mouk / wang gui ni",
          translation:
            "Sous l'emprise de la passion, de l'aversion et de l'ignorance,",
          words: [
            {
              tibetan: "འདོད་ཆགས་",
              phonetics: "deu tchak",
              translation: "désir-attachement",
            },
            {
              tibetan: "ཞེ་སྡང་",
              phonetics: "shé dang",
              translation: "aversion",
            },
            {
              tibetan: "གཏི་མུག་",
              phonetics: "ti mouk",
              translation: "ignorance",
            },
            {
              tibetan: "དབང་གིས་ནི་",
              phonetics: "wang gui ni",
              translation: "sous l'emprise de",
            },
          ],
        },
        {
          id: "ss-conf-2",
          type: "normal",
          tibetan: "།ལུས་དང་ངག་དང་དེ་བཞིན་ཡིད་ཀྱིས་ཀྱང་།",
          phonetics: "lu dang / ngak dang / dé shin / yi kyi kyang",
          translation: "avec le corps, la parole et aussi l'esprit,",
          words: [
            {
              tibetan: "ལུས་དང་",
              phonetics: "lu dang",
              translation: "le corps,",
            },
            {
              tibetan: "ངག་དང་",
              phonetics: "ngak dang",
              translation: "la parole et",
            },
            {
              tibetan: "དེ་བཞིན་",
              phonetics: "dé shin",
              translation: "aussi",
            },
            {
              tibetan: "ཡིད་ཀྱིས་ཀྱང་",
              phonetics: "yi kyi kyang",
              translation: "l'esprit",
            },
          ],
        },
        {
          id: "ss-conf-3",
          type: "normal",
          tibetan: "།སྡིག་པ་བདག་གིས་བགྱིས་པ་ཅི་མཆིས་པ།",
          phonetics: "dik pa / dak gui / gyi pa / tchi tchi pa",
          translation: "Quels que soient les méfaits que j'ai commis",
          words: [
            { tibetan: "སྡིག་པ་", phonetics: "dik pa", translation: "méfaits" },
            {
              tibetan: "བདག་གིས་",
              phonetics: "dak gui",
              translation: "moi",
            },
            {
              tibetan: "བགྱིས་པ་",
              phonetics: "gyi pa",
              translation: "commis",
            },
            {
              tibetan: "ཅི་མཆིས་པ་",
              phonetics: "tchi tchi pa",
              translation: "quels que soient",
            },
          ],
        },
        {
          id: "ss-conf-4",
          type: "normal",
          tibetan: "དེ་དག་ཐམས་ཅད་བདག་གིས་སོ་སོར་བཤགས།",
          phonetics: "dé dak / t'am tché / dak gui / so sor chak",
          translation: "je les révèle ouvertement un par un.",
          words: [
            { tibetan: "དེ་དག་", phonetics: "dé dak", translation: "ceux-là" },
            { tibetan: "ཐམས་ཅད་", phonetics: "t'am tché", translation: "tous" },
            {
              tibetan: "བདག་གིས་",
              phonetics: "dak gui",
              translation: "je",
            },
            {
              tibetan: "སོ་སོར་བཤགས་",
              phonetics: "so sor chak",
              translation: "je confesse un par un",
            },
          ],
        },
      ],
    },
    {
      id: "ss-rejouissance",
      title: "Branche de la réjouissance",
      subtitle: true,
      phrases: [
        {
          id: "ss-rej-1",
          stanceNumber: 9,
          type: "normal",
          tibetan: "།ཕྱོགས་བཅུའི་རྒྱལ་བ་ཀུན་དང་སངས་རྒྱས་སྲས།",
          phonetics: "tcho tchu / gyal wa / kun dang / sangyé sé",
          translation: "Des bouddhas et des bodhisattvas des dix directions,",
          words: [
            {
              tibetan: "ཕྱོགས་བཅུའི་",
              phonetics: "tcho tchu",
              translation: "des dix directions",
            },
            {
              tibetan: "རྒྱལ་བ་",
              phonetics: "gyal wa",
              translation: "victorieux/bouddhas",
            },
            {
              tibetan: "ཀུན་དང་",
              phonetics: "kun dang",
              translation: "tous et",
            },
            {
              tibetan: "སངས་རྒྱས་སྲས་",
              phonetics: "sangyé sé",
              translation: "fils des bouddhas [bodhisattvas]",
            },
          ],
        },
        {
          id: "ss-rej-2",
          type: "normal",
          tibetan: "།རང་རྒྱལ་རྣམས་དང་སློབ་དང་མི་སློབ་དང་།",
          phonetics: "rang gyal / nam dang / lop dang / mi lop dang",
          translation:
            "des pratyekabuddhas, de ceux qui s'entraînent sur le chemin, de ceux au-delà de l'entraînement [arhats]",
          words: [
            {
              tibetan: "རང་རྒྱལ་",
              phonetics: "rang gyal",
              translation: "pratyekabuddhas",
            },
            {
              tibetan: "རྣམས་དང་",
              phonetics: "nam dang",
              translation: "et aussi",
            },
            {
              tibetan: "སློབ་དང་",
              phonetics: "lop dang",
              translation: "ceux en cours d'apprentissage",
            },
            {
              tibetan: "མི་སློབ་དང་",
              phonetics: "mi lop dang",
              translation: "et ceux au-delà",
            },
          ],
        },
        {
          id: "ss-rej-3",
          type: "normal",
          tibetan: "།འགྲོ་བ་ཀུན་གྱི་བསོད་ནམས་གང་ལ་ཡང་།",
          phonetics: "dro wa / kun gyi / seu nam / gang la yang",
          translation: "De tous les êtres, des mérites qu'ils produisent",
          words: [
            { tibetan: "འགྲོ་བ་", phonetics: "dro wa", translation: "êtres" },
            {
              tibetan: "ཀུན་གྱི་",
              phonetics: "kun gyi",
              translation: "de tous",
            },
            {
              tibetan: "བསོད་ནམས་",
              phonetics: "seu nam",
              translation: "mérites",
            },
            {
              tibetan: "གང་ལ་ཡང་",
              phonetics: "gang la yang",
              translation: "quel qu'il soit",
            },
          ],
        },
        {
          id: "ss-rej-4",
          type: "normal",
          tibetan: "།དེ་དག་ཀུན་གྱི་རྗེས་སུ་བདག་ཡི་རང་།",
          phonetics: "dé dak / kun gyi / djé sou / dak yi rang",
          translation: "Je me réjouis de tous !",
          words: [
            {
              tibetan: "དེ་དག་",
              phonetics: "dé dak",
              translation: "de ceux-là",
            },
            {
              tibetan: "ཀུན་གྱི་",
              phonetics: "kun gyi",
              translation: "de tous",
            },
            {
              tibetan: "རྗེས་སུ་",
              phonetics: "djé sou",
              translation: "pour",
            },
            {
              tibetan: "བདག་ཡི་རང་",
              phonetics: "dak yi rang",
              translation: "je me réjouis",
            },
          ],
        },
      ],
    },
    {
      id: "ss-exhortation",
      title: "Branche de l'exhortation",
      subtitle: true,
      phrases: [
        {
          id: "ss-exh-1",
          stanceNumber: 10,
          type: "normal",
          tibetan: "།གང་རྣམས་ཕྱོགས་བཅུའི་འཇིག་རྟེན་སྒྲོན་མ་དག",
          phonetics: "gang nam / tcho tchu / djik ten / dreun ma dak",
          translation:
            "Ô flambeaux qui illuminez les mondes dans les dix directions,",
          words: [
            {
              tibetan: "གང་རྣམས་",
              phonetics: "gang nam",
              translation: "tous ceux qui",
            },
            {
              tibetan: "ཕྱོགས་བཅུའི་",
              phonetics: "tcho tchu",
              translation: "des dix directions",
            },
            {
              tibetan: "འཇིག་རྟེན་",
              phonetics: "djik ten",
              translation: "du monde",
            },
            {
              tibetan: "སྒྲོན་མ་དག་",
              phonetics: "dreun ma dak",
              translation: "flambeaux purs",
            },
          ],
        },
        {
          id: "ss-exh-2",
          type: "normal",
          tibetan: "།བྱང་ཆུབ་རིམ་པར་སངས་རྒྱས་མ་ཆགས་བརྙེས།",
          phonetics: "djang tchoup / rim par / sang gyé / ma tchak nyé",
          translation:
            "vous êtes devenus des bouddhas libres d'attachement en progressant pas à pas vers l'éveil.",
          words: [
            {
              tibetan: "བྱང་ཆུབ་",
              phonetics: "djang tchoup",
              translation: "éveil",
            },
            {
              tibetan: "རིམ་པར་",
              phonetics: "rim par",
              translation: "graduellement",
            },
            {
              tibetan: "སངས་རྒྱས་",
              phonetics: "sang gyé",
              translation: "bouddha",
            },
            {
              tibetan: "མ་ཆགས་བརྙེས་",
              phonetics: "ma tchak nyé",
              translation: "sans attachement atteint",
            },
          ],
        },
        {
          id: "ss-exh-3",
          type: "normal",
          tibetan: "།མགོན་པོ་དེ་དག་བདག་གིས་ཐམས་ཅད་ལ།",
          phonetics: "gueun po / dé dak / dak gui / t'am tché la",
          translation: "Protecteurs, je vous supplie tous :",
          words: [
            {
              tibetan: "མགོན་པོ་",
              phonetics: "gueun po",
              translation: "protecteurs",
            },
            { tibetan: "དེ་དག་", phonetics: "dé dak", translation: "ceux-là" },
            {
              tibetan: "བདག་གིས་",
              phonetics: "dak gui",
              translation: "je/moi",
            },
            {
              tibetan: "ཐམས་ཅད་ལ་",
              phonetics: "t'am tché la",
              translation: "à tous",
            },
          ],
        },
        {
          id: "ss-exh-4",
          type: "normal",
          tibetan: "།འཁོར་ལོ་བླ་ན་མེད་པར་བསྐོར་བར་བསྐུལ།",
          phonetics: "k'or lo / la na / mé par / kor war kul",
          translation: "tournez la roue suprême [du Dharma] !",
          words: [
            {
              tibetan: "འཁོར་ལོ་",
              phonetics: "k'or lo",
              translation: "roue [du Dharma]",
            },
            { tibetan: "བླ་ན་", phonetics: "la na", translation: "au-dessus" },
            {
              tibetan: "མེད་པར་",
              phonetics: "mé par",
              translation: "sans (suprême)",
            },
            {
              tibetan: "བསྐོར་བར་བསྐུལ་",
              phonetics: "kor war kul",
              translation: "je vous exhorte à tourner",
            },
          ],
        },
      ],
    },
    {
      id: "ss-requete",
      title: "Branche de la requête",
      subtitle: true,
      phrases: [
        {
          id: "ss-req-1",
          stanceNumber: 11,
          type: "normal",
          tibetan: "།མྱ་ངན་འདའ་སྟོན་གང་བཞེད་དེ་དག་ལ།",
          phonetics: "nya ngen / da teun / gang shé / dé dak la",
          translation:
            "Ceux qui parmi vous souhaitent manifester l'état au-delà de la souffrance :",
          words: [
            {
              tibetan: "མྱ་ངན་",
              phonetics: "nya ngen",
              translation: "souffrance/nirvana",
            },
            {
              tibetan: "འདའ་སྟོན་",
              phonetics: "da teun",
              translation: "montrer le passage au-delà",
            },
            {
              tibetan: "གང་བཞེད་",
              phonetics: "gang shé",
              translation: "ceux qui souhaitent",
            },
            {
              tibetan: "དེ་དག་ལ་",
              phonetics: "dé dak la",
              translation: "à ceux-là",
            },
          ],
        },
        {
          id: "ss-req-2",
          type: "normal",
          tibetan: "།འགྲོ་བ་ཀུན་ལ་ཕན་ཞིང་བདེ་བའི་ཕྱིར།",
          phonetics: "dro wa / kun la / p'en shing / dé wai tchir",
          translation: "Pour le bien et le bonheur de tous les êtres",
          words: [
            { tibetan: "འགྲོ་བ་", phonetics: "dro wa", translation: "êtres" },
            {
              tibetan: "ཀུན་ལ་",
              phonetics: "kun la",
              translation: "pour tous",
            },
            {
              tibetan: "ཕན་ཞིང་",
              phonetics: "p'en shing",
              translation: "être utile et",
            },
            {
              tibetan: "བདེ་བའི་ཕྱིར་",
              phonetics: "dé wai tchir",
              translation: "pour le bonheur de",
            },
          ],
        },
        {
          id: "ss-req-3",
          type: "normal",
          tibetan: "།བསྐལ་པ་ཞིང་གི་རྡུལ་སྙེད་བཞུགས་པར་ཡང་།",
          phonetics: "kal pa / shing gui / dul nyé / shouk par yang",
          translation:
            "Demeurez autant de kalpas qu'il y a d'atomes dans l'univers !",
          words: [
            {
              tibetan: "བསྐལ་པ་",
              phonetics: "kal pa",
              translation: "kalpas/éons",
            },
            {
              tibetan: "ཞིང་གི་",
              phonetics: "shing gui",
              translation: "des univers",
            },
            {
              tibetan: "རྡུལ་སྙེད་",
              phonetics: "dul nyé",
              translation: "autant que d'atomes",
            },
            {
              tibetan: "བཞུགས་པར་ཡང་",
              phonetics: "shouk par yang",
              translation: "demeurez aussi",
            },
          ],
        },
        {
          id: "ss-req-4",
          type: "normal",
          tibetan: "།བདག་གིས་ཐལ་མོ་རབ་སྦྱར་གསོལ་བར་བགྱི།",
          phonetics: "dak gui / tal mo / rap djar / seul war gyi",
          translation: "Je vous en supplie, les mains jointes.",
          words: [
            {
              tibetan: "བདག་གིས་",
              phonetics: "dak gui",
              translation: "je/moi",
            },
            {
              tibetan: "ཐལ་མོ་",
              phonetics: "tal mo",
              translation: "paumes/mains",
            },
            {
              tibetan: "རབ་སྦྱར་",
              phonetics: "rap djar",
              translation: "jointes",
            },
            {
              tibetan: "གསོལ་བར་བགྱི་",
              phonetics: "seul war gyi",
              translation: "je supplie",
            },
          ],
        },
      ],
    },
    {
      id: "ss-dedicace",
      title: "Branche de la dédicace",
      subtitle: true,
      phrases: [
        {
          id: "ss-ded-1",
          stanceNumber: 12,
          type: "normal",
          tibetan: "།ཕྱག་འཚལ་བ་དང་མཆོད་ཅིང་བཤགས་པ་དང༌།",
          phonetics: "tchak tsel / wa dang / tcheu tching / chak pa dang",
          translation: "Par l'hommage, l'offrande, la repentance,",
          words: [
            {
              tibetan: "ཕྱག་འཚལ་བ་",
              phonetics: "tchak tsel wa",
              translation: "prosternation",
            },
            { tibetan: "དང་", phonetics: "dang", translation: "et" },
            {
              tibetan: "མཆོད་ཅིང་",
              phonetics: "tcheu tching",
              translation: "offrir et",
            },
            {
              tibetan: "བཤགས་པ་དང་",
              phonetics: "chak pa dang",
              translation: "confession et",
            },
          ],
        },
        {
          id: "ss-ded-2",
          type: "normal",
          tibetan: "།རྗེས་སུ་ཡི་རང་བསྐུལ་ཞིང་གསོལ་བ་ཡི།",
          phonetics: "djé sou / yi rang / kul shing / seul wa yi",
          translation: "la réjouissance, la requête et la supplique,",
          words: [
            {
              tibetan: "རྗེས་སུ་",
              phonetics: "djé sou",
              translation: "à la suite/pour",
            },
            {
              tibetan: "ཡི་རང་",
              phonetics: "yi rang",
              translation: "se réjouir",
            },
            {
              tibetan: "བསྐུལ་ཞིང་",
              phonetics: "kul shing",
              translation: "exhorter et",
            },
            {
              tibetan: "གསོལ་བ་ཡི་",
              phonetics: "seul wa yi",
              translation: "de la supplique",
            },
          ],
        },
        {
          id: "ss-ded-3",
          type: "normal",
          tibetan: "།དགེ་བ་ཅུང་ཟད་བདག་གིས་ཅི་བསགས་པ།",
          phonetics: "gué wa / tchoung zé / dak gui / tchi sak pa",
          translation: "Quel que soit le mérite accumulé, même le plus infime,",
          words: [
            {
              tibetan: "དགེ་བ་",
              phonetics: "gué wa",
              translation: "mérite/vertu",
            },
            {
              tibetan: "ཅུང་ཟད་",
              phonetics: "tchoung zé",
              translation: "un peu/infime",
            },
            {
              tibetan: "བདག་གིས་",
              phonetics: "dak gui",
              translation: "par moi/j'ai",
            },
            {
              tibetan: "ཅི་བསགས་པ་",
              phonetics: "tchi sak pa",
              translation: "quel qu'il soit accumulé",
            },
          ],
        },
        {
          id: "ss-ded-4",
          type: "normal",
          tibetan: "།ཐམས་ཅད་བདག་གིས་བྱང་ཆུབ་ཕྱིར་བསྔོའོ།",
          phonetics: "t'am tché / dak gui / djang tchoup / tchir ngo'o",
          translation: "je le reverse entièrement à l'éveil parfait.",
          words: [
            { tibetan: "ཐམས་ཅད་", phonetics: "t'am tché", translation: "tout" },
            {
              tibetan: "བདག་གིས་",
              phonetics: "dak gui",
              translation: "par moi/je",
            },
            {
              tibetan: "བྱང་ཆུབ་",
              phonetics: "djang tchoup",
              translation: "éveil",
            },
            {
              tibetan: "ཕྱིར་བསྔོའོ་",
              phonetics: "tchir ngo'o",
              translation: "je dédie pour",
            },
          ],
        },
        {
          id: "ss-ded-instr",
          type: "instructions" as const,
          tibetan: "འདྲེན་པའི་དཔལ་དུ་བདག་གྱུར་ཅིག།",
          phonetics: "",
          translation: "fin prière à 7 branches",
          words: [],
        },
      ],
    },
    {
      id: "ss-aspirations",
      title: "Les Aspirations de Samantabhadra",
      phrases: [
        {
          id: "ss-asp-1",
          type: "normal" as const,
          tibetan: "།འདས་པའི་སངས་རྒྱས་རྣམས་དང་ཕྱོགས་བཅུ་ཡི།",
          phonetics: "dé pai / sangyé / nam dang / tchok tchou yi",
          translation: "Les bouddhas du passé et dans les dix directions,",
          words: [
            {
              tibetan: "འདས་པའི་",
              phonetics: "dé pai",
              translation: "du passé",
            },
            {
              tibetan: "སངས་རྒྱས་",
              phonetics: "sangyé",
              translation: "bouddhas",
            },
            { tibetan: "རྣམས་དང་", phonetics: "nam dang", translation: "et" },
            {
              tibetan: "ཕྱོགས་བཅུ་ཡི་",
              phonetics: "tchok tchou yi",
              translation: "des dix directions",
            },
          ],
        },
        {
          id: "ss-asp-2",
          type: "normal" as const,
          tibetan: "།འཇིག་རྟེན་དག་ན་གང་བཞུགས་མཆོད་པར་གྱུར།",
          phonetics: "djik ten / da na / gang shouk / tcheu par gyour",
          translation:
            "Demeurant dans ces mondes, puissent-ils être honorés par ces offrandes!",
          words: [
            {
              tibetan: "འཇིག་རྟེན་",
              phonetics: "djik ten",
              translation: "mondes",
            },
            { tibetan: "དག་ན་", phonetics: "da na", translation: "dans ces" },
            {
              tibetan: "གང་བཞུགས་",
              phonetics: "gang shouk",
              translation: "demeurant",
            },
            {
              tibetan: "མཆོད་པར་གྱུར་",
              phonetics: "tcheu par gyour",
              translation: "honorés",
            },
          ],
        },
        {
          id: "ss-asp-3",
          type: "normal" as const,
          tibetan: "།གང་ཡང་མ་བྱོན་དེ་དག་རབ་མྱུར་བར།",
          phonetics: "gang yang / ma djeun / dé dak / rap nyour war",
          translation:
            "Tous ceux qui ne sont pas encore venus, très rapidement,",
          words: [
            {
              tibetan: "གང་ཡང་",
              phonetics: "gang yang",
              translation: "Tous ceux",
            },
            {
              tibetan: "མ་བྱོན་",
              phonetics: "ma djeun",
              translation: "pas encore venus",
            },
            { tibetan: "དེ་དག་", phonetics: "dé dak", translation: "ceux-là" },
            {
              tibetan: "རབ་མྱུར་བར་",
              phonetics: "rap nyour war",
              translation: "très rapidement",
            },
          ],
        },
        {
          id: "ss-asp-4",
          type: "normal" as const,
          tibetan: "།བསམ་རྫོགས་བྱང་ཆུབ་རིམ་པར་སངས་རྒྱས་སྤྱོན།",
          phonetics: "sam dzok / djang tchoup / rim par / sangyé djeun",
          translation:
            "Puissent-ils accomplir leurs aspirations et s'éveiller graduellement à l'état de Bouddha.",
          words: [
            {
              tibetan: "བསམ་རྫོགས་",
              phonetics: "sam dzok",
              translation: "accomplir leurs aspirations",
            },
            {
              tibetan: "བྱང་ཆུབ་",
              phonetics: "djang tchoup",
              translation: "l'éveil",
            },
            {
              tibetan: "རིམ་པར་",
              phonetics: "rim par",
              translation: "graduellement",
            },
            {
              tibetan: "སངས་རྒྱས་སྤྱོན་",
              phonetics: "sangyé djeun",
              translation: "s'éveiller",
            },
          ],
        },
        {
          id: "ss-asp-5",
          type: "normal" as const,
          tibetan: "།ཕྱོགས་བཅུ་ག་ལའི་ཞིང་རྣམས་ཇི་སྙེད་པ།",
          phonetics: "tchok tchou / ga lai / shing nam / dji nyé pa",
          translation:
            "Tous les mondes des dix directions, aussi nombreux qu'ils soient,",
          words: [
            {
              tibetan: "ཕྱོགས་བཅུ་",
              phonetics: "tchok tchou",
              translation: "des dix directions",
            },
            {
              tibetan: "ག་ལའི་",
              phonetics: "ga lai",
              translation: "de partout",
            },
            {
              tibetan: "ཞིང་རྣམས་",
              phonetics: "shing nam",
              translation: "les mondes",
            },
            {
              tibetan: "ཇི་སྙེད་པ་",
              phonetics: "dji nyé pa",
              translation: "aussi nombreux qu'ils soient",
            },
          ],
        },
        {
          id: "ss-asp-6",
          type: "normal" as const,
          tibetan: "།དེ་དག་རྒྱ་ཆེར་ཡོངས་སུ་དག་པར་གྱུར།",
          phonetics: "dé dak / gya tcher / yong sou / dak par gyour",
          translation:
            "Puissent-ils devenir, dans leur infinité, parfaitement purs!",
          words: [
            { tibetan: "དེ་དག་", phonetics: "dé dak", translation: "ceux-là" },
            {
              tibetan: "རྒྱ་ཆེར་",
              phonetics: "gya tcher",
              translation: "dans leur infinité",
            },
            {
              tibetan: "ཡོངས་སུ་",
              phonetics: "yong sou",
              translation: "parfaitement",
            },
            {
              tibetan: "དག་པར་གྱུར་",
              phonetics: "dak par gyour",
              translation: "puissent-ils devenir purs",
            },
          ],
        },
        {
          id: "ss-asp-7",
          type: "normal" as const,
          tibetan: "།བྱང་ཆུབ་ཤིང་དབང་དྲུང་གཤེགས་རྒྱལ་བ་དང༌།",
          phonetics: "djang tchoup / ching wang / droung chek / gyal wa dang",
          translation: "Des victorieux parvenus devant l'arbre de l'éveil,",
          words: [
            {
              tibetan: "བྱང་ཆུབ་",
              phonetics: "djang tchoup",
              translation: "l'éveil",
            },
            {
              tibetan: "ཤིང་དབང་",
              phonetics: "ching wang",
              translation: "l'arbre",
            },
            {
              tibetan: "དྲུང་གཤེགས་",
              phonetics: "droung chek",
              translation: "parvenus devant",
            },
            {
              tibetan: "རྒྱལ་བ་དང་",
              phonetics: "gyal wa dang",
              translation: "des victorieux",
            },
          ],
        },
        {
          id: "ss-asp-8",
          type: "normal" as const,
          tibetan: "།སངས་རྒྱས་སྲས་ཀྱིས་རབ་ཏུ་གང་བར་ཤོག",
          phonetics: "sangyé / sé kyi / rap tou / gang war chok",
          translation:
            "et des bodhisattvas, puissent-ils en être complètement emplis!",
          words: [
            {
              tibetan: "སངས་རྒྱས་",
              phonetics: "sangyé",
              translation: "bouddhas",
            },
            {
              tibetan: "སྲས་ཀྱིས་",
              phonetics: "sé kyi",
              translation: "bodhisattvas",
            },
            {
              tibetan: "རབ་ཏུ་",
              phonetics: "rap tou",
              translation: "complètement",
            },
            {
              tibetan: "གང་བར་ཤོག",
              phonetics: "gang war chok",
              translation: "puissent-ils en être emplis",
            },
          ],
        },
        {
          id: "ss-asp-9",
          type: "normal" as const,
          tibetan: "།ཕྱོགས་བཅུའི་སེམས་ཅན་གང་རྣམས་ཇི་སྙེད་པ།",
          phonetics: "tchok tchu / sem tchen / gang nam / dji nyé pa",
          translation:
            "Les êtres des dix directions, aussi nombreux qu'ils soient,",
          words: [
            {
              tibetan: "ཕྱོགས་བཅུའི་",
              phonetics: "tchok tchu",
              translation: "des dix directions",
            },
            {
              tibetan: "སེམས་ཅན་",
              phonetics: "sem tchen",
              translation: "les êtres",
            },
            {
              tibetan: "གང་རྣམས་",
              phonetics: "gang nam",
              translation: "quels qu'ils soient",
            },
            {
              tibetan: "ཇི་སྙེད་པ་",
              phonetics: "dji nyé pa",
              translation: "aussi nombreux",
            },
          ],
        },
        {
          id: "ss-asp-10",
          type: "normal" as const,
          tibetan: "།དེ་དག་རྟག་ཏུ་ནད་མེད་བདེ་བར་གྱུར།",
          phonetics: "dé dak / tak tou / né mé / dé war gyour",
          translation:
            "Puissent-ils être toujours libres de maladies et heureux!",
          words: [
            { tibetan: "དེ་དག་", phonetics: "dé dak", translation: "ceux-là" },
            {
              tibetan: "རྟག་ཏུ་",
              phonetics: "tak tou",
              translation: "toujours",
            },
            {
              tibetan: "ནད་མེད་",
              phonetics: "né mé",
              translation: "libres de maladies",
            },
            {
              tibetan: "བདེ་བར་གྱུར་",
              phonetics: "dé war gyour",
              translation: "puissent-ils être heureux",
            },
          ],
        },
        {
          id: "ss-asp-11",
          type: "normal" as const,
          tibetan: "།འགྲོ་བ་ཀུན་གྱི་ཆོས་ཀྱི་དོན་རྣམས་ནི།",
          phonetics: "dro wa / kun gyi / tcheu kyi / deun nam ni",
          translation: "Que tous les êtres [trouvent] le sens du Dharma",
          words: [
            {
              tibetan: "འགྲོ་བ་",
              phonetics: "dro wa",
              translation: "les êtres",
            },
            {
              tibetan: "ཀུན་གྱི་",
              phonetics: "kun gyi",
              translation: "tous",
            },
            {
              tibetan: "ཆོས་ཀྱི་",
              phonetics: "tcheu kyi",
              translation: "du Dharma",
            },
            {
              tibetan: "དོན་རྣམས་ནི་",
              phonetics: "deun nam ni",
              translation: "le sens",
            },
          ],
        },
        {
          id: "ss-asp-12",
          type: "normal" as const,
          tibetan: "།མཐུན་པར་གྱུར་ཅིང་རེ་བའང་འགྲུབ་པར་ཤོག",
          phonetics: "t'un par / gyour tching / ré wang / droup par chok",
          translation:
            "Puissent-ils réaliser leurs espoirs en harmonie avec celui-ci !",
          words: [
            {
              tibetan: "མཐུན་པར་",
              phonetics: "t'un par",
              translation: "en harmonie",
            },
            {
              tibetan: "གྱུར་ཅིང་",
              phonetics: "gyour tching",
              translation: "devenir",
            },
            {
              tibetan: "རེ་བའང་",
              phonetics: "ré wang",
              translation: "leurs espoirs",
            },
            {
              tibetan: "འགྲུབ་པར་ཤོག",
              phonetics: "droup par chok",
              translation: "puissent-ils réaliser",
            },
          ],
        },
        {
          id: "ss-asp-13",
          type: "normal" as const,
          tibetan: "།བྱང་ཆུབ་སྤྱོད་པ་དག་ནི་བདག་སྤྱོད་ཅིང༌།",
          phonetics: "djang tchoup / tcheu pa / dak ni / dak tcheu tching",
          translation: "Puissé-je adopter les conduites de l'éveil",
          words: [
            {
              tibetan: "བྱང་ཆུབ་",
              phonetics: "djang tchoup",
              translation: "l'éveil",
            },
            {
              tibetan: "སྤྱོད་པ་",
              phonetics: "tcheu pa",
              translation: "les conduites",
            },
            { tibetan: "དག་ནི་", phonetics: "dak ni", translation: "ces" },
            {
              tibetan: "བདག་སྤྱོད་ཅིང་",
              phonetics: "dak tcheu tching",
              translation: "puissé-je adopter",
            },
          ],
        },
        {
          id: "ss-asp-14",
          type: "normal" as const,
          tibetan: "།འགྲོ་བ་ཀུན་ཏུ་སྐྱེ་བ་དྲན་པར་གྱུར།",
          phonetics: "dro wa / kun tou / kyé wa / dren par gyour",
          translation:
            "et me souvenir des vies passées au cours de chaque existence!",
          words: [
            {
              tibetan: "འགྲོ་བ་",
              phonetics: "dro wa",
              translation: "existences",
            },
            {
              tibetan: "ཀུན་ཏུ་",
              phonetics: "kun tou",
              translation: "de chaque",
            },
            {
              tibetan: "སྐྱེ་བ་",
              phonetics: "kyé wa",
              translation: "naissance",
            },
            {
              tibetan: "དྲན་པར་གྱུར་",
              phonetics: "dren par gyour",
              translation: "puissé-je me souvenir",
            },
          ],
        },
        {
          id: "ss-asp-15",
          type: "normal" as const,
          tibetan: "།ཚེ་རབས་ཀུན་ཏུ་འཆི་འཕོ་སྐྱེ་བ་ན།",
          phonetics: "tsé rap / kun tou / tchi p'o / kyé wa na",
          translation:
            "Au cours de mes existences successives marquées par la mort, la transmigration et la renaissance,",
          words: [
            {
              tibetan: "ཚེ་རབས་",
              phonetics: "tsé rap",
              translation: "existences successives",
            },
            {
              tibetan: "ཀུན་ཏུ་",
              phonetics: "kun tou",
              translation: "au cours de toutes",
            },
            { tibetan: "འཆི་", phonetics: "tchi", translation: "mort" },
            {
              tibetan: "འཕོ་",
              phonetics: "p'o",
              translation: "transmigration",
            },
            {
              tibetan: "སྐྱེ་བ་ན་",
              phonetics: "kyé wa na",
              translation: "renaissance",
            },
          ],
        },
        {
          id: "ss-asp-16",
          type: "normal" as const,
          tibetan: "།རྟག་ཏུ་བདག་ནི་རབ་ཏུ་འབྱུང་བར་ཤོག",
          phonetics: "tak tou / dak ni / rap tou / djoung war chok",
          translation:
            "Puissé-je toujours pleinement entrer dans l'ordination!",
          words: [
            {
              tibetan: "རྟག་ཏུ་",
              phonetics: "tak tou",
              translation: "toujours",
            },
            {
              tibetan: "བདག་ནི་",
              phonetics: "dak ni",
              translation: "moi",
            },
            {
              tibetan: "རབ་ཏུ་",
              phonetics: "rap tou",
              translation: "pleinement",
            },
            {
              tibetan: "འབྱུང་བར་",
              phonetics: "djoung war",
              translation: "entrer dans l'ordination",
            },
            {
              tibetan: "ཤོག",
              phonetics: "chok",
              translation: "puissé-je",
            },
          ],
        },
        {
          id: "ss-asp-17",
          type: "normal" as const,
          tibetan: "།རྒྱལ་བ་ཀུན་གྱི་རྗེས་སུ་སློབ་གྱུར་ཏེ།",
          phonetics: "gyal wa / kun gyi / djé sou / lop gyour té",
          translation:
            "M'entrainant en suivant l'exemple de tous les Victorieux,",
          words: [
            {
              tibetan: "རྒྱལ་བ་",
              phonetics: "gyal wa",
              translation: "Victorieux",
            },
            {
              tibetan: "ཀུན་གྱི་",
              phonetics: "kun gyi",
              translation: "de tous",
            },
            {
              tibetan: "རྗེས་སུ་",
              phonetics: "djé sou",
              translation: "en suivant l'exemple",
            },
            {
              tibetan: "སློབ་གྱུར་ཏེ་",
              phonetics: "lop gyour té",
              translation: "m'entraînant",
            },
          ],
        },
        {
          id: "ss-asp-18",
          type: "normal" as const,
          tibetan: "།བཟང་པོ་སྤྱོད་པ་ཡོངས་སུ་རྫོགས་བྱེད་ཅིང༌།",
          phonetics: "zang po / tcheu pa / yong sou / dzok djé tching",
          translation: "Accomplissant parfaitement la conduite excellente!",
          words: [
            {
              tibetan: "བཟང་པོ་",
              phonetics: "zang po",
              translation: "excellente",
            },
            {
              tibetan: "སྤྱོད་པ་",
              phonetics: "tcheu pa",
              translation: "la conduite",
            },
            {
              tibetan: "ཡོངས་སུ་",
              phonetics: "yong sou",
              translation: "parfaitement",
            },
            {
              tibetan: "རྫོགས་བྱེད་ཅིང་",
              phonetics: "dzok djé tching",
              translation: "accomplissant",
            },
          ],
        },
        {
          id: "ss-asp-19",
          type: "normal" as const,
          tibetan: "།ཚུལ་ཁྲིམས་སྤྱོད་པ་དྲི་མེད་ཡོངས་དག་པར།",
          phonetics: "tsul trim / tcheu pa / dri mé / yong dak par",
          translation:
            "[Puisse] ma conduite éthique être parfaitement pure et immaculée",
          words: [
            {
              tibetan: "ཚུལ་ཁྲིམས་",
              phonetics: "tsul trim",
              translation: "éthique",
            },
            {
              tibetan: "སྤྱོད་པ་",
              phonetics: "tcheu pa",
              translation: "la conduite",
            },
            {
              tibetan: "དྲི་མེད་",
              phonetics: "dri mé",
              translation: "immaculée",
            },
            {
              tibetan: "ཡོངས་དག་པར་",
              phonetics: "yong dak par",
              translation: "parfaitement pure",
            },
          ],
        },
        {
          id: "ss-asp-20",
          type: "normal" as const,
          tibetan: "།རྟག་ཏུ་མ་ཉམས་སྐྱོན་མེད་སྤྱོད་པར་ཤོག",
          phonetics: "tak tou / ma nyam / kyeun mé / tcheu par chok",
          translation:
            "Puissé-je me conduire constamment de façon irréprochable !",
          words: [
            {
              tibetan: "རྟག་ཏུ་",
              phonetics: "tak tou",
              translation: "constamment",
            },
            {
              tibetan: "མ་ཉམས་",
              phonetics: "ma nyam",
              translation: "sans déchoir",
            },
            {
              tibetan: "སྐྱོན་མེད་",
              phonetics: "kyeun mé",
              translation: "irréprochable",
            },
            {
              tibetan: "སྤྱོད་པར་ཤོག",
              phonetics: "tcheu par chok",
              translation: "puissé-je me conduire",
            },
          ],
        },
        {
          id: "ss-asp-21",
          type: "normal" as const,
          tibetan: "།ལྷ་ཡི་སྐད་དང་ཀླུ་དང་གནོད་སྦྱིན་སྐད།",
          phonetics: "lh'a yi / ké dang / lou dang / neu djin / ké",
          translation: "Dans la langue des dieux, des nagas et des djinns,",
          words: [
            {
              tibetan: "ལྷ་ཡི་",
              phonetics: "lh'a yi",
              translation: "des dieux",
            },
            {
              tibetan: "སྐད་དང་",
              phonetics: "ké dang",
              translation: "la langue et",
            },
            {
              tibetan: "ཀླུ་དང་",
              phonetics: "lou dang",
              translation: "des nagas et",
            },
            {
              tibetan: "གནོད་སྦྱིན་",
              phonetics: "neu djin",
              translation: "des djinns",
            },
            { tibetan: "སྐད་", phonetics: "ké", translation: "la langue" },
          ],
        },
        {
          id: "ss-asp-22",
          type: "normal" as const,
          tibetan: "།གྲུལ་བུམ་དག་དང་མི་ཡི་སྐད་རྣམས་དང་།",
          phonetics: "drul boum / da dang / mi yi / ké nam / dang",
          translation: "dans la langue des trolls et dans celle des hommes,",
          words: [
            {
              tibetan: "གྲུལ་བུམ་",
              phonetics: "drul boum",
              translation: "des trolls",
            },
            { tibetan: "དག་དང་", phonetics: "da dang", translation: "et" },
            {
              tibetan: "མི་ཡི་",
              phonetics: "mi yi",
              translation: "des hommes",
            },
            {
              tibetan: "སྐད་རྣམས་",
              phonetics: "ké nam",
              translation: "les langues",
            },
            { tibetan: "དང་", phonetics: "dang", translation: "et" },
          ],
        },
        {
          id: "ss-asp-23",
          type: "normal" as const,
          tibetan: "།འགྲོ་བ་ཀུན་གྱི་སྒྲ་སྐད་ཇི་ཙམ་པར།",
          phonetics: "dro wa / kun gyi / dra ké / dji tsam par",
          translation: "dans le langage de tous les êtres sensibles,",
          words: [
            {
              tibetan: "འགྲོ་བ་",
              phonetics: "dro wa",
              translation: "les êtres sensibles",
            },
            {
              tibetan: "ཀུན་གྱི་",
              phonetics: "kun gyi",
              translation: "de tous",
            },
            {
              tibetan: "སྒྲ་སྐད་",
              phonetics: "dra ké",
              translation: "le langage",
            },
            {
              tibetan: "ཇི་ཙམ་པར་",
              phonetics: "dji tsam par",
              translation: "autant que possible",
            },
          ],
        },
        {
          id: "ss-asp-24",
          type: "normal" as const,
          tibetan: "།ཐམས་ཅད་སྐད་དུ་བདག་གིས་ཆོས་བསྟན་ཏོ།",
          phonetics: "t'am tché / ké dou / dak gui / tcheu / ten to",
          translation:
            "dans toutes les langues, [puissé-je] exposer le Dharma!",
          words: [
            {
              tibetan: "ཐམས་ཅད་",
              phonetics: "t'am tché",
              translation: "toutes",
            },
            {
              tibetan: "སྐད་དུ་",
              phonetics: "ké dou",
              translation: "dans les langues",
            },
            { tibetan: "བདག་གིས་", phonetics: "dak gui", translation: "moi" },
            { tibetan: "ཆོས་", phonetics: "tcheu", translation: "le Dharma" },
            {
              tibetan: "བསྟན་ཏོ་",
              phonetics: "ten to",
              translation: "exposer",
            },
          ],
        },
        {
          id: "ss-asp-25",
          type: "normal" as const,
          tibetan: "།དེས་ཤིང་ཕ་རོལ་ཕྱིན་ལ་རབ་བརྩོན་ཏེ།",
          phonetics: "dé ching / p'a reul tchin la / rap tseun té",
          translation: "De plus, me dévouant pleinement aux perfections,",
          words: [
            {
              tibetan: "དེས་ཤིང་",
              phonetics: "dé ching",
              translation: "De plus",
            },
            {
              tibetan: "ཕ་རོལ་ཕྱིན་ལ་",
              phonetics: "p'a reul tchin la",
              translation: "aux perfections",
            },
            {
              tibetan: "རབ་བརྩོན་ཏེ་",
              phonetics: "rap tseun té",
              translation: "me dévouer pleinement",
            },
          ],
        },
        {
          id: "ss-asp-26",
          type: "normal" as const,
          tibetan: "།བྱང་ཆུབ་སེམས་ནི་ནམ་ཡང་བརྗེད་མ་གྱུར།",
          phonetics: "djang tchoup / sem ni / nam yang / djé ma gyour",
          translation: "Puissé-je ne jamais oublier l'esprit d'éveil!",
          words: [
            {
              tibetan: "བྱང་ཆུབ་",
              phonetics: "djang tchoup",
              translation: "d'éveil",
            },
            {
              tibetan: "སེམས་ནི་",
              phonetics: "sem ni",
              translation: "l'esprit",
            },
            { tibetan: "ནམ་ཡང་", phonetics: "nam yang", translation: "jamais" },
            {
              tibetan: "བརྗེད་མ་གྱུར་",
              phonetics: "djé ma gyour",
              translation: "ne pas oublier",
            },
          ],
        },
        {
          id: "ss-asp-27",
          type: "normal" as const,
          tibetan: "།སྡིག་པ་གང་རྣམས་སྒྲིབ་པར་གྱུར་པ་དག",
          phonetics: "dik pa / gang nam / drip par / gyour wa dak",
          translation: "Les actes néfastes devenus obscurcissements",
          words: [
            {
              tibetan: "སྡིག་པ་",
              phonetics: "dik pa",
              translation: "les actes néfastes",
            },
            {
              tibetan: "གང་རྣམས་",
              phonetics: "gang nam",
              translation: "quels qu'ils soient",
            },
            {
              tibetan: "སྒྲིབ་པར་",
              phonetics: "drip par",
              translation: "obscurcissements",
            },
            {
              tibetan: "གྱུར་པ་དག",
              phonetics: "gyour wa dak",
              translation: "devenus",
            },
          ],
        },
        {
          id: "ss-asp-28",
          type: "normal" as const,
          tibetan: "།དེ་དག་མ་ལུས་ཡོངས་སུ་བྱང་བར་ཤོག",
          phonetics: "dé dak / ma lu / yong sou / djang war / chok",
          translation:
            "Puissent-ils être tous, sans exception, entièrement purifiés!",
          words: [
            { tibetan: "དེ་དག་", phonetics: "dé dak", translation: "ceux-là" },
            {
              tibetan: "མ་ལུས་",
              phonetics: "ma lu",
              translation: "sans exception",
            },
            {
              tibetan: "ཡོངས་སུ་",
              phonetics: "yong sou",
              translation: "entièrement",
            },
            {
              tibetan: "བྱང་བར་",
              phonetics: "djang war",
              translation: "purifiés",
            },
            { tibetan: "ཤོག", phonetics: "chok", translation: "puissent-ils" },
          ],
        },
        {
          id: "ss-asp-29",
          type: "normal" as const,
          tibetan: "།ལས་དང་ཉོན་མོངས་བདུད་ཀྱི་ལས་རྣམས་ལས།",
          phonetics: "lé dang / nyeun mong / du kyi / lé nam lé",
          translation: "Le karma, les afflictions et l'action des maras,",
          words: [
            {
              tibetan: "ལས་དང་",
              phonetics: "lé dang",
              translation: "le karma et",
            },
            {
              tibetan: "ཉོན་མོངས་",
              phonetics: "nyeun mong",
              translation: "les afflictions",
            },
            {
              tibetan: "བདུད་ཀྱི་",
              phonetics: "du kyi",
              translation: "des maras",
            },
            {
              tibetan: "ལས་རྣམས་ལས་",
              phonetics: "lé nam lé",
              translation: "l'action",
            },
          ],
        },
        {
          id: "ss-asp-30",
          type: "normal" as const,
          tibetan: "།གྲོལ་ཞིང་འཇིག་རྟེན་འགྲོ་བ་རྣམས་སུ་ཡང་།",
          phonetics: "dreul shing / djik ten / dro wa / nam sou yang",
          translation:
            "Puissé-je en être libéré. Dans les mondes et partout où il y a des êtres,",
          words: [
            {
              tibetan: "གྲོལ་ཞིང་",
              phonetics: "dreul shing",
              translation: "puissé-je en être libéré",
            },
            {
              tibetan: "འཇིག་རྟེན་",
              phonetics: "djik ten",
              translation: "les mondes",
            },
            {
              tibetan: "འགྲོ་བ་",
              phonetics: "dro wa",
              translation: "les êtres",
            },
            {
              tibetan: "རྣམས་སུ་ཡང་",
              phonetics: "nam sou yang",
              translation: "partout",
            },
          ],
        },
        {
          id: "ss-asp-31",
          type: "normal" as const,
          tibetan: "།ཇི་ལྟར་པདྨོ་ཆུ་མི་ཆགས་པ་བཞིན།",
          phonetics: "dji tar / pé mo / tchou mi / tchak pa shin",
          translation:
            "[Puissé-je agir] tel le lotus qu'aucune eau ne peut souiller,",
          words: [
            { tibetan: "ཇི་ལྟར་", phonetics: "dji tar", translation: "tel" },
            { tibetan: "པདྨོ་", phonetics: "pé mo", translation: "le lotus" },
            {
              tibetan: "ཆུ་མི་",
              phonetics: "tchou mi",
              translation: "aucune eau",
            },
            {
              tibetan: "ཆགས་པ་བཞིན་",
              phonetics: "tchak pa shin",
              translation: "ne peut souiller",
            },
          ],
        },
        {
          id: "ss-asp-32",
          type: "normal" as const,
          tibetan: "།ཉི་ཟླ་ནམ་མཁར་ཐོགས་པ་མེད་ལྟར་སྤྱད།",
          phonetics: "nyi da / nam k'ar / t'ok pa / mé tar tché",
          translation:
            "et pareil au soleil et à la lune sans entraves dans le ciel !",
          words: [
            {
              tibetan: "ཉི་ཟླ་",
              phonetics: "nyi da",
              translation: "soleil et lune",
            },
            {
              tibetan: "ནམ་མཁར་",
              phonetics: "nam k'ar",
              translation: "dans le ciel",
            },
            {
              tibetan: "ཐོགས་པ་མེད་",
              phonetics: "t'ok pa mé",
              translation: "sans entraves",
            },
            {
              tibetan: "ལྟར་སྤྱད་",
              phonetics: "tar tché",
              translation: "agir comme tel",
            },
          ],
        },
        {
          id: "ss-asp-33",
          type: "normal" as const,
          tibetan: "།ཞིང་གི་ཁྱོན་དང་ཕྱོགས་རྣམས་ཇི་ཙམ་པར།",
          phonetics: "shing gui / kyeun dang / tchok nam / dji tsam par",
          translation: "Dans toute l'étendue des mondes et leurs directions,",
          words: [
            {
              tibetan: "ཞིང་གི་",
              phonetics: "shing gui",
              translation: "des mondes",
            },
            {
              tibetan: "ཁྱོན་དང་",
              phonetics: "kyeun dang",
              translation: "l'étendue et",
            },
            {
              tibetan: "ཕྱོགས་རྣམས་",
              phonetics: "tchok nam",
              translation: "leurs directions",
            },
            {
              tibetan: "ཇི་ཙམ་པར་",
              phonetics: "dji tsam par",
              translation: "toute",
            },
          ],
        },
        {
          id: "ss-asp-34",
          type: "normal" as const,
          tibetan: "།ངན་སོང་སྡུག་བསྔལ་རབ་ཏུ་ཞི་བར་བྱེད།",
          phonetics: "ngen song / douk ngel / rap tou / shi war djé",
          translation:
            "Puissé-je apaiser complètement les souffrances des destinées mauvaises,",
          words: [
            {
              tibetan: "ངན་སོང་",
              phonetics: "ngen song",
              translation: "les destinées mauvaises",
            },
            {
              tibetan: "སྡུག་བསྔལ་",
              phonetics: "douk ngel",
              translation: "les souffrances",
            },
            {
              tibetan: "རབ་ཏུ་",
              phonetics: "rap tou",
              translation: "complètement",
            },
            {
              tibetan: "ཞི་བར་བྱེད་",
              phonetics: "shi war djé",
              translation: "puissé-je apaiser",
            },
          ],
        },
        {
          id: "ss-asp-35",
          type: "normal" as const,
          tibetan: "།བདེ་བ་དག་ལ་འགྲོ་བ་ཀུན་འགོད་ཅིང་།",
          phonetics: "dé wa / dak la / dro wa kun / gueu tching",
          translation: "[Puissé-je] établir tous les êtres dans le bonheur",
          words: [
            {
              tibetan: "བདེ་བ་",
              phonetics: "dé wa",
              translation: "le bonheur",
            },
            { tibetan: "དག་ལ་", phonetics: "dak la", translation: "dans" },
            {
              tibetan: "འགྲོ་བ་ཀུན་",
              phonetics: "dro wa kun",
              translation: "tous les êtres",
            },
            {
              tibetan: "འགོད་ཅིང་",
              phonetics: "gueu tching",
              translation: "établir",
            },
          ],
        },
        {
          id: "ss-asp-36",
          type: "normal" as const,
          tibetan: "།འགྲོ་བ་ཐམས་ཅད་ལ་ནི་ཕན་པར་སྤྱད།",
          phonetics: "dro wa / t'am tché / la ni / p'en par tché",
          translation: "et agir pour le bien de tous !",
          words: [
            {
              tibetan: "འགྲོ་བ་",
              phonetics: "dro wa",
              translation: "les êtres",
            },
            { tibetan: "ཐམས་ཅད་", phonetics: "t'am tché", translation: "tous" },
            { tibetan: "ལ་ནི་", phonetics: "la ni", translation: "pour" },
            {
              tibetan: "ཕན་པར་སྤྱད་",
              phonetics: "p'en par tché",
              translation: "agir pour le bien",
            },
          ],
        },
      ],
    },
  ],
};

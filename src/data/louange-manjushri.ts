import type { PracticeText } from "../types";

export const louangeManjushri: PracticeText = {
  id: "louange-manjushri",
  title: "Louange à Manjushri",
  tibetanTitle: "འཕགས་པ་འཇམ་དཔལ་ལ་བསྟོད་པ།",
  shortTibetanTitle: "གང་གློ་མ།",
  thumbnail: "/Manjushri.jpg",
  sections: [
    {
      id: "mj-intro",
      title: "",
      phrases: [
        {
          id: "mj-image",
          type: "image" as const,
          tibetan: "",
          phonetics: "",
          translation: "",
          src: "/Manjushri.jpg",
          words: [],
        },
      ],
    },
    {
      id: "mj-shamar",
      title: "Quatrain de louange composé par Kunzig Shamar Rinpoché",
      phrases: [
        {
          id: "mj-13",
          type: "normal",
          tibetan: "སྡུག་བསྔལ་སྲིད་པའི་གཡང་ས་དོར་ནས་མི་ཞིགས་ཐར་པའི་ལྷ་ལམ་མངའ།",
          phonetics: "doukgnel / sipé / yangsa / dor ne / mishi / tharpai / lha lam / nga",
          translation: "Ayant quitté l'abîme du mal être de l'existence, il possède le chemin céleste indestructible de la libération;",
          words: [
            { tibetan: "སྡུག་བསྔལ་", phonetics: "doukgnel", translation: "de mal être" },
            { tibetan: "སྲིད་པའི་", phonetics: "sipé", translation: "existence" },
            { tibetan: "གཡང་ས་", phonetics: "yangsa", translation: "l'abîme" },
            { tibetan: "དོར་ནས་", phonetics: "dor ne", translation: "ayant quitté" },
            { tibetan: "མི་ཞིགས་", phonetics: "mishi", translation: "indestructible" },
            { tibetan: "ཐར་པའི་", phonetics: "tharpai", translation: "de la libération" },
            { tibetan: "ལྷ་ལམ་", phonetics: "lha lam", translation: "le chemin céleste" },
            { tibetan: "མངའ།", phonetics: "nga", translation: "il possède" },
          ],
        },
        {
          id: "mj-14",
          type: "normal",
          tibetan: "ཞི་མཐར་མནལ་བའི་མཚན་མོའི་གོས་སྤངས་ཡེ་ཤེས་དཀྱིལ་འཁོར་ཀུན་ནས་གསལ།",
          phonetics: "shi / thar / nelwai / tsenmeu / gueu / pang / yeshe / kyilkhor / kun ne / sel",
          translation: "Ayant ôté le vêtement de la nuit, ce sommeil dans l'extrême de la paix, le mandala de la sagesse resplendit en tous sens ;",
          words: [
            { tibetan: "ཞི་", phonetics: "shi", translation: "paix" },
            { tibetan: "མཐར་", phonetics: "thar", translation: "l'extrême" },
            { tibetan: "མནལ་བའི་", phonetics: "nelwai", translation: "ce sommeil" },
            { tibetan: "མཚན་མོའི་", phonetics: "tsenmeu", translation: "de la nuit" },
            { tibetan: "གོས་", phonetics: "gueu", translation: "le vêtement" },
            { tibetan: "སྤངས་", phonetics: "pang", translation: "ayant ôté" },
            { tibetan: "ཡེ་ཤེས་", phonetics: "yeshe", translation: "de la sagesse" },
            { tibetan: "དཀྱིལ་འཁོར་", phonetics: "kyilkhor", translation: "le mandala" },
            { tibetan: "ཀུན་ནས་", phonetics: "kun ne", translation: "en tous sens" },
            { tibetan: "གསལ།", phonetics: "sel", translation: "resplendit" },
          ],
        },
        {
          id: "mj-15",
          type: "normal",
          tibetan: "སྙོམས་པར་གཡེང་བའི་སྤྲིན་དྲྭ་རྣམ་སངས་ཕན་བདེའི་འོད་ཟེར་འགོགས་མེད་འཕྲོ།",
          phonetics: "nyompar / yengwai / trin / dra nam / sang / pen / dé / euser / gomé / tro",
          translation: "L'amas de nuages de l'égarement dans les absorptions entièrement dissipé, les rayons de bienfait et de bonheur se répandent sans obstacle ;",
          words: [
            { tibetan: "སྙོམས་པར་", phonetics: "nyompar", translation: "des absorptions" },
            { tibetan: "གཡེང་བའི་", phonetics: "yengwai", translation: "l'égarement" },
            { tibetan: "སྤྲིན་", phonetics: "trin", translation: "nuages" },
            { tibetan: "དྲྭ་རྣམ་", phonetics: "dra nam", translation: "amas" },
            { tibetan: "སངས་", phonetics: "sang", translation: "dissipé" },
            { tibetan: "ཕན་", phonetics: "pen", translation: "bienfait" },
            { tibetan: "བདེའི་", phonetics: "dé", translation: "bonheur" },
            { tibetan: "འོད་ཟེར་", phonetics: "euser", translation: "les rayons" },
            { tibetan: "འགོགས་མེད་", phonetics: "gomé", translation: "sans obstacle" },
            { tibetan: "འཕྲོ།", phonetics: "tro", translation: "se répandent" },
          ],
        },
        {
          id: "mj-16",
          type: "normal",
          tibetan: "མཐའ་ཀླས་འགྲོ་བའི་གཏན་སྐྱབས་ཁོ་ན་ཐུབ་དབང་ཉི་མ་གཙུག་གིས་མཆོད།",
          phonetics: "thalé / drowai / ten / kyab / gona / thoub / wang / nyima / tsoug / gyi tcheu",
          translation: "Unique refuge permanent de l'infinité des êtres, Seigneur des Sages, Soleil, je vous honore du sommet de ma tête.",
          words: [
            { tibetan: "མཐའ་ཀླས་", phonetics: "thalé", translation: "de l'infinité" },
            { tibetan: "འགྲོ་བའི་", phonetics: "drowai", translation: "des êtres" },
            { tibetan: "གཏན་", phonetics: "ten", translation: "permanent" },
            { tibetan: "སྐྱབས་", phonetics: "kyab", translation: "refuge" },
            { tibetan: "ཁོ་ན་", phonetics: "gona", translation: "unique" },
            { tibetan: "ཐུབ་", phonetics: "thoub", translation: "des Sages" },
            { tibetan: "དབང་", phonetics: "wang", translation: "Seigneur" },
            { tibetan: "ཉི་མ་", phonetics: "nyima", translation: "Soleil" },
            { tibetan: "གཙུག་", phonetics: "tsoug", translation: "du sommet de ma tête" },
            { tibetan: "གིས་མཆོད།", phonetics: "gyi tcheu", translation: "je vous honore" },
          ],
        },
      ],
    },
    {
      id: "mj-main",
      title: "Gangloma",
      phrases: [
        {
          id: "mj-1",
          type: "normal",
          tibetan:
            "།གང་གི་བློ་གྲོས་སྒྲིབ་གཉིས་སྤྲིན་བྲལ་ཉི་ལྟར་རྣམ་དག་རབ་གསལ་བས།",
          phonetics:
            "kang gui / lo dreu / drip nyi / trin drel / nyi tar / nam dak / rab sel oué",
          translation:
            "Celui dont l'intelligence, complètement purifiée des deux voiles, qui illumine comme le soleil dans un ciel sans nuages",
          words: [
            {
              tibetan: "གང་གི་",
              phonetics: "kang gui",
              translation: "Celui dont",
            },
            {
              tibetan: "བློ་གྲོས་",
              phonetics: "lo dreu",
              translation: "l'intelligence",
            },
            {
              tibetan: "སྒྲིབ་གཉིས་",
              phonetics: "drip nyi",
              translation: "des deux voiles",
            },
            {
              tibetan: "སྤྲིན་བྲལ་",
              phonetics: "trin drel",
              translation: "sans nuages",
            },
            {
              tibetan: "ཉི་ལྟར་",
              phonetics: "nyi tar",
              translation: "comme le soleil",
            },
            {
              tibetan: "རྣམ་དག་",
              phonetics: "nam dak",
              translation: "complètement purifiée",
            },
            {
              tibetan: "རབ་གསལ་བས་",
              phonetics: "rab sel oué",
              translation: "qui illumine",
            },
          ],
        },
        {
          id: "mj-2",
          type: "normal",
          tibetan:
            "ཇི་སྙེད་དོན་ཀུན་ཇི་བཞིན་གཟིགས་ཕྱིར་ཉིད་ཀྱི་ཐུགས་ཀར་གླེགས་བམ་འཛིན།",
          phonetics:
            "dji nyé / deun kun / dji chin / zik tchir / nyi kyi / touk kar / lek bam dzin",
          translation:
            "Qui voit les phénomènes autant qu'ils sont et tels qu'ils sont, il tient donc au niveau de son coeur un texte.",
          words: [
            {
              tibetan: "ཇི་སྙེད་",
              phonetics: "dji nyé",
              translation: "autant qu'ils sont",
            },
            {
              tibetan: "དོན་ཀུན་",
              phonetics: "deun kun",
              translation: "les phénomènes",
            },
            {
              tibetan: "ཇི་བཞིན་",
              phonetics: "dji chin",
              translation: "tels qu'ils sont",
            },
            {
              tibetan: "གཟིགས་ཕྱིར་",
              phonetics: "zik tchir",
              translation: "Qui voit",
            },
            { tibetan: "ཉིད་ཀྱི་", phonetics: "nyi kyi", translation: "il" },
            {
              tibetan: "ཐུགས་ཀར་",
              phonetics: "touk kar",
              translation: "au niveau de son cœur",
            },
            {
              tibetan: "གླེགས་བམ་འཛིན་",
              phonetics: "lek bam dzin",
              translation: "tient un texte",
            },
          ],
        },
        {
          id: "mj-3",
          type: "normal",
          tibetan:
            "།གང་དག་སྲིད་པའི་བཙོན་རར་མ་རིག་མུན་འཐུམས་སྡུག་བསྔལ་གྱིས་གཟིར་བའི།",
          phonetics:
            "kang dak / si pai / tseun rar / ma rik / mun toum / douk ngel / gyi zir ouai",
          translation:
            "Les êtres qui sont obscurcis par les ténèbres de l'ignorance dans la prison du samsara et qui sont tourmentés par la souffrance,",
          words: [
            {
              tibetan: "གང་དག་",
              phonetics: "kang dak",
              translation: "Les êtres",
            },
            {
              tibetan: "སྲིད་པའི་",
              phonetics: "si pai",
              translation: "du samsara",
            },
            {
              tibetan: "བཙོན་རར་",
              phonetics: "tseun rar",
              translation: "dans la prison",
            },
            {
              tibetan: "མ་རིག་",
              phonetics: "ma rik",
              translation: "de l'ignorance",
            },
            {
              tibetan: "མུན་འཐུམས་",
              phonetics: "mun toum",
              translation: "les ténèbres",
            },
            {
              tibetan: "སྡུག་བསྔལ་",
              phonetics: "douk ngel",
              translation: "la souffrance",
            },
            {
              tibetan: "གྱིས་གཟིར་བའི་",
              phonetics: "gyi zir ouai",
              translation: "tourmentés par",
            },
          ],
        },
        {
          id: "mj-4",
          type: "normal",
          tibetan:
            "འགྲོ་ཚོགས་ཀུན་ལ་བུ་གཅིག་ལྟར་བརྩེ་ཡན་ལག་དྲུག་བཅུའི་དབྱངས་ལྡན་གསུང༌།",
          phonetics:
            "dro tsok / kun la / bou tchik / tar tsé / yen lak / drouk tchouï yang den soung",
          translation:
            "sont chéris comme son fils unique, ainsi sa parole éveillée, mélodieuse, est douée des soixante qualités.",
          words: [
            {
              tibetan: "འགྲོ་ཚོགས་",
              phonetics: "dro tsok",
              translation: "les êtres",
            },
            { tibetan: "ཀུན་ལ་", phonetics: "kun la", translation: "tous" },
            {
              tibetan: "བུ་གཅིག་",
              phonetics: "bou tchik",
              translation: "fils unique",
            },
            {
              tibetan: "ལྟར་བརྩེ་",
              phonetics: "tar tsé",
              translation: "chéris comme",
            },
            {
              tibetan: "ཡན་ལག་",
              phonetics: "yen lak",
              translation: "qualités",
            },
            {
              tibetan: "དྲུག་བཅུའི་",
              phonetics: "drouk tchouï",
              translation: "soixante",
            },
            {
              tibetan: "དབྱངས་ལྡན་",
              phonetics: "yang den",
              translation: "mélodieuse",
            },
            {
              tibetan: "གསུང་",
              phonetics: "soung",
              translation: "parole éveillée",
            },
          ],
        },
        {
          id: "mj-5",
          type: "normal",
          tibetan:
            "།འབྲུག་ལྟར་ཆེར་སྒྲོག་ཉོན་མོངས་གཉིད་སློང་།ལས་ཀྱི་ལྕགས་སྒྲོག་འགྲོལ་མཛད་ཅིང༌།",
          phonetics:
            "droup tar / tcher drok / nyeun mong / nyi long / lé kyi / tchak drok / dreul dzé tching",
          translation:
            "En résonnant comme le tonnerre, elle réveille les émotions et libère des chaînes du karma.",
          words: [
            {
              tibetan: "འབྲུག་ལྟར་",
              phonetics: "droup tar",
              translation: "comme le tonnerre",
            },
            {
              tibetan: "ཆེར་སྒྲོག་",
              phonetics: "tcher drok",
              translation: "résonnant",
            },
            {
              tibetan: "ཉོན་མོངས་",
              phonetics: "nyeun mong",
              translation: "les émotions",
            },
            {
              tibetan: "གཉིད་སློང་",
              phonetics: "nyi long",
              translation: "réveille",
            },
            {
              tibetan: "ལས་ཀྱི་",
              phonetics: "lé kyi",
              translation: "du karma",
            },
            {
              tibetan: "ལྕགས་སྒྲོག་",
              phonetics: "tchak drok",
              translation: "les chaînes",
            },
            {
              tibetan: "འགྲོལ་མཛད་ཅིང་",
              phonetics: "dreul dzé tching",
              translation: "libère",
            },
          ],
        },
        {
          id: "mj-6",
          type: "normal",
          tibetan:
            "།མ་རིག་མུན་སེལ་སྡུག་བསྔལ་མྱུ་གུ་ཇི་སྙེད་གཅོད་མཛད་རལ་གྲི་བསྣམས།",
          phonetics:
            "ma rik / mun sel / douk ngel / nyou gou / dji nyé / tcheu dzé / rel dri nam",
          translation:
            "Parce-qu'il dissipe les ténèbres de l'ignorance et coupe tous les germes de souffrance, il tient une épée.",
          words: [
            {
              tibetan: "མ་རིག་",
              phonetics: "ma rik",
              translation: "de l'ignorance",
            },
            {
              tibetan: "མུན་སེལ་",
              phonetics: "mun sel",
              translation: "dissipe les ténèbres",
            },
            {
              tibetan: "སྡུག་བསྔལ་",
              phonetics: "douk ngel",
              translation: "de souffrance",
            },
            {
              tibetan: "མྱུ་གུ་",
              phonetics: "nyou gou",
              translation: "les germes",
            },
            { tibetan: "ཇི་སྙེད་", phonetics: "dji nyé", translation: "tous" },
            {
              tibetan: "གཅོད་མཛད་",
              phonetics: "tcheu dzé",
              translation: "coupe",
            },
            {
              tibetan: "རལ་གྲི་བསྣམས་",
              phonetics: "rel dri nam",
              translation: "une épée",
            },
          ],
        },
        {
          id: "mj-7",
          type: "normal",
          tibetan:
            "གདོད་ནས་དག་ཅིང་ས་བཅུའི་མཐར་སོན་ཡོན་ཏན་ལུས་རྫོགས་རྒྱལ་སྲས་ཐུ་བོའི་སྐུ།",
          phonetics:
            "deu né / dak tching / sa tchouï / tar seun / yeun ten / lu dzok / gyal sé / tou beu kou",
          translation:
            "Parce qu'il est pur depuis toujours et a parachevé les dix terres, toutes les qualités sont réunies dans son corps de suprême bodhisattva.",
          words: [
            {
              tibetan: "གདོད་ནས་",
              phonetics: "deu né",
              translation: "depuis toujours",
            },
            { tibetan: "དག་ཅིང་", phonetics: "dak tching", translation: "pur" },
            {
              tibetan: "ས་བཅུའི་",
              phonetics: "sa tchouï",
              translation: "les dix terres",
            },
            {
              tibetan: "མཐར་སོན་",
              phonetics: "tar seun",
              translation: "parachevé",
            },
            {
              tibetan: "ཡོན་ཏན་",
              phonetics: "yeun ten",
              translation: "les qualités",
            },
            {
              tibetan: "ལུས་རྫོགས་",
              phonetics: "lu dzok",
              translation: "réunies",
            },
            {
              tibetan: "རྒྱལ་སྲས་",
              phonetics: "gyal sé",
              translation: "bodhisattva",
            },
            {
              tibetan: "ཐུ་བོའི་སྐུ་",
              phonetics: "tou beu kou",
              translation: "corps suprême",
            },
          ],
        },
        {
          id: "mj-8",
          type: "normal",
          tibetan:
            "།བཅུ་ཕྲག་བཅུ་དང་བཅུ་གཉིས་རྒྱན་སྤྲས་བདག་བློའི་མུན་སེལ་འཇམ་པའི་དབྱངས་ལ་འདུད།",
          phonetics:
            "tchou trak / tchou dang / tchou nyi / gyen tré / dak / leu / mun sel / djam pai / yang la du",
          translation:
            "Devant celui qui est orné des cent douze marques, qui chasse l'obscurité de mon esprit, je m'incline devant Manjushri.",
          words: [
            {
              tibetan: "བཅུ་ཕྲག་",
              phonetics: "tchou trak",
              translation: "cent",
            },
            { tibetan: "བཅུ་དང་", phonetics: "tchou dang", translation: "dix" },
            {
              tibetan: "བཅུ་གཉིས་",
              phonetics: "tchou nyi",
              translation: "deux",
            },
            {
              tibetan: "རྒྱན་སྤྲས་",
              phonetics: "gyen tré",
              translation: "orné des marques",
            },
            { tibetan: "བདག་", phonetics: "dak", translation: "mon" },
            { tibetan: "བློའི་", phonetics: "leu", translation: "esprit" },
            {
              tibetan: "མུན་སེལ་",
              phonetics: "mun sel",
              translation: "chasse l'obscurité",
            },
            {
              tibetan: "འཇམ་པའི་",
              phonetics: "djam pai",
              translation: "Manjushri",
            },
            {
              tibetan: "དབྱངས་ལ་འདུད་",
              phonetics: "yang la du",
              translation: "je m'incline",
            },
          ],
        },
        {
          id: "mj-9",
          type: "normal",
          tibetan: "བརྩེ་ལྡན་ཁྱེད་ཀྱི་མཁྱེན་རབ་འོད་ཟེར་གྱིས།",
          phonetics: "tsé den / kyé kyi / kyen rab / eu zer gyi",
          translation:
            "Par le rayonnement lumineux de votre parfaite sagesse et de votre amour,",
          words: [
            {
              tibetan: "བརྩེ་ལྡན་",
              phonetics: "tsé den",
              translation: "votre amour",
            },
            {
              tibetan: "ཁྱེད་ཀྱི་",
              phonetics: "kyé kyi",
              translation: "votre",
            },
            {
              tibetan: "མཁྱེན་རབ་",
              phonetics: "kyen rab",
              translation: "parfaite sagesse",
            },
            {
              tibetan: "འོད་ཟེར་གྱིས་",
              phonetics: "eu zer gyi",
              translation: "rayonnement lumineux",
            },
          ],
        },
        {
          id: "mj-10",
          type: "normal",
          tibetan: "བདག་བློའི་གཏི་མུག་མུན་པ་རབ་གསལ་ནས།",
          phonetics: "dak leu / ti mouk / mun pa / rab sel né",
          translation:
            "Ayant complètement dissipé les ténèbres de l'ignorance de mon esprit,",
          words: [
            {
              tibetan: "བདག་བློའི་",
              phonetics: "dak leu",
              translation: "de mon esprit",
            },
            {
              tibetan: "གཏི་མུག་",
              phonetics: "ti mouk",
              translation: "l'ignorance",
            },
            {
              tibetan: "མུན་པ་",
              phonetics: "mun pa",
              translation: "les ténèbres",
            },
            {
              tibetan: "རབ་གསལ་ནས་",
              phonetics: "rab sel né",
              translation: "complètement dissipé",
            },
          ],
        },
        {
          id: "mj-11",
          type: "normal",
          tibetan: "བཀའ་དང་བསྟན་བཅོས་གཞུང་ལུགས་རྟོགས་པ་ཡི།",
          phonetics: "ka tang / ten tcheu / choung louk / tok pa yi",
          translation:
            "La compréhension des enseignements du bouddha, des commentaires et des différentes manières d'expliquer.",
          words: [
            {
              tibetan: "བཀའ་དང་",
              phonetics: "ka tang",
              translation: "enseignements du bouddha",
            },
            {
              tibetan: "བསྟན་བཅོས་",
              phonetics: "ten tcheu",
              translation: "des commentaires",
            },
            {
              tibetan: "གཞུང་ལུགས་",
              phonetics: "choung louk",
              translation: "manières d'expliquer",
            },
            {
              tibetan: "རྟོགས་པ་ཡི་",
              phonetics: "tok pa yi",
              translation: "la compréhension",
            },
          ],
        },
        {
          id: "mj-12",
          type: "normal",
          tibetan: "བློ་གྲོས་སྤོབས་པའི་སྣང་བ་སྩལ་དུ་གསོལ།",
          phonetics: "lo dreu / pop pai / nang oua / tsel tou seul",
          translation:
            "Accordez-m'en la clarté de l'intelligence et de l'éloquence.",
          words: [
            {
              tibetan: "བློ་གྲོས་",
              phonetics: "lo dreu",
              translation: "l'intelligence",
            },
            {
              tibetan: "སྤོབས་པའི་",
              phonetics: "pop pai",
              translation: "de l'éloquence",
            },
            {
              tibetan: "སྣང་བ་",
              phonetics: "nang oua",
              translation: "la clarté",
            },
            {
              tibetan: "སྩལ་དུ་གསོལ་",
              phonetics: "tsel tou seul",
              translation: "Accordez-m'en",
            },
          ],
        },
      ],
    },
  ],
};

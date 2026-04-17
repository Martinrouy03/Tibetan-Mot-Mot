import type { PracticeText } from "../types";

export const pratiqueChenrezikThoungma: PracticeText = {
  id: "pratique-chenrezik-thoungma",
  title: "Pratique de Chenrézik — KIBI",
  tibetanTitle: "སྤྱན་རས་གཟིགས།",
  audioSrc: "/audio/Chenrézik_Karmapa.mp3",
  thumbnail: "/Chenrezik.jpg",
  thumbnailLogo: "/logo_kibi.jpg",
  sections: [
    {
      id: "ch-priere-lignee",
      title: "Prière à la lignée",
      audioTimestamp: 0,
      phrases: [
        {
          id: "ch-th-1",
          type: "normal",
          tibetan: "རྡོ་རྗེ་འཆང་ཆེན་ཏཻ་ལོ་ནཱ་རོ་དང༌།",
          phonetics: "dor djé tchang / tchen / té lo / na ro / tang",
          translation: "Grand Vajradhara, Tilopa, Naropa,",
          words: [
            {
              tibetan: "རྡོ་རྗེ་འཆང་",
              phonetics: "dor djé tchang",
              translation: "Vajradhara",
            },
            { tibetan: "ཆེན་", phonetics: "tchen", translation: "Grand" },
            { tibetan: "ཏཻ་ལོ་", phonetics: "té lo", translation: "Tilopa" },
            { tibetan: "ནཱ་རོ་", phonetics: "na ro", translation: "Naropa" },
            { tibetan: "དང༌།", phonetics: "tang", translation: "et" },
          ],
        },
        {
          id: "ch-th-1-images",
          type: "image-row" as const,
          tibetan: "",
          phonetics: "",
          translation: "",
          words: [],
          srcs: [
            "/goldenRosary/1dc.jpeg",
            "/goldenRosary/2tilo.jpeg",
            "/goldenRosary/3naro.jpeg",
          ],
        },
        {
          id: "ch-th-2",
          type: "normal",
          tibetan: "།མར་པ་མི་ལ་ཆོས་རྗེ་སྒམ་པོ་པ།",
          phonetics: "mar pa / mi la / tcheu djé / gam po pa",
          translation: "Marpa, Milarepa, Seigneur du Dharma Gampopa,",
          words: [
            { tibetan: "མར་པ་", phonetics: "mar pa", translation: "Marpa" },
            { tibetan: "མི་ལ་", phonetics: "mi la", translation: "Milarepa" },
            {
              tibetan: "ཆོས་རྗེ་",
              phonetics: "tcheu djé",
              translation: "Seigneur du Dharma",
            },
            {
              tibetan: "སྒམ་པོ་པ།",
              phonetics: "gam po pa",
              translation: "Gampopa",
            },
          ],
        },
        {
          id: "ch-th-2-images",
          type: "image-row" as const,
          tibetan: "",
          phonetics: "",
          translation: "",
          words: [],
          srcs: [
            "/goldenRosary/4mar.jpeg",
            "/goldenRosary/5mil.jpeg",
            "/goldenRosary/6gom.jpeg",
          ],
        },
        {
          id: "ch-th-3",
          type: "normal",
          tibetan: "།དུས་གསུམ་ཤེས་བྱ་ཀུན་མཁྱེན་ཀརྨ་པ།",
          phonetics: "tu soum / ché tcha / kun kyen / kar ma pa",
          translation: "Karmapa, Omniscient du connaissable des trois temps,",
          words: [
            {
              tibetan: "དུས་གསུམ་",
              phonetics: "tu soum",
              translation: "des trois temps",
            },
            {
              tibetan: "ཤེས་བྱ་",
              phonetics: "ché tcha",
              translation: "connaissable",
            },
            {
              tibetan: "ཀུན་མཁྱེན་",
              phonetics: "kun kyen",
              translation: "Omniscient",
            },
            {
              tibetan: "ཀརྨ་པ།",
              phonetics: "kar ma pa",
              translation: "Karmapa",
            },
          ],
        },
        {
          id: "ch-th-3-image",
          type: "image" as const,
          tibetan: "",
          phonetics: "",
          translation: "",
          words: [],
          src: "/goldenRosary/7k1.jpeg",
        },
        {
          id: "ch-th-4",
          type: "normal",
          tibetan: "།ཆེ་བཞི་ཆུང་བརྒྱད་བརྒྱུད་པ་འཛིན་རྣམས་དང༌།",
          phonetics: "tché / chi / tchoung / gyé / gyu pa / dzin nam / tang",
          translation:
            "détenteurs des quatre grandes et des huit petites lignées,",
          words: [
            { tibetan: "ཆེ་", phonetics: "tché", translation: "grandes" },
            { tibetan: "བཞི་", phonetics: "chi", translation: "quatre" },
            { tibetan: "ཆུང་", phonetics: "tchoung", translation: "petites" },
            { tibetan: "བརྒྱད་", phonetics: "gyé", translation: "huit" },
            {
              tibetan: "བརྒྱུད་པ་",
              phonetics: "gyu pa",
              translation: "lignées",
            },
            {
              tibetan: "འཛིན་རྣམས་",
              phonetics: "dzin nam",
              translation: "détenteurs",
            },
            { tibetan: "དང༌", phonetics: "tang", translation: "et" },
          ],
        },
        {
          id: "ch-th-5",
          type: "normal",
          tibetan: "།འབྲི་སྟག་ཚལ་གསུམ་དཔལ་ལྡན་འབྲུག་པ་སོགས།",
          phonetics: "dri / tak / tsel / soum / pel den / drouk / pa / so",
          translation:
            "[maîtres] des trois lignées Drikoung, Takloung et Tselpa, glorieux lamas de la lignée Droukpa,",
          words: [
            { tibetan: "འབྲི་", phonetics: "dri", translation: "Drikoung" },
            { tibetan: "སྟག་", phonetics: "tak", translation: "Takloung" },
            { tibetan: "ཚལ་", phonetics: "tsel", translation: "Tselpa" },
            { tibetan: "གསུམ་", phonetics: "soum", translation: "des trois" },
            {
              tibetan: "དཔལ་ལྡན་",
              phonetics: "pel den",
              translation: "glorieux",
            },
            {
              tibetan: "འབྲུག་པ་",
              phonetics: "droukpa",
              translation: "Droukpa",
            },
            { tibetan: "སོགས།", phonetics: "so", translation: "etc." },
          ],
        },
        {
          id: "ch-th-6",
          type: "normal",
          tibetan: "།ཟབ་ལམ་ཕྱག་རྒྱ་ཆེ་ལ་མངའ་བརྙེས་པའི།",
          phonetics: "sap / lam / tchak gya tché / la / nga nyé pé",
          translation:
            "[Vous] qui avez parachevé la voie profonde du Mahamoudra,",
          words: [
            { tibetan: "ཟབ་", phonetics: "sap", translation: "profonde" },
            { tibetan: "ལམ་", phonetics: "lam", translation: "voie" },
            {
              tibetan: "ཕྱག་རྒྱ་ཆེ་",
              phonetics: "tchak gya tché",
              translation: "Mahamoudra",
            },
            { tibetan: "ལ་", phonetics: "la", translation: "du" },
            {
              tibetan: "མངའ་བརྙེས་པའི།",
              phonetics: "nga nyé pé",
              translation: "qui avez parachevé",
            },
          ],
        },
        {
          id: "ch-th-7",
          type: "normal",
          tibetan: "།མཉམ་མེད་འགྲོ་མགོན་དྭགས་པོ་བཀའ་བརྒྱུད་ལ།",
          phonetics: "nyam mé / dro geun / dak po / ka gyu la",
          translation:
            "[A vous tous, maîtres de la lignée] Dhagpo Kagyupa, incomparables protecteurs des êtres,",
          words: [
            {
              tibetan: "མཉམ་མེད་",
              phonetics: "nyam mé",
              translation: "incomparables",
            },
            {
              tibetan: "འགྲོ་མགོན་",
              phonetics: "dro geun",
              translation: "protecteurs des êtres",
            },
            { tibetan: "དྭགས་པོ་", phonetics: "dak po", translation: "Dhagpo" },
            {
              tibetan: "བཀའ་བརྒྱུད་ལ།",
              phonetics: "ka gyu la",
              translation: "Kagyupa",
            },
          ],
        },
        {
          id: "ch-th-8",
          type: "normal",
          tibetan: "།གསོལ་བ་འདེབས་སོ་བཀའ་བརྒྱུད་བླ་མ་རྣམས།",
          phonetics: "seul oua / dep so / ka gyu / la ma nam",
          translation:
            "je vous adresse ma prière, lamas [de la lignée] Kagyupa,",
          words: [
            {
              tibetan: "གསོལ་བ་",
              phonetics: "seul oua",
              translation: "ma prière",
            },
            {
              tibetan: "འདེབས་སོ་",
              phonetics: "dep so",
              translation: "j'adresse",
            },
            {
              tibetan: "བཀའ་བརྒྱུད་",
              phonetics: "ka gyu",
              translation: "Kagyupa",
            },
            {
              tibetan: "བླ་མ་རྣམས།",
              phonetics: "la ma nam",
              translation: "lamas",
            },
          ],
        },
        {
          id: "ch-th-9",
          type: "normal",
          tibetan: "།བརྒྱུད་པ་འཛིན་ནོ་རྣམ་ཐར་བྱིན་གྱིས་རློབས།",
          phonetics: "gyu pa / dzin no / nam tar / tchin kyi lop",
          translation:
            "Détenteurs de la lignée, accordez votre bénédiction par votre libération parfaite !",
          words: [
            {
              tibetan: "བརྒྱུད་པ་",
              phonetics: "gyu pa",
              translation: "de la lignée",
            },
            {
              tibetan: "འཛིན་ནོ་",
              phonetics: "dzin no",
              translation: "Détenteurs",
            },
            {
              tibetan: "རྣམ་ཐར་",
              phonetics: "nam tar",
              translation: "libération parfaite",
            },
            {
              tibetan: "བྱིན་གྱིས་རློབས།",
              phonetics: "tchin kyi lop",
              translation: "accordez votre bénédiction",
            },
          ],
        },
        {
          id: "ch-th-10",
          type: "normal",
          tibetan: "།ཞེན་ལོག་སྒོམ་གྱི་རྐང་པར་གསུངས་པ་བཞིན།",
          phonetics: "chen lok / gom kyi / kang par / soung pa / chin",
          translation:
            "Comme il est dit: le renversement de l'attachement constitue les jambes de la méditation;",
          words: [
            {
              tibetan: "ཞེན་",
              phonetics: "chen",
              translation: "attachement",
            },
            {
              tibetan: "ལོག་",
              phonetics: "lok",
              translation: "renversement",
            },
            {
              tibetan: "སྒོམ་གྱི་",
              phonetics: "gom kyi",
              translation: "de la méditation",
            },
            {
              tibetan: "རྐང་པར་",
              phonetics: "kang par",
              translation: "les jambes",
            },
            {
              tibetan: "གསུངས་པ་བཞིན།",
              phonetics: "soung pa chin",
              translation: "comme il est dit",
            },
          ],
        },
        {
          id: "ch-th-11",
          type: "normal",
          tibetan: "།ཟས་ནོར་ཀུན་ལ་ཆགས་ཞེན་མེད་པ་དང༌།",
          phonetics: "sé / nor / kun la / tchak chen / mé pa tang",
          translation:
            "N'ayant aucun attachement envers la nourriture et les biens de toute sorte,",
          words: [
            { tibetan: "ཟས་", phonetics: "sé", translation: "nourriture" },
            { tibetan: "ནོར་", phonetics: "nor", translation: "biens" },
            {
              tibetan: "ཀུན་ལ་",
              phonetics: "kun la",
              translation: "de toute sorte",
            },
            {
              tibetan: "ཆགས་ཞེན་",
              phonetics: "tchak chen",
              translation: "attachement",
            },
            {
              tibetan: "མེད་པ་དང༌།",
              phonetics: "mé pa tang",
              translation: "n'ayant aucun",
            },
          ],
        },
        {
          id: "ch-th-12",
          type: "normal",
          tibetan: "།ཚེ་འདིར་གདོས་ཐག་ཆོད་པའི་སྒོམ་ཆེན་ལ།",
          phonetics: "tsé / dir / deu / tak tcheu pé / gom tchen la",
          translation:
            "Au grand méditant qui tranche les amarres de cette vie,",
          words: [
            { tibetan: "ཚེ་", phonetics: "tsé", translation: "vie" },
            { tibetan: "འདིར་", phonetics: "dir", translation: "de cette" },
            { tibetan: "གདོས་", phonetics: "deu", translation: "les amarres" },
            {
              tibetan: "ཐག་ཆོད་པའི་",
              phonetics: "tak tcheu pé",
              translation: "qui tranche",
            },
            {
              tibetan: "སྒོམ་ཆེན་ལ།",
              phonetics: "gom tchen la",
              translation: "au grand méditant",
            },
          ],
        },
        {
          id: "ch-th-13",
          type: "normal",
          tibetan: "།རྙེད་བཀུར་ཞེན་པ་མེད་པར་བྱིན་གྱིས་རློབས།",
          phonetics: "nyé / kour / chen pa / mé par / tchin kyi lop",
          translation:
            "Accordez la bénédiction du détachement des gains et honneurs.",
          words: [
            { tibetan: "རྙེད་", phonetics: "nyé", translation: "gains" },
            { tibetan: "བཀུར་", phonetics: "kour", translation: "honneurs" },
            {
              tibetan: "ཞེན་པ་",
              phonetics: "chen pa",
              translation: "l'attachement",
            },
            { tibetan: "མེད་པར་", phonetics: "mé par", translation: "sans" },
            {
              tibetan: "བྱིན་གྱིས་རློབས།",
              phonetics: "tchin kyi lop",
              translation: "accordez la bénédiction",
            },
          ],
        },
        {
          id: "ch-th-14",
          type: "normal",
          tibetan: "།མོས་གུས་སྒོམ་གྱི་མགོ་བོར་གསུངས་པ་བཞིན།",
          phonetics: "meu gu / gom kyi / go ouor / soung pa / chin",
          translation:
            "Comme il est dit: la dévotion constitue la tête de la méditation;",
          words: [
            {
              tibetan: "མོས་གུས་",
              phonetics: "meu gu",
              translation: "la dévotion",
            },
            {
              tibetan: "སྒོམ་གྱི་",
              phonetics: "gom kyi",
              translation: "de la méditation",
            },
            {
              tibetan: "མགོ་བོར་",
              phonetics: "go ouor",
              translation: "la tête",
            },
            {
              tibetan: "གསུངས་པ་བཞིན།",
              phonetics: "soung pa chin",
              translation: "comme il est dit",
            },
          ],
        },
        {
          id: "ch-th-15",
          type: "normal",
          tibetan: "མན་ངག་གཏེར་སྒོ་འབྱེད་པའི་བླ་མ་ལ།",
          phonetics: "men ngak / ter / go / djé pé / la ma la",
          translation:
            "Le lama ouvre la porte du trésor des instructions essentielles,",
          words: [
            {
              tibetan: "མན་ངག་",
              phonetics: "men ngak",
              translation: "instructions essentielles",
            },
            { tibetan: "གཏེར་", phonetics: "ter", translation: "du trésor" },
            { tibetan: "སྒོ་", phonetics: "go", translation: "la porte" },
            {
              tibetan: "འབྱེད་པའི་",
              phonetics: "djé pé",
              translation: "ouvre",
            },
            {
              tibetan: "བླ་མ་ལ།",
              phonetics: "la ma la",
              translation: "Le lama",
            },
          ],
        },
        {
          id: "ch-th-16",
          type: "normal",
          tibetan: "།རྒྱུན་དུ་གསོལ་བ་འདེབས་པའི་སྒོམ་ཆེན་ལ།",
          phonetics: "gyun tou / seul oua / dep pé / gom tchen la",
          translation:
            "Au grand méditant qui lui adresse continuellement des prières,",
          words: [
            {
              tibetan: "རྒྱུན་དུ་",
              phonetics: "gyun tou",
              translation: "continuellement",
            },
            {
              tibetan: "གསོལ་བ་",
              phonetics: "seul oua",
              translation: "des prières",
            },
            {
              tibetan: "འདེབས་པའི་",
              phonetics: "dep pé",
              translation: "qui adresse",
            },
            {
              tibetan: "སྒོམ་ཆེན་ལ།",
              phonetics: "gom tchen la",
              translation: "au grand méditant",
            },
          ],
        },
        {
          id: "ch-th-17",
          type: "normal",
          tibetan: "།བཅོས་མིན་མོས་གུས་སྐྱེ་བར་བྱིན་གྱིས་རློབས།",
          phonetics: "tcheu min / meu gu / kyé ouar / tchin kyi lop",
          translation:
            "Accordez la bénédiction pour que naisse une dévotion sans artifices.",
          words: [
            {
              tibetan: "བཅོས་མིན་",
              phonetics: "tcheu min",
              translation: "sans artifices",
            },
            {
              tibetan: "མོས་གུས་",
              phonetics: "meu gu",
              translation: "dévotion",
            },
            {
              tibetan: "སྐྱེ་བར་",
              phonetics: "kyé ouar",
              translation: "pour que naisse",
            },
            {
              tibetan: "བྱིན་གྱིས་རློབས།",
              phonetics: "tchin kyi lop",
              translation: "accordez la bénédiction",
            },
          ],
        },
        {
          id: "ch-th-18",
          type: "normal",
          tibetan: "ཡེངས་མེད་སྒོམ་གྱི་དངོས་གཞིར་གསུངས་པ་བཞིན།",
          phonetics: "yeng mé / gom kyi / ngeu chir / soung pa / chin",
          translation:
            "Comme il est dit: la non-distraction constitue le corps de la méditation;",
          words: [
            {
              tibetan: "ཡེངས་མེད་",
              phonetics: "yeng mé",
              translation: "la non-distraction",
            },
            {
              tibetan: "སྒོམ་གྱི་",
              phonetics: "gom kyi",
              translation: "de la méditation",
            },
            {
              tibetan: "དངོས་གཞིར་",
              phonetics: "ngeu chir",
              translation: "le corps",
            },
            {
              tibetan: "གསུངས་པ་བཞིན།",
              phonetics: "soung pa chin",
              translation: "comme il est dit",
            },
          ],
        },
        {
          id: "ch-th-19",
          type: "normal",
          tibetan: "།གང་ཤར་རྟོགས་པའི་ངོ་བོ་སོ་མ་དེ།",
          phonetics: "kang char / tok pé / ngo ouo / so ma / té",
          translation:
            "Cela même — l'essence brute de la reconnaissance de tout ce qui surgit,",
          words: [
            {
              tibetan: "གང་ཤར་",
              phonetics: "kang char",
              translation: "tout ce qui surgit",
            },
            {
              tibetan: "རྟོགས་པའི་",
              phonetics: "tok pé",
              translation: "de la reconnaissance",
            },
            {
              tibetan: "ངོ་བོ་",
              phonetics: "ngo ouo",
              translation: "l'essence",
            },
            {
              tibetan: "སོ་མ་",
              phonetics: "so ma",
              translation: "brute",
            },
            { tibetan: "དེ།", phonetics: "té", translation: "Cela même" },
          ],
        },
        {
          id: "ch-th-20",
          type: "normal",
          tibetan: "།མ་བཅོས་དེ་ཀར་འཇོག་པའི་སྒོམ་ཆེན་ལ།",
          phonetics: "ma tcheu / té kar / djok pé / gom tchen la",
          translation: "Au grand méditant qui y repose sans rien modifier,",
          words: [
            {
              tibetan: "མ་བཅོས་",
              phonetics: "ma tcheu",
              translation: "sans rien modifier",
            },
            {
              tibetan: "དེ་ཀར་",
              phonetics: "té kar",
              translation: "en cela-même",
            },
            {
              tibetan: "འཇོག་པའི་",
              phonetics: "djok pé",
              translation: "qui repose",
            },
            {
              tibetan: "སྒོམ་ཆེན་ལ།",
              phonetics: "gom tchen la",
              translation: "au grand méditant",
            },
          ],
        },
        {
          id: "ch-th-21",
          type: "normal",
          tibetan: "སྒོམ་བྱ་བློ་དང་བྲལ་བར་བྱིན་གྱིས་རློབས།",
          phonetics: "gom tcha / lo / tang / trel ouar / tchin kyi lop",
          translation:
            "Accordez la bénédiction pour que la méditation soit libre d'élaborations.",
          words: [
            {
              tibetan: "སྒོམ་བྱ་",
              phonetics: "gom tcha",
              translation: "la méditation",
            },
            {
              tibetan: "བློ་དང་",
              phonetics: "lo tang",
              translation: "d'élaborations",
            },
            {
              tibetan: "བྲལ་བར་",
              phonetics: "trel ouar",
              translation: "libre",
            },
            {
              tibetan: "བྱིན་གྱིས་རློབས།",
              phonetics: "tchin kyi lop",
              translation: "accordez la bénédiction",
            },
          ],
        },
        {
          id: "ch-th-22",
          type: "normal",
          tibetan: "།རྣམ་རྟོག་ངོ་བོ་ཆོས་སྐུར་གསུངས་པ་བཞིན།",
          phonetics: "nam tok / ngo ouo / tcheu kour / soung pa chin",
          translation:
            "Comme il est dit: l'essence des pensées est le Dharmakaya",
          words: [
            {
              tibetan: "རྣམ་རྟོག་",
              phonetics: "nam tok",
              translation: "des pensées",
            },
            {
              tibetan: "ངོ་བོ་",
              phonetics: "ngo ouo",
              translation: "l'essence",
            },
            {
              tibetan: "ཆོས་སྐུར་",
              phonetics: "tcheu kour",
              translation: "le Dharmakaya",
            },
            {
              tibetan: "གསུངས་པ་བཞིན།",
              phonetics: "soung pa chin",
              translation: "comme il est dit",
            },
          ],
        },
        {
          id: "ch-th-23",
          type: "normal",
          tibetan: "།ཅི་ཡང་མ་ཡིན་ཅིར་ཡང་འཆར་བ་ལ།",
          phonetics: "tchi yang / ma yin / tchir yang / tchar oua la",
          translation: "Ce qui n'est rien et pourtant apparaît comme tout,",
          words: [
            { tibetan: "ཅི་ཡང་", phonetics: "tchi yang", translation: "rien" },
            {
              tibetan: "མ་ཡིན་",
              phonetics: "ma yin",
              translation: "qui n'est",
            },
            {
              tibetan: "ཅིར་ཡང་",
              phonetics: "tchir yang",
              translation: "comme tout",
            },
            {
              tibetan: "འཆར་བ་ལ།",
              phonetics: "tchar oua la",
              translation: "pourtant apparaît",
            },
          ],
        },
        {
          id: "ch-th-24",
          type: "normal",
          tibetan: "།མ་འགགས་རོལ་པར་འཆར་བའི་སྒོམ་ཆེན་ལ།",
          phonetics: "ma ga / reul par / tchar oué / gom tchen la",
          translation:
            "Au grand méditant en qui [tout] se manifeste librement, sans entrave,",
          words: [
            {
              tibetan: "མ་འགགས་",
              phonetics: "ma ga",
              translation: "sans entrave",
            },
            {
              tibetan: "རོལ་པར་",
              phonetics: "reul par",
              translation: "librement",
            },
            {
              tibetan: "འཆར་བའི་",
              phonetics: "tchar oué",
              translation: "se manifeste",
            },
            {
              tibetan: "སྒོམ་ཆེན་ལ།",
              phonetics: "gom tchen la",
              translation: "au grand méditant",
            },
          ],
        },
        {
          id: "ch-th-25",
          type: "normal",
          tibetan: "།འཁོར་འདས་དབྱེར་མེད་རྟོགས་པར་བྱིན་གྱིས་རློབས།།",
          phonetics: "kor / dé / yer mé / tok par / tchin kyi lop",
          translation:
            "Accordez la bénédiction de la réalisation de l'inséparabilité du saṃsāra et du nirvāṇa !",
          words: [
            { tibetan: "འཁོར་", phonetics: "kor", translation: "saṃsāra" },
            { tibetan: "འདས་", phonetics: "dé", translation: "nirvāṇa" },
            {
              tibetan: "དབྱེར་མེད་",
              phonetics: "yer mé",
              translation: "inséparabilité",
            },
            {
              tibetan: "རྟོགས་པར་",
              phonetics: "tok par",
              translation: "la réalisation",
            },
            {
              tibetan: "བྱིན་གྱིས་རློབས།།",
              phonetics: "tchin kyi lop",
              translation: "accordez la bénédiction",
            },
          ],
        },
        {
          id: "ch-th-26",
          type: "normal",
          tibetan: "།སྐྱེ་བ་ཀུན་ཏུ་ཡང་དག་བླ་མ་དང་།།",
          phonetics: "kye wa / kun tu / yang dag / la ma dang",
          translation: "A travers toutes mes naissances, avec un lama parfait,",
          words: [
            {
              tibetan: "སྐྱེ་བ་",
              phonetics: "kye wa",
              translation: "naissances",
            },
            { tibetan: "ཀུན་ཏུ་", phonetics: "kun tu", translation: "toutes" },
            {
              tibetan: "ཡང་དག་",
              phonetics: "yang dag",
              translation: "parfait",
            },
            {
              tibetan: "བླ་མ་དང་",
              phonetics: "la ma dang",
              translation: "le lama",
            },
          ],
        },
        {
          id: "ch-th-27",
          type: "normal",
          tibetan: "།འབྲལ་མེད་ཆོས་ཀྱི་དཔལ་ལ་ལོངས་སྤྱོད་ཅིང་།།",
          phonetics: "drel mé / tcheu kyi / pal la / long tcheu / ching",
          translation:
            "Puissions-nous être inséparables, et jouir de la gloire du Dharma.",
          words: [
            {
              tibetan: "འབྲལ་མེད་",
              phonetics: "drel mé",
              translation: "inséparables",
            },
            {
              tibetan: "ཆོས་ཀྱི་",
              phonetics: "tcheu kyi",
              translation: "du Dharma",
            },
            { tibetan: "དཔལ་ལ་", phonetics: "pal la", translation: "gloire" },
            {
              tibetan: "ལོངས་སྤྱོད་",
              phonetics: "long tcheu",
              translation: "jouir",
            },
            { tibetan: "ཅིང་", phonetics: "ching", translation: "et" },
          ],
        },
        {
          id: "ch-th-28",
          type: "normal",
          tibetan: "།ས་དང་ལམ་གྱི་ཡོན་ཏན་རབ་རྫོགས་ནས།།",
          phonetics: "sa dang / lam gyi / teun ten / rab / dzog / né",
          translation:
            "Ayant parachevé pleinement les qualités des terres et des chemins,",
          words: [
            {
              tibetan: "ས་དང་",
              phonetics: "sa dang",
              translation: "terres et",
            },
            {
              tibetan: "ལམ་གྱི་",
              phonetics: "lam gyi",
              translation: "des chemins",
            },
            {
              tibetan: "ཡོན་ཏན་",
              phonetics: "teun ten",
              translation: "qualités",
            },
            { tibetan: "རབ་", phonetics: "rab", translation: "pleinement" },
            { tibetan: "རྫོགས་", phonetics: "dzog", translation: "parachevé" },
            { tibetan: "ནས་", phonetics: "né", translation: "Ayant" },
          ],
        },
        {
          id: "ch-th-29",
          type: "normal",
          tibetan: "།རྡོ་རྗེ་འཆང་གི་གོ་འཕང་མྱུར་ཐོབ་ཤོག།",
          phonetics: "dordjé chang gi / go pang / nyour / thob / sho",
          translation:
            "et atteindre rapidement l'état de Dordjé Chang, puissions-nous !",
          words: [
            {
              tibetan: "རྡོ་རྗེ་འཆང་གི་",
              phonetics: "dordjé chang gi",
              translation: "Dordjé Chang",
            },
            { tibetan: "གོ་འཕང་", phonetics: "go pang", translation: "l'état" },
            { tibetan: "མྱུར་", phonetics: "nyour", translation: "rapidement" },
            { tibetan: "ཐོབ་", phonetics: "thob", translation: "atteindre" },
            {
              tibetan: "ཤོག།",
              phonetics: "sho",
              translation: "puissions-nous",
            },
          ],
        },
      ],
    },
    {
      id: "ch-corps",
      title: "",
      phrases: [
        {
          id: "ch-corps-titre",
          type: "instructions",
          tibetan:
            "།ཐུགས་རྗེ་ཆེན་པོའི་བསྒོམ་བཟླས་འགྲོ་དོན་མཁའ་ཁྱབ་མ་བཞུགས་སོ།།",
          phonetics: "",
          translation:
            "<b>Embrasser tout l'espace pour le bien des êtres</b>,<br/>la méditation-récitation du Grand Compatissant",
          words: [],
        },
      ],
    },
    {
      id: "ch-corps-intro",
      title: "",
      phrases: [
        {
          id: "ch-corps-instr",
          type: "instructions",
          tibetan: "༄༅། །སྤྱན་རས་གཟིགས་བསྒོམ་བཟླས་ནི།",
          phonetics: "",
          translation: "La récitation et la méditation de Chenrézik;",
          words: [],
        },
      ],
    },
    {
      id: "ch-refuge",
      title: "Refuge et Esprit d'éveil (x3)",
      audioTimestamp: 268,
      phrases: [
        {
          id: "ch-ref-1",
          type: "normal",
          tibetan: "སངས་རྒྱས་ཆོས་དང་ཚོགས་ཀྱི་མཆོག་རྣམས་ལ།",
          phonetics: "sang gyé tcheu tang tso kyi tcho nam la",
          translation:
            "Dans le Bouddha, le Dharma et l'assemblée des suprêmes (Sangha),",
          words: [
            {
              tibetan: "སངས་རྒྱས",
              phonetics: "sang gyé",
              translation: "Bouddha",
            },
            {
              tibetan: "ཆོས་དང",
              phonetics: "tcheu tang",
              translation: "Dharma et",
            },
            {
              tibetan: "ཚོགས་ཀྱི",
              phonetics: "tso kyi",
              translation: "de l'assemblée",
            },
            {
              tibetan: "མཆོག་རྣམས་ལ",
              phonetics: "tcho nam la",
              translation: "des suprêmes",
            },
          ],
        },
        {
          id: "ch-ref-2",
          type: "normal",
          tibetan: "བྱང་ཆུབ་བར་དུ་བདག་ནི་སྐྱབས་སུ་མཆི།",
          phonetics: "djang tchoub par tou da ni kyap sou tchi",
          translation: "Je prends refuge jusqu'à l'éveil.",
          words: [
            {
              tibetan: "བྱང་ཆུབ",
              phonetics: "djang tchoub",
              translation: "éveil",
            },
            { tibetan: "བར་དུ", phonetics: "par tou", translation: "jusqu'à" },
            { tibetan: "བདག་ནི", phonetics: "da ni", translation: "je" },
            {
              tibetan: "སྐྱབས་སུ་མཆི",
              phonetics: "kyap sou tchi",
              translation: "prends refuge",
            },
          ],
        },
        {
          id: "ch-ref-3",
          type: "normal",
          tibetan: "བདག་གིས་བསྒོམ་བཟླས་བགྱིས་པའི་བསོད་ནམས་ཀྱིས།",
          phonetics: "da gui gomdé gyipeï seunam kyi",
          translation:
            "Par le mérite qui résulte de ma pratique de la méditation-récitation,",
          words: [
            { tibetan: "བདག་གིས", phonetics: "da gui", translation: "par moi" },
            {
              tibetan: "བསྒོམ་བཟླས་",
              phonetics: "gomdé",
              translation: "méditation-récitation",
            },
            {
              tibetan: "བགྱིས་པའི",
              phonetics: "gyi peï",
              translation: "résultant de la pratique",
            },
            {
              tibetan: "བསོད་ནམས་ཀྱིས",
              phonetics: "seu nam kyi",
              translation: "par le mérite",
            },
          ],
        },
        {
          id: "ch-ref-4",
          type: "normal",
          tibetan: "འགྲོ་ལ་ཕན་ཕྱིར་སངས་རྒྱས་འགྲུབ་པར་ཤོག",
          phonetics: "dro la pèn tchir sangyé droup par sho",
          translation:
            "Puisse l'éveil être réalisé pour le bien de tous les êtres.",
          words: [
            {
              tibetan: "འགྲོ་ལ",
              phonetics: "dro la",
              translation: "pour les êtres",
            },
            {
              tibetan: "ཕན་ཕྱིར",
              phonetics: "pèn tchir",
              translation: "afin de bénéficier",
            },
            { tibetan: "སངས་རྒྱས", phonetics: "sangyé", translation: "éveil" },
            {
              tibetan: "འགྲུབ་པར་ཤོག",
              phonetics: "droup par sho",
              translation: "puisse être réalisé",
            },
          ],
        },
      ],
    },
    {
      id: "ch-visualisation",
      title: "Visualisation",
      phrases: [
        {
          id: "ch-vis-instr",
          type: "instructions",
          tibetan: "༄༅། །ལྷ་བསྐྱེད་ནི།",
          phonetics: "",
          translation: "Création de la divinité:",
          words: [],
        },
        {
          id: "ch-vis-1",
          type: "normal",
          tibetan: "བདག་སོགས་མཁའ་ཁྱབ་སེམས་ཅན་གྱི།",
          phonetics: "dak so / ka kyap / sem tchen gyi",
          translation: "De moi et de tous les êtres de l'univers,",
          words: [
            {
              tibetan: "བདག་སོགས་",
              phonetics: "dak so",
              translation: "De moi",
            },
            {
              tibetan: "མཁའ་ཁྱབ་",
              phonetics: "ka kyap",
              translation: "de l'univers",
            },
            {
              tibetan: "སེམས་ཅན་གྱི།",
              phonetics: "sem tchen gyi",
              translation: "de tous les êtres",
            },
          ],
        },
        {
          id: "ch-vis-2",
          type: "normal",
          tibetan: "།སྤྱི་གཙུག་པད་དཀར་ཟླ་བའི་སྟེང་།",
          phonetics: "tchi tsouk / pé kar / da oué teng",
          translation:
            "Au-dessus de nos têtes, sur un lotus blanc et une lune,",
          words: [
            {
              tibetan: "སྤྱི་གཙུག་",
              phonetics: "tchi tsouk",
              translation: "Au-dessus de nos têtes",
            },
            {
              tibetan: "པད་དཀར་",
              phonetics: "pé kar",
              translation: "lotus blanc",
            },
            {
              tibetan: "ཟླ་བའི་སྟེང་།",
              phonetics: "da oué teng",
              translation: "sur une lune",
            },
          ],
        },
        {
          id: "ch-vis-3",
          type: "normal",
          tibetan: "།ཧྲཱིཿལས་འཕགས་མཆོག་སྤྱན་རས་གཟིགས།",
          phonetics: "hri lé / p'ak tchok / tchenrézik",
          translation:
            "apparaissant de la syllabe HRI, se tient le noble et sublime Chenrézik.",
          words: [
            {
              tibetan: "ཧྲཱིཿལས་",
              phonetics: "hri lé",
              translation: "de la syllabe HRI",
            },
            {
              tibetan: "འཕགས་མཆོག་",
              phonetics: "p'ak tchok",
              translation: "noble et sublime",
            },
            {
              tibetan: "སྤྱན་རས་གཟིགས།",
              phonetics: "tchenrézik",
              translation: "Chenrézik",
            },
          ],
        },
        {
          id: "ch-vis-4",
          type: "normal",
          tibetan: "།དཀར་གསལ་འོད་ཟེར་ལྔ་ལྡན་འཕྲོ།",
          phonetics: "kar sel / eu zer / gna den tro",
          translation:
            "Blanc et lumineux, il irradie des rayonnements de lumière des cinq couleurs.",
          words: [
            {
              tibetan: "དཀར་གསལ་",
              phonetics: "kar sel",
              translation: "Blanc et lumineux",
            },
            {
              tibetan: "འོད་ཟེར་",
              phonetics: "eu zer",
              translation: "rayonnements de lumière",
            },
            {
              tibetan: "ལྔ་ལྡན་འཕྲོ།",
              phonetics: "gna den tro",
              translation: "des cinq couleurs",
            },
          ],
        },
        {
          id: "ch-vis-5",
          type: "normal",
          tibetan: "།མཛེས་འཛུམ་ཐུགས་རྗེའི་སྤྱན་གྱིས་གཟིགས།",
          phonetics: "dzé / dzoum / toukdjé / tchen gyi zik",
          translation:
            "Beau et souriant, il veille [sur les êtres] avec les yeux de la compassion.",
          words: [
            {
              tibetan: "མཛེས་",
              phonetics: "dzé",
              translation: "Beau",
            },
            {
              tibetan: "འཛུམ་",
              phonetics: "dzoum",
              translation: "Souriant",
            },
            {
              tibetan: "ཐུགས་རྗེའི་",
              phonetics: "toukdjé",
              translation: "de la compassion",
            },
            {
              tibetan: "སྤྱན་གྱིས་གཟིགས།",
              phonetics: "tchen gyi zik",
              translation: "il veille avec les yeux",
            },
          ],
        },
        {
          id: "ch-vis-6",
          type: "normal",
          tibetan: "།ཕྱག་བཞིའི་དང་པོ་ཐལ་སྦྱར་མཛད།",
          phonetics: "tcha chi / tang po / t'el djar dzé",
          translation:
            "Il a quatre bras; les deux premières mains sont jointes,",
          words: [
            {
              tibetan: "ཕྱག་བཞིའི་",
              phonetics: "tcha chi",
              translation: "quatre bras",
            },
            {
              tibetan: "དང་པོ་",
              phonetics: "tang po",
              translation: "les premières",
            },
            {
              tibetan: "ཐལ་སྦྱར་མཛད།",
              phonetics: "t'el djar dzé",
              translation: "mains jointes",
            },
          ],
        },
        {
          id: "ch-vis-7",
          type: "normal",
          tibetan: "།འོག་གཉིས་ཤེལ་ཕྲེང་པད་དཀར་བསྣམས།",
          phonetics: "ok nyi / chel treng / pé kar nam",
          translation:
            "les suivantes tiennent un mala de cristal et un lotus blanc.",
          words: [
            {
              tibetan: "འོག་གཉིས་",
              phonetics: "ok nyi",
              translation: "les suivantes",
            },
            {
              tibetan: "ཤེལ་ཕྲེང་",
              phonetics: "chel treng",
              translation: "mala de cristal",
            },
            {
              tibetan: "པད་དཀར་བསྣམས།",
              phonetics: "pé kar nam",
              translation: "lotus blanc",
            },
          ],
        },
        {
          id: "ch-vis-8",
          type: "normal",
          tibetan: "དར་དང་རིན་ཆེན་རྒྱན་གྱིས་སྤྲས།",
          phonetics: "tar tang / rinchen / gyen gyi tré",
          translation: "Il est paré de soieries et d'ornements précieux.",
          words: [
            {
              tibetan: "དར་དང་",
              phonetics: "tar tang",
              translation: "soieries",
            },
            {
              tibetan: "རིན་ཆེན་",
              phonetics: "rinchen",
              translation: "précieux",
            },
            {
              tibetan: "རྒྱན་གྱིས་སྤྲས།",
              phonetics: "gyen gyi tré",
              translation: "paré d'ornements",
            },
          ],
        },
        {
          id: "ch-vis-9",
          type: "normal",
          tibetan: "།རི་དྭགས་ལྤགས་པའི་སྟོད་གཡོགས་གསོལ།",
          phonetics: "ritak / pak pé / teu yok seul",
          translation: "Sur le haut de son corps, il porte une peau de biche.",
          words: [
            { tibetan: "རི་དྭགས་", phonetics: "ritak", translation: "biche" },
            {
              tibetan: "ལྤགས་པའི་",
              phonetics: "pak pé",
              translation: "peau de",
            },
            {
              tibetan: "སྟོད་",
              phonetics: "teu",
              translation: "haut du corps",
            },
            {
              tibetan: "གཡོགས་གསོལ།",
              phonetics: "yok seul",
              translation: "revêtu",
            },
          ],
        },
        {
          id: "ch-vis-10",
          type: "normal",
          tibetan: "།འོད་དཔག་མེད་པའི་དབུ་རྒྱན་ཅན།",
          phonetics: "eu pak / mé pé / ou gyen tchen",
          translation: "Il est couronné d'Amitabha.",
          words: [
            {
              tibetan: "འོད་དཔག་",
              phonetics: "eu pak",
              translation: "lumière",
            },
            { tibetan: "མེད་པའི་", phonetics: "mé pé", translation: "infinie" },
            {
              tibetan: "དབུ་རྒྱན་ཅན།",
              phonetics: "ou gyen tchen",
              translation: "couronné",
            },
          ],
        },
        {
          id: "ch-vis-11",
          type: "normal",
          tibetan: "ཞབས་གཉིས་རྡོ་རྗེའི་སྐྱིལ་ཀྲུང་བཞུགས།",
          phonetics: "chap nyi / dordjé / kyil troung chouk",
          translation: "Il est assis, les jambes dans la posture du vajra,",
          words: [
            {
              tibetan: "ཞབས་གཉིས་",
              phonetics: "chap nyi",
              translation: "deux jambes",
            },
            {
              tibetan: "རྡོ་རྗེའི་",
              phonetics: "dordjé",
              translation: "vajra",
            },
            {
              tibetan: "སྐྱིལ་ཀྲུང་",
              phonetics: "kyil troung",
              translation: "posture jambes croisées",
            },
            {
              tibetan: "་བཞུགས།",
              phonetics: "chouk",
              translation: "assis",
            },
          ],
        },
        {
          id: "ch-vis-12",
          type: "normal",
          tibetan: "།དྲི་མེད་ཟླ་བར་རྒྱབ་བརྟེན་པ།",
          phonetics: "dri mé / da ouar / gyap ten pa",
          translation: "avec derrière lui une lune immaculée.",
          words: [
            {
              tibetan: "དྲི་མེད་",
              phonetics: "dri mé",
              translation: "immaculée",
            },
            { tibetan: "ཟླ་བར་", phonetics: "da ouar", translation: "lune" },
            {
              tibetan: "རྒྱབ་བརྟེན་པ།",
              phonetics: "gyap ten pa",
              translation: "derrière lui",
            },
          ],
        },
        {
          id: "ch-vis-13",
          type: "normal",
          tibetan: "སྐྱབས་གནས་ཀུན་འདུས་ངོ་བོར་གྱུར།",
          phonetics: "kyap né / kun du / gno ouor gyour",
          translation: "Il est l'essence de tous les lieux de refuge.",
          words: [
            {
              tibetan: "སྐྱབས་གནས་",
              phonetics: "kyap né",
              translation: "lieux de refuge",
            },
            {
              tibetan: "ཀུན་འདུས་",
              phonetics: "kun du",
              translation: "de tous",
            },
            {
              tibetan: "ངོ་བོར་གྱུར།",
              phonetics: "gno ouor gyour",
              translation: "Il est l'essence",
            },
          ],
        },
      ],
    },
    {
      id: "ch-supplique",
      title: "Supplique",
      phrases: [
        {
          id: "ch-sup-instr-1",
          type: "instructions",
          tibetan:
            "༄༅། །བདག་དང་སེམས་ཅན་ཐམས་ཅད་ཀྱིས་མགྲིན་གཅིག་ཏུ་གསོལ་བ་འདེབས་པར་བསམས་ལ།",
          phonetics: "",
          translation:
            "En imaginant que vous-même et tous les êtres priez d'une seule voix:",
          words: [],
        },
        {
          id: "ch-sup-1",
          type: "normal",
          tibetan: "ཇོ་བོ་སྐྱོན་གྱིས་མ་གོས་སྐུ་མདོག་དཀར།",
          phonetics: "djo ouo / kyeun gyi / ma keu / kou dok kar",
          translation:
            "Seigneur, votre corps blanc n'est souillé par aucun défaut.",
          words: [
            {
              tibetan: "ཇོ་བོ་",
              phonetics: "djo ouo",
              translation: "Seigneur",
            },
            {
              tibetan: "སྐྱོན་གྱིས་",
              phonetics: "kyeun gyi",
              translation: "par aucun défaut",
            },
            {
              tibetan: "མ་གོས་",
              phonetics: "ma keu",
              translation: "n'est souillé",
            },
            {
              tibetan: "སྐུ་མདོག་དཀར།",
              phonetics: "kou dok kar",
              translation: "votre corps blanc",
            },
          ],
        },
        {
          id: "ch-sup-2",
          type: "normal",
          tibetan: "།རྫོགས་སངས་རྒྱས་ཀྱིས་དབུ་ལ་བརྒྱན།",
          phonetics: "dzok sangyé kyi / ou la gyen",
          translation: "Le Parfait Bouddha est votre diadème.",
          words: [
            {
              tibetan: "རྫོགས་སངས་རྒྱས་ཀྱིས་",
              phonetics: "dzok sangyé kyi",
              translation: "Le Parfait Bouddha",
            },
            {
              tibetan: "དབུ་ལ་བརྒྱན།",
              phonetics: "ou la gyen",
              translation: "est votre diadème",
            },
          ],
        },
        {
          id: "ch-sup-3",
          type: "normal",
          tibetan: "།ཐུགས་རྗེའི་སྤྱན་གྱིས་འགྲོ་ལ་གཟིགས།",
          phonetics: "t'oukdjé / tchen gyi / dro la zik",
          translation:
            "Vous veillez sur les êtres avec les yeux de la compassion.",
          words: [
            {
              tibetan: "ཐུགས་རྗེའི་",
              phonetics: "t'oukdjé",
              translation: "de la compassion",
            },
            {
              tibetan: "སྤྱན་གྱིས་",
              phonetics: "tchen gyi",
              translation: "avec les yeux",
            },
            {
              tibetan: "འགྲོ་ལ་གཟིགས།",
              phonetics: "dro la zik",
              translation: "Vous veillez sur les êtres",
            },
          ],
        },
        {
          id: "ch-sup-4",
          type: "normal",
          tibetan: "།སྤྱན་རས་གཟིགས་ལ་ཕྱག་འཚལ་ལོ།",
          phonetics: "tchenrézik la / tchak tsel lo",
          translation: "Nous nous prosternons devant vous, Chenrézik,",
          words: [
            {
              tibetan: "སྤྱན་རས་གཟིགས་ལ་",
              phonetics: "tchenrézik la",
              translation: "devant vous, Chenrézik",
            },
            {
              tibetan: "ཕྱག་འཚལ་ལོ།",
              phonetics: "tchak tsel lo",
              translation: "Nous nous prosternons",
            },
          ],
        },
        {
          id: "ch-sup-img",
          type: "image",
          tibetan: "",
          phonetics: "",
          translation: "",
          words: [],
          src: "/Chenrezik.jpg",
        },
        {
          id: "ch-sup-instr-2",
          type: "instructions",
          tibetan: "ཞེས་ཅི་ནུས་བསགས། ཡན་ལག་བདུན་གྱི་གསོལ་འདེབས་ནི།",
          phonetics: "",
          translation:
            "Accumulez autant que vous le pouvez cette récitation, puis passez à la prière à sept branches:",
          words: [],
        },
      ],
    },
    {
      id: "ch-7-branches",
      title: "Prière à 7 branches",
      phrases: [
        {
          id: "ch-7b-1",
          type: "normal",
          tibetan: "འཕགས་པ་སྤྱན་རས་གཟིགས་དབང་དང་།།",
          phonetics: "pakpa / chenrézik / wang / tang",
          translation: "[Devant] le puissant Arya Chenrézik et,",
          words: [
            { tibetan: "འཕགས་པ་", phonetics: "pakpa", translation: "Arya" },
            {
              tibetan: "སྤྱན་རས་གཟིགས་",
              phonetics: "chenrézik",
              translation: "Chenrézik",
            },
            { tibetan: "དབང་", phonetics: "wang", translation: "puissant" },
            { tibetan: "དང་།།", phonetics: "tang", translation: "et" },
          ],
        },
        {
          id: "ch-7b-2",
          type: "normal",
          tibetan: "ཕྱོགས་བཅུ་དུས་གསུམ་བཞུགས་པ་ཡི།།",
          phonetics: "chok / chou / dusoum / zhoukpa yi",
          translation:
            "Demeurant dans les trois temps et dans les dix directions",
          words: [
            { tibetan: "ཕྱོགས་", phonetics: "chok", translation: "directions" },
            { tibetan: "བཅུ་", phonetics: "chou", translation: "dix" },
            {
              tibetan: "དུས་གསུམ་",
              phonetics: "dusoum",
              translation: "trois temps",
            },
            {
              tibetan: "བཞུགས་པ་ཡི།།",
              phonetics: "zhoukpa yi",
              translation: "Demeurant",
            },
          ],
        },
        {
          id: "ch-7b-3",
          type: "normal",
          tibetan: "རྒྱལ་བ་སྲས་བཅས་ཐམས་ཅད་ལ།།",
          phonetics: "gyalwa / séché / tamché la",
          translation: "Tous les Vainqueurs et leurs fils,",
          words: [
            {
              tibetan: "རྒྱལ་བ་",
              phonetics: "gyalwa",
              translation: "Vainqueurs",
            },
            {
              tibetan: "སྲས་བཅས་",
              phonetics: "séché",
              translation: "et leurs fils",
            },
            {
              tibetan: "ཐམས་ཅད་ལ།།",
              phonetics: "tamché la",
              translation: "Tous",
            },
          ],
        },
        {
          id: "ch-7b-4",
          type: "normal",
          tibetan: "ཀུན་ནས་དང་བས་ཕྱག་འཚལ་ལོ།།",
          phonetics: "kun né / dangwé / tchak tsello",
          translation: "Devant tous, avec confiance inspirée, je me prosterne,",
          words: [
            {
              tibetan: "ཀུན་ནས་",
              phonetics: "kun né",
              translation: "Devant tous",
            },
            {
              tibetan: "དང་བས་",
              phonetics: "dangwé",
              translation: "avec confiance inspirée",
            },
            {
              tibetan: "ཕྱག་འཚལ་ལོ།།",
              phonetics: "tchak tsello",
              translation: "je me prosterne",
            },
          ],
        },
        {
          id: "ch-7b-5",
          type: "normal",
          tibetan: "མེ་ཏོག་བདུག་སྤོས་མར་མེ་དྲི།།",
          phonetics: "métok / doupeu / marmé / dri",
          translation: "Fleurs, encens, lumières, parfums,",
          words: [
            { tibetan: "མེ་ཏོག་", phonetics: "métok", translation: "Fleurs" },
            {
              tibetan: "བདུག་སྤོས་",
              phonetics: "doupeu",
              translation: "encens",
            },
            { tibetan: "མར་མེ་", phonetics: "marmé", translation: "lumières" },
            { tibetan: "དྲི།།", phonetics: "dri", translation: "parfums" },
          ],
        },
        {
          id: "ch-7b-6",
          type: "normal",
          tibetan: "ཞལ་ཟས་རོལ་མོ་ལ་སོགས་པ།།",
          phonetics: "shalzé / reulmo / la sok pa",
          translation: "Nourritures, musiques et autres,",
          words: [
            {
              tibetan: "ཞལ་ཟས་",
              phonetics: "shalzé",
              translation: "Nourritures",
            },
            {
              tibetan: "རོལ་མོ་",
              phonetics: "reulmo",
              translation: "musiques",
            },
            {
              tibetan: "ལ་སོགས་པ།།",
              phonetics: "la sok pa",
              translation: "et autres",
            },
          ],
        },
        {
          id: "ch-7b-7",
          type: "normal",
          tibetan: "དངོས་འབྱོར་ཡིད་ཀྱིས་སྤྲུལ་ནས་འབུལ།།",
          phonetics: "ngeu djor / yikyi / trul né / bul",
          translation:
            "Ces offrandes matérielles, émanées de l'esprit, vous sont offertes.",
          words: [
            {
              tibetan: "དངོས་འབྱོར་",
              phonetics: "ngeu djor",
              translation: "offrandes matérielles",
            },
            {
              tibetan: "ཡིད་ཀྱིས་",
              phonetics: "yikyi",
              translation: "de l'esprit",
            },
            {
              tibetan: "སྤྲུལ་ནས་",
              phonetics: "trul né",
              translation: "émanées",
            },
            { tibetan: "འབུལ།།", phonetics: "bul", translation: "offertes" },
          ],
        },
        {
          id: "ch-7b-8",
          type: "normal",
          tibetan: "འཕགས་པའི་ཚོགས་ཀྱིས་བཞེས་སུ་གསོལ།།",
          phonetics: "pakpé / tsok kyi / shé sou seul",
          translation: "Noble assemblée, veuillez les accepter.",
          words: [
            { tibetan: "འཕགས་པའི་", phonetics: "pakpé", translation: "Noble" },
            {
              tibetan: "ཚོགས་ཀྱིས་",
              phonetics: "tsok kyi",
              translation: "assemblée",
            },
            {
              tibetan: "བཞེས་སུ་གསོལ།།",
              phonetics: "shé sou seul",
              translation: "veuillez les accepter",
            },
          ],
        },
        {
          id: "ch-7b-9",
          type: "normal",
          tibetan: "ཐོག་མ་མེད་ནས་ད་ལྟའི་བར།།",
          phonetics: "tokma / méné / taté par",
          translation:
            "Depuis des temps sans commencement jusqu'à aujourd'hui,",
          words: [
            {
              tibetan: "ཐོག་མ་",
              phonetics: "tokma",
              translation: "commencement",
            },
            { tibetan: "མེད་ནས་", phonetics: "méné", translation: "sans" },
            {
              tibetan: "ད་ལྟའི་བར།།",
              phonetics: "taté par",
              translation: "jusqu'à aujourd'hui",
            },
          ],
        },
        {
          id: "ch-7b-10",
          type: "normal",
          tibetan: "མི་དགེ་བཅུ་དང་མཚམས་མེད་ལྔ་།།",
          phonetics: "migué / chou / tang / tsammé / nga",
          translation:
            "Les dix actes non-vertueux et les cinq actes incommensurables,",
          words: [
            {
              tibetan: "མི་དགེ་",
              phonetics: "migué",
              translation: "non-vertueux",
            },
            { tibetan: "བཅུ་", phonetics: "chou", translation: "dix" },
            { tibetan: "དང་", phonetics: "tang", translation: "et" },
            {
              tibetan: "མཚམས་མེད་",
              phonetics: "tsammé",
              translation: "incommensurables",
            },
            { tibetan: "ལྔ་།།", phonetics: "nga", translation: "cinq" },
          ],
        },
        {
          id: "ch-7b-11",
          type: "normal",
          tibetan: "སེམས་ནི་ཉོན་མོངས་དབང་གྱུར་པའ།།",
          phonetics: "semni / nyönmong / wang gyour pé",
          translation: "L'esprit dominé par les afflictions,",
          words: [
            {
              tibetan: "སེམས་ནི་",
              phonetics: "semni",
              translation: "L'esprit",
            },
            {
              tibetan: "ཉོན་མོངས་",
              phonetics: "nyönmong",
              translation: "afflictions",
            },
            {
              tibetan: "དབང་གྱུར་པའ།།",
              phonetics: "wang gyour pé",
              translation: "dominé par",
            },
          ],
        },
        {
          id: "ch-7b-12",
          type: "normal",
          tibetan: "སྡིག་པ་ཐམས་ཅད་བཤགས་པར་བགྱི།།",
          phonetics: "dikpa / tamché / shakpar gyi",
          translation: "Je reconnais toutes les fautes commises.",
          words: [
            { tibetan: "སྡིག་པ་", phonetics: "dikpa", translation: "fautes" },
            { tibetan: "ཐམས་ཅད་", phonetics: "tamché", translation: "toutes" },
            {
              tibetan: "བཤགས་པར་བགྱི།།",
              phonetics: "shakpar gyi",
              translation: "Je reconnais",
            },
          ],
        },
        {
          id: "ch-7b-13",
          type: "normal",
          tibetan: "ཉན་ཐོས་རང་རྒྱལ་བྱང་ཆུབ་སེམས།།",
          phonetics: "nyenteu / rang gyal / djangchoub sem",
          translation: "Les shravakas, les pratyékabouddhas, les bodhisattvas",
          words: [
            {
              tibetan: "ཉན་ཐོས་",
              phonetics: "nyenteu",
              translation: "shravakas",
            },
            {
              tibetan: "རང་རྒྱལ་",
              phonetics: "rang gyal",
              translation: "pratyékabouddhas",
            },
            {
              tibetan: "བྱང་ཆུབ་སེམས།།",
              phonetics: "djangchoub sem",
              translation: "bodhisattvas",
            },
          ],
        },
        {
          id: "ch-7b-14",
          type: "normal",
          tibetan: "སོ་སོ་སྐྱེ་བོ་ལ་སོགས་པས།།",
          phonetics: "soso kyéwo la / sok pé",
          translation: "les êtres ordinaires, et autres,",
          words: [
            {
              tibetan: "སོ་སོ་སྐྱེ་བོ་ལ་",
              phonetics: "soso kyéwo la",
              translation: "les êtres ordinaires",
            },
            {
              tibetan: "སོགས་པས།།",
              phonetics: "sok pé",
              translation: "et autres",
            },
          ],
        },
        {
          id: "ch-7b-15",
          type: "normal",
          tibetan: "དུས་གསུམ་དགེ་བ་ཅི་བསགས་པའི།།",
          phonetics: "dusoum / géwa / chi sak pé",
          translation: "Toutes leurs vertus accumulées dans trois temps,",
          words: [
            {
              tibetan: "དུས་གསུམ་",
              phonetics: "dusoum",
              translation: "trois temps",
            },
            { tibetan: "དགེ་བ་", phonetics: "géwa", translation: "vertus" },
            {
              tibetan: "ཅི་བསགས་པའི།།",
              phonetics: "chi sak pé",
              translation: "accumulées",
            },
          ],
        },
        {
          id: "ch-7b-16",
          type: "normal",
          tibetan: "བསོད་ནམས་ལ་ནི་བདག་ཡི་རང་།།",
          phonetics: "seunam / la ni / da yi rang",
          translation: "Je me réjouis de leurs mérites.",
          words: [
            {
              tibetan: "བསོད་ནམས་",
              phonetics: "seunam",
              translation: "mérites",
            },
            { tibetan: "ལ་ནི་", phonetics: "la ni", translation: "de leurs" },
            {
              tibetan: "བདག་ཡི་རང་།།",
              phonetics: "da yi rang",
              translation: "Je me réjouis",
            },
          ],
        },
        {
          id: "ch-7b-17",
          type: "normal",
          tibetan: "སེམས་ཅན་རྣམས་ཀྱི་བསམ་པ་དང་།།",
          phonetics: "semchen / namkyi / sampa / tang",
          translation: "[En accord] avec les intentions des êtres et",
          words: [
            { tibetan: "སེམས་ཅན་", phonetics: "semchen", translation: "êtres" },
            { tibetan: "རྣམས་ཀྱི་", phonetics: "namkyi", translation: "des" },
            {
              tibetan: "བསམ་པ་",
              phonetics: "sampa",
              translation: "intentions",
            },
            { tibetan: "དང་།།", phonetics: "tang", translation: "et" },
          ],
        },
        {
          id: "ch-7b-18",
          type: "normal",
          tibetan: "བློ་ཡི་བྱེ་བྲག་ཇི་ལྟ་བར།།",
          phonetics: "lo yi / djé drak / dji ta war",
          translation:
            "En accord avec les particularités de l'esprit des êtres,",
          words: [
            { tibetan: "བློ་ཡི་", phonetics: "lo yi", translation: "l'esprit" },
            {
              tibetan: "བྱེ་བྲག་",
              phonetics: "djé drak",
              translation: "particularités",
            },
            {
              tibetan: "ཇི་ལྟ་བར།།",
              phonetics: "dji ta war",
              translation: "en accord avec",
            },
          ],
        },
        {
          id: "ch-7b-19",
          type: "normal",
          tibetan: "ཆེ་ཆུང་ཐུན་མོང་ཐེག་པ་ཡི།།",
          phonetics: "tché / choung / tunmong / tékpa yi",
          translation: "Des véhicules, grand, petit et commun,",
          words: [
            { tibetan: "ཆེ་", phonetics: "tché", translation: "grand" },
            { tibetan: "ཆུང་", phonetics: "choung", translation: "petit" },
            {
              tibetan: "ཐུན་མོང་",
              phonetics: "tunmong",
              translation: "commun",
            },
            {
              tibetan: "ཐེག་པ་ཡི།།",
              phonetics: "tékpa yi",
              translation: "véhicules",
            },
          ],
        },
        {
          id: "ch-7b-20",
          type: "normal",
          tibetan: "ཆོས་ཀྱི་འཁོར་ལོ་བསྐོར་དུ་གསོལ།།",
          phonetics: "tcheukyi / khorlo / kor tou seul",
          translation: "Je vous prie de tourner la roue du Dharma.",
          words: [
            {
              tibetan: "ཆོས་ཀྱི་",
              phonetics: "tcheukyi",
              translation: "du Dharma",
            },
            { tibetan: "འཁོར་ལོ་", phonetics: "khorlo", translation: "roue" },
            {
              tibetan: "བསྐོར་དུ་",
              phonetics: "kor tou",
              translation: "tourner",
            },
            {
              tibetan: "གསོལ།།",
              phonetics: "seul",
              translation: "Je vous prie",
            },
          ],
        },
        {
          id: "ch-7b-21",
          type: "normal",
          tibetan: "འཁོར་བ་ཇི་སྲིད་མ་སྟོངས་བར།།",
          phonetics: "korwa / dji si / ma tong war",
          translation: "Tant que le samsara n'est pas vidé,",
          words: [
            { tibetan: "འཁོར་བ་", phonetics: "korwa", translation: "samsara" },
            {
              tibetan: "ཇི་སྲིད་",
              phonetics: "dji si",
              translation: "Tant que",
            },
            {
              tibetan: "མ་སྟོངས་བར།།",
              phonetics: "ma tong war",
              translation: "n'est pas vidé",
            },
          ],
        },
        {
          id: "ch-7b-22",
          type: "normal",
          tibetan: "མྱ་ངན་མི་འདའ་ཐུགས་རྗེ་ཡིས།།",
          phonetics: "nya ngen / mi da / touk jé yi",
          translation:
            "Par compassion, ne passez pas dans [l'au-delà de] la souffrance",
          words: [
            {
              tibetan: "མྱ་ངན་",
              phonetics: "nya ngen",
              translation: "[l'au-delà de] la souffrance",
            },
            {
              tibetan: "མི་འདའ་",
              phonetics: "mi da",
              translation: "n'allez pas",
            },
            {
              tibetan: "ཐུགས་རྗེ་ཡིས།།",
              phonetics: "touk jé yi",
              translation: "Par compassion",
            },
          ],
        },
        {
          id: "ch-7b-23",
          type: "normal",
          tibetan: "སྡུག་བསྔལ་རྒྱ་མཚོར་བྱིང་བ་ཡི།།",
          phonetics: "douk ngal / gyamtsor / jing wa yi",
          translation: "Plongés dans l'océan de souffrance",
          words: [
            {
              tibetan: "སྡུག་བསྔལ་",
              phonetics: "douk ngal",
              translation: "souffrance",
            },
            {
              tibetan: "རྒྱ་མཚོར་",
              phonetics: "gyamtsor",
              translation: "océan",
            },
            {
              tibetan: "བྱིང་བ་ཡི།།",
              phonetics: "jing wa yi",
              translation: "Plongés",
            },
          ],
        },
        {
          id: "ch-7b-24",
          type: "normal",
          tibetan: "སེམས་ཅན་རྣམས་ལ་གཟིགས་སུ་གསོལ།།",
          phonetics: "semchen / nam la / zik sou seul",
          translation: "Veillez sur tous ces êtres",
          words: [
            { tibetan: "སེམས་ཅན་", phonetics: "semchen", translation: "êtres" },
            { tibetan: "རྣམས་ལ་", phonetics: "nam la", translation: "ces" },
            {
              tibetan: "གཟིགས་སུ་གསོལ།།",
              phonetics: "zik sou seul",
              translation: "Veillez sur",
            },
          ],
        },
        {
          id: "ch-7b-25",
          type: "normal",
          tibetan: "བདག་གིས་བསོད་ནམས་ཅི་བསགས་པ།།",
          phonetics: "dagui / seunam / tchi sak pa",
          translation: "Que les mérites ainsi accumulés",
          words: [
            { tibetan: "བདག་གིས་", phonetics: "dagui", translation: "ainsi" },
            {
              tibetan: "བསོད་ནམས་",
              phonetics: "seunam",
              translation: "mérites",
            },
            {
              tibetan: "ཅི་བསགས་པ།།",
              phonetics: "tchi sak pa",
              translation: "accumulés",
            },
          ],
        },
        {
          id: "ch-7b-26",
          type: "normal",
          tibetan: "ཐམས་ཅད་བྱང་ཆུབ་རྒྱུར་གྱུར་ནས།།",
          phonetics: "tamtché / djangtchoub / gyour gyour né",
          translation: "[Que] tous deviennent la cause de l'éveil",
          words: [
            { tibetan: "ཐམས་ཅད་", phonetics: "tamtché", translation: "tous" },
            {
              tibetan: "བྱང་ཆུབ་",
              phonetics: "djangtchoub",
              translation: "éveil",
            },
            {
              tibetan: "རྒྱུར་གྱུར་ནས།།",
              phonetics: "gyour gyour né",
              translation: "deviennent la cause",
            },
          ],
        },
        {
          id: "ch-7b-27",
          type: "normal",
          tibetan: "རིང་པོར་མི་ཐོགས་འགྲོ་བ་ཡི།།",
          phonetics: "ring por / mitok / drowa yi",
          translation: "Sans tarder longtemps, pour tous les êtres,",
          words: [
            {
              tibetan: "རིང་པོར་",
              phonetics: "ring por",
              translation: "longtemps",
            },
            {
              tibetan: "མི་ཐོགས་",
              phonetics: "mitok",
              translation: "Sans tarder",
            },
            {
              tibetan: "འགྲོ་བ་ཡི།།",
              phonetics: "drowa yi",
              translation: "pour tous les êtres",
            },
          ],
        },
        {
          id: "ch-7b-28",
          type: "normal",
          tibetan: "འདྲེན་པའི་དཔལ་དུ་བདག་གྱུར་ཅིག།",
          phonetics: "drenpé / pal dou / dagyour chik",
          translation: "Puissé-je devenir un excellent guide!",
          words: [
            {
              tibetan: "འདྲེན་པའི་",
              phonetics: "drenpé",
              translation: "guide",
            },
            {
              tibetan: "དཔལ་དུ་",
              phonetics: "pal dou",
              translation: "excellent",
            },
            {
              tibetan: "བདག་གྱུར་ཅིག།",
              phonetics: "dagyour chik",
              translation: "Puissé-je devenir",
            },
          ],
        },
        {
          id: "ch-7b-end",
          type: "instructions",
          tibetan: "འདྲེན་པའི་དཔལ་དུ་བདག་གྱུར་ཅིག།",
          phonetics: "",
          translation: "fin prière à 7 branches",
          words: [],
        },
      ],
    },
    {
      id: "ch-meditation",
      title: "Méditation",
      audioTimestamp: 674,
      phrases: [
        {
          id: "ch-pk-43",
          type: "normal",
          tibetan: "དེ་ལྟར་རྩེ་གཅིག་གསོལ་བཏབ་པས།",
          phonetics: "té tar / tsé tchik / seul tap pé",
          translation: "Par le fait d'avoir prié ainsi l'esprit en un point,",
          words: [
            { tibetan: "དེ་ལྟར་", phonetics: "té tar", translation: "ainsi" },
            {
              tibetan: "རྩེ་གཅིག་",
              phonetics: "tsé tchik",
              translation: "en un point",
            },
            {
              tibetan: "གསོལ་བཏབ་པས།",
              phonetics: "seul tap pé",
              translation: "d'avoir prié",
            },
          ],
        },
        {
          id: "ch-pk-44",
          type: "normal",
          tibetan: "།འཕགས་པའི་སྐུ་ལས་འོད་ཟེར་འཕྲོས།",
          phonetics: "pak pé / kou lé / eu zer treu",
          translation:
            "Des rayonnements de lumière jaillissent de la forme du Noble [Chenrézik],",
          words: [
            {
              tibetan: "འཕགས་པའི་",
              phonetics: "pak pé",
              translation: "du Noble",
            },
            {
              tibetan: "སྐུ་ལས་",
              phonetics: "kou lé",
              translation: "depuis la forme",
            },
            {
              tibetan: "འོད་ཟེར་",
              phonetics: "eu zer",
              translation: "rayonnements de lumière",
            },
            {
              tibetan: "འཕྲོས།",
              phonetics: "treu",
              translation: "jaillissent",
            },
          ],
        },
        {
          id: "ch-pk-45",
          type: "normal",
          tibetan: "།མ་དག་ལས་སྣང་འཁྲུལ་ཤེས་སྦྱངས།",
          phonetics: "ma tak / lé nang / trul ché djang",
          translation:
            "Et purifient la manifestation karmique impure et les compréhensions erronées.",
          words: [
            { tibetan: "མ་དག་", phonetics: "ma tak", translation: "impure" },
            {
              tibetan: "ལས་སྣང་",
              phonetics: "lé nang",
              translation: "manifestation karmique",
            },
            {
              tibetan: "འཁྲུལ་ཤེས་",
              phonetics: "trul ché",
              translation: "[et] compréhensions erronées",
            },
            {
              tibetan: "སྦྱངས།",
              phonetics: "djang",
              translation: "purifient",
            },
          ],
        },
        {
          id: "ch-pk-46",
          type: "normal",
          tibetan: "ཕྱི་སྣོད་བདེ་བ་ཅན་གྱི་ཞིང༌།",
          phonetics: "tchi / neu / déwa / tchen  kyi / ching",
          translation:
            "Le contenant [L'univers extérieur, devient] la terre de Grande Félicité",
          words: [
            {
              tibetan: "ཕྱི་སྣོད་",
              phonetics: "tchi neu",
              translation: "Le contenant",
            },
            {
              tibetan: "བདེ་བ་ཅན་གྱི་",
              phonetics: "déwatchen  kyi",
              translation: "Grande Félicité",
            },
            { tibetan: "ཞིང༌།", phonetics: "ching", translation: "la terre" },
          ],
        },
        {
          id: "ch-pk-47",
          type: "normal",
          tibetan: "།ནང་བཅུད་སྐྱེ་འགྲོའི་ལུས་ངག་སེམས།",
          phonetics: "nang / tchu / kyé dreu / lu gnak sem",
          translation:
            "Les corps, parole, esprit des êtres animés qu'il contient",
          words: [
            {
              tibetan: "ནང་བཅུད་",
              phonetics: "nang tchu",
              translation: "le contenu",
            },
            {
              tibetan: "སྐྱེ་འགྲོའི་",
              phonetics: "kyé dreu",
              translation: "des êtres animés",
            },
            {
              tibetan: "ལུས་ངག་སེམས།",
              phonetics: "lu gnak sem",
              translation: "corps, parole, esprit",
            },
          ],
        },
        {
          id: "ch-pk-48",
          type: "normal",
          tibetan: "།སྤྱན་རས་གཟིགས་དབང་སྐུ་གསུང་ཐུགས།",
          phonetics: "tchenrézik / ouang / kou soung touk",
          translation:
            "Deviennent les corps, parole, esprit du puissant Chenrézik",
          words: [
            {
              tibetan: "སྤྱན་རས་གཟིགས་",
              phonetics: "tchenrézik",
              translation: "Chenrézik",
            },
            { tibetan: "དབང་", phonetics: "ouang", translation: "puissant" },
            {
              tibetan: "སྐུ་གསུང་ཐུགས།",
              phonetics: "kou soung touk",
              translation: "corps, parole, esprit",
            },
          ],
        },
        {
          id: "ch-pk-49",
          type: "normal",
          tibetan: "སྣང་གྲགས་རིག་སྟོང་དབྱེར་མེད་གྱུར།",
          phonetics: "nang / drak / rik / tong / yer mé / gyour",
          translation:
            "Apparence, son et conscience deviennent indifférenciés du vide.",
          words: [
            { tibetan: "སྣང་", phonetics: "nang", translation: "apparence" },
            { tibetan: "གྲགས་", phonetics: "drak", translation: "son" },
            { tibetan: "རིག་", phonetics: "rik", translation: "conscience" },
            { tibetan: "སྟོང་", phonetics: "tong", translation: "du vide" },
            {
              tibetan: "དབྱེར་མེད་",
              phonetics: "yer mé",
              translation: "indifférenciés",
            },
            { tibetan: "གྱུར།", phonetics: "gyour", translation: "deviennent" },
          ],
        },
        {
          id: "ch-pk-instr-1",
          type: "instructions",
          tibetan: "ཅེས་པའི་དོན་བསྒོམ་བཞིན་དུ། ཅི་ནུས་བཟླས།",
          phonetics: "",
          translation:
            "En méditant ainsi sur le sens, récitez autant que vous pouvez :",
          words: [],
        },
        {
          id: "ch-pk-m-main",
          type: "mantra-main",
          tibetan: "ཨོཾ་མ་ཎི་པདྨེ་ཧཱུྃ།",
          phonetics: "om mani padmé houng",
          translation: "",
          words: [],
        },
        {
          id: "ch-pk-img",
          type: "image",
          tibetan: "",
          phonetics: "",
          translation: "",
          src: "/Chenrezik.jpg",
          words: [],
        },
        {
          id: "ch-pk-instr-2",
          type: "instructions",
          tibetan: "མཐར་འཁོར་གསུམ་མི་རྟོག་པའི་ངང་ངོར་མཉམ་པར་བཞག",
          phonetics: "",
          translation:
            "A la fin, restez dans l'essence naturelle, indifférent aux conceptions des trois cercles.",
          words: [],
        },
      ],
    },
    {
      id: "ch-conclusion",
      title: "Conclusion",
      audioTimestamp: 1030,
      phrases: [
        {
          id: "ch-con-1",
          type: "normal",
          tibetan: "བདག་གཞན་ལུས་སྣང་འཕགས་པའི་སྐུ།",
          phonetics: "dak / chen / lu / nang / p'ak pé / kou",
          translation:
            "L'apparence physique, la mienne et celle des autres êtres, est le noble corps [de Chenrézik],",
          words: [
            { tibetan: "བདག་", phonetics: "dak", translation: "la mienne" },
            { tibetan: "གཞན་", phonetics: "chen", translation: "des autres" },
            { tibetan: "ལུས་", phonetics: "lu", translation: "physique" },
            { tibetan: "སྣང་", phonetics: "nang", translation: "l'apparence" },
            {
              tibetan: "འཕགས་པའི་",
              phonetics: "p'ak pé",
              translation: "noble",
            },
            { tibetan: "སྐུ།", phonetics: "kou", translation: "le corps" },
          ],
        },
        {
          id: "ch-con-2",
          type: "normal",
          tibetan: "།སྒྲ་གྲགས་ཡི་གེ་དྲུག་པའི་དབྱངས།",
          phonetics: "dra / drak / yi ké / drouk pé / yang",
          translation: "les sons sont la mélodie des six syllabes,",
          words: [
            { tibetan: "སྒྲ་", phonetics: "dra", translation: "les sons" },
            { tibetan: "གྲགས་", phonetics: "drak", translation: "résonnants" },
            {
              tibetan: "ཡི་གེ་",
              phonetics: "yi ké",
              translation: "des syllabes",
            },
            {
              tibetan: "དྲུག་པའི་",
              phonetics: "drouk pé",
              translation: "des six",
            },
            { tibetan: "དབྱངས།", phonetics: "yang", translation: "la mélodie" },
          ],
        },
        {
          id: "ch-con-3",
          type: "normal",
          tibetan: "།དྲན་རྟོག་ཡེ་ཤེས་ཆེན་པོའི་ཀློང༌།",
          phonetics: "dren tok / yéché / tchen peu / long",
          translation:
            "les pensées conceptuelles sont l'expression de la grande conscience primordiale.",
          words: [
            {
              tibetan: "དྲན་རྟོག་",
              phonetics: "dren tok",
              translation: "les pensées conceptuelles",
            },
            {
              tibetan: "ཡེ་ཤེས་",
              phonetics: "yéché",
              translation: "conscience primordiale",
            },
            {
              tibetan: "ཆེན་པོའི་",
              phonetics: "tchen peu",
              translation: "grande",
            },
            {
              tibetan: "ཀློང༌།",
              phonetics: "long",
              translation: "l'expression",
            },
          ],
        },
        {
          id: "ch-con-4",
          type: "normal",
          tibetan: "།དགེ་བ་འདི་ཡིས་མྱུར་དུ་བདག",
          phonetics: "gué oua / di yi / nyour tou / dak",
          translation: "Par cette vertu, puissé-je rapidement,",
          words: [
            { tibetan: "དགེ་བ་", phonetics: "gué oua", translation: "vertu" },
            {
              tibetan: "འདི་ཡིས་",
              phonetics: "di yi",
              translation: "par cette",
            },
            {
              tibetan: "མྱུར་དུ་",
              phonetics: "nyour tou",
              translation: "rapidement",
            },
            { tibetan: "བདག", phonetics: "dak", translation: "puissé-je" },
          ],
        },
        {
          id: "ch-con-5",
          type: "normal",
          tibetan: "།སྤྱན་རས་གཟིགས་དབང་འགྲུབ་གྱུར་ནས།",
          phonetics: "tchenrézik / ouang / droup / gyour né",
          translation: "réaliser le puissant Chenrézik.",
          words: [
            {
              tibetan: "སྤྱན་རས་གཟིགས་",
              phonetics: "tchenrézik",
              translation: "Chenrézik",
            },
            { tibetan: "དབང་", phonetics: "ouang", translation: "puissant" },
            { tibetan: "འགྲུབ་", phonetics: "droup", translation: "réaliser" },
            {
              tibetan: "གྱུར་ནས།",
              phonetics: "gyour né",
              translation: "devenu",
            },
          ],
        },
        {
          id: "ch-con-6",
          type: "normal",
          tibetan: "།འགྲོ་བ་གཅིག་ཀྱང་མ་ལུས་པ།",
          phonetics: "dro oua / tchik kyang / ma lu pa",
          translation: "Tous les êtres jusqu'au dernier,",
          words: [
            {
              tibetan: "འགྲོ་བ་",
              phonetics: "dro oua",
              translation: "les êtres",
            },
            {
              tibetan: "གཅིག་ཀྱང་",
              phonetics: "tchik kyang",
              translation: "jusqu'au dernier",
            },
            { tibetan: "མ་ལུས་པ།", phonetics: "ma lu pa", translation: "tous" },
          ],
        },
        {
          id: "ch-con-7",
          type: "normal",
          tibetan: "།དེ་ཡི་ས་ལ་འགོད་པར་ཤོག",
          phonetics: "té yi / sa la / gueu par chok",
          translation: "Puissé-je les établir dans cet état là.",
          words: [
            {
              tibetan: "དེ་ཡི་",
              phonetics: "té yi",
              translation: "Celui-là",
            },
            { tibetan: "ས་ལ་", phonetics: "sa la", translation: "cet état" },
            {
              tibetan: "འགོད་པར་ཤོག",
              phonetics: "gueu par chok",
              translation: "puissé-je [les] établir",
            },
          ],
        },
        {
          id: "ch-con-8",
          type: "normal",
          tibetan: "།འདི་ལྟར་བསྒོམ་བཟླས་བགྱིས་པའི་བསོད་ནམས་ཀྱིས།",
          phonetics: "di tar / gom dé / gyi pé / seunam kyi",
          translation: "Par le mérite d'avoir ainsi récité et médité,",
          words: [
            { tibetan: "འདི་ལྟར་", phonetics: "di tar", translation: "ainsi" },
            {
              tibetan: "བསྒོམ་བཟླས་",
              phonetics: "gom dé",
              translation: "récité et médité",
            },
            {
              tibetan: "བགྱིས་པའི་",
              phonetics: "gyi pé",
              translation: "d'avoir",
            },
            {
              tibetan: "བསོད་ནམས་ཀྱིས།",
              phonetics: "seunam kyi",
              translation: "par le mérite",
            },
          ],
        },
        {
          id: "ch-con-9",
          type: "normal",
          tibetan: "།བདག་དང་བདག་ལ་འབྲེལ་ཐོགས་འགྲོ་བ་ཀུན།",
          phonetics: "dak tang / dak la / drel t'ok / dro oua / kun",
          translation: "Moi et tous les êtres qui me sont liés,",
          words: [
            {
              tibetan: "བདག་དང་",
              phonetics: "dak tang",
              translation: "moi et",
            },
            {
              tibetan: "བདག་ལ་འབྲེལ་ཐོགས་",
              phonetics: "dak la drel t'ok",
              translation: "liés à moi",
            },
            {
              tibetan: "འགྲོ་བ་",
              phonetics: "dro oua",
              translation: "les êtres",
            },
            { tibetan: "ཀུན།", phonetics: "kun", translation: "tous" },
          ],
        },
        {
          id: "ch-con-10",
          type: "normal",
          tibetan: "།མི་གཙང་ལུས་འདི་བོར་བ་གྱུར་མ་ཐག",
          phonetics: "mi tsang / lu di / por oua / gyour ma t'ak",
          translation: "Dès que nous aurons quitté ce corps impur,",
          words: [
            { tibetan: "མི་གཙང་", phonetics: "mi tsang", translation: "impur" },
            {
              tibetan: "ལུས་འདི་",
              phonetics: "lu di",
              translation: "ce corps",
            },
            { tibetan: "བོར་བ་", phonetics: "por oua", translation: "quitté" },
            {
              tibetan: "གྱུར་མ་ཐག",
              phonetics: "gyour ma t'ak",
              translation: "dès que nous aurons",
            },
          ],
        },
        {
          id: "ch-con-11",
          type: "normal",
          tibetan: "བདེ་བ་ཅན་དུ་བརྫུས་ཏེ་སྐྱེ་བར་ཤོག",
          phonetics: "déwa / tchen tou / dzu té / kyé ouar / chok",
          translation: "Puissions-nous renaître par apparition en Déwachen.",
          words: [
            {
              tibetan: "བདེ་བ་ཅན་",
              phonetics: "déwa",
              translation: "Déwachen",
            },
            { tibetan: "དུ་", phonetics: "tchen tou", translation: "en" },
            {
              tibetan: "བརྫུས་ཏེ་",
              phonetics: "dzu té",
              translation: "par apparition",
            },
            {
              tibetan: "སྐྱེ་བར་",
              phonetics: "kyé ouar",
              translation: "renaître",
            },
            {
              tibetan: "ཤོག",
              phonetics: "chok",
              translation: "puissions-nous",
            },
          ],
        },
        {
          id: "ch-con-12",
          type: "normal",
          tibetan: "།སྐྱེས་མ་ཐག་ཏུ་ས་བཅུ་རབ་བསྒྲོད་ནས།",
          phonetics: "kyéma / tak tou / sa tchou / rap / dreu né",
          translation: "Aussitôt nés, ayant parcouru les dix terres,",
          words: [
            {
              tibetan: "སྐྱེས་མ་ཐག་ཏུ་",
              phonetics: "kyéma",
              translation: "aussitôt nés",
            },
            {
              tibetan: "ས་བཅུ་",
              phonetics: "tak tou",
              translation: "les dix terres",
            },
            {
              tibetan: "རབ་",
              phonetics: "sa tchou",
              translation: "pleinement",
            },
            { tibetan: "བསྒྲོད་", phonetics: "rap", translation: "parcouru" },
            { tibetan: "ནས།", phonetics: "dreu né", translation: "ayant" },
          ],
        },
        {
          id: "ch-con-13",
          type: "normal",
          tibetan: "།སྤྲུལ་པས་ཕྱོགས་བཅུར་གཞན་དོན་བྱེད་པར་ཤོག",
          phonetics: "trulpé / tchok / tchour / chen / teun / djé par / chok",
          translation:
            "Par émanations, puissions-nous accomplir le bien des êtres dans les dix directions.",
          words: [
            {
              tibetan: "སྤྲུལ་པས",
              phonetics: "trulpé",
              translation: "Par émanations",
            },
            {
              tibetan: "ཕྱོགས་",
              phonetics: "tchok",
              translation: "directions",
            },
            {
              tibetan: "བཅུར་",
              phonetics: "tchour",
              translation: "dans les dix",
            },
            { tibetan: "གཞན་", phonetics: "chen", translation: "des êtres" },
            { tibetan: "དོན་", phonetics: "teun", translation: "le bien" },
            {
              tibetan: "བྱེད་པར་",
              phonetics: "djé par",
              translation: "accomplir",
            },
            {
              tibetan: "ཤོག",
              phonetics: "chok",
              translation: "puissions-nous",
            },
          ],
        },
        {
          id: "ch-th-conc-21",
          type: "normal" as const,
          tibetan: "དགེ་བ་འདི་ཡིས་སྐྱེ་བོ་ཀུན།།",
          phonetics: "guéwa / di yi / kyéwo kun",
          translation: "Par cette vertu, [puissent] tous les êtres",
          words: [
            { tibetan: "དགེ་བ་", phonetics: "guéwa", translation: "vertu" },
            {
              tibetan: "འདི་ཡིས་",
              phonetics: "di yi",
              translation: "Par cette",
            },
            {
              tibetan: "སྐྱེ་བོ་ཀུན་",
              phonetics: "kyéwo kun",
              translation: "tous les êtres",
            },
          ],
        },
        {
          id: "ch-th-conc-22",
          type: "normal" as const,
          tibetan: "བསོད་ནམས་ཡེ་ཤེས་ཚོགས་རྫོགས་ཏེ།།",
          phonetics: "seunam / yéshé / tsok / dzok té",
          translation: "Parfaire les accumulations de mérite et sagesse.",
          words: [
            {
              tibetan: "བསོད་ནམས་",
              phonetics: "seunam",
              translation: "mérite",
            },
            { tibetan: "ཡེ་ཤེས་", phonetics: "yéshé", translation: "sagesse" },
            {
              tibetan: "ཚོགས་",
              phonetics: "tsok",
              translation: "accumulations",
            },
            {
              tibetan: "རྫོགས་ཏེ་",
              phonetics: "dzok té",
              translation: "parfaire",
            },
          ],
        },
        {
          id: "ch-th-conc-23",
          type: "normal" as const,
          tibetan: "བསོད་ནམས་ཡེ་ཤེས་ལས་བྱུང་བའི༎",
          phonetics: "seunam / yéshé / lé djoung wé",
          translation: "Que ces mérites et sagesse résultent en",
          words: [
            {
              tibetan: "བསོད་ནམས་",
              phonetics: "seunam",
              translation: "mérites",
            },
            { tibetan: "ཡེ་ཤེས་", phonetics: "yéshé", translation: "sagesse" },
            {
              tibetan: "ལས་བྱུང་བའི་",
              phonetics: "lé djoung wé",
              translation: "résultent en",
            },
          ],
        },
        {
          id: "ch-th-conc-24",
          type: "normal" as const,
          tibetan: "དམ་པ་སྐུ་གཉིས་ཐོབ་པར་ཤོག།",
          phonetics: "dampa / kou / nyi / thob par / sho",
          translation: "l'obtention des deux corps.",
          words: [
            { tibetan: "དམ་པ་", phonetics: "dampa", translation: "suprêmes" },
            { tibetan: "སྐུ་", phonetics: "kou", translation: "corps" },
            { tibetan: "གཉིས་", phonetics: "nyi", translation: "deux" },
            {
              tibetan: "ཐོབ་པར་",
              phonetics: "thob par",
              translation: "l'obtention de",
            },
            { tibetan: "ཤོག་", phonetics: "sho", translation: "[puissent]" },
          ],
        },
        {
          id: "ch-nav-mahakala",
          type: "nav-btn" as const,
          tibetan: "",
          phonetics: "",
          translation: "Madak",
          targetId: "/text/mahakala",
          words: [],
        },
      ],
    },
    {
      id: "ta-dewachen",
      title: "Souhaits de Dewachen",
      audioTimestamp: 1217,
      phrases: [
        {
          id: "dw-image",
          type: "image",
          tibetan: "",
          phonetics: "",
          translation: "",
          words: [],
          src: "/Amitabha.jpg",
        },
        {
          id: "dw-emaho",
          type: "normal",
          tibetan: "ཨེ་མ་ཧོཿ",
          phonetics: "Emaho",
          translation: "Oh merveille !",
          words: [
            {
              tibetan: "ཨེ་མ་ཧོཿ",
              phonetics: "Emaho",
              translation: "Oh merveille !",
            },
          ],
        },
        {
          id: "dw-8",
          type: "normal",
          tibetan: "ངོ་མཚར་སངས་རྒྱས་སྣང་བ་མཐའ་ཡས་དང་༔",
          phonetics: "ngo tsar / sangyé / nang wa / t'ayé tang",
          translation: "Merveilleux Bouddha Lumière Infinie,",
          words: [
            {
              tibetan: "ངོ་མཚར་",
              phonetics: "ngo tsar",
              translation: "merveilleux",
            },
            {
              tibetan: "སངས་རྒྱས་",
              phonetics: "sangyé",
              translation: "Bouddha",
            },
            { tibetan: "སྣང་བ་", phonetics: "nang wa", translation: "Lumière" },
            {
              tibetan: "མཐའ་ཡས་དང་",
              phonetics: "t'ayé tang",
              translation: "Infinie",
            },
          ],
        },
        {
          id: "dw-9",
          type: "normal",
          tibetan: "གཡས་སུ་ཇོ་བོ་ཐུགས་རྗེ་ཆེན་པོ་དང་༔",
          phonetics: "yé sou / djo wo / t'ouk djé / tchenpo tang",
          translation:
            "vous, Seigneur de grande compassion, qui êtes à sa droite,",
          words: [
            {
              tibetan: "གཡས་སུ་",
              phonetics: "yé sou",
              translation: "à sa droite",
            },
            { tibetan: "ཇོ་བོ་", phonetics: "djo wo", translation: "Seigneur" },
            {
              tibetan: "ཐུགས་རྗེ་",
              phonetics: "t'ouk djé",
              translation: "compassion",
            },
            {
              tibetan: "ཆེན་པོ་དང་",
              phonetics: "tchenpo tang",
              translation: "grande",
            },
          ],
        },
        {
          id: "dw-10",
          type: "normal",
          tibetan: "གཡོན་དུ་སེམས་དཔའ་མཐུ་ཆེན་ཐོབ་རྣམས་ལ༔",
          phonetics: "yeun tou / sempa / t'ou tchen / t'op nam la",
          translation:
            "et vous bodhisattva aux grands pouvoirs, qui êtes à sa gauche,",
          words: [
            {
              tibetan: "གཡོན་དུ་",
              phonetics: "yeun tou",
              translation: "à sa gauche",
            },
            {
              tibetan: "སེམས་དཔའ་",
              phonetics: "sempa",
              translation: "bodhisattva",
            },
            {
              tibetan: "མཐུ་ཆེན་",
              phonetics: "t'ou tchen",
              translation: "aux grands pouvoirs",
            },
            {
              tibetan: "ཐོབ་རྣམས་ལ་",
              phonetics: "t'op nam la",
              translation: "qui êtes",
            },
          ],
        },
        {
          id: "dw-11",
          type: "normal",
          tibetan: "སངས་རྒྱས་བྱང་སེམས་དཔག་མེད་འཁོར་གྱིས་བསྐོར༔",
          phonetics: "sangyé / djang sem / pak mé / k'or gyi kor",
          translation:
            "d'innombrables bouddhas et bodhisattvas font cercle autour de vous.",
          words: [
            {
              tibetan: "སངས་རྒྱས་",
              phonetics: "sangyé",
              translation: "bouddhas",
            },
            {
              tibetan: "བྱང་སེམས་",
              phonetics: "djang sem",
              translation: "bodhisattvas",
            },
            {
              tibetan: "དཔག་མེད་",
              phonetics: "pak mé",
              translation: "innombrables",
            },
            {
              tibetan: "འཁོར་གྱིས་བསྐོར་",
              phonetics: "k'or gyi kor",
              translation: "font cercle autour de vous",
            },
          ],
        },
        {
          id: "dw-12",
          type: "normal",
          tibetan: "བདེ་སྐྱིད་ངོ་མཚར་དཔག་ཏུ་མེད་པ་ཡི༔",
          phonetics: "dé kyi / ngo tsar / pak tou / mé pa yi",
          translation:
            "Là où bonheur et joie sont d'une merveille incommensurable",
          words: [
            {
              tibetan: "བདེ་",
              phonetics: "dé",
              translation: "bonheur",
            },
            {
              tibetan: "སྐྱིད་",
              phonetics: "kyi",
              translation: "et joie",
            },
            {
              tibetan: "ངོ་མཚར་",
              phonetics: "ngo tsar",
              translation: "merveille",
            },
            {
              tibetan: "དཔག་ཏུ་མེད་པ་ཡི་",
              phonetics: "pak tou mé pa yi",
              translation: "incommensurable",
            },
          ],
        },
        {
          id: "dw-13",
          type: "normal",
          tibetan: "བདེ་བ་ཅན་ཞེས་བྱ་བའི་ཞིང་ཁམས་དེར༔",
          phonetics: "déwatchen / ché dja wé / ching k'am ter",
          translation: "Dans cette terre pure du nom de Sukhāvatī ;",
          words: [
            {
              tibetan: "བདེ་བ་ཅན་",
              phonetics: "déwatchen",
              translation: "Sukhāvatī",
            },
            {
              tibetan: "ཞེས་བྱ་བའི་",
              phonetics: " ché dja wé",
              translation: "du nom de",
            },
            {
              tibetan: "ཞིང་ཁམས་",
              phonetics: "ching k'am",
              translation: "terre pure",
            },
            {
              tibetan: "དེར་",
              phonetics: "ter",
              translation: "celle-ci",
            },
          ],
        },
        {
          id: "dw-14",
          type: "normal",
          tibetan: " བདག་གཞན་འདི་ནས་ཚེ་འཕོས་གྱུར་མ་ཐག༔",
          phonetics: "da shen / di né / tsé p'eu / gyour ma t'ak",
          translation: "Moi et les autres, après avoir quitté cette vie,",
          words: [
            {
              tibetan: "བདག་གཞན་",
              phonetics: "da shen",
              translation: "moi et les autres",
            },
            { tibetan: "འདི་ནས་", phonetics: "di né", translation: "d'ici" },
            {
              tibetan: "ཚེ་འཕོས་",
              phonetics: "tsé p'eu",
              translation: "avoir quitté cette vie",
            },
            {
              tibetan: "གྱུར་མ་ཐག་",
              phonetics: "gyour ma t'ak",
              translation: "aussitôt",
            },
          ],
        },
        {
          id: "dw-15",
          type: "normal",
          tibetan: "སྐྱེ་བ་གཞན་གྱིས་བར་མ་ཆོད་པ་རུ༔",
          phonetics: "kyé wa / chen gyi / par ma / tcheu pa rou",
          translation:
            "Sans que le bardo soit interrompu par une autre renaissance.",
          words: [
            {
              tibetan: "སྐྱེ་བ་",
              phonetics: "kyé wa",
              translation: "renaissance",
            },
            {
              tibetan: "གཞན་གྱིས་",
              phonetics: "chen gyi",
              translation: "autre",
            },
            {
              tibetan: "བར་མ་",
              phonetics: "par ma",
              translation: "sans que le bardo",
            },
            {
              tibetan: "ཆོད་པ་རུ་",
              phonetics: "tcheu pa rou",
              translation: "soit interrompu",
            },
          ],
        },
        {
          id: "dw-16",
          type: "normal",
          tibetan: "དེ་རུ་སྐྱེས་ནས་སྣང་མཐའི་ཞལ་མཐོང་ཤོག༔",
          phonetics: "té rou / kyé né / nang t'é / chel t'ong chok",
          translation:
            "Étant nés là-bas, puissent-ils voir le visage du Bouddha Lumière Infinie !",
          words: [
            { tibetan: "དེ་རུ་", phonetics: "té rou", translation: "là-bas" },
            {
              tibetan: "སྐྱེས་ནས་",
              phonetics: "kyé né",
              translation: "étant nés",
            },
            {
              tibetan: "སྣང་མཐའི་",
              phonetics: "nang t'é",
              translation: "de Lumière Infinie",
            },
            {
              tibetan: "ཞལ་",
              phonetics: "chel",
              translation: "le visage",
            },
            {
              tibetan: "མཐོང་ཤོག་",
              phonetics: "t'ong chok",
              translation: "puissent-ils voir",
            },
          ],
        },
        {
          id: "dw-17",
          type: "normal",
          tibetan: "དེ་སྐད་བདག་གིས་སྨོན་ལམ་བཏབ་པ་འདི༔",
          phonetics: "té ké / dak gi / meunlam / tap pa di",
          translation: "Ces souhaits que je formule ainsi,",
          words: [
            { tibetan: "དེ་སྐད་", phonetics: "té ké", translation: "ainsi" },
            { tibetan: "བདག་གིས་", phonetics: "dak gi", translation: "je" },
            {
              tibetan: "སྨོན་ལམ་",
              phonetics: "meunlam",
              translation: "ces souhaits",
            },
            {
              tibetan: "བཏབ་པ་འདི་",
              phonetics: "tap pa di",
              translation: "formule",
            },
          ],
        },
        {
          id: "dw-18",
          type: "normal",
          tibetan: "།ཕྱོགས་བཅུའི་སངས་རྒྱས་བྱང་སེམས་ཐམས་ཅད་ཀྱིས༔",
          phonetics: "tchok tchu / sangyé / djang sem / t'am tché kyi",
          translation: "Tous les Bouddhas et bodhisattvas des dix directions,",
          words: [
            {
              tibetan: "ཕྱོགས་བཅུའི་",
              phonetics: "tchok tchu",
              translation: "des dix directions",
            },
            {
              tibetan: "སངས་རྒྱས་",
              phonetics: "sangyé",
              translation: "Bouddhas",
            },
            {
              tibetan: "བྱང་སེམས་",
              phonetics: "djang sem",
              translation: "bodhisattvas",
            },
            {
              tibetan: "ཐམས་ཅད་ཀྱིས་",
              phonetics: "t'am tché kyi",
              translation: "tous",
            },
          ],
        },
        {
          id: "dw-19",
          type: "normal",
          tibetan: "གེགས་མེད་འགྲུབ་པར་བྱིན་གྱིས་བརླབས་ཏུ་གསོལ༔",
          phonetics: "kek mé / droup par / djin gyi lap / tou / seul",
          translation:
            "Accordez votre bénédiction afin qu'ils s'accomplissent sans obstacle.",
          words: [
            {
              tibetan: "གེགས་མེད་",
              phonetics: "kek mé",
              translation: "sans obstacle",
            },
            {
              tibetan: "འགྲུབ་པར་",
              phonetics: "droup par",
              translation: "s'accomplissent",
            },
            {
              tibetan: "བྱིན་གྱིས་བརླབས་",
              phonetics: "djin gyi lap",
              translation: "votre bénédiction",
            },
            { tibetan: "ཏུ་", phonetics: "tou", translation: "afin que" },
            { tibetan: "གསོལ་", phonetics: "seul", translation: "accordez" },
          ],
        },
        {
          id: "dw-mantra",
          type: "mantra",
          tibetan: "ཏདྱ་ཐཱ༔ པཉྩནྡྲི་ཡ་ཨ་ཝ་བྷོ་དྷ་ནི་སྭཱ་ཧཱ༔",
          phonetics: "téyata pentsandriyia awa bo dani so ha",
          translation: "",
          words: [],
        },
        {
          id: "ch-th-conc-1",
          type: "normal" as const,
          tibetan: "ཕྱོགས་དུས་རྒྱལ་བ་སྲས་བཅས་དགོངས༔",
          phonetics: "Chog / du / gyalwa / se / tché / gong",
          translation:
            "Bouddhas et bodhisattvas des [dix] directions et [des trois] temps, considérez-nous.",
          words: [
            { tibetan: "ཕྱོགས་", phonetics: "Chog", translation: "directions" },
            { tibetan: "དུས་", phonetics: "du", translation: "temps" },
            {
              tibetan: "རྒྱལ་བ་",
              phonetics: "gyalwa",
              translation: "bouddhas",
            },
            { tibetan: "སྲས་", phonetics: "se", translation: "bodhisattvas" },
            { tibetan: "བཅས་", phonetics: "tché", translation: "et" },
            {
              tibetan: "དགོངས་",
              phonetics: "gong",
              translation: "considérez-nous",
            },
          ],
        },
        {
          id: "ch-th-conc-2",
          type: "normal" as const,
          tibetan: "ཚོགས་གཉིས་རྫོགས་ལ་རྗེས་ཡི་རང་༔",
          phonetics: "Tsok nyi / dzog la / djé yi / rang",
          translation: "Je me réjouis des deux accumulations parfaites",
          words: [
            {
              tibetan: "ཚོགས་གཉིས་",
              phonetics: "Tsok nyi",
              translation: "deux accumulations",
            },
            {
              tibetan: "རྫོགས་ལ་",
              phonetics: "dzog la",
              translation: "parfaites",
            },
            {
              tibetan: "རྗེས་ཡི་",
              phonetics: "djé yi",
              translation: "me réjouis",
            },
            { tibetan: "རང་", phonetics: "rang", translation: "moi-même" },
          ],
        },
        {
          id: "ch-th-conc-3",
          type: "normal" as const,
          tibetan: "བདག་གིས་དུས་གསུམ་དགེ་བསགས་པ༔",
          phonetics: "Da gui / du soum / gé / sakpa",
          translation: "Les vertus des trois temps que j'ai accumulées",
          words: [
            {
              tibetan: "བདག་གིས་",
              phonetics: "Da gui",
              translation: "que j'ai",
            },
            {
              tibetan: "དུས་གསུམ་",
              phonetics: "du soum",
              translation: "des trois temps",
            },
            { tibetan: "དགེ་", phonetics: "gé", translation: "les vertus" },
            {
              tibetan: "བསགས་པ་",
              phonetics: "sakpa",
              translation: "accumulées",
            },
          ],
        },
        {
          id: "ch-th-conc-4",
          type: "normal" as const,
          tibetan: "དཀོན་མཆོག་གསུམ་ལ་མཆོད་པ་འབུལ༔",
          phonetics: "Keuntcho / soum / la / tcheupa bul",
          translation: "Je les offre aux Trois Joyaux,",
          words: [
            {
              tibetan: "དཀོན་མཆོག་",
              phonetics: "Keuntcho",
              translation: "Joyaux",
            },
            { tibetan: "གསུམ་", phonetics: "soum", translation: "Trois" },
            { tibetan: "ལ་", phonetics: "la", translation: "aux" },
            {
              tibetan: "མཆོད་པ་འབུལ་",
              phonetics: "tcheupa bul",
              translation: "j'offre",
            },
          ],
        },
        {
          id: "ch-th-conc-5",
          type: "normal" as const,
          tibetan: "རྒྱལ་བའི་བསྟན་པ་འཕེལ་གྱུར་ཅིག༔",
          phonetics: "Gyalwé / tenpa / pel gyour tchik",
          translation: "Que les enseignements de Victorieux fleurissent,",
          words: [
            {
              tibetan: "རྒྱལ་བའི་",
              phonetics: "Gyalwé",
              translation: "des Victorieux",
            },
            {
              tibetan: "བསྟན་པ་",
              phonetics: "tenpa",
              translation: "les enseignements",
            },
            {
              tibetan: "འཕེལ་གྱུར་ཅིག་",
              phonetics: "pel gyour tchik",
              translation: "que [ils] fleurissent",
            },
          ],
        },
        {
          id: "ch-th-conc-6",
          type: "normal" as const,
          tibetan: "དགེ་བ་སེམས་ཅན་ཀུན་ལ་བསྔོ༔",
          phonetics: "Guéwa / semtchen / kun la / ngo",
          translation: "Je dédie cette vertu à tous les êtres,",
          words: [
            {
              tibetan: "དགེ་བ་",
              phonetics: "Guéwa",
              translation: "cette vertu",
            },
            {
              tibetan: "སེམས་ཅན་",
              phonetics: "semtchen",
              translation: "les êtres",
            },
            { tibetan: "ཀུན་ལ་", phonetics: "kun la", translation: "à tous" },
            { tibetan: "བསྔོ་", phonetics: "ngo", translation: "je dédie" },
          ],
        },
        {
          id: "ch-th-conc-7",
          type: "normal" as const,
          tibetan: "འགྲོ་ཀུན་སངས་རྒྱས་ཐོབ་གྱུར་ཅིག༔",
          phonetics: "Dro kun / sangye / thob gyour tchik",
          translation: "Que tous les êtres atteignent l'éveil!",
          words: [
            {
              tibetan: "འགྲོ་ཀུན་",
              phonetics: "Dro kun",
              translation: "tous les êtres",
            },
            {
              tibetan: "སངས་རྒྱས་",
              phonetics: "sangye",
              translation: "l'éveil",
            },
            {
              tibetan: "ཐོབ་གྱུར་ཅིག་",
              phonetics: "thob gyour tchik",
              translation: "qu'ils atteignent",
            },
          ],
        },
        {
          id: "ch-th-conc-8",
          type: "normal" as const,
          tibetan: "དགེ་རྩ་ཐམས་ཅད་གཅིག་བསྡུས་ཏེ༔",
          phonetics: "Gué tsa / tamtché / tchik du té",
          translation: "Toutes les racines de vertu rassemblées,",
          words: [
            {
              tibetan: "དགེ་རྩ་",
              phonetics: "Gué tsa",
              translation: "les racines de vertu",
            },
            { tibetan: "ཐམས་ཅད་", phonetics: "tamtché", translation: "toutes" },
            {
              tibetan: "གཅིག་བསྡུས་ཏེ་",
              phonetics: "tchik du té",
              translation: "rassemblées",
            },
          ],
        },
        {
          id: "ch-th-conc-9",
          type: "normal" as const,
          tibetan: "བདག་གི་རྒྱུད་ལ་སྨིན་གྱུར་ཅིག༔",
          phonetics: "Da gui / gyu la / mingyour / tchik",
          translation: "Qu'elles mûrissent en ma continuité!",
          words: [
            { tibetan: "བདག་གི་", phonetics: "Da gui", translation: "de moi" },
            {
              tibetan: "རྒྱུད་ལ་",
              phonetics: "gyu la",
              translation: "en la continuité",
            },
            {
              tibetan: "སྨིན་གྱུར་",
              phonetics: "mingyour",
              translation: "mûrissent",
            },
            { tibetan: "ཅིག་", phonetics: "tchik", translation: "qu'elles" },
          ],
        },
        {
          id: "ch-th-conc-10",
          type: "normal" as const,
          tibetan: "སྒྲིབ་གཉིས་དག་ནས་ཚོགས་རྫོགས་ཏེ༔",
          phonetics: "Drip nyi / dag né / tsog / djog té",
          translation:
            "[Que] les deux voiles [soient] purifiés, [que] les accumulations [soient] parachevées,",
          words: [
            {
              tibetan: "སྒྲིབ་གཉིས་",
              phonetics: "Drip nyi",
              translation: "les deux voiles",
            },
            { tibetan: "དག་ནས་", phonetics: "dag né", translation: "purifiés" },
            {
              tibetan: "ཚོགས་",
              phonetics: "tsog",
              translation: "les accumulations",
            },
            {
              tibetan: "རྫོགས་ཏེ་",
              phonetics: "djog té",
              translation: "parachevées",
            },
          ],
        },
        {
          id: "ch-th-conc-11",
          type: "normal" as const,
          tibetan: "ཚེ་རིང་ནད་མེད་ཉམས་རྟོགས་འཕེལ༔",
          phonetics: "Tséring / né mé / nyam / tog / pel",
          translation:
            "Que longue vie, bonne santé, expérience, réalisations s'accroissent!",
          words: [
            {
              tibetan: "ཚེ་རིང་",
              phonetics: "Tséring",
              translation: "longue vie",
            },
            {
              tibetan: "ནད་མེད་",
              phonetics: "né mé",
              translation: "bonne santé",
            },
            { tibetan: "ཉམས་", phonetics: "nyam", translation: "expérience" },
            {
              tibetan: "རྟོགས་",
              phonetics: "tog",
              translation: "réalisations",
            },
            {
              tibetan: "འཕེལ་",
              phonetics: "pel",
              translation: "s'accroissent",
            },
          ],
        },
        {
          id: "ch-th-conc-12",
          type: "normal" as const,
          tibetan: "ཚེ་འདིར་ས་བཅུ་ནོན་གྱུར་ཅིག༔",
          phonetics: "Tsé dir / sa tchou / neun gyour tchik",
          translation: "En cette vie, que la 10ème terre soit atteinte!",
          words: [
            {
              tibetan: "ཚེ་འདིར་",
              phonetics: "Tsé dir",
              translation: "en cette vie",
            },
            {
              tibetan: "ས་བཅུ་",
              phonetics: "sa tchou",
              translation: "la 10ème terre",
            },
            {
              tibetan: "ནོན་གྱུར་ཅིག་",
              phonetics: "neun gyour tchik",
              translation: "que [elle] soit atteinte",
            },
          ],
        },
        {
          id: "ch-th-conc-13",
          type: "normal" as const,
          tibetan: "ནམ་ཞིག་ཚེ་འཕོས་གྱུར་མ་ཐག༔",
          phonetics: "Nam chig / tsé / peu / gyour ma thag",
          translation: "Dès que nous aurons quitté ce corps, instantanément,",
          words: [
            {
              tibetan: "ནམ་ཞིག་",
              phonetics: "Nam chig",
              translation: "instantanément",
            },
            { tibetan: "ཚེ་", phonetics: "tsé", translation: "ce corps" },
            { tibetan: "འཕོས་", phonetics: "peu", translation: "quitté" },
            {
              tibetan: "གྱུར་མ་ཐག་",
              phonetics: "gyour ma thag",
              translation: "dès que",
            },
          ],
        },
        {
          id: "ch-th-conc-14",
          type: "normal" as const,
          tibetan: "བདེ་བ་ཅན་དུ་སྐྱེ་གྱུར་ཅིག༔",
          phonetics: "Déwachen / du / kyé / gyour tchik",
          translation: "Que nous prenions renaissance en Sukhavati!",
          words: [
            {
              tibetan: "བདེ་བ་ཅན་",
              phonetics: "Déwachen",
              translation: "Sukhavati",
            },
            { tibetan: "དུ་", phonetics: "du", translation: "en" },
            { tibetan: "སྐྱེ་", phonetics: "kyé", translation: "renaissance" },
            {
              tibetan: "གྱུར་ཅིག་",
              phonetics: "gyour tchik",
              translation: "que nous prenions",
            },
          ],
        },
        {
          id: "ch-th-conc-15",
          type: "normal" as const,
          tibetan: "སྐྱེས་ནས་པདྨ་ཁ་བྱེ་སྟེ༔",
          phonetics: "Kyé né / péma / ka / djé té",
          translation:
            "Une fois né là-bas, que le lotus s'ouvre et s'épanouisse!",
          words: [
            {
              tibetan: "སྐྱེས་ནས་",
              phonetics: "Kyé né",
              translation: "une fois né",
            },
            { tibetan: "པདྨ་", phonetics: "péma", translation: "le lotus" },
            { tibetan: "ཁ་", phonetics: "ka", translation: "s'ouvre" },
            {
              tibetan: "བྱེ་སྟེ་",
              phonetics: "djé té",
              translation: "s'épanouisse",
            },
          ],
        },
        {
          id: "ch-th-conc-16",
          type: "normal" as const,
          tibetan: "ལུས་རྟེན་དེ་ལ་སངས་རྒྱས་ཤོག༔",
          phonetics: "Lu ten / dé la / sangyé / sho",
          translation:
            "Puissions-nous atteindre l'éveil avec le support de ce corps!",
          words: [
            {
              tibetan: "ལུས་རྟེན་",
              phonetics: "Lu ten",
              translation: "le support de ce corps",
            },
            { tibetan: "དེ་ལ་", phonetics: "dé la", translation: "avec" },
            {
              tibetan: "སངས་རྒྱས་",
              phonetics: "sangyé",
              translation: "l'éveil",
            },
            {
              tibetan: "ཤོག",
              phonetics: "sho",
              translation: "puissions-nous atteindre",
            },
          ],
        },
        {
          id: "ch-th-conc-17",
          type: "normal" as const,
          tibetan: "བྱང་ཆུབ་ཐོབ་ནས་ཇི་སྲིད་དུ༔",
          phonetics: "Djang tchoub / thob né / dji si tou",
          translation:
            "Ayant atteint l'éveil, jusqu'à [ce que le samsara soit vidé],",
          words: [
            {
              tibetan: "བྱང་ཆུབ་",
              phonetics: "Djang tchoub",
              translation: "l'éveil",
            },
            {
              tibetan: "ཐོབ་ནས་",
              phonetics: "thob né",
              translation: "ayant atteint",
            },
            {
              tibetan: "ཇི་སྲིད་དུ་",
              phonetics: "dji si tou",
              translation: "jusqu'à",
            },
          ],
        },
        {
          id: "ch-th-conc-18",
          type: "normal" as const,
          tibetan: "སྤྲུལ་པས་འགྲོ་བ་འདྲེན་པར་ཤོག༔",
          phonetics: "Trulpé / drowa / dren par / sho",
          translation: "Puissent nos manifestations guider les êtres!",
          words: [
            {
              tibetan: "སྤྲུལ་པས་",
              phonetics: "Trulpé",
              translation: "nos manifestations",
            },
            {
              tibetan: "འགྲོ་བ་",
              phonetics: "drowa",
              translation: "les êtres",
            },
            {
              tibetan: "འདྲེན་པར་",
              phonetics: "dren par",
              translation: "guider",
            },
            { tibetan: "ཤོག", phonetics: "sho", translation: "puissent" },
          ],
        },
        {
          id: "ch-th-conc-19",
          type: "instructions" as const,
          tibetan:
            "ཅེས་སྤྲུལ་སྐུ་མི་འགྱུར་རྡོ་རྗེ་དགུང་ལོ་བཅུ་གཉིས་པ་ཁྲུམ་སྟོད་ཟླ་བའི་ཡར་ཚེས་ལ་ཆོས་སྐུ་སྣང་བ་མཐའ་ཡས་ཀྱིས་བཀའ་སྩལ་བའོ།།",
          phonetics: "",
          translation:
            "Ce texte fut transmis par le Dharmakaya Amitabha durant la première moitié du 8ème mois du calendrier Tibétain à Tulku Mingyour Dordjé quand il avait douze ans.",
          words: [],
        },
        {
          id: "ch-th-conc-20",
          type: "colophon" as const,
          tibetan: "ས་མ་ཡ་རྒྱ་རྒྱ་རྒྱ༔",
          phonetics: "",
          translation: "",
          words: [],
        },
      ],
    },

    {
      id: "ch-dedicace",
      title: "Dédicace",
      phrases: [
        {
          id: "ch-ded-1",
          type: "normal",
          tibetan: "།བསོད་ནམས་འདི་ཡིས་ཐམས་ཅད་གཟིགས་པ་ཉིད།",
          phonetics: "seunam / di yi / t'am tché / zik pa nyi",
          translation: "Par ce mérite, la connaissance de toutes choses,",
          words: [
            {
              tibetan: "བསོད་ནམས་",
              phonetics: "seunam",
              translation: "mérite",
            },
            { tibetan: "འདི་ཡིས་", phonetics: "di yi", translation: "par ce" },
            {
              tibetan: "ཐམས་ཅད་",
              phonetics: "t'am tché",
              translation: "toutes choses",
            },
            {
              tibetan: "གཟིགས་པ་ཉིད།",
              phonetics: "zik pa nyi",
              translation: "la connaissance",
            },
          ],
        },
        {
          id: "ch-ded-2",
          type: "normal",
          tibetan: "།ཐོབ་ནས་ཉེས་པའི་དགྲ་རྣམས་ཕམ་བྱས་ནས།",
          phonetics: "top né / nyé pé / dra nam / p'am djé né",
          translation: "Puissé-je l'obtenir, et vaincre les ennemis néfastes.",
          words: [
            {
              tibetan: "ཐོབ་ནས་",
              phonetics: "top né",
              translation: "l'obtenir",
            },
            {
              tibetan: "ཉེས་པའི་",
              phonetics: "nyé pé",
              translation: "néfastes",
            },
            {
              tibetan: "དགྲ་རྣམས་",
              phonetics: "dra nam",
              translation: "les ennemis",
            },
            {
              tibetan: "ཕམ་བྱས་ནས།",
              phonetics: "p'am djé né",
              translation: "vaincre",
            },
          ],
        },
        {
          id: "ch-ded-3",
          type: "normal",
          tibetan: "སྐྱེ་རྒ་ན་འཆིའི་རྦ་རླབས་འཁྲུག་པ་ཡི།",
          phonetics: "kyé ga / na tchi / ba lap / t'ouk pa yi",
          translation:
            "Ballotés par les vagues de la naissance, de la maladie, de la vieillesse et de la mort",
          words: [
            {
              tibetan: "སྐྱེ་",
              phonetics: "kyé",
              translation: "naissance",
            },
            {
              tibetan: "རྒ་",
              phonetics: "ga",
              translation: "vieillesse",
            },
            {
              tibetan: "ན་",
              phonetics: "na",
              translation: "maladie",
            },
            {
              tibetan: "འཆིའི་",
              phonetics: "tchi",
              translation: "mort",
            },
            {
              tibetan: "རྦ་རླབས་",
              phonetics: "ba lap",
              translation: "les vagues",
            },
            {
              tibetan: "འཁྲུག་པ་ཡི།",
              phonetics: "t'ouk pa yi",
              translation: "ballotés par",
            },
          ],
        },
        {
          id: "ch-ded-4",
          type: "normal",
          tibetan: "།སྲིད་པའི་མཚོ་ལས་འགྲོ་བ་སྒྲོལ་བར་ཤོག",
          phonetics: "si pé / tso lé / dro oua / dreul ouar chok",
          translation:
            "Puissé-je libérer ces êtres [errant] dans l'océan des destinées,",
          words: [
            {
              tibetan: "སྲིད་པའི་",
              phonetics: "si pé",
              translation: "des destinées",
            },
            {
              tibetan: "མཚོ་ལས་",
              phonetics: "tso lé",
              translation: "dans l'océan",
            },
            {
              tibetan: "འགྲོ་བ་",
              phonetics: "dro oua",
              translation: "ces êtres",
            },
            {
              tibetan: "སྒྲོལ་བར་ཤོག",
              phonetics: "dreul ouar chok",
              translation: "puissé-jé libérer",
            },
          ],
        },
        {
          id: "ch-ded-5",
          type: "normal",
          tibetan: "།བྱང་ཆུབ་སེམས་ནི་རིན་པོ་ཆེ།།",
          phonetics: "djang tchoub sem ni / rinpoché",
          translation: "Bodhicitta si précieuse,",
          words: [
            {
              tibetan: "བྱང་ཆུབ་སེམས་ནི་",
              phonetics: "djang tchoub sem ni",
              translation: "Bodhicitta",
            },
            {
              tibetan: "རིན་པོ་ཆེ་",
              phonetics: "rinpoché",
              translation: "si précieuse",
            },
          ],
        },
        {
          id: "ch-ded-6",
          type: "normal",
          tibetan: "།མ་སྐྱེས་པ་རྣམས་སྐྱེས་གྱུར་ཅིག།",
          phonetics: "ma kyé / pa nam kyé / gyour chik",
          translation: "Absente, puisse-t-elle émerger!",
          words: [
            {
              tibetan: "མ་སྐྱེས་པ་རྣམས་",
              phonetics: "ma kyé pa nam",
              translation: "Absente",
            },
            {
              tibetan: "སྐྱེས་",
              phonetics: "kyé",
              translation: "émerger",
            },
            {
              tibetan: "གྱུར་ཅིག་",
              phonetics: "gyour chik",
              translation: "puisse-t-elle",
            },
          ],
        },
        {
          id: "ch-ded-7",
          type: "normal",
          tibetan: "།སྐྱེས་པ་ཉམས་པ་མེད་པ་དང༌།།",
          phonetics: "kyé pa / nyam pa / mé pa tang",
          translation: "Présente, ne jamais décliner,",
          words: [
            {
              tibetan: "སྐྱེས་པ་",
              phonetics: "kyé pa",
              translation: "Présente",
            },
            {
              tibetan: "ཉམས་པ་",
              phonetics: "nyam pa",
              translation: "décliner",
            },
            {
              tibetan: "མེད་པ་དང་",
              phonetics: "mé pa tang",
              translation: "ne jamais",
            },
          ],
        },
        {
          id: "ch-ded-8",
          type: "normal",
          tibetan: "།གོང་ནས་གོང་དུ་འཕེལ་བར་ཤོག།",
          phonetics: "gong nas / gong tu / pel war shok",
          translation: "[Mais] croître, encore et encore!",
          words: [
            {
              tibetan: "གོང་ནས་",
              phonetics: "gong nas",
              translation: "encore",
            },
            {
              tibetan: "གོང་དུ་",
              phonetics: "gong tu",
              translation: "et encore",
            },
            {
              tibetan: "འཕེལ་བར་ཤོག་",
              phonetics: "pel war shok",
              translation: "croître",
            },
          ],
        },
      ],
    },
  ],
};

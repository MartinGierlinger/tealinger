export interface TeaProduct {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: 'Schwarztee' | 'Grüntee' | 'Weißer Tee' | 'Oolong Tee' | 'Kräutertee' | 'Früchtetee' | 'Zubehör';
  description: string;
  image: string; // Dateiname im public/images/ Ordner
  isBestSeller: boolean;
  inStock: boolean;
  preparation: {
    temp: number; // °C
    time: number; // Minuten
    amount: string; // Dosierung
  };
}

export const products: TeaProduct[] = [
  // Schwarztee
  {
    id: "t-001",
    name: "Royal Earl Grey",
    slug: "royal-earl-grey",
    price: 9.90,
    category: "Schwarztee",
    description: "Ein Klassiker neu interpretiert. Hochwertiger Ceylon-Tee veredelt mit echtem Bergamotte-Öl aus Kalabrien. Perfekt für den Nachmittag.",
    image: "EarlGrey.jpg",
    isBestSeller: true,
    inStock: true,
    preparation: { temp: 95, time: 3, amount: "2g" }
  },
  {
    id: "t-002",
    name: "Assam Stronghold",
    slug: "assam-stronghold",
    price: 8.50,
    category: "Schwarztee",
    description: "Kräftig, malzig und dunkel. Dieser Assam aus zweiter Pflückung ist der ideale Wachmacher und verträgt sich hervorragend mit einem Schuss Milch.",
    image: "Assam.jpg",
    isBestSeller: false,
    inStock: true,
    preparation: { temp: 100, time: 4, amount: "2.5g" }
  },
  {
    id: "t-003",
    name: "Darjeeling First Flush",
    slug: "darjeeling-first-flush",
    price: 14.90,
    category: "Schwarztee",
    description: "Der 'Champagner unter den Tees'. Eine Frühlingspflückung mit heller Tassenfarbe und einem blumigen, spritzigen Aroma.",
    image: "Darjeeling.jpg",
    isBestSeller: false,
    inStock: true,
    preparation: { temp: 90, time: 2, amount: "2g" }
  },

  // Grüntee
  {
    id: "t-004",
    name: "Sencha Kyoto",
    slug: "sencha-kyoto",
    price: 12.50,
    category: "Grüntee",
    description: "Ein klassischer japanischer Sencha. Gedämpft, mit nadelartigen Blättern und einem frisch-grasigen Geschmack mit Umami-Note.",
    image: "Sencha.jpg",
    isBestSeller: true,
    inStock: true,
    preparation: { temp: 70, time: 2, amount: "3g" }
  },
  {
    id: "t-005",
    name: "Jasmin Dragon Pearls",
    slug: "jasmin-dragon-pearls",
    price: 16.90,
    category: "Grüntee",
    description: "Kunstvoll von Hand zu kleinen Perlen gerollte Teeblätter, die mit frischen Jasminblüten aromatisiert wurden. Entfalten sich wunderschön im Wasser.",
    image: "JasminTea.jpg",
    isBestSeller: false,
    inStock: true,
    preparation: { temp: 80, time: 3, amount: "3-4 Perlen" }
  },
  {
    id: "t-006",
    name: "Ceremonial Matcha",
    slug: "ceremonial-matcha",
    price: 24.90,
    category: "Grüntee",
    description: "Feinst vermahlener Grüntee aus beschatteten Tencha-Blättern. Leuchtend grün, cremig und süßlich im Abgang. Geeignet für die Teezeremonie.",
    image: "Matcha.jpg",
    isBestSeller: true,
    inStock: false,
    preparation: { temp: 80, time: 0, amount: "1-2g (Bambuslöffel)" }
  },

  // Oolong & Weißer Tee
  {
    id: "t-007",
    name: "Iron Goddess Oolong",
    slug: "iron-goddess-oolong",
    price: 15.50,
    category: "Oolong Tee",
    description: "Tie Guan Yin ist ein halbfermentierter Tee mit komplexem Charakter. Blumige Orchideen-Noten treffen auf eine cremige Textur.",
    image: "Oolong.jpg",
    isBestSeller: false,
    inStock: true,
    preparation: { temp: 90, time: 3, amount: "4g" }
  },
  {
    id: "t-008",
    name: "Silver Needle",
    slug: "silver-needle",
    price: 19.90,
    category: "Weißer Tee",
    description: "Weißer Tee von höchster Güte. Besteht nur aus den ungeöffneten Blattknospen. Sehr mild, weich und mit feiner Süße.",
    image: "WhiteTea.jpg",
    isBestSeller: false,
    inStock: true,
    preparation: { temp: 80, time: 5, amount: "3g" }
  },

  // Kräuter & Früchte
  {
    id: "t-009",
    name: "Midnight Mint",
    slug: "midnight-mint",
    price: 7.90,
    category: "Kräutertee",
    description: "Eine erfrischende Mischung aus Pfefferminze und Nanaminze. Koffeinfrei und perfekt nach dem Essen.",
    image: "Minze.jpg",
    isBestSeller: false,
    inStock: true,
    preparation: { temp: 100, time: 6, amount: "3g" }
  },
  
  {
    id: "t-010",
    name: "Rooibos Vanilla Cloud",
    slug: "rooibos-vanilla",
    price: 8.90,
    category: "Kräutertee",
    description: "Südafrikanischer Rooibos verfeinert mit echter Bourbon-Vanille. Natürlich süß und komplett koffeinfrei.",
    image: "Rooibos.jpg",
    isBestSeller: true,
    inStock: true,
    preparation: { temp: 100, time: 5, amount: "3g" }
  },
  {
    id: "t-011",
    name: "Sleepy Chamomile",
    slug: "sleepy-chamomile",
    price: 6.50,
    category: "Kräutertee",
    description: "Ganze Kamillenblüten von hoher Qualität. Wirkt beruhigend und entspannend. Der ideale Begleiter für den Abend.",
    image: "Kamille.jpg",
    isBestSeller: false,
    inStock: true,
    preparation: { temp: 100, time: 8, amount: "4g" }
  },
  {
    id: "t-012",
    name: "Forest Berry Smash",
    slug: "forest-berry",
    price: 8.90,
    category: "Früchtetee",
    description: "Eine explosive Mischung aus Waldbeeren, Hibiskus und Hagebutte. Schmeckt heiß oder auch kalt als Eistee hervorragend.",
    image: "Früchtetee.jpg",
    isBestSeller: false,
    inStock: true,
    preparation: { temp: 100, time: 10, amount: "5g" }
  },
  {
    id: "t-013",
    name: "Tealinger Haferl",
    slug: "tealinger-haferl",
    price: 29.90,
    category: "Zubehör",
    description: "Einzigartiges Haferl für den vielseitigen Genuss und perfekt für einen ruhigen Nachmittag. Am beliebtesten gefüllt mit Tealinger's erstklassigem Tee",
    image: "Haferl.png",
    isBestSeller: false,
    inStock: true,
    preparation: { temp: 0, time: 0, amount: "0" }
  },
{
    id: "t-014",
    name: "Tealinger Teedose {Spezial}",
    slug: "tealinger-teedose",
    price: 49.90,
    category: "Zubehör",
    description: "Tealingers Teedose mit außergewöhnlichem Design, für erstklassigen Tee. Für den Tee als auch als Dekoration wunderbar verwendbar.",
    image: "TealingerTeedose.png",
    isBestSeller: true,
    inStock: true,
    preparation: { temp: 0, time: 0, amount: "0" }
  }
];
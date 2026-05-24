const rules = [
  {
    id: "ingen-hue-før-student",
    classic: true,
    icon: "fa-solid fa-graduation-cap",
    name: "Tag ikke huen på før du bliver student",
    desc: "Det bringer ulykke!",
    detail: "Det siges dog, at hvis man hopper over huen 3 gange baglens, at denne ulykke udviskes!",
    example: ""
  },
  {
    id: "hilsner-i-huen",
    classic: true,
    icon: "fa-solid fa-signature",
    name: "Hilsner i huen",
    desc: "Hilsner i huen giver lykke",
    detail: "Ønsk dine kammerater held og lykke ved at skrive i deres hue. Dette kan også være sjovt at genlæse om 20, 30 eller 40 år!",
    example: ""
  },
  {
    id: "hvem-skal-give-en-kasse",
    icon: "fa-solid fa-martini-glass",
    name: "Hvem skal give en kasse til studentervognsturen?",
    desc: "Listen er lang!",
    detail: "Du skal give en kasse til din klassekammerater hvis du: 1. har det største huemål, 2. har det mindste huemål, 3. har klassens højeste gennemsnit eller 4. har klasses laveste gennemsnit",
    example: ""
  },
  {
    id: "hueeksamen",
    classic: true,
    icon: "fa-solid fa-7",
    name: "Hueeksamens karakter",
    desc: "Din hueeksamens karakter skal skrives i midten af din studenterhue",
    detail: "Din sidste eksamen kaldes din hueeksamen. Din karakter fra denne eksamen skal skrives i midten af din studenterhue!",
    example: ""
  },
  {
    id: "12-til-hueeksamen",
    classic: true,
    icon: "fa-solid fa-graduation-cap",
    name: "12 til hueeksamen",
    desc: "Får du 12 i karakter til din sidste eksamen, skal du løbe efter studentervognen til det første stop!",
    detail: "",
    example: ""
  },
  {
    id: "dumper-en-eksamen",
    classic: true,
    icon: "fa-solid fa-0",
    name: "Dumper en eksamen",
    desc: "Dumper du en eksamen skal hageremmen bruges og du skal løbe foran studentervognen til det første stop!",
    detail: "",
    example: ""
  },
  {
    id: "bid-i-skyggen",
    classic: true,
    icon: "fa-solid fa-graduation-cap",
    name: "Bid i skyggen",
    desc: "Betyder held og lykke!",
    detail: "Bid i din vens skygge for at ønske dem held og lykke fremover!",
    example: ""
  },
  {
    id: "hak-i-huen",
    icon: "fa-solid fa-scissors",
    name: "Hak i huen",
    desc: "Kaster man op med huen på, skal der klippes et hak i skyggen",
    detail: "Dette klip kan gentages flere gange, så længe du kaster op, skal du klippe et hak!",
    example: ""
  },
  {
    id: "udpumpning",
    icon: "fa-solid fa-graduation-cap",
    name: "Udpumpning",
    desc: "Sendes man til udpumpning skal hele skyggen klippes af!",
    detail: "Da man i dag ikke længere udpumpes, gælder dette også, hvis man ender på skadestuen på grund af sit alkoholindtag!",
    example: ""
  },
  {
    id: "udpumpning-sygeplejeske",
    icon: "fa-solid fa-graduation-cap",
    name: "Scor en sygeplejerske",
    desc: "Scorer man en sygeplejerske i forbindelse med ens sygehusbesøg skal hageremmen fjernes",
    detail: "",
    example: ""
  },
  {
    id: "kæreste",
    icon: "fa-solid fa-heart",
    name: "Kærestens navn",
    desc: "Har man en kæreste skrives kærestens navn ved siden af hueeksamenskarakteren i midten af huen",
    detail: "Ofte skriver kæresten selv sit navn i kærestens studenterhue",
    example: ""
  },
  {
    id: "aftaler",
    icon: "fa-solid fa-phone",
    name: "Frække aftaler",
    desc: "Skriv en fræk besked eller et telefonnummer under svedremmen",
    detail: "",
    example: ""
  },
  {
    id: "drik-af-huen",
    icon: "fa-solid fa-graduation-cap",
    name: "Drik af huen",
    desc: "Tisser studentern i bukserne skal studenterhuen bruges som et glas!",
    detail: "Gælder også hvis man kun tisser en smule i bukserne!",
    example: ""
  },
  {
    id: "slår-op",
    icon: "fa-solid fa-heart-crack",
    name: "Hvis kæresten slår op",
    desc: "Så skal metalknapperne i siden af studenterhuen klippes af!",
    detail: "",
    example: ""
  },
  {
    id: "5-telefonnumre",
    icon: "fa-solid fa-5",
    name: "Mere end 5 telefonnumre?",
    desc: "Har du mere end 5 telefonnumre i svedremmen, må det hvide yderbetræk vendes rundt!",
    detail: "",
    example: ""
  },
  {
    id: "kys-med-person-af-samme-køn",
    icon: "fa-solid fa-face-kiss-wink-heart",
    name: "Kys med person af samme køn",
    desc: "Kysser du med en person af samme køn må krokaden vendes på hovedet!",
    detail: "Gælder også tantekys!",
    example: ""
  },
  {
    id: "scor-person-af-samme-køn",
    icon: "fa-solid fa-person-half-dress",
    name: "Scor person af samme køn",
    desc: "Scorer du en person af samme køn skal krokaden tages helt af!",
    detail: "",
    example: ""
  },
  {
    id: "scor-lærer",
    icon: "fa-solid fa-chalkboard-user",
    name: "Scor en lærer",
    desc: "Scorer du en lærer, må du fjerne det hvide yderbetræk",
    detail: "",
    example: ""
  },
  {
    id: "ølkapsel",
    icon: "fa-solid fa-beer-mug-empty",
    name: "Ølkapsel som krokade",
    desc: "Drik 24 gensande på 24 timer og du må erstatte din krokade med en ølkapsel!",
    detail: "",
    example: ""
  }
];

initHuePage(rules, {
  searchLabel: "Søg i hue-regler",
  searchPlaceholder: "Søg på navn eller beskrivelse…",
  classicTitle: "De vigtigste",
  classicAria: "De vigtigste hue-regler",
  restAria: "Øvrige hue-regler",
  noResults: "Ingen hue-regler matcher din søgning.",
  countLabel: "hue-regler",
  modalContact: 'Kender du andre regler eller variationer? Skriv til <a href="mailto:info@hueklip.dk">info@hueklip.dk</a>.'
});

const clips = [
  {
    id: "kassen",
    classic: true,
    icon: "fa-solid fa-square",
    name: "Kassen",
    desc: "Drik 24 genstande på 24 timer",
    detail: "Har du hvad der skal til? 24 genstande på 24 timer og Firkants-klippet er dit! Laver du denne to dage i streg, kan du lave højhuset, hvor der placeres to kasser ovenpå hinanden!",
    example: ""
  },
  {
    id: "firkanten",
    classic: true,
    icon: "fa-solid fa-square",
    name: "Firkanten",
    desc: "Kys med en person du ikke har kysset med før",
    detail: "Find læbepomaden frem og kys en person du ikke har kysset med før! Tillykke du har lige optjent Firkanten!",
    example: ""
  },
  {
    id: "trekanten",
    classic: true,
    icon: "fa-solid fa-play",
    rotation: -90,
    name: "Trekanten",
    desc: "Fest indtil solopgang",
    detail: "Kan du holde dig vågen hele natten? Du får måske brug for en energidrik eller to, men fester du til solopgang, så har du fortjent en Trekant i huen!",
    example: ""
  },
  {
    id: "huset",
    classic: true,
    icon: "fa-solid fa-house",
    name: "Huset",
    desc: "Huset og trekanten i en",
    detail: "Har du drukket 24 genstande på 25 timer og herefter festet til solopgang så har du vidst fortjent Huset! og en god lur",
    example: ""
  },
  {
    id: "lynet",
    classic: true,
    icon: "fa-solid fa-bolt-lightning",
    name: "Lynet",
    desc: "Sex med huen på",
    detail: "Handler ikke om at komme hurtigst, men bare om at komme! Har du haft sex med huen på? Lyenet er dit!",
    example: ""
  },
  {
    id: "hjertet",
    classic: true,
    icon: "fa-solid fa-heart",
    name: "Hjertet",
    desc: "Sex med sin kæreste med huen på",
    detail: "Har du og din kæreste dyrket lagengymnastik med huen på? Et Hjerte til jer hver!",
    example: ""
  },
  {
    id: "bølgen",
    classic: true,
    icon: "fa-solid fa-water",
    name: "Bølgen",
    desc: "Nøgenbadning med huen på",
    detail: "Tag dig en dykkert med huen på og optjen Bølgen!",
    example: ""
  },
  {
    id: "stjernen1",
    icon: "fa-solid fa-star",
    name: "Stjernen",
    desc: "Sov under nattehimlen",
    detail: "En nat under stjernerne fortjener dig Stjernen. OBS: Du skal sove direkte under stjernerne, og ikke i et telt eller lignende!",
    example: ""
  },
  {
    id: "rundkørslen",
    icon: "fa-solid fa-circle-notch",
    name: "Rundkørslen",
    desc: "Løb nøgen rundt i en rundkørsel!",
    detail: "Tager du en runde i en rundkørsel kun iført studenterhuen så har du fortjent digselv rundkørslen!",
    example: ""
  },
  {
    id: "kornet",
    icon: "fa-solid fa-wheat-awn",
    rotation: -45,
    name: "Kornet",
    desc: "Løb nøgen gennem en kornmark!",
    detail: "Smid tøjet, tag huen på og løb gennem en kornmark! Nu må du klippe Kornet. Husk også at tage et strå fra marken og placer det mellem huen og yderbetrækket!",
    example: ""
  },
  {
    id: "ubåden",
    icon: "fa-solid fa-ferry",
    name: "Ubåden",
    desc: "Tag en bong mens du er under vandet",
    detail: "VÆR FORSIGTIG! Bevis at du kan tage en bong under vandet og vis dit flotte Ubåds-klip frem!",
    example: ""
  },
  {
    id: "hammeren",
    icon: "fa-solid fa-hammer",
    name: "Hammeren",
    desc: "Lav basarmen uafbrudt i 15 minutter",
    detail: "Er det hårdt? Der skal squ være hårdt! Basarmen i 15 minutter er ikke for de svage. Bevis din styrke og bliv belønnet med Hammer-klippet",
    example: ""
  },
  {
    id: "flagermusen",
    icon: "fa-solid fa-bat",
    name: "Flagermusen",
    desc: "Tag en bong mens du er på hovedet!",
    detail: "VÆR FORSIGTIG! Kan du drikke en bong mens du er på hovedet? Så har du fortjent Flagermusen!",
    example: ""
  },
  {
    id: "pornostjernen",
    icon: "fa-solid fa-star",
    name: "Pornostjernen",
    desc: "Hav sex med en anden student på kamera!",
    detail: "Drømmer du om at starte en OnlyFans? Nu har du chancen! Opsæt et kamera og hav sex med en anden student (selvfølgelig med huen på!) så har du fortjent digselv Pornostjernen!",
    example: ""
  },
  {
    id: "flammen",
    icon: "fa-solid fa-fire",
    name: "Flammen",
    desc: "Tag en ølbong mens der er ild i huen!",
    detail: "VÆR FORSIGTIG! Det er ikke kun rødhårede der har ild i håret, det er også Flamme-klippet!",
    example: ""
  },
  {
    id: "kirken",
    icon: "fa-solid fa-church",
    name: "Kirken",
    desc: "Løb nøgen rundt om en kirke!",
    detail: "Løb nøgen rund om en kirke og ryg direkte i helved! men i det mindste har du Kirke-klippet",
    example: ""
  },
  {
    id: "kronen",
    icon: "fa-solid fa-crown",
    name: "Kronen",
    desc: "Løb nøgen rundt om din skole",
    detail: "Rektor bliver nok ikke glad, men Krone-klippet er et must have!",
    example: ""
  }
];

initHuePage(clips, {
  searchLabel: "Søg i hue-klip",
  searchPlaceholder: "Søg på navn eller beskrivelse…",
  classicTitle: "De klassiske",
  classicAria: "De klassiske hue-klip",
  restAria: "Øvrige hue-klip",
  noResults: "Ingen hue-klip matcher din søgning.",
  countLabel: "hue-klip",
  modalContact: 'Kender du variationer af dette klip? Skriv til <a href="mailto:info@hueklip.dk">info@hueklip.dk</a>.'
});

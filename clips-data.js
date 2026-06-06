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
    desc: "Hyg dig med huen på",
    detail: "Handler ikke om at komme hurtigst, men bare om at komme! Har du haft sex med huen på? Lyenet er dit!",
    example: ""
  },
  {
    id: "hjertet",
    classic: true,
    icon: "fa-solid fa-heart",
    name: "Hjertet",
    desc: "Hyg dig med din kæreste med huen på",
    detail: "Har du og din kæreste dyrket lagengymnastik med huen på? Et Hjerte til jer hver!",
    example: ""
  },
  {
    id: "bølgen",
    classic: true,
    icon: "fa-solid fa-water",
    name: "Bølgen",
    desc: "Badning i havet kun med huen på",
    detail: "VÆR FORSIGTIG! Tag dig en dykkert med huen på og optjen Bølgen! Bølgen bør ikke udføres i slem beruset tilstand, sørg for at du selv og andre er i stand til at udføre klippet. Pas på med at få huen under vandet, da det godt kan fjerne hilsnerne der er skrevet indeni.",
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
    desc: "Løb rundt i en rundkørsel kun iført studenterhuen!",
    detail: "Tager du en runde i en rundkørsel kun iført studenterhuen så har du fortjent digselv rundkørslen!",
    example: ""
  },
  {
    id: "kornet",
    icon: "fa-solid fa-wheat-awn",
    rotation: -45,
    name: "Kornet",
    desc: "Løb gennem en kornmark kun med studenterhuen på!",
    detail: "Smid tøjet, tag huen på og løb gennem en kornmark! Nu må du klippe Kornet. Husk også at tage et strå fra marken og placer det mellem huen og yderbetrækket!",
    example: ""
  },
  {
    id: "ubåden",
    icon: "fa-solid fa-ferry",
    name: "Ubåden",
    desc: "Tag en bong mens du er under vandet",
    detail: "VÆR FORSIGTIG! Bevis at du kan tage en bong under vandet og vis dit flotte Ubåds-klip frem! Ubåden bør ikke udføres i slem beruset tilstand, sørg for at du selv og andre er i stand til at udføre klippet. Pas på med at få huen under vandet, da det godt kan fjerne hilsnerne der er skrevet indeni.",
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
    icon: "fa-solid fa-person",
    rotation: 180,
    name: "Flagermusen",
    desc: "Tag en bong mens du er på hovedet!",
    detail: "VÆR FORSIGTIG! Kan du drikke en bong mens du er på hovedet? Så har du fortjent Flagermusen!",
    example: ""
  },
  {
    id: "pstjernen",
    icon: "fa-solid fa-star",
    name: "P-stjernen",
    desc: "Hyg dig med en anden student på kamera!",
    detail: "Drømmer du om at starte en online side? Nu har du chancen! Opsæt et kamera og hyg dig med en anden student (selvfølgelig med huen på!) så har du fortjent digselv P-stjernen!",
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
    desc: "Løb rundt om en kirke kun iført studenterhuen!",
    detail: "Løb rund om en kirk kun iført studenterhuen og ryg direkte i helved! men i det mindste har du Kirke-klippet",
    example: ""
  },
  {
    id: "kronen",
    icon: "fa-solid fa-crown",
    name: "Kronen",
    desc: "Løb rundt om din skole med kun studenterhuen på",
    detail: "Rektor bliver nok ikke glad, men Krone-klippet er et must have!",
    example: ""
  },
  {
    id: "koen",
    icon: "fa-solid fa-cow",
    name: "Koen",
    desc: "Tag en bong mens du rør ved en ko",
    detail: "Et jylland must have!",
    example: ""
  },
  {
    id: "cowboyen",
    icon: "fa-solid fa-hat-cowboy",
    name: "Hesten / Cowboyen",
    desc: "Tag en bong mens du rider på en hest!",
    detail: "Tør du sidde på en vaske ægte hest og tage en bong? Det må ikke være en kæphest!",
    example: ""
  },
  {
    id: "ol-ringene",
    icon: "fa-solid fa-circle-notch",
    name: "OL-Ringene",
    desc: "Lav rundkørslen i 5 forskellige rundkørsler!",
    detail: "Rundkørslen går ud på at skulle løbe rund i en rundkørsel kun iført studenterhuen. Gør du dette i 5 forskellige rundkørsler, må du klippe OL-Ringene i din svedrem!",
    example: ""
  },
  {
    id: "hajen",
    icon: "fa-solid fa-fish-fins",
    name: "Hajen",
    desc: "24 shots på 12 minutter",
    detail: "Drikker du som en haj? 24 shots på 12 minutter og Hajen er din! Nogle hardcore individer mener at Hajen er 24 shots på blot 2 minutter!",
    example: ""
  },
  {
    id: "fisken",
    icon: "fa-solid fa-fish",
    name: "Fisken",
    desc: "24 shots på 24 minutter",
    detail: "Kan du håndtere 24 shots på 24 minutter? Så har du forjent Fisken i din studenterhue!",
    example: ""
  },
  {
    id: "tragten",
    icon: "fa-solid fa-filter",
    name: "Tragten",
    desc: "Tag en bong mens du sidder på toilettet!",
    detail: "Direkte ind og direkte ud!",
    example: ""
  },
  {
    id: "ballonen",
    icon: "fa-solid fa-egg",
    name: "Ballonen",
    desc: "Tag helium mens du har huen på",
    detail: "Sjov stemme til en sjov aften. Sug helium til du får en sjov stemme og klip ballonen i din studenterhue!",
    example: ""
  },
  {
    id: "racerbilen",
    icon: "fa-solid fa-car",
    name: "Racerbilen",
    desc: "Tag en bong ud af et vindue på en bil mens den kører!",
    detail: "VÆR FORSIGTIG! Det bør absolut ikke være personen der kører bilen, der tager dette klip! Kør ikke i påvirket tilstand! Er du en vaske ægte spritbilist? Tag en bong ud af en bils vindue mens den kører og Racerbilen er klar til at blive klippet i din studenterhue!",
    example: ""
  },
  {
    id: "ægget",
    icon: "fa-solid fa-egg",
    name: "Ægget",
    desc: "Klip dit hår af under studentertiden!",
    detail: "Klar til et nyt look? For at må klippe Ægget i din studenterhue skal du klippe alt dit hår af!",
    example: ""
  },
  {
    id: "tyren",
    icon: "fa-solid fa-angle-down",
    name: "Tyren",
    desc: "Tag en bong mens du ridder på en rodeotyr!",
    detail: "En bong mens du ridder på en vaskeægte rodeotyr er kun for de seje og det fortjener da et klip! Får du taget en bong mens du sidder på en aktiv rodeotyr, må du klippe tyrens horn i din studenterhue! Pas på med at bære noget rødt!",
    example: ""
  },
  {
    id: "vejskiltet",
    icon: "fa-solid fa-octagon",
    name: "Vejskiltet",
    desc: "Tag en bong mens du sidder oppe i et vejskilt!",
    detail: "VÆR FORSIGTIG! Kan du klatre op i et vejskilt og tage en bong deroppe? Så fortjener du et Vejskilt klip i din hue! Bølgen bør ikke udføres i slem beruset tilstand, sørg for at du selv og andre er i stand til at udføre klippet!",
    example: ""
  },
  {
    id: "aben",
    icon: "fa-solid fa-tree",
    name: "Aben / Træet",
    desc: "Tag en bong mens du hænger i et træ!",
    detail: "VÆR FORSIGTIG! Kan du klatre op i et træ, hænge ned derfra og tage en bong? Så fortjener du et Abe klippet i din hue! Aben bør ikke udføres i slem beruset tilstand, sørg for at du selv og andre er i stand til at udføre klippet!",
    example: ""
  }
];

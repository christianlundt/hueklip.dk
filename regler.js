const rules = [
  {
    id: "huen-paa",
    classic: true,
    icon: "fa-solid fa-graduation-cap",
    name: "Huen skal sidde rigtigt",
    desc: "Studenterhuen bæres med båndet fremad",
    detail: "Båndet skal pege fremad, når huen bæres. Det er en grundlæggende regel, som de fleste studenter følger under eksamen og ved officielle lejligheder.",
    example: ""
  },
  {
    id: "ingen-klip-foer",
    classic: true,
    icon: "fa-solid fa-ban",
    name: "Ingen klip før studentertiden",
    desc: "Svedbåndet klippes først, når du har bestået",
    detail: "Traditionelt klipper man ikke i svedbåndet, før man har bestået sin studentereksamen og er blevet student. Klip i huen markerer oplevelser efter studentertiden.",
    example: ""
  },
  {
    id: "respekt-for-huen",
    classic: true,
    icon: "fa-solid fa-hand-holding-heart",
    name: "Respekt for huen",
    desc: "Huen behandles med respekt",
    detail: "Studenterhuen er et symbol på din uddannelse. Den må ikke kastes, trædes på eller behandles respektløst – heller ikke i festlige sammenhænge.",
    example: ""
  },
  {
    id: "klip-kun-efter",
    icon: "fa-solid fa-scissors",
    name: "Klip kun det, du har fortjent",
    desc: "Et klip skal afspejle en reel oplevelse",
    detail: "Hue-klip er ment som små minder og milepæle. Det anses som dårlig tone at klippe noget i huen, du ikke reelt har oplevet eller gennemført.",
    example: ""
  },
  {
    id: "fortael-ikke-loegn",
    icon: "fa-solid fa-scale-balanced",
    name: "Ærlighed om klip",
    desc: "Lad være med at lyve om dine klip",
    detail: "Når andre spørger om dine klip, forventes det, at du kan fortælle sandheden om oplevelsen. At opdigte klip underminerer traditionen.",
    example: ""
  },
  {
    id: "del-ikke-huen",
    icon: "fa-solid fa-user-lock",
    name: "Huen er personlig",
    desc: "Lån ikke din studenterhue ud permanent",
    detail: "Din studenterhue er personlig og følger dig gennem studietiden. Det er ualmindeligt at låne sin hue ud til andre på permanent basis.",
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

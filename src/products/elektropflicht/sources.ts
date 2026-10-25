// Official sources for the help page: EU law on EUR-Lex (in the app
// language), European Commission pages and the competent authorities and
// registers per country. Every link was opened and checked on 25.10.2026;
// the app server checks them every week (ElektroPflicht repo). Only
// official bodies or registers designated by law, no consultancies.

import type { ProductLang } from "./langs";

export type SourceType = "battery" | "weee" | "both" | "retail";
export type Source = { type: SourceType; title: string; url: string; urlEn?: string };

/** EU laws by CELEX number; EUR-Lex shows them in every official EU language. */
export const EU_LAWS = {
  batteryRegulation: "32023R1542",
  weeeDirective: "32012L0019",
  chargerDirective: "32022L2380",
  dataAct: "32023R2854",
} as const;
export type EuLaw = keyof typeof EU_LAWS;

// Norwegian and Icelandic aren't EU languages: those get English.
const NOT_ON_EUR_LEX = new Set<ProductLang>(["nb", "is"]);

export function eurLex(law: EuLaw, lang: ProductLang): string {
  const code = NOT_ON_EUR_LEX.has(lang) ? "EN" : lang.toUpperCase();
  return `https://eur-lex.europa.eu/legal-content/${code}/TXT/?uri=CELEX:${EU_LAWS[law]}`;
}

/** European Commission topic pages (English). */
export const EC_PAGES = {
  ecBatteries: "https://environment.ec.europa.eu/topics/waste-and-recycling/batteries_en",
  ecWeee: "https://environment.ec.europa.eu/topics/waste-and-recycling/waste-electrical-and-electronic-equipment-weee_en",
  ecCharger: "https://single-market-economy.ec.europa.eu/sectors/electrical-and-electronic-engineering-industries-eei/radio-equipment-directive-red/one-common-charging-solution-all_en",
  ecDataAct: "https://digital-strategy.ec.europa.eu/en/policies/data-act",
} as const;
export type EcPage = keyof typeof EC_PAGES;

export const COUNTRY_SOURCES: Record<string, Source[]> = {
  AT: [
    { type: "battery", title: "USP – Batterien: Pflichten der Hersteller, Eigenimporteure und Händler", url: "https://www.usp.gv.at/themen/betrieb-und-umwelt/abfallrecht/weitere-informationen-abfallrecht/abfall-und-produktregelungen/batterien/batterien-hersteller-eigenimporteure-haendler.html" },
    { type: "weee", title: "USP – Elektroaltgeräte", url: "https://www.usp.gv.at/themen/betrieb-und-umwelt/abfallrecht/weitere-informationen-abfallrecht/abfall-und-produktregelungen/elektroaltgeraete.html", urlEn: "https://www.usp.gv.at/en/themen/betrieb-und-umwelt/abfallrecht/weitere-informationen-abfallrecht/abfall-und-produktregelungen/elektroaltgeraete.html" },
    { type: "both", title: "EDM Portal (Registrierung/Meldungen)", url: "https://edm.gv.at/edm_portal/home.do" },
    { type: "retail", title: "USP – Pflichten für elektronische Marktplätze und Fulfilment-Dienstleister", url: "https://www.usp.gv.at/themen/betrieb-und-umwelt/abfallrecht/weitere-informationen-abfallrecht/abfall-und-produktregelungen/pflichten-elektronische-marktplaetze-und-fulfilment-dienstleister.html" },
  ],
  BE: [
    { type: "battery", title: "OVAM – Producent of invoerder van batterijen", url: "https://ovam.vlaanderen.be/producent-of-invoerder-van-batterijen" },
    { type: "battery", title: "SPW Environnement – Batteries", url: "https://environnement.wallonie.be/home/gestion-environnementale/dechets/categories-de-dechets-ressources/dechets-soumis-a-rep/batteries.html" },
    { type: "weee", title: "SPW Environnement – Équipements électriques et électroniques", url: "https://environnement.wallonie.be/home/gestion-environnementale/dechets/categories-de-dechets-ressources/dechets-soumis-a-rep/equipements-electriques-et-electroniques.html" },
    { type: "weee", title: "OVAM – Uitgebreide producentenverantwoordelijkheid (UPV)", url: "https://ovam.vlaanderen.be/upv" },
    { type: "retail", title: "be.brussels – Gestion des déchets et ressources dans votre entreprise", url: "https://be.brussels/fr/entreprendre-innover/votre-entreprise-et-lenvironnement/gestion-des-dechets/gestion-des-dechets-et-ressources-dans-votre-entreprise" },
  ],
  BG: [
    { type: "both", title: "ИАОС – Публични регистри и справки", url: "https://eea.government.bg/registri-spravki" },
    { type: "both", title: "МОСВ – Регистри (Отпадъци)", url: "https://www.moew.government.bg/bg/otpaduci/registri/" },
  ],
  CY: [
    { type: "both", title: "Τμήμα Περιβάλλοντος – Διευρυμένη Ευθύνη του Παραγωγού", url: "https://www.moa.gov.cy/moa/environment/environmentnew.nsf/page21_gr/page21_gr?OpenDocument=", urlEn: "https://www.moa.gov.cy/moa/environment/environmentnew.nsf/page21_en/page21_en?OpenDocument=" },
  ],
  CZ: [
    { type: "battery", title: "MŽP – Baterie a akumulátory", url: "https://mzp.gov.cz/cz/agenda/odpadove-hospodarstvi-a-cirkularni-ekonomika/zpetny-odber-vyrobku-a-obalu/baterie-a-akumulatory" },
    { type: "weee", title: "MŽP – Elektrozařízení", url: "https://mzp.gov.cz/cz/agenda/odpadove-hospodarstvi-a-cirkularni-ekonomika/zpetny-odber-vyrobku-a-obalu/elektrozarizeni" },
    { type: "both", title: "Návrh na zápis výrobce do Seznamu (gov.cz)", url: "https://portal.gov.cz/sluzby-vs/navrh-na-zapis-vyrobce-do-seznamu-S18750" },
  ],
  DE: [
    { type: "battery", title: "stiftung ear – Batterieregistrierung beantragen", url: "https://www.stiftung-ear.de/anleitungen/batterieregistrierung-beantragen/", urlEn: "https://www.stiftung-ear.de/en/guides/applying-for-battery-registration/" },
    { type: "weee", title: "stiftung ear – WEEE-Registrierung beantragen", url: "https://www.stiftung-ear.de/anleitungen/weee-registrierung-beantragen/", urlEn: "https://www.stiftung-ear.de/en/guides/applying-for-weee-registration/" },
    { type: "battery", title: "Umweltbundesamt – Batterien und Altbatterien", url: "https://www.umweltbundesamt.de/themen/abfall-ressourcen/produktverantwortung-in-der-abfallwirtschaft/batterien-altbatterien" },
    { type: "weee", title: "Umweltbundesamt – Elektroaltgeräte", url: "https://www.umweltbundesamt.de/themen/abfall-ressourcen/produktverantwortung-in-der-abfallwirtschaft/elektroaltgeraete" },
    { type: "battery", title: "BattDG (Gesetze im Internet)", url: "https://www.gesetze-im-internet.de/battdg/" },
    { type: "weee", title: "ElektroG (Gesetze im Internet)", url: "https://www.gesetze-im-internet.de/elektrog_2015/" },
    { type: "retail", title: "stiftung ear – Pflichten als Vertreiber von Elektrogeräten", url: "https://www.stiftung-ear.de/themenwelten/vertreiber/" },
  ],
  DK: [
    { type: "battery", title: "Dansk Producentansvar – Batterier", url: "https://producentansvar.dk/produkter-og-ansvar/batterier/", urlEn: "https://producentansvar.dk/en/products-and-responsibility/batteries/" },
    { type: "weee", title: "Dansk Producentansvar – Elektronik", url: "https://producentansvar.dk/produkter-og-ansvar/elektronik/", urlEn: "https://producentansvar.dk/en/products-and-responsibility/electronics/" },
    { type: "battery", title: "Miljøstyrelsen – Batterier (producentansvar)", url: "https://mst.dk/erhverv/groen-produktion-og-affald/producentansvar/batterier" },
    { type: "weee", title: "Miljøstyrelsen – Elektronik (producentansvar)", url: "https://mst.dk/erhverv/groen-produktion-og-affald/producentansvar/elektronik" },
  ],
  EE: [
    { type: "battery", title: "Kliimaministeerium – Patareid ja akud", url: "https://kliimaministeerium.ee/patareid-ja-akud" },
    { type: "both", title: "Kliimaministeerium – Laiendatud tootjavastutus ja probleemtooted", url: "https://kliimaministeerium.ee/elukeskkond-ringmajandus/poliitika-ja-seadusandlus/tootjavastutus-ja-probleemtooted", urlEn: "https://kliimaministeerium.ee/en/extendedproducerresponsibility" },
    { type: "both", title: "Probleemtooteregister (PROTO)", url: "https://proto.envir.ee/proto/main/welcome" },
  ],
  ES: [
    { type: "battery", title: "Registro nacional de productores de pilas y acumuladores (RII-PYA)", url: "https://industria.gob.es/registros-industriales/pilas/Paginas/Inicio.aspx" },
    { type: "weee", title: "Registro de aparatos eléctricos y electrónicos (RII-AEE)", url: "https://industria.gob.es/registros-industriales/RAEE/Paginas/Index.aspx" },
    { type: "battery", title: "MITECO – Pilas y acumuladores", url: "https://www.miteco.gob.es/es/calidad-y-evaluacion-ambiental/temas/prevencion-y-gestion-residuos/flujos/domesticos/fracciones/pilas-y-acumuladores.html" },
    { type: "weee", title: "MITECO – Aparatos eléctricos y electrónicos", url: "https://www.miteco.gob.es/es/calidad-y-evaluacion-ambiental/temas/prevencion-y-gestion-residuos/flujos/aparatos-electr.html" },
  ],
  FI: [
    { type: "both", title: "Ympäristö.fi – Tuottajavastuu", url: "https://www.ymparisto.fi/fi/luvat-ja-velvoitteet/tuottajavastuu", urlEn: "https://www.ymparisto.fi/en/permits-and-obligations/extended-producer-responsibility" },
  ],
  FR: [
    { type: "battery", title: "Ministère – Batteries (filière REP)", url: "https://www.ecologie.gouv.fr/politiques-publiques/batteries" },
    { type: "weee", title: "Ministère – Équipements électriques et électroniques (DEEE)", url: "https://www.ecologie.gouv.fr/politiques-publiques/equipements-electriques-electroniques-deee" },
    { type: "both", title: "ADEME SYDEREP (registre des producteurs REP)", url: "https://syderep.ademe.fr/" },
    { type: "both", title: "ADEME – Les filières à responsabilité élargie du producteur", url: "https://filieres-rep.ademe.fr/" },
    { type: "both", title: "Cadre général des filières REP", url: "https://www.ecologie.gouv.fr/politiques-publiques/cadre-general-filieres-responsabilite-elargie-producteurs" },
  ],
  GR: [
    { type: "both", title: "ΕΟΑΝ – Εθνικό Μητρώο Παραγωγών (ΕΜΠΑ): Συχνές ερωτήσεις", url: "https://eoan.gr/%CE%B5%CE%BC%CF%80%CE%B1/%CF%83%CF%85%CF%87%CE%BD%CE%AD%CF%82-%CE%B5%CF%81%CF%89%CF%84%CE%AE%CF%83%CE%B5%CE%B9%CF%82/" },
    { type: "weee", title: "ΕΟΑΝ – Απόβλητα ειδών Ηλεκτρικού & Ηλεκτρονικού Εξοπλισμού", url: "https://eoan.gr/%CE%B5%CE%BD%CE%B1%CE%BB%CE%BB%CE%B1%CE%BA%CF%84%CE%B9%CE%BA%CE%AE-%CE%B4%CE%B9%CE%B1%CF%87%CE%B5%CE%AF%CF%81%CE%B9%CF%83%CE%B7/%CE%B1%CF%80%CF%8C%CE%B2%CE%BB%CE%B7%CF%84%CE%B1-%CE%B5%CE%B9%CE%B4%CF%8E%CE%BD-%CE%B7%CE%BB%CE%B5%CE%BA%CF%84%CF%81%CE%B9%CE%BA%CE%BF%CF%8D-%CE%B7%CE%BB%CE%B5%CE%BA%CF%84%CF%81%CE%BF%CE%BD%CE%B9/" },
  ],
  HR: [
    { type: "both", title: "Registar proizvođača s proširenom odgovornosti (RPPO)", url: "https://www.fzoeu.hr/hr/registar-proizvodjaca-s-prosirenom-odgovornosti-rppo/10208", urlEn: "https://www.fzoeu.hr/en/register-of-producers-with-extended-responsibility-rppo/10208" },
    { type: "both", title: "gov.hr – Registar proizvođača s proširenom odgovornosti (RPPO)", url: "https://gov.hr/hr/registar-proizvodjaca-s-prosirenom-odgovornosti-rppo/2684" },
  ],
  HU: [
    { type: "both", title: "OKIRkapu – Kiterjesztett gyártói felelősség (útmutató)", url: "https://kapu.okir.hu/okirkapuugyfel/utmutato/28" },
  ],
  IE: [
    { type: "battery", title: "EPA – Batteries", url: "https://www.epa.ie/our-services/compliance--enforcement/waste/batteries/" },
    { type: "weee", title: "EPA – Waste electrical and electronic equipment (WEEE)", url: "https://www.epa.ie/our-services/compliance--enforcement/waste/weee/" },
    { type: "both", title: "Producer Register", url: "https://www.producerregister.ie/" },
    { type: "retail", title: "EPA – Information for distance sellers of EEE and batteries", url: "https://www.epa.ie/our-services/compliance--enforcement/waste/weee/information-for-distance-sellers-of-eee-and-batteries/" },
    { type: "retail", title: "EPA – Information for distributors of EEE and batteries", url: "https://www.epa.ie/our-services/compliance--enforcement/waste/weee/information-for-distributors-of-eee-and-batteries/" },
    { type: "retail", title: "EPA – Guidance for retailers of EEE and batteries (PDF)", url: "https://www.epa.ie/publications/compliance--enforcement/waste/Guidance-for-retailers-of-EEE-and-Batteries.pdf" },
  ],
  IS: [
    { type: "battery", title: "Umhverfis- og orkustofnun – Rafhlöður og rafgeymar", url: "https://ust.is/atvinnulif/eftirlit/rafhlodur-og-rafgeymar/" },
    { type: "weee", title: "Umhverfis- og orkustofnun – Raf- og rafeindatæki: Ábyrgð fyrirtækja", url: "https://ust.is/atvinnulif/eftirlit/raf-og-rafeindataeki/abyrgd-fyrirtaekja/" },
  ],
  IT: [
    { type: "battery", title: "RENAP – Registro Pile e Accumulatori", url: "https://www.renap.gov.it/it/registro-pile-e-accumulatori" },
    { type: "weee", title: "RENAP – Registro AEE", url: "https://www.renap.gov.it/it/registro-aee" },
    { type: "battery", title: "MASE – Registro Pile e Accumulatori", url: "https://www.mase.gov.it/portale/registro-pile-e-accumulatori" },
  ],
  LI: [
    { type: "both", title: "Amt für Umweltschutz", url: "https://www.llv.li/de/landesverwaltung/amt-fuer-umweltschutz" },
  ],
  LT: [
    { type: "both", title: "GPAIS – Gamintojų ir importuotojų sąvadas", url: "https://www.gpais.eu/" },
  ],
  LU: [
    { type: "battery", title: "emwelt.lu – Batteries et déchets de batteries", url: "https://environnement.public.lu/fr/emweltprozeduren/rep/rep-batteries.html" },
    { type: "weee", title: "emwelt.lu – Équipements électriques et électroniques et déchets d'EEE", url: "https://environnement.public.lu/fr/emweltprozeduren/Autorisations/Gestion_des_dechets_et_ressources/Dechets_d_equipements_electriques_et_electroniques.html" },
    { type: "weee", title: "Guichet.lu – Responsabilité élargie des producteurs d’EEE", url: "https://guichet.public.lu/fr/entreprises/urbanisme-environnement/dechets-subst-dangereuses/recyclage-valorisation-dechets/dechets-electriques.html", urlEn: "https://guichet.public.lu/en/entreprises/urbanisme-environnement/dechets-subst-dangereuses/recyclage-valorisation-dechets/dechets-electriques.html" },
  ],
  LV: [
    { type: "both", title: "LETERA – Elektrisko un elektronisko iekārtu ražotāju reģistrs", url: "https://www.letera.lv/projekts/elektrisko-un-elektronisko-iekartu-razotaju-registrs/" },
  ],
  MT: [
    { type: "battery", title: "ERA – Batteries and Accumulators and Waste Batteries and Accumulators", url: "https://era.org.mt/topic/batteries-and-accumulators-and-waste-batteries-and-accumulators/" },
    { type: "weee", title: "ERA – Electrical and Electronic Equipment", url: "https://era.org.mt/topic/waste-electrical-and-electronic-equipment/" },
  ],
  NL: [
    { type: "battery", title: "Afval Circulair – UPV batterijen", url: "https://afvalcirculair.nl/uitgebreide-producentenverantwoordelijkheid-upv/overzicht-upv/upv-batterijen/" },
    { type: "weee", title: "Afval Circulair – UPV elektr(on)ische apparaten", url: "https://afvalcirculair.nl/uitgebreide-producentenverantwoordelijkheid-upv/overzicht-upv/upv-elektr-on-ische-apparaten/" },
    { type: "battery", title: "Ondernemersplein – Batterijen inzamelen", url: "https://ondernemersplein.overheid.nl/wetten-en-regels/batterijen-en-accus-inzamelen/", urlEn: "https://business.gov.nl/regulations/collecting-batteries-accumulators/" },
    { type: "weee", title: "Ondernemersplein – Recyclen van elektr(on)ische apparatuur", url: "https://ondernemersplein.overheid.nl/wetten-en-regels/regels-voor-elektrische-en-elektronische-apparatuur/", urlEn: "https://business.gov.nl/regulations/electrical-electronic-equipment/" },
    { type: "battery", title: "ILT – Inzameling en recycling van accu’s en batterijen", url: "https://www.ilent.nl/onderwerpen/producentenverantwoordelijkheid/inzameling-en-recycling-van-batterijen-en-accu%E2%80%99s" },
    { type: "weee", title: "ILT – Gebruikte elektrische en elektronische apparatuur", url: "https://www.ilent.nl/onderwerpen/producentenverantwoordelijkheid/gebruikte-elektronische-apparatuur" },
  ],
  NO: [
    { type: "battery", title: "Miljødirektoratet – Batteriveilederen: hvilken rolle og hvilke plikter har du?", url: "https://www.miljodirektoratet.no/ansvarsomrader/avfall/for-naringsliv/batteriveilederen/hvilken-rolle-og-hvilke-plikter-har-du/" },
    { type: "weee", title: "Miljødirektoratet – Veileder: EE-avfall", url: "https://www.miljodirektoratet.no/ansvarsomrader/avfall/Returordninger-avfall/Elektronisk-og-elektrisk-avfall/" },
  ],
  PL: [
    { type: "both", title: "BDO – Zasady rejestracji", url: "https://bdo.mos.gov.pl/zasady-rejestracji/" },
    { type: "both", title: "Biznes.gov.pl – Wpis do rejestru BDO", url: "https://www.biznes.gov.pl/pl/portal/ou170" },
  ],
  PT: [
    { type: "both", title: "APA – Registo de Produtores de Produtos", url: "https://apambiente.pt/residuos/registo-de-produtores-de-produtos" },
  ],
  RO: [
    { type: "both", title: "AFM – SIATD (module DEEE și DBAP)", url: "https://siatd.afm.ro/" },
  ],
  SE: [
    { type: "battery", title: "Naturvårdsverket – Producentansvar för batterier", url: "https://www.naturvardsverket.se/vagledning-och-stod/producentansvar/producentansvar-for-batterier/", urlEn: "https://www.naturvardsverket.se/en/guidance/extended-producer-responsibility-epr/producer-responsibility-for-batteries/" },
    { type: "weee", title: "Naturvårdsverket – Företags ansvar för elutrustning", url: "https://www.naturvardsverket.se/vagledning-och-stod/producentansvar/producentansvar-for-elutrustning/foretag/" },
    { type: "retail", title: "Naturvårdsverket – Butiks producentansvar för elutrustning", url: "https://www.naturvardsverket.se/vagledning-och-stod/producentansvar/producentansvar-for-elutrustning/butiks-producentansvar-for-elutrustning/" },
  ],
  SI: [
    { type: "both", title: "GOV.SI – Odpadki (razširjena odgovornost proizvajalcev)", url: "https://www.gov.si/podrocja/okolje-in-prostor/okolje/ravnanje-z-odpadki/", urlEn: "https://www.gov.si/en/policies/environment-and-spatial-planning/environment/waste/" },
  ],
  SK: [
    { type: "both", title: "Register výrobcov vyhradených výrobkov", url: "https://www.minzp.sk/odpady/registre-zoznamy/register-vyrobcov-vyhradenych-vyrobkov/" },
    { type: "battery", title: "Register pre batérie a akumulátory", url: "https://www.minzp.sk/odpady/registre-zoznamy/register-baterie-akumularory/" },
    { type: "both", title: "ISOH – Registre", url: "https://www.isoh.gov.sk/uvod/registre.html" },
  ],
};

/** Every link of the help page, for the weekly link check. */
export function allSourceUrls(): string[] {
  const urls = new Set<string>([
    ...Object.keys(EU_LAWS).map((law) => eurLex(law as EuLaw, "en")),
    ...Object.values(EC_PAGES),
  ]);
  for (const rows of Object.values(COUNTRY_SOURCES)) {
    for (const r of rows) {
      urls.add(r.url);
      if (r.urlEn) urls.add(r.urlEn);
    }
  }
  return [...urls];
}

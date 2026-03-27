import { notFound } from "next/navigation";
import { MoveLeft, Sun, CalendarDays } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

const programsData: Record<string, any> = {
  "feldenkrais": {
    title: "Feldenkrais Metoda",
    tagline: "Svjesnost kroz pokret",
    description: "Znanstveno utemeljen pristup svjesnom pokretu koji potiče inteligenciju kretanja. Kroz niz blagih i osmišljenih pokreta, ova metoda uči živčani sustav novim, lakšim načinima kretanja, čime se direktno smanjuju bolovi, stres i nepotrebne tenzije. Idealno za sve koji žele poboljšati držanje i riješiti se kroničnih bolova u leđima ili zglobovima.",
    benefits: [
      "Značajno poboljšanje držanja tijela i postrure",
      "Smanjenje i nestanak kroničnih bolova u mišićima i zglobovima",
      "Povećanje fleksibilnosti i lakoće u svakodnevnim pokretima",
      "Razvoj duboke tjelesne inteligencije i prisutnosti u trenutku"
    ],
    details: [
      "Razina: Za sve razine i dobi",
      "Trajanje: 60 - 90 minuta",
      "Preporuka: Udobna, topla slojevita odjeća",
      "Voditelj: Certificirani Feldenkrais pedagog"
    ]
  },
  "tai-chi-qigong": {
    title: "Tai Chi & QiGong",
    tagline: "Kultiviranje životne energije",
    description: "Drevna kineska vještina za kultiviranje unutarnje životne energije (Qi), relaksaciju uma i tijela, te postizanje dubokog mira. Tai Chi i QiGong kroz tihu meditaciju u pokretu oslobađaju tijelo od stresa, regeneriraju živčani sustav, produbljuju dah i osnažuju cjelokupni imunitet.",
    benefits: [
      "Harmonizacija uma i tijela kroz 'meditaciju u pokretu'",
      "Otpuštanje nakupljenog stresa i anksioznosti",
      "Poboljšanje cirkulacije, balansa i fine motorike",
      "Osnaživanje imuniteta i vitalnosti organizma"
    ],
    details: [
      "Razina: Pogodno za sve, bez obzira na dob i kondiciju",
      "Trajanje: 75 minuta",
      "Preporuka: Komotna odjeća i ravna obuća (ili bose noge)",
      "Fokus: Usporavanje i svjesno disanje"
    ]
  },
  "yogalates": {
    title: "Yogalates (Pilates + Yoga)",
    tagline: "Snaga, fleksibilnost i uravnoteženost",
    description: "Sinergija dva najpopularnija sustava vježbanja: Pilatesa i Yoge. Program objedinjuje najbolje od oboje u jedinstvenu fuziju koja donosi snagu centra (core) i istezanje mišića, uz istovremenu smirenost i uravnoteženje uma. Kroz dinamične vježbe osnažujete izdržljivost, podižete energiju i oblikujete tijelo.",
    benefits: [
      "Izgradnja funkcionalne snage i stabilnosti trupa",
      "Poboljšanje mišićnog tonusa bez 'napuhavanja' mišića",
      "Usklađivanje daha i pokreta uz podizanje koncentracije",
      "Prevencija ozljeda kralježnice kroz stabilizaciju core-a"
    ],
    details: [
      "Razina: Prilagodljivo (od početnika do srednje razine)",
      "Trajanje: 75 minuta",
      "Fokus: Snaga i fleksibilnost u isto vrijeme",
      "Intenzitet: Umjeren do dinamičan"
    ]
  },
  "joga": {
    title: "Holistička Joga",
    tagline: "Vraćanje vlastitom izvoru",
    description: "Program osmišljen s izričitim naglaskom na psihofizičku zdravstvenu dobrobit. Kroz pašnjivu sinkronizaciju pokreta (asana) s dahom (pranayama), postižemo duboko opuštanje mišićne napetosti, bolju prohodnost energije i umirenje divljeg uma. Sat oslobođen religijskih ili dogmatskih konotacija, u potpunosti posvećen vašem blagostanju.",
    benefits: [
      "Uklanjanje napetosti iz vrata, ramena i leđa",
      "Dublja, smirenija i potpunija kontrola disanja",
      "Mentalna jasnoća i povećana otpornost na stres",
      "Poboljšanje cjelokupne fleksibilnosti i mobilnosti zglobova"
    ],
    details: [
      "Razina: Otvoreno za apsolutne početnike i naprednije",
      "Trajanje: 90 minuta",
      "Atmosfera: Tiha, fokusirana i podržavajuća",
      "Oprema: Prostirka i dekica po želji"
    ]
  },
  "posturalne-vjezbe": {
    title: "Posturalne vježbe",
    tagline: "Korekcija držanja i pokretljivosti",
    description: "Riješite osnovni uzrok mišićno-koštane boli na pametan način. Strukturiran i vođen program usmjeren isključivo na ispravljanje posturalnih disbalansa nastalih sjedilačkim načinom života. Radimo u malim, polu-individualnim grupama s puno pažnje na tehniku kako bi se kralježnici i zglobovima vratio biomehanički sklad.",
    benefits: [
      "Ispravljanje lošeg držanja uzrokovanog radom za računalom",
      "Jačanje mišića stabilizatora kralježnice",
      "Znatno ublažavanje i nestanak bolova u donjem dijelu leđa",
      "Otvaranje prsnog koša i smanjenje pognutosti ramena"
    ],
    details: [
      "Razina: Zahtijeva fokus, ali tempo je medicinski lagan",
      "Trajanje: 75 minuta",
      "Tip rada: Male grupe radi osobne korekcije trenera",
      "Cilj: Funkcionalno zdravlje lokomotornog sustava"
    ]
  },
  "orijentalni-ples": {
    title: "Orijentalni ples",
    tagline: "Izražavanje ženstvenosti",
    description: "Najzdraviji i najpodržavajući način plesa namijenjen fleksibilnosti, a ponajviše kralježnici i zglobovima zdjelice. Orijentalni (trbušni) ples aktivira duboke mišiće donjeg dijela leđa i trbuha, poboljšava cirkulaciju na vrlo ženstven, organski i tečan način.",
    benefits: [
      "Vraća potpunu pokretljivost donjeg dijela leđa i zdjelice",
      "Podiže samopouzdanje i svjesnost o vlastitom tijelu",
      "Aktivira male stabilizirajuće mišiće kralježnice",
      "Poboljšava cirkulaciju reproduktivnog sustava"
    ],
    details: [
      "Razina: Početni i srednji stupanj",
      "Trajanje: 75 minuta",
      "Preporuka: Udobna plesna odjeća (bez pritiska na struk)",
      "Snažan osjećaj zajedništva u ženskoj okolini"
    ]
  },
  "prenatal": {
    title: "Prenatal (Joga za trudnice)",
    tagline: "Sigurno vježbanje kroz trudnoću",
    description: "Nježna prilagođena tjelesna aktivnost za trudnice temeljena na višegodišnjem (18+ godina) iskustvu u pripremi za porođaj. Tehnike istezanja, relaksacije i disanja prilagođene svakom trimestru kako bi trudna žena zadržala snagu, smanjila nelagodu u leđima i kvalitetno se pripremila mentalno i fizički za lakši porod.",
    benefits: [
      "Smanjuje bol i pritisak u leđima i zdjelici",
      "Kontrola i osnaživanje mišića zdjeličnog dna",
      "Tehnike disanja iznimno korisne tijekom poroda",
      "Bolji i mirniji san tijekom trudnoće"
    ],
    details: [
      "Razina: Prilagođeno trudnicama s urednom trudnoćom",
      "Sistematika: Uz pristanak ginekologa",
      "Trajanje: 60 minuta",
      "Termini: Jutarnje i popodnevne grupe"
    ]
  },
  "mame-i-bebe": {
    title: "Mame i Bebe",
    tagline: "Zajednički oporavak i povezivanje",
    description: "Vježbe oporavka poslije porođaja koje mama može izvoditi zajedno sa svojom bebom. Sat integrira rad na vraćanju tjelesnog tonusa majke (fokus na leđa i core) s elementima razvojne stimulacije i blage masaže za dojenčad. Savršen način za socijalizaciju i bezbrižno vježbanje gdje plač i dojenje beba na satu nisu prepreka već dio procesa.",
    benefits: [
      "Siguran postporođajni oporavak i zatvaranje dijastaze",
      "Nema potrebe za traženjem čuvanja djeteta - vježbajte zajedno",
      "Beba dobiva motoričku stimulaciju",
      "Podrška u krugu drugih majki u sličnoj fazi života"
    ],
    details: [
      "Dob beba: Od navršenih tjedana (dozvola pedijatra) do kretanja (puzanja)",
      "Trajanje: 60 minuta",
      "Potrebno: Dekica ili podloga za bebu, omiljena igračka",
      "Atmosfera: Vrlo opuštena i bez stresa"
    ]
  },
  "joga-smijeha": {
    title: "Joga Smijeha (Hasya Yoga)",
    tagline: "Najkraći put od uma do srca",
    description: "Jedinstvena, snažna i nevjerojatno jednostavna tehnika gdje svatko može vježbati i doživjeti dugotrajan i zarazni smijeh bez posebnog razloga (šala ili komedije). Kroz kombinaciju ljekovitog disanja i tehnika inicirajućeg smijeha dolazimo do pravog tjelesnog smijeha koji doslovno pere stanice od hormona stresa i oksigenizira mozak.",
    benefits: [
      "Trenutni osjećaj sreće kroz pojačano izlučivanje endorfina",
      "Znatno snižavanje razine kortizola",
      "Efekt aerobnog vježbanja, opskrbljivanje tijela kisikom",
      "Moćna 'ispušna ventilacija' za potisnutu ljutnju i napetost"
    ],
    details: [
      "Razina: Bezuvjetno svi, nema fizičkih prepreka",
      "Trajanje: 90 minuta fantastičnog otpuštanja",
      "Raspoloženje: Nije potrebno doći 'dobre volje', raspoloženje raste na satu",
      "Preporuka: Dođite otvorenog uma, spremni na malo glupiranja"
    ]
  }
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = programsData[params.slug];
  if (!data) return { title: "Nije pronađeno | Apolon Centar" };
  return {
    title: `${data.title} | Apolon Centar Zagreb`,
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const program = programsData[resolvedParams.slug];

  if (!program) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-transparent pb-24 relative selection:bg-brand-400 selection:text-white">
      {/* Background Ambience / Glow Up */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-100/40 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[600px] bg-stone-200/50 blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 relative z-20 border-b border-stone-200/50 bg-white/30 backdrop-blur-3xl">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/programi"
            className="inline-flex items-center text-sm font-semibold tracking-widest uppercase text-brand-600 hover:text-brand-900 transition-colors mb-8 gap-3"
          >
            <MoveLeft size={16} /> Pregled Programa
          </Link>
          <span className="block text-brand-500 font-sans tracking-[0.2em] uppercase text-xs mb-4 font-semibold">
            {program.tagline}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8 leading-tight drop-shadow-sm">
            {program.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 mt-16 relative z-20">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2">
               <div className="prose prose-stone prose-lg max-w-none mb-16">
                 <p className="text-xl text-stone-600 leading-relaxed font-light first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:text-brand-900 first-letter:float-left">
                   {program.description}
                 </p>
               </div>

               <h3 className="text-2xl font-serif text-stone-900 mb-6">Dobrobiti ovog programa</h3>
               <div className="bg-white/60 border border-stone-100/50 shadow-sm rounded-3xl p-8 mb-12 backdrop-blur-md">
                 <ul className="space-y-4">
                   {program.benefits.map((benefit: string, index: number) => (
                     <li key={index} className="flex items-start gap-4">
                       <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2.5 shrink-0" />
                       <span className="text-stone-700 leading-relaxed font-light">{benefit}</span>
                     </li>
                   ))}
                 </ul>
               </div>

               <div className="p-8 bg-brand-900 text-stone-50 rounded-3xl relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-shadow duration-500">
                 <div className="absolute top-0 right-0 w-48 h-48 bg-brand-700/50 blur-[60px] -z-10 group-hover:bg-brand-500/50 transition-colors duration-500" />
                 <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-300 mb-6 flex items-center gap-3">
                    <Sun size={18} className="text-brand-400"/> Vrijeme za Vaš Mir
                 </h3>
                 <p className="text-stone-300 leading-relaxed mb-8 font-light text-lg">
                   Ovaj program se održava u stalnim tjednim terminima. Osigurajte svoje mjesto na vrijeme.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4">
                   <Link href="/raspored" className="inline-flex justify-center items-center px-8 py-4 bg-white text-brand-900 rounded-full text-sm uppercase tracking-widest hover:bg-stone-100 transition-colors font-semibold group/btn gap-2">
                      <CalendarDays size={18} className="group-hover/btn:scale-110 transition-transform" /> Provjeri Raspored
                   </Link>
                 </div>
               </div>
            </div>

            {/* Sidebar Details */}
            <aside className="md:col-span-1">
              <div className="sticky top-32 border border-stone-200/60 rounded-3xl p-8 bg-white/40 backdrop-blur-xl shadow-sm">
                <h3 className="font-sans uppercase text-xs tracking-[0.2em] text-brand-500 mb-8 font-semibold">Osnovne informacije</h3>
                <ul className="space-y-6">
                  {program.details.map((detail: string, index: number) => {
                    const [label, ...valArr] = detail.split(":");
                    const value = valArr.join(":");
                    
                    return (
                      <li key={index} className="flex flex-col gap-1.5 border-b border-stone-100 pb-4 last:border-0 last:pb-0">
                        <span className="text-stone-400 uppercase tracking-wider text-[10px] font-semibold">{label}</span>
                        {value && <span className="text-stone-800 text-sm font-medium leading-relaxed">{value.trim()}</span>}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
         </div>
      </section>
    </main>
  );
}

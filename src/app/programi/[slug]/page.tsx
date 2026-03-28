import { notFound } from "next/navigation";
import { MoveLeft, Sun, CalendarDays } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

const programsData: Record<string, any> = {
  "intro-to-yoga": {
    title: "Intro to Yoga",
    tagline: "Yoga Plejs • Savska",
    description: "Program za početnike koji pruža snažan temelj i uvod u yogu. Kroz sigurno okruženje i postupno učenje, usvojit ćete osnovne asane (poze), tehnike disanja (pranayama) i relaksacije. Intro program idealan je za sve koji se prvi put susreću s yogom ili žele obnoviti svoje znanje iz osnova.",
    benefits: [
      "Upoznavanje s osnovnim yoga položajima i njihovim pravilnim izvođenjem",
      "Pravilno disanje koje smiruje živčani sustav",
      "Povećanje fleksibilnosti i snage na siguran način",
      "Oslobađanje od stresa i napetosti u tijelu"
    ],
    details: [
      "Razina: Apsolutni početnici",
      "Lokacija: Yoga Plejs (Savska 141)",
      "Preporuka: Udobna odjeća, bez obuće",
      "Cilj: Siguran ulazak u svijet yoge"
    ]
  },
  "flow-explore": {
    title: "Flow & Explore",
    tagline: "Yoga Plejs • Savska",
    description: "Kreativna vinyasa yoga kojom ćete doživjeti protočne slijedove te stvoriti sklad tijela i uma. Fokus je na povezivanju daha i pokreta kroz dinamičan, ali svjestan pristup. Satovi su tematski vođeni, istražujući različite aspekte fizičkog i mentalnog tijela.",
    benefits: [
      "Sinergija daha i dinamičnog pokreta",
      "Jačanje muskulature cijelog tijela",
      "Povećanje kardiovaskularne izdržljivosti",
      "Duboka meditacija u pokretu"
    ],
    details: [
      "Razina: Svi stupnjevi (predznanje poželjno ali nije nužno)",
      "Lokacija: Yoga Plejs (Savska 141)",
      "Fokus: Fluidnost, prelasci, integracija daha",
      "Intenzitet: Umjeren do visok"
    ]
  },
  "yoga-drills-skills": {
    title: "Yoga Drills & Skills",
    tagline: "Yoga Plejs • Savska",
    description: "Fuzija vinyasa yoge i vježbi snage koja kombinira dobrobiti mindfulnessa u pokretu i funkcionalnog tjelesnog osnaživanja. Fokusiramo se na mehaniku određenih naprednih asana, razvoj snage centra (core) i ruku, te kontrolu pokreta kroz izolirane vježbe i ponavljanja.",
    benefits: [
      "Brza izgradnja specifične snage potrebne za yogu",
      "Sigurno učenje naprednih položaja (inverzije, arm balansi)",
      "Razumijevanje anatomije i mehanike tijela",
      "Veća stabilnost zglobova i prevencija ozljeda"
    ],
    details: [
      "Razina: Srednji i napredni stupanj",
      "Lokacija: Yoga Plejs (Savska 141)",
      "Fokus: Snaga, tehnika, inverzije",
      "Intenzitet: Visok"
    ]
  },
  "liquid-strong-spine": {
    title: "Liquid & Strong Spine",
    tagline: "Yoga Plejs • Savska",
    description: "Specijalizirani program koji će vam pomoći u održavanju zdravlja kralježnice kroz razvoj stabilnosti i mobilnosti. Radimo na stvaranju prostora između kralježaka, snazi stabilizatora trupa i pravilnoj mehanici pokreta leđa, poništavajući efekte sjedilačkog načina života.",
    benefits: [
      "Ublažavanje i prevencija bolova u leđima i vratu",
      "Povećana mobilnost prsne kralježnice i ramena",
      "Poboljšano držanje (postura)",
      "Snažan i funkcionalan 'core' (centar tijela)"
    ],
    details: [
      "Razina: Svi stupnjevi",
      "Lokacija: Yoga Plejs (Savska 141)",
      "Fokus: Zdravlje kralježnice, posture",
      "Intenzitet: Umjeren"
    ]
  },
  "gentle-unwind": {
    title: "Gentle Unwind",
    tagline: "Yoga Plejs • Savska",
    description: "Umirujući, ali nježno dinamičan flow koji otpušta napetost i vraća tijelo i um u ravnotežu. Idealan sat za kraj dana, s dužim zadržavanjima u položajima koji otvaraju tijelo, praćeno dubokim disanjem i vođenom relaksacijom.",
    benefits: [
      "Duboko opuštanje živčanog sustava (parasimpatikus)",
      "Otpuštanje nakupljenog stresa i anksioznosti",
      "Poboljšana kvaliteta sna",
      "Mekša i fleksibilnija muskulatura"
    ],
    details: [
      "Razina: Svi kreću odavde, pogodno za sve",
      "Lokacija: Yoga Plejs (Savska 141)",
      "Fokus: Otuštanje, istezanje, disanje",
      "Intenzitet: Niski do umjereni"
    ]
  },
  "flexy-lab": {
    title: "Flexy Lab",
    tagline: "Yoga Plejs • Savska",
    description: "Program posvećen isključivo postizanju i održavanju funkcionalne fleksibilnosti i mobilnosti. Kroz aktivna istezanja, PNF tehnike i specifične vježbe raspona pokreta, Flexy Lab istražuje granice vašeg tijela i uči vas kako sigurno povećati fleksibilnost cijelog tijela, od kukova do ramena.",
    benefits: [
      "Drastično poboljšanje rom-a (range of motion)",
      "Smanjenje krutosti zglobova",
      "Postizanje specifičnih ciljeva (špaga, most)",
      "Bolja sportska izvedba i prevencija povreda"
    ],
    details: [
      "Razina: Svi stupnjevi (strpljenje obavezno)",
      "Lokacija: Yoga Plejs (Savska 141)",
      "Fokus: Mobilnost zglobova, ekstremna fleksibilnost",
      "Intenzitet: Umjeren, ali zahtijeva fokus"
    ]
  },
  "reformer-pilates": {
    title: "Pilates Reformeri",
    tagline: "REplejs • Knežija",
    description: "Treninzi na reformerima za snagu, preciznost i mobilnost cijelog tijela. Rad na pilates spravama omogućuje dodavanje otpora kroz opruge, što osigurava brz napredak u mišićnom tonusu, istovremeno istežući muskulaturu. Radimo u malim grupama kako bi svakom polazniku bio posvećen makismalni fokus instruktora.",
    benefits: [
      "Izduženi, vretenasti mišići bez dodavanja mase",
      "Značajno poboljšana snaga trbušnog zida i leđa",
      "Korekcija asimetrija u tijelu kroz unilateralne vježbe",
      "Efikasan trening bez stresa za zglobove"
    ],
    details: [
      "Razina: Prilagodljivo vrsti grupe (Početne/Napredne)",
      "Lokacija: REplejs (Knežija)",
      "Fokus: Reforma tijela, snaga otpora",
      "Grupe: Male i fokusirane (potrebna predbilježba)"
    ]
  }
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = programsData[params.slug];
  if (!data) return { title: "Nije pronađeno | Yoga Plejs" };
  return {
    title: `${data.title} | Yoga Plejs Zagreb`,
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
    <main className="min-h-screen bg-stone-50 pb-24 relative selection:bg-brand-500 selection:text-stone-950">
      {/* Background Ambience / Glow Up */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-900/40 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[600px] border-stone-200/40 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 relative z-20 border-b border-stone-200 bg-stone-50/30 ">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/programi"
            className="inline-flex items-center text-sm font-semibold tracking-widest uppercase text-brand-400 hover:text-brand-500 transition-colors mb-8 gap-3"
          >
            <MoveLeft size={16} /> Pregled Programa
          </Link>
          <span className="block text-brand-500 font-sans tracking-[0.2em] uppercase text-xs mb-4 font-semibold">
            {program.tagline}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8 leading-tight drop-shadow-none">
            {program.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 mt-16 relative z-20">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2">
               <div className="prose prose-invert prose-stone prose-lg max-w-none mb-16">
                 <p className="text-xl text-stone-500 leading-relaxed font-light first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:text-brand-400 first-letter:float-left">
                   {program.description}
                 </p>
               </div>

               <h3 className="text-2xl font-serif text-stone-900 mb-6">Dobrobiti ovog programa</h3>
               <div className="bg-transparent border border-stone-200 shadow-none rounded-3xl p-8 mb-12 backdrop-blur-md">
                 <ul className="space-y-4">
                   {program.benefits.map((benefit: string, index: number) => (
                     <li key={index} className="flex items-start gap-4">
                       <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2.5 shrink-0" />
                       <span className="text-stone-600 leading-relaxed font-light">{benefit}</span>
                     </li>
                   ))}
                 </ul>
               </div>

               <div className="p-8 bg-brand-900 text-stone-900 rounded-3xl relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-shadow duration-500">
                 <div className="absolute top-0 right-0 w-48 h-48 border-stone-200/50 blur-[60px] -z-10 group-hover:bg-brand-800/50 transition-colors duration-500" />
                 <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-400 mb-6 flex items-center gap-3">
                    <Sun size={18} className="text-brand-500"/> Započnite Praksu
                 </h3>
                 <p className="text-stone-600 leading-relaxed mb-8 font-light text-lg">
                   Ovaj program se održava u stalnim tjednim terminima. Provjerite raspored i osigurajte svoje mjesto.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4">
                   <Link href="/raspored" className="inline-flex justify-center items-center px-8 py-4 bg-stone-50 text-stone-950 rounded-full text-sm uppercase tracking-widest hover:bg-stone-200 transition-colors font-semibold group/btn gap-2">
                      <CalendarDays size={18} className="group-hover/btn:scale-110 transition-transform" /> Provjeri Raspored
                   </Link>
                 </div>
               </div>
            </div>

            {/* Sidebar Details */}
            <aside className="md:col-span-1">
              <div className="sticky top-32 border border-stone-200 rounded-3xl p-8 bg-transparent backdrop-blur-xl shadow-none">
                <h3 className="font-sans uppercase text-xs tracking-[0.2em] text-brand-500 mb-8 font-semibold">Osnovne informacije</h3>
                <ul className="space-y-6">
                  {program.details.map((detail: string, index: number) => {
                    const [label, ...valArr] = detail.split(":");
                    const value = valArr.join(":");
                    
                    return (
                      <li key={index} className="flex flex-col gap-1.5 border-b border-stone-200 pb-4 last:border-0 last:pb-0">
                        <span className="text-stone-500 uppercase tracking-wider text-[10px] font-semibold">{label}</span>
                        {value && <span className="text-stone-900 text-sm font-medium leading-relaxed">{value.trim()}</span>}
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

import { notFound } from "next/navigation";
import { MoveLeft, Sparkles, Layers, Sun } from "lucide-react";
import Link from "next/link";

const radioniceData: Record<string, any> = {
  "cacao-ceremonija": {
    title: "Cacao Ceremonija",
    description: "Sveta praksa koja potječe iz tradicije Srednje i Južne Amerike, a danas sve popularnija diljem svijeta kao alat za unutarnje iscjeljenje i osobni rast. Fokus leži na svetom bilju i otvaranju srca, postizanju dubljeg razumijevanja vlastitih emocija te obnavljanju povezanosti s tijelom i svjesnošću uz najfiniju Theobroma Cacao vrstu kakaoa.",
    details: [
      "Voditelj: Certificirani Cacao Praktičar",
      "Trajanje: 120 minuta",
      "Termini: Prema objavi na mrežama",
      "Snažan naglasak na iscjeljenju srca"
    ]
  },
  "vibratorno-lijecenje": {
    title: "Vibratorno Liječenje Zvukom (Zvučne zdjele)",
    description: "Terapija koja koristi drevne tibetanske pjevajuće zdjele koje se smještaju specifično iznad energetskih centara (čakri) ili iznad tijela. Snažne vibracije proniču duboko do stanične razine, razbijaju stare energetske blokade, duboko relaksiraju živčani sustav te vraćaju prirodni balans svih unutrašnjih organa.",
    details: [
      "Voditelj: Majstor zvuka",
      "Trajanje: 60 - 90 minuta",
      "Pripremite: Udobnu, laganu odjeću",
      "Korak prema potpunom unutarnjem miru"
    ]
  },
  "tretmani-masaze": {
    title: "Terapije, Tretmani i Masaže",
    description: "Centar nudi raspon individualnih, profesionalnih terapija - od revolucionarne Bowen Terapije koja budi samo-iscjeljujuće procese tijela, do klasičnih medicinskih i relaksirajućih rješenja. Priuštite koži i mišićima regenerativne Ayurvedske tretmane s uljem te otklonite nakupljeni stres iz tkiva i zglobova.",
    details: [
      "Terapeut: Tim licenciranih fizioterapeuta i masera",
      "Vrste: Bowen, Medicinska, Sportska, Aroma, Shiatsu",
      "Prilagođavanje: 100% prema problematici svakog klijenta"
    ]
  }
};

export default async function RadionicaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const radionica = radioniceData[resolvedParams.slug];

  if (!radionica) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-50 pb-24 relative selection:bg-brand-400 selection:text-white">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-100/40 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[600px] bg-stone-200/50 blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 relative z-10 border-b border-stone-200/50 bg-white/30 backdrop-blur-3xl">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/radionice"
            className="inline-flex items-center text-sm font-semibold tracking-widest uppercase text-brand-600 hover:text-brand-900 transition-colors mb-12 gap-3"
          >
            <MoveLeft size={16} /> Sve Radionice
          </Link>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8 leading-tight">
            {radionica.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 mt-16 relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
               <p className="text-xl text-stone-600 leading-relaxed font-light mb-12">
                 {radionica.description}
               </p>
               <div className="p-8 bg-white/60 border border-stone-200/50 rounded-3xl backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-stone-100/50 blur-[40px] -z-10" />
                 <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-900 mb-6 flex items-center gap-3">
                    <Sun size={18} className="text-brand-400"/> Zabilježi Ovu Praksu
                 </h3>
                 <p className="text-stone-600 leading-relaxed mb-6">
                   Preporučuje se rezervacija termina jer radionice i tretmani zahtijevaju detaljnu osobnu pripremu prostora i terapeuta.
                 </p>
                 <a href="/kontakt" className="inline-block px-8 py-4 bg-brand-500 text-white rounded-full text-sm uppercase tracking-widest hover:bg-brand-600 transition-colors font-medium hover:shadow-[0_8px_20px_rgba(var(--brand-500),0.3)] duration-300">
                    Rezerviraj Termin
                 </a>
               </div>
            </div>

            <aside className="md:col-span-1 border-l border-stone-200 pl-8 pt-2">
              <h3 className="font-sans uppercase text-xs tracking-[0.2em] text-brand-400 mb-8 font-semibold">Detalji Radionice</h3>
              <ul className="space-y-6">
                {radionica.details.map((detail: string, index: number) => {
                  const [label, ...valArr] = detail.split(":");
                  const value = valArr.join(":");
                  
                  return (
                    <li key={index} className="group flex flex-col gap-1">
                      <span className="text-stone-900 font-medium text-sm">{label}</span>
                      {value && <span className="text-stone-500 text-sm font-light leading-relaxed group-hover:text-stone-700 transition-colors">{value}</span>}
                    </li>
                  );
                })}
              </ul>
            </aside>
         </div>
      </section>
    </main>
  );
}

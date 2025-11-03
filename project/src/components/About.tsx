import { Award, Palette, Users } from 'lucide-react';

export default function About() {
  return (
    <section className="min-h-screen px-6 py-24 pt-32">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Über mich</h2>
          <p className="text-gray-600 font-light">Künstlerin aus Leidenschaft</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Max Mustermann"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 flex flex-col justify-center">
            <p className="text-lg font-light leading-relaxed text-gray-700">
              Meine künstlerische Reise begann vor über einem Jahrzehnt mit dem Wunsch,
              Emotionen und Geschichten durch visuelle Medien zum Leben zu erwecken.
            </p>

            <p className="text-lg font-light leading-relaxed text-gray-700">
              Ich arbeite vorwiegend mit gemischten Medien und experimentiere gerne mit
              verschiedenen Texturen und Techniken. Meine Werke bewegen sich zwischen
              abstrakter Expressivität und figürlicher Darstellung.
            </p>

            <p className="text-lg font-light leading-relaxed text-gray-700">
              Die Natur, menschliche Beziehungen und gesellschaftliche Themen bilden die
              Grundlage meiner künstlerischen Auseinandersetzung. Jedes Werk erzählt eine
              eigene Geschichte und lädt den Betrachter ein, seine eigene Interpretation zu finden.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <Palette className="w-12 h-12 mx-auto mb-4 text-gray-700" strokeWidth={1.5} />
            <h3 className="text-xl font-light mb-3">Meine Technik</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Ich kombiniere traditionelle Maltechniken mit modernen digitalen Elementen
              für einzigartige Mixed-Media-Arbeiten.
            </p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <Award className="w-12 h-12 mx-auto mb-4 text-gray-700" strokeWidth={1.5} />
            <h3 className="text-xl font-light mb-3">Auszeichnungen</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Mehrfach ausgezeichnet bei nationalen und internationalen Kunstwettbewerben
              sowie Teilnahme an renommierten Ausstellungen.
            </p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <Users className="w-12 h-12 mx-auto mb-4 text-gray-700" strokeWidth={1.5} />
            <h3 className="text-xl font-light mb-3">Workshops</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Regelmäßige Workshops und Masterclasses für Kunstinteressierte jeden Levels.
              Gemeinsam entdecken wir neue kreative Wege.
            </p>
          </div>
        </div>

        <div className="bg-black text-white p-12 rounded-lg">
          <h3 className="text-2xl md:text-3xl font-light mb-6 text-center">
            Ausstellungen & Projekte
          </h3>
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="flex justify-between items-baseline border-b border-gray-700 pb-3">
              <span className="font-light">Einzelausstellung "Fragmentierte Realitäten"</span>
              <span className="text-sm text-gray-400">2024</span>
            </div>
            <div className="flex justify-between items-baseline border-b border-gray-700 pb-3">
              <span className="font-light">Gruppenausstellung Kunsthaus Wien</span>
              <span className="text-sm text-gray-400">2023</span>
            </div>
            <div className="flex justify-between items-baseline border-b border-gray-700 pb-3">
              <span className="font-light">Kunstmesse Art Basel</span>
              <span className="text-sm text-gray-400">2023</span>
            </div>
            <div className="flex justify-between items-baseline border-b border-gray-700 pb-3">
              <span className="font-light">Residency Programm Berlin</span>
              <span className="text-sm text-gray-400">2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

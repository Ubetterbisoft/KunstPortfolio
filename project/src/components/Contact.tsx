import { Mail, Instagram, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="min-h-screen px-6 py-24 pt-32">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Kontakt</h2>
          <p className="text-gray-600 font-light">Lassen Sie uns zusammenarbeiten</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light mb-6">Nehmen Sie Kontakt auf</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                Ob Sie an einem Kunstwerk interessiert sind, eine Kommissionsarbeit in
                Auftrag geben möchten oder Fragen zu Workshops haben – ich freue mich auf
                Ihre Nachricht.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-gray-700 mt-1" strokeWidth={1.5} />
                <div>
                  <div className="font-light mb-1">E-Mail</div>
                  <a
                    href="mailto:kontakt@maxmustermann-art.com"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    kontakt@maxmustermann-art.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-gray-700 mt-1" strokeWidth={1.5} />
                <div>
                  <div className="font-light mb-1">Telefon</div>
                  <a
                    href="tel:+4369912345678"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    +43 699 123 456 78
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gray-700 mt-1" strokeWidth={1.5} />
                <div>
                  <div className="font-light mb-1">Atelier</div>
                  <p className="text-gray-600">
                    Kunstgasse 12<br />
                    1010 Wien, Österreich
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="w-6 h-6 text-gray-700 mt-1" strokeWidth={1.5} />
                <div>
                  <div className="font-light mb-1">Social Media</div>
                  <a
                    href="https://instagram.com/maxmustermann.art"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    @maxmustermann.art
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h4 className="font-light mb-4">Atelierbesuche</h4>
              <p className="text-gray-600 font-light leading-relaxed">
                Besuchen Sie mich in meinem Atelier nach vorheriger Vereinbarung.
                Ich nehme mir gerne Zeit, um meine aktuellen Arbeiten zu zeigen und
                über Ihre Vorstellungen zu sprechen.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-light mb-6">Nachricht senden</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-light mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
                  placeholder="ihre@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-light mb-2">
                  Betreff
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
                  placeholder="Worum geht es?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-light mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors resize-none"
                  placeholder="Ihre Nachricht..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-light tracking-wide"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

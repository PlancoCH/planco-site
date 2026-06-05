import { Leaf, Github, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-800 text-beige-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-sage-400 rounded-full flex items-center justify-center">
                <Leaf className="w-4 h-4 text-forest-800" />
              </div>
              <span className="font-serif text-xl font-semibold text-beige-100">Planco</span>
            </div>
            <p className="text-beige-400 text-sm leading-relaxed max-w-xs">
              An AI-driven IoT system for intelligent, everyday plant care that makes plant health transparent.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-8 h-8 rounded-full border border-forest-600 flex items-center justify-center text-beige-400 hover:text-beige-100 hover:border-sage-400 transition-colors">
                <Github className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-forest-600 flex items-center justify-center text-beige-400 hover:text-beige-100 hover:border-sage-400 transition-colors">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-forest-600 flex items-center justify-center text-beige-400 hover:text-beige-100 hover:border-sage-400 transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-beige-100 text-sm font-semibold uppercase tracking-widest mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'product', label: 'The Product' },
                { id: 'team', label: 'Our Team' },
                { id: 'project', label: 'The Story' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="text-beige-400 text-sm hover:text-beige-100 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div>
            <h4 className="text-beige-100 text-sm font-semibold uppercase tracking-widest mb-5">Technology</h4>
            <ul className="space-y-3 text-beige-400 text-sm">
              {['IoT Sensors', 'AI Analysis', 'MQTT / WLAN', 'Mobile App', 'GitHub'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-beige-500 text-xs">
            &copy; 2024 Planco. A school project by Yannick, Marvin, Tobias &amp; Nils.
          </p>
          <p className="text-beige-500 text-xs italic">
            "Don't just measure data, listen to the plant."
          </p>
        </div>
      </div>
    </footer>
  );
}

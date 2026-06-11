import { useNavigate } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Logo from './ui/Logo';

export default function Footer() {
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-800 text-beige-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo variant="dark" className="mb-4" />
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
                { path: '/', label: 'Home' },
                { path: '/product', label: 'The Product' },
                { path: '/team', label: 'Our Team' },
                { path: '/project', label: 'The Story' },
              ].map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNav(link.path)}
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
            &copy; 2026 Planco. A school project by Yannick, Marvin, Tobias &amp; Nils.
          </p>
          <p className="text-beige-500 text-xs italic">
            "Don't just measure data, listen to the plant."
          </p>
        </div>
      </div>
    </footer>
  );
}

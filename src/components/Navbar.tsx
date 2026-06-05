import { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'product', label: 'The Product' },
  { id: 'team', label: 'Our Team' },
  { id: 'project', label: 'The Story' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (page: string) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-beige-100/95 backdrop-blur-md shadow-sm border-b border-beige-300'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-forest-DEFAULT rounded-full flex items-center justify-center group-hover:bg-forest-400 transition-colors">
            <Leaf className="w-4 h-4 text-beige-100" />
          </div>
          <span className="font-serif text-xl font-semibold text-forest-700 tracking-tight">
            Planco
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={`text-sm font-medium transition-colors relative group ${
                  currentPage === link.id
                    ? 'text-forest-DEFAULT'
                    : 'text-forest-600 hover:text-forest-DEFAULT'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-forest-DEFAULT transition-all duration-300 ${
                    currentPage === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleNav('product')}
          className="hidden md:inline-flex items-center gap-2 bg-forest-DEFAULT text-beige-100 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-forest-400 transition-all duration-300 hover:shadow-lg hover:shadow-forest-DEFAULT/20 active:scale-95"
        >
          Explore Product
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-forest-700 p-1"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80' : 'max-h-0'
        } bg-beige-100/98 backdrop-blur-md border-b border-beige-300`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={`text-sm font-medium w-full text-left ${
                  currentPage === link.id ? 'text-forest-DEFAULT' : 'text-forest-600'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNav('product')}
              className="w-full bg-forest-DEFAULT text-beige-100 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-forest-400 transition-colors"
            >
              Explore Product
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './ui/Logo';
import Button from './ui/Button';

const navLinks = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'product', label: 'The System', path: '/product' },
  { id: 'team', label: 'Our Team', path: '/team' },
  { id: 'project', label: 'The Story', path: '/project' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const currentPage = location.pathname === '/' ? 'home' : location.pathname.slice(1);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (path: string) => {
    navigate(path);
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
        <Logo variant="light" clickable />

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.path)}
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
        <Button
          to="https://app.planco.ch"
          external
          className="hidden md:inline-flex text-sm px-5 py-2.5"
        >
          Open App
        </Button>

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
                onClick={() => handleNav(link.path)}
                className={`text-sm font-medium w-full text-left ${
                  currentPage === link.id ? 'text-forest-DEFAULT' : 'text-forest-600'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <Button
              to="https://app.planco.ch"
              external
              className="w-full text-sm px-5 py-2.5"
            >
              Open App
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}

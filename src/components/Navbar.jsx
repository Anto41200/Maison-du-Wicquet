import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { to: '/histoire',       label: 'Histoire' },
  { to: '/chronologie',    label: 'Chronologie' },
  { to: '/ancetres',       label: 'Ancêtres' },
  { to: '/genealogie',     label: 'Généalogie' },
  { to: '/heraldique',     label: 'Héraldique' },
  { to: '/chateau-ordre',  label: 'Château d\'Ordre' },
  { to: '/archives',       label: 'Archives' },
  { to: '/branches',       label: 'Branches' },
  { to: '/carte',          label: 'Carte' },
];

// Blason SVG simplifié pour le logo nav
const WicquetEmblem = ({ size = 40 }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    {/* Écu */}
    <path d="M10 10 L90 10 L90 80 Q90 110 50 118 Q10 110 10 80 Z"
          fill="#1a3a1a" stroke="#c9a84c" strokeWidth="2.5"/>
    {/* Chevron */}
    <path d="M50 30 L80 55 L73 55 L50 36 L27 55 L20 55 Z"
          fill="none" stroke="#e8e4d9" strokeWidth="6" strokeLinejoin="round"/>
    {/* Rustres (3 losanges percés) */}
    <g fill="none" stroke="#e8e4d9" strokeWidth="2">
      {/* Rustre gauche */}
      <path d="M25 70 L35 63 L45 70 L35 77 Z"/>
      <circle cx="35" cy="70" r="3" fill="#1a3a1a" stroke="#e8e4d9" strokeWidth="1.5"/>
      {/* Rustre centre */}
      <path d="M40 82 L50 75 L60 82 L50 89 Z"/>
      <circle cx="50" cy="82" r="3" fill="#1a3a1a" stroke="#e8e4d9" strokeWidth="1.5"/>
      {/* Rustre droit */}
      <path d="M55 70 L65 63 L75 70 L65 77 Z"/>
      <circle cx="65" cy="70" r="3" fill="#1a3a1a" stroke="#e8e4d9" strokeWidth="1.5"/>
    </g>
    {/* Bordure dorée fine */}
    <path d="M10 10 L90 10 L90 80 Q90 110 50 118 Q10 110 10 80 Z"
          fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.6"/>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQ, setSearchQ]     = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQ.trim()) {
      window.location.href = `/recherche?q=${encodeURIComponent(searchQ.trim())}`;
    }
  };

  return (
    <>
      {/* Bande supérieure dorée */}
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-or to-transparent"
           style={{ background: 'linear-gradient(90deg, transparent 0%, #c9a84c 30%, #f0c040 50%, #c9a84c 70%, transparent 100%)' }} />

      <nav
        className="fixed top-0.5 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(10,10,10,0.97)'
            : 'linear-gradient(180deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 100%)',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo + Nom */}
            <Link to="/" className="flex items-center gap-3 group" aria-label="Maison du Wicquet — Accueil">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <WicquetEmblem size={36} />
              </motion.div>
              <div className="hidden sm:block">
                <div className="font-caps text-xs tracking-widest text-or leading-tight"
                     style={{ fontFamily: 'Cinzel, serif', color: '#c9a84c', letterSpacing: '0.2em' }}>
                  MAISON DU
                </div>
                <div className="font-display text-lg leading-tight text-argent group-hover:text-or transition-colors"
                     style={{ fontFamily: 'Playfair Display, serif', color: '#e8e4d9' }}>
                  Wicquet
                </div>
              </div>
            </Link>

            {/* Navigation desktop */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Actions droite */}
            <div className="flex items-center gap-3">
              {/* Recherche */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-argent hover:text-or transition-colors p-2"
                aria-label="Rechercher"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>

              {/* Burger mobile */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-argent hover:text-or transition-colors p-2"
                aria-label="Menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                  <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Barre de recherche */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-or/10 py-3"
              >
                <form onSubmit={handleSearch} className="flex gap-3">
                  <input
                    type="search"
                    value={searchQ}
                    onChange={(e) => setSearchQ(e.target.value)}
                    placeholder="Rechercher dans les archives, ancêtres, événements…"
                    autoFocus
                    className="flex-1 bg-transparent border-b border-or/30 text-argent placeholder-argent/40
                               font-serif text-sm py-1 focus:outline-none focus:border-or transition-colors"
                    style={{ fontFamily: 'EB Garamond, serif' }}
                  />
                  <button type="submit" className="btn-noble py-1 px-4 text-xs">
                    Chercher
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t"
              style={{ borderColor: 'rgba(201,168,76,0.15)', background: 'rgba(10,10,10,0.98)' }}
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block font-caps text-xs tracking-widest py-2 transition-colors ${
                          isActive ? 'text-or' : 'text-argent hover:text-or'
                        }`
                      }
                      style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.15em' }}
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer */}
      <div className="h-16 lg:h-20" />
    </>
  );
}

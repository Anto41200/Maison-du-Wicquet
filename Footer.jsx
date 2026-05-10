import { Link } from 'react-router-dom';
import { MAISON_INFO } from '../../data/wicquet';

const WicquetEmblemLarge = () => (
  <svg width="64" height="78" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 10 L90 10 L90 80 Q90 110 50 118 Q10 110 10 80 Z"
          fill="#1a3a1a" stroke="#c9a84c" strokeWidth="2.5"/>
    <path d="M50 30 L80 55 L73 55 L50 36 L27 55 L20 55 Z"
          fill="none" stroke="#e8e4d9" strokeWidth="6" strokeLinejoin="round"/>
    <g fill="none" stroke="#e8e4d9" strokeWidth="2">
      <path d="M25 70 L35 63 L45 70 L35 77 Z"/>
      <circle cx="35" cy="70" r="3" fill="#1a3a1a" stroke="#e8e4d9" strokeWidth="1.5"/>
      <path d="M40 82 L50 75 L60 82 L50 89 Z"/>
      <circle cx="50" cy="82" r="3" fill="#1a3a1a" stroke="#e8e4d9" strokeWidth="1.5"/>
      <path d="M55 70 L65 63 L75 70 L65 77 Z"/>
      <circle cx="65" cy="70" r="3" fill="#1a3a1a" stroke="#e8e4d9" strokeWidth="1.5"/>
    </g>
    <path d="M10 10 L90 10 L90 80 Q90 110 50 118 Q10 110 10 80 Z"
          fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.5"/>
  </svg>
);

const footerLinks = {
  'La Maison': [
    { to: '/histoire', label: 'Histoire' },
    { to: '/chronologie', label: 'Chronologie' },
    { to: '/ancetres', label: 'Ancêtres' },
    { to: '/branches', label: 'Branches familiales' },
  ],
  'Patrimoine': [
    { to: '/heraldique', label: 'Héraldique' },
    { to: '/chateau-ordre', label: 'Château d\'Ordre' },
    { to: '/archives', label: 'Archives' },
    { to: '/carte', label: 'Carte des territoires' },
  ],
  'Recherche': [
    { to: '/genealogie', label: 'Généalogie' },
    { to: '/recherche', label: 'Recherche' },
    { to: '/administration', label: 'Administration' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #050505 100%)' }}>
      {/* Séparateur doré */}
      <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, #c9a84c 20%, #f0c040 50%, #c9a84c 80%, transparent 100%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Partie supérieure */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">

          {/* Logo et devise */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <WicquetEmblemLarge />
              <div>
                <div className="font-caps text-xs tracking-widest mb-1"
                     style={{ fontFamily: 'Cinzel, serif', color: '#c9a84c', letterSpacing: '0.2em' }}>
                  MAISON DU
                </div>
                <div className="font-display text-3xl"
                     style={{ fontFamily: 'Playfair Display, serif', color: '#e8e4d9' }}>
                  Wicquet
                </div>
              </div>
            </div>

            <blockquote className="text-sm mb-4" style={{ fontFamily: 'EB Garamond, serif', color: '#a0a0a0', fontStyle: 'italic' }}>
              « Ancienne maison noble du Boulonnais et du Hainaut, 
              dont la présence est attestée par les actes depuis 1281. »
            </blockquote>

            <div className="flex flex-col gap-2">
              <div className="font-caps text-xs tracking-widest" style={{ fontFamily: 'Cinzel, serif', color: '#c9a84c' }}>
                ⚜ {MAISON_INFO.devise}
              </div>
              <div className="text-xs" style={{ color: '#606060', fontFamily: 'EB Garamond, serif' }}>
                Cri : {MAISON_INFO.cri}
              </div>
            </div>
          </div>

          {/* Liens de navigation */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-caps text-xs tracking-widest mb-4"
                  style={{ fontFamily: 'Cinzel, serif', color: '#c9a84c', letterSpacing: '0.15em' }}>
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm transition-colors hover:text-or"
                      style={{ fontFamily: 'EB Garamond, serif', color: '#808080' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Informations héraldiques */}
        <div className="border-t border-b py-8 mb-8 text-center"
             style={{ borderColor: 'rgba(201,168,76,0.15)' }}>
          <p className="text-xs mb-2" style={{ fontFamily: 'EB Garamond, serif', color: '#606060' }}>
            <span style={{ color: '#c9a84c' }}>Blason :</span>{' '}
            De sinople au chevron d'argent, accompagné de trois rustres du même
          </p>
          <p className="text-xs" style={{ fontFamily: 'EB Garamond, serif', color: '#505050' }}>
            Attestation documentaire : 1281 · Territoire : Boulonnais et Hainaut
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
             style={{ color: '#404040', fontFamily: 'EB Garamond, serif' }}>
          <p>© {year} Maison du Wicquet — Tous droits réservés</p>
          <p>Site de préservation historique et mémorielle · Données vérifiées</p>
        </div>
      </div>
    </footer>
  );
}

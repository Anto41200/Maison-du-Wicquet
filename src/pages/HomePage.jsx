import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MAISON_INFO, TIMELINE_EVENTS, BRANCHES, BLASON } from '../data/wicquet';

// ── Blason SVG complet ────────────────────────────────────
const BlasonSVG = ({ size = 200 }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 200 240"
       xmlns="http://www.w3.org/2000/svg"
       style={{ filter: 'drop-shadow(0 0 30px rgba(201,168,76,0.3))' }}>
    {/* Fond de l'écu */}
    <path d="M20 20 L180 20 L180 160 Q180 220 100 236 Q20 220 20 160 Z"
          fill="#1a3a1a"/>
    {/* Chevron d'argent */}
    <path d="M100 60 L160 110 L146 110 L100 72 L54 110 L40 110 Z"
          fill="#e8e4d9"/>
    {/* Rustres × 3 */}
    <g>
      {/* Gauche */}
      <path d="M50 148 L70 126 L90 148 L70 170 Z" fill="none" stroke="#e8e4d9" strokeWidth="4"/>
      <circle cx="70" cy="148" r="8" fill="#1a3a1a" stroke="#e8e4d9" strokeWidth="3"/>
      {/* Droit */}
      <path d="M110 148 L130 126 L150 148 L130 170 Z" fill="none" stroke="#e8e4d9" strokeWidth="4"/>
      <circle cx="130" cy="148" r="8" fill="#1a3a1a" stroke="#e8e4d9" strokeWidth="3"/>
      {/* Centre bas */}
      <path d="M80 182 L100 160 L120 182 L100 204 Z" fill="none" stroke="#e8e4d9" strokeWidth="4"/>
      <circle cx="100" cy="182" r="8" fill="#1a3a1a" stroke="#e8e4d9" strokeWidth="3"/>
    </g>
    {/* Bordure extérieure */}
    <path d="M20 20 L180 20 L180 160 Q180 220 100 236 Q20 220 20 160 Z"
          fill="none" stroke="#c9a84c" strokeWidth="4"/>
    {/* Listel intérieur */}
    <path d="M28 28 L172 28 L172 158 Q172 213 100 228 Q28 213 28 158 Z"
          fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.4"/>
    {/* Heaume stylisé en haut */}
    <path d="M85 12 Q100 4 115 12 L115 22 Q100 14 85 22 Z"
          fill="#c9a84c" opacity="0.6"/>
  </svg>
);

// ── Section Héros ─────────────────────────────────────────
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #000 0%, #0e1a0e 40%, #1a3a1a 70%, #0e1a0e 90%, #000 100%)' }}
    >
      {/* Texture grain */}
      <div className="absolute inset-0 opacity-30 texture-overlay pointer-events-none" />

      {/* Particules dorées animées */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              background: '#c9a84c',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: Math.random() * 4 + 's',
              opacity: 0.3 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      {/* Lignes dorées latérales */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px opacity-30"
           style={{ background: 'linear-gradient(180deg, transparent, #c9a84c, transparent)' }} />
      <div className="absolute right-8 top-1/4 bottom-1/4 w-px opacity-30"
           style={{ background: 'linear-gradient(180deg, transparent, #c9a84c, transparent)' }} />

      {/* Contenu principal */}
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4 max-w-5xl mx-auto">

        {/* Date fondation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block font-caps text-xs tracking-widest px-6 py-2 border border-or/30"
                style={{ fontFamily: 'Cinzel, serif', color: '#c9a84c', letterSpacing: '0.3em' }}>
            ATTESTÉE DEPUIS {MAISON_INFO.fondation}
          </span>
        </motion.div>

        {/* Blason */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
          className="flex justify-center mb-10"
        >
          <BlasonSVG size={160} />
        </motion.div>

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <p className="font-caps text-sm tracking-widest mb-2"
             style={{ fontFamily: 'Cinzel, serif', color: '#c9a84c', letterSpacing: '0.4em' }}>
            MAISON DU
          </p>
          <h1 className="font-display mb-4"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                fontWeight: '800',
                color: '#e8e4d9',
                textShadow: '0 0 60px rgba(201,168,76,0.2)',
                lineHeight: '1',
              }}>
            Wicquet
          </h1>
          <p className="font-caps text-xs tracking-widest"
             style={{ fontFamily: 'Cinzel, serif', color: '#c9a84c', opacity: 0.7, letterSpacing: '0.5em' }}>
            NOBLESSE DU BOULONNAIS ET DU HAINAUT
          </p>
        </motion.div>

        {/* Devise */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="my-10"
        >
          <div className="ornament-divider justify-center max-w-md mx-auto">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, #c9a84c)' }} />
            <span className="ornament-fleur">⚜</span>
            <div className="font-caps text-sm tracking-widest text-center"
                 style={{ fontFamily: 'Cinzel, serif', color: '#c9a84c', letterSpacing: '0.4em' }}>
              {MAISON_INFO.devise}
            </div>
            <span className="ornament-fleur">⚜</span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #c9a84c, transparent)' }} />
          </div>
        </motion.div>

        {/* Chapeau */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mb-10 max-w-2xl mx-auto text-base leading-loose"
          style={{ fontFamily: 'EB Garamond, serif', color: '#a0a0a0', fontStyle: 'italic' }}
        >
          Ancienne lignée noble enracinée dans le Boulonnais et le Hainaut, 
          dont la présence est attestée par les actes depuis 1281 avec Hugues du Wicquet, 
          premier ancêtre documenté de la Maison.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/histoire" className="btn-noble">
            Découvrir la Maison
          </Link>
          <Link to="/chronologie" className="btn-noble"
                style={{ borderColor: 'rgba(201,168,76,0.4)', color: 'rgba(201,168,76,0.8)' }}>
            Chronologie
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-scroll-down flex flex-col items-center gap-2">
            <span className="text-xs tracking-widest" style={{ color: '#c9a84c', fontFamily: 'Cinzel, serif', opacity: 0.6 }}>
              DÉFILER
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" opacity="0.6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ── Section Résumé ────────────────────────────────────────
function IntroSection() {
  return (
    <section className="py-24 px-4" style={{ background: 'linear-gradient(180deg, #000 0%, #080e08 100%)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-caps text-xs tracking-widest mb-6"
             style={{ fontFamily: 'Cinzel, serif', color: '#c9a84c', letterSpacing: '0.3em' }}>
            — UNE MAISON HISTORIQUE —
          </p>

          <p className="text-xl leading-loose mb-8"
             style={{ fontFamily: 'EB Garamond, serif', color: '#c8c0aa', fontSize: '1.3rem', lineHeight: '2' }}>
            La Maison du Wicquet est une ancienne lignée noble du Boulonnais et du Hainaut.
            Son premier ancêtre attesté, <em style={{ color: '#e8e4d9' }}>Hugues du Wicquet</em>, 
            est cité dans les actes en <span style={{ color: '#c9a84c' }}>1281</span>, fondant 
            ainsi une continuité historique ancrée dans le territoire du Nord de la France.
          </p>

          <p className="text-base leading-loose"
             style={{ fontFamily: 'EB Garamond, serif', color: '#808080', lineHeight: '1.9' }}>
            À travers les siècles, ses membres ont exercé des fonctions concrètes dans 
            l'administration, la justice et la gestion des terres régionales — maîtres des eaux 
            et forêts, mayeurs, officiers, capitaines — inscrivant la maison dans l'histoire 
            vivante du Boulonnais et du Hainaut.
          </p>

          <div className="mt-12 divider-noble" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            {[
              { chiffre: '1281', label: 'Première mention documentée' },
              { chiffre: 'XIII–XXI', label: 'Siècles de continuité historique' },
              { chiffre: '2', label: 'Territoires d\'ancrage' },
            ].map((stat) => (
              <div key={stat.chiffre} className="text-center">
                <div className="font-display text-3xl mb-1"
                     style={{ fontFamily: 'Playfair Display, serif', color: '#c9a84c' }}>
                  {stat.chiffre}
                </div>
                <div className="text-xs tracking-wide"
                     style={{ fontFamily: 'EB Garamond, serif', color: '#606060' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Section Chronologie aperçu ────────────────────────────
function TimelinePreview() {
  const events = TIMELINE_EVENTS.filter(e => e.importance >= 2).slice(0, 4);

  return (
    <section className="py-24 px-4" style={{ background: '#080808' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-caps text-xs tracking-widest mb-4"
             style={{ fontFamily: 'Cinzel, serif', color: '#c9a84c', letterSpacing: '0.3em' }}>
            — CHRONOLOGIE —
          </p>
          <h2 className="font-display text-4xl"
              style={{ fontFamily: 'Playfair Display, serif', color: '#e8e4d9' }}>
            Repères historiques
          </h2>
        </motion.div>

        <div className="relative">
          {/* Ligne centrale */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2 hidden md:block"
               style={{ background: 'linear-gradient(180deg, transparent, #c9a84c, transparent)' }} />

          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className={`flex items-center mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                <div className="card-noble p-6">
                  <div className="font-caps text-2xl mb-2"
                       style={{ fontFamily: 'Cinzel, serif', color: '#c9a84c' }}>
                    {event.yearLabel}
                  </div>
                  <h3 className="font-display text-lg mb-2"
                      style={{ fontFamily: 'Playfair Display, serif', color: '#e8e4d9' }}>
                    {event.title}
                  </h3>
                  <p className="text-sm leading-relaxed"
                     style={{ fontFamily: 'EB Garamond, serif', color: '#808080' }}>
                    {event.description.substring(0, 120)}…
                  </p>
                </div>
              </div>

              {/* Nœud central */}
              <div className="hidden md:flex w-2/12 justify-center">
                <div
                  className={`w-4 h-4 rounded-full border-2 z-10 ${event.importance === 3 ? 'w-5 h-5' : ''}`}
                  style={{
                    background: event.importance === 3 ? '#1a3a1a' : '#c9a84c',
                    borderColor: '#c9a84c',
                    boxShadow: event.importance === 3 ? '0 0 20px rgba(201,168,76,0.7)' : '0 0 10px rgba(201,168,76,0.4)',
                  }}
                />
              </div>

              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/chronologie" className="btn-noble">
            Chronologie complète
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Section Héraldique aperçu ─────────────────────────────
function HeraldryPreview() {
  return (
    <section className="py-24 px-4" style={{ background: 'linear-gradient(135deg, #080e08 0%, #0a0a0a 100%)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="font-caps text-xs tracking-widest mb-4"
               style={{ fontFamily: 'Cinzel, serif', color: '#c9a84c', letterSpacing: '0.3em' }}>
              — HÉRALDIQUE —
            </p>
            <h2 className="font-display text-4xl mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#e8e4d9' }}>
              Les Armes de la Maison
            </h2>
            <p className="text-sm italic mb-6 px-4 py-3 border-l-2"
               style={{ fontFamily: 'EB Garamond, serif', color: '#c9a84c', borderColor: '#c9a84c' }}>
              {BLASON.blazon}
            </p>
            <div className="space-y-4">
              {Object.entries(BLASON.description).map(([key, text]) => (
                <div key={key}>
                  <h4 className="font-caps text-xs tracking-wider mb-1"
                      style={{ fontFamily: 'Cinzel, serif', color: '#c9a84c', opacity: 0.8, textTransform: 'capitalize' }}>
                    {key === 'sinople' ? 'Le Sinople' :
                     key === 'chevron' ? 'Le Chevron' :
                     key === 'rustres' ? 'Les Rustres' :
                     key === 'devise' ? 'La Devise' : 'Le Cri d\'armes'}
                  </h4>
                  <p className="text-sm leading-relaxed"
                     style={{ fontFamily: 'EB Garamond, serif', color: '#808080' }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/heraldique" className="btn-noble">
                Section héraldique complète
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full"
                   style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)' }} />
              <BlasonSVG size={280} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Section Branches ──────────────────────────────────────
function BranchesPreview() {
  return (
    <section className="py-24 px-4" style={{ background: '#060606' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-caps text-xs tracking-widest mb-4"
             style={{ fontFamily: 'Cinzel, serif', color: '#c9a84c', letterSpacing: '0.3em' }}>
            — BRANCHES FAMILIALES —
          </p>
          <h2 className="font-display text-4xl"
              style={{ fontFamily: 'Playfair Display, serif', color: '#e8e4d9' }}>
            Les Branches de la Maison
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BRANCHES.map((branch, i) => (
            <motion.div
              key={branch.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="card-noble p-8 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center border"
                   style={{ background: branch.color, borderColor: '#c9a84c' }}>
                <span style={{ color: '#c9a84c', fontSize: '1.2rem' }}>⚜</span>
              </div>
              <h3 className="font-display text-xl mb-3"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#e8e4d9' }}>
                {branch.name}
              </h3>
              <p className="text-sm leading-relaxed"
                 style={{ fontFamily: 'EB Garamond, serif', color: '#707070' }}>
                {branch.description.substring(0, 140)}…
              </p>
              <div className="mt-4 text-xs"
                   style={{ fontFamily: 'Cinzel, serif', color: '#c9a84c', opacity: 0.7 }}>
                {branch.region}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/branches" className="btn-noble">
            Explorer les branches
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Section Château d'Ordre ───────────────────────────────
function ChateauPreview() {
  return (
    <section className="py-24 px-4"
             style={{ background: 'linear-gradient(135deg, #080e08 0%, #0f0f0f 50%, #080e08 100%)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Représentation abstraite du château */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="card-noble p-8" style={{ minHeight: '300px' }}>
              {/* Illustration stylisée SVG château */}
              <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-80">
                {/* Sol */}
                <line x1="0" y1="250" x2="400" y2="250" stroke="#c9a84c" strokeWidth="1" opacity="0.3"/>
                {/* Allée d'ormes */}
                {[60,100,300,340].map((x, i) => (
                  <g key={i}>
                    <line x1={x} y1="250" x2={x} y2={200 - (i < 2 ? 0 : 0)} stroke="#2d5a2d" strokeWidth="4"/>
                    <ellipse cx={x} cy={190} rx="15" ry="25" fill="#1a3a1a" stroke="#4a7c4a" strokeWidth="1"/>
                  </g>
                ))}
                {/* Corps central du château */}
                <rect x="150" y="100" width="100" height="150" fill="#141414" stroke="#c9a84c" strokeWidth="1.5"/>
                {/* Aile gauche */}
                <rect x="100" y="130" width="60" height="120" fill="#101010" stroke="#c9a84c" strokeWidth="1"/>
                {/* Aile droite */}
                <rect x="240" y="130" width="60" height="120" fill="#101010" stroke="#c9a84c" strokeWidth="1"/>
                {/* Tour gauche */}
                <rect x="85" y="110" width="25" height="140" fill="#0e0e0e" stroke="#c9a84c" strokeWidth="1"/>
                <path d="M82 110 L110 90 L122 110 Z" fill="#1a3a1a" stroke="#c9a84c" strokeWidth="1"/>
                {/* Tour droite */}
                <rect x="290" y="110" width="25" height="140" fill="#0e0e0e" stroke="#c9a84c" strokeWidth="1"/>
                <path d="M287 110 L315 90 L318 110 Z" fill="#1a3a1a" stroke="#c9a84c" strokeWidth="1"/>
                {/* Toit central */}
                <path d="M145 100 L200 60 L255 100 Z" fill="#1a3a1a" stroke="#c9a84c" strokeWidth="1.5"/>
                {/* Fenêtres */}
                {[170, 200, 230].map((x) => (
                  <rect key={x} x={x-8} y="150" width="16" height="22"
                        fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.6"/>
                ))}
                <rect x="192" y="200" width="16" height="50" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.6"/>
                {/* Blason sur façade */}
                <text x="200" y="130" textAnchor="middle" fill="#c9a84c" fontSize="14" opacity="0.5">⚜</text>
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="font-caps text-xs tracking-widest mb-4"
               style={{ fontFamily: 'Cinzel, serif', color: '#c9a84c', letterSpacing: '0.3em' }}>
              — PATRIMOINE —
            </p>
            <h2 className="font-display text-4xl mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#e8e4d9' }}>
              Le Château d'Ordre
            </h2>
            <p className="text-base leading-loose mb-4"
               style={{ fontFamily: 'EB Garamond, serif', color: '#908880' }}>
              Symbole matériel du prestige historique de la Maison du Wicquet, 
              le château d'Ordre incarne l'ancienneté et la puissance dynastique 
              de la famille dans le paysage du Boulonnais.
            </p>
            <p className="text-base leading-loose mb-6"
               style={{ fontFamily: 'EB Garamond, serif', color: '#707070' }}>
              Ses extensions architecturales successives, ses salons aux boiseries 
              remarquables, ses allées d'ormes et ses cheminées monumentales témoignent 
              d'un enracinement patrimonial exceptionnel. Le mobilier historique 
              qu'il conserve fait l'objet d'une attention particulière, face aux 
              risques de dispersion.
            </p>
            <Link to="/chateau-ordre" className="btn-noble">
              Découvrir le Château d'Ordre
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Page d'accueil complète ───────────────────────────────
export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Maison du Wicquet — Lignée noble du Boulonnais et du Hainaut depuis 1281</title>
        <meta name="description" content="La Maison du Wicquet est une ancienne lignée noble attestée depuis 1281 dans le Boulonnais et le Hainaut. Généalogie, héraldique, château d'Ordre et patrimoine familial." />
      </Helmet>

      <HeroSection />
      <IntroSection />
      <TimelinePreview />
      <HeraldryPreview />
      <ChateauPreview />
      <BranchesPreview />

      {/* CTA final */}
      <section className="py-20 px-4 text-center" style={{ background: '#000' }}>
        <div className="divider-noble max-w-2xl mx-auto mb-12" />
        <p className="font-caps text-xs tracking-widest mb-4"
           style={{ fontFamily: 'Cinzel, serif', color: '#c9a84c', letterSpacing: '0.3em' }}>
          — PROJET MÉMORIEL 2025–2026 —
        </p>
        <p className="max-w-2xl mx-auto mb-8 text-base leading-relaxed"
           style={{ fontFamily: 'EB Garamond, serif', color: '#707070' }}>
          La Maison du Wicquet engage un programme de numérisation et de consolidation 
          de ses archives familiales, en vue de réunir généalogie, histoire locale, 
          héraldique et patrimoine architectural dans une narration documentée cohérente.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/archives" className="btn-noble">Consulter les archives</Link>
          <Link to="/genealogie" className="btn-noble" style={{ borderColor: 'rgba(201,168,76,0.3)', color: 'rgba(201,168,76,0.6)' }}>
            Arbre généalogique
          </Link>
        </div>
        <div className="divider-noble max-w-2xl mx-auto mt-12" />
      </section>
    </>
  );
}

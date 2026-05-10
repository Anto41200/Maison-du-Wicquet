import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Section = ({ title, subtitle, children, delay = 0 }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="mb-16"
  >
    {subtitle && (
      <p className="font-caps text-xs tracking-widest mb-3"
         style={{ fontFamily: 'Cinzel, serif', color: '#c9a84c', letterSpacing: '0.3em' }}>
        {subtitle}
      </p>
    )}
    {title && (
      <h2 className="font-display text-3xl mb-6"
          style={{ fontFamily: 'Playfair Display, serif', color: '#e8e4d9' }}>
        {title}
      </h2>
    )}
    {children}
  </motion.section>
);

const Paragraph = ({ children, className = '' }) => (
  <p className={`text-base leading-loose mb-4 ${className}`}
     style={{ fontFamily: 'EB Garamond, serif', color: '#908880', lineHeight: '2' }}>
    {children}
  </p>
);

const Quote = ({ children }) => (
  <blockquote className="my-8 pl-6 py-2 border-l-2"
              style={{ borderColor: '#c9a84c' }}>
    <p className="text-lg italic"
       style={{ fontFamily: 'EB Garamond, serif', color: '#c9a84c' }}>
      {children}
    </p>
  </blockquote>
);

export default function HistoirePage() {
  return (
    <>
      <Helmet>
        <title>Histoire de la Maison du Wicquet — Noblesse du Boulonnais et du Hainaut</title>
        <meta name="description" content="Histoire de la Maison du Wicquet, ancienne lignée noble du Boulonnais et du Hainaut attestée depuis Hugues du Wicquet en 1281. Fonctions seigneuriales, patrimoine, héraldique." />
      </Helmet>

      {/* En-tête de page */}
      <div className="py-24 px-4 text-center relative overflow-hidden"
           style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0e1a0e 50%, #0a0a0a 100%)' }}>
        <div className="absolute inset-0 opacity-20 texture-overlay pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-caps text-xs tracking-widest mb-4"
             style={{ fontFamily: 'Cinzel, serif', color: '#c9a84c', letterSpacing: '0.4em' }}>
            — HISTOIRE —
          </p>
          <h1 className="font-display mb-4"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#e8e4d9' }}>
            Histoire de la Maison
          </h1>
          <div className="w-24 h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }} />
        </motion.div>
      </div>

      {/* Contenu */}
      <div className="max-w-3xl mx-auto px-4 py-16">

        <Section subtitle="— ORIGINES —" title="L'ancienneté de la Maison">
          <Paragraph>
            La Maison du Wicquet est une ancienne lignée noble enracinée dans le Boulonnais 
            et le Hainaut. Son plus ancien ancêtre documenté est <strong style={{ color: '#e8e4d9' }}>Hugues du Wicquet</strong>, 
            cité dans les actes en <strong style={{ color: '#c9a84c' }}>1281</strong>. Cette mention constitue 
            le fondement archivistique de la généalogie familiale et place la maison parmi 
            les lignées nobles dont l'ancienneté est attestée par des sources contemporaines.
          </Paragraph>
          <Paragraph>
            L'ancienneté de la famille sert de socle symbolique à toute la narration familiale : 
            elle permet de présenter la Maison du Wicquet non comme une simple généalogie privée, 
            mais comme une maison historiquement enracinée dans les territoires du Nord de la France.
          </Paragraph>
          <Quote>
            « Ancienneté, prestige, continuité historique, héritage familial, 
            enracinement territorial, mémoire dynastique. »
          </Quote>
        </Section>

        <div className="divider-noble" />

        <Section subtitle="— TERRITOIRE —" title="Le Boulonnais et le Hainaut">
          <Paragraph>
            La Maison du Wicquet s'identifie à deux territoires historiques complémentaires : 
            le <strong style={{ color: '#e8e4d9' }}>Boulonnais</strong>, territoire d'ancrage 
            principal, et le <strong style={{ color: '#e8e4d9' }}>Hainaut</strong>, région d'origine 
            première attestée par la mention de 1281.
          </Paragraph>
          <Paragraph>
            Ces deux espaces géographiques du Nord de la France constituent l'horizon 
            territorial de la famille à travers les siècles. La présence simultanée sur 
            ces deux territoires témoigne de la capacité de la maison à maintenir et 
            développer son ancrage régional dans un espace historiquement complexe, 
            à la confluence du royaume de France et du comté de Hainaut.
          </Paragraph>
        </Section>

        <div className="divider-noble" />

        <Section subtitle="— FONCTIONS —" title="Rôle dans l'administration régionale">
          <Paragraph>
            L'un des aspects les plus caractéristiques de la Maison du Wicquet est 
            l'importance des <strong style={{ color: '#e8e4d9' }}>fonctions exercées par ses membres</strong> 
            dans l'organisation régionale. La famille ne se signale pas uniquement par 
            un titre honorifique, mais par une participation active à l'administration, 
            à la justice et à la gestion du territoire.
          </Paragraph>
          <Paragraph>
            Parmi les charges attestées dans les sources figurent notamment :
          </Paragraph>
          <ul className="list-none space-y-3 mb-6 pl-4">
            {[
              'Maîtres des eaux et forêts',
              'Mayeurs (officiers municipaux)',
              'Officiers et administrateurs locaux',
              'Capitaines',
            ].map((fn) => (
              <li key={fn} className="flex items-start gap-3"
                  style={{ fontFamily: 'EB Garamond, serif', color: '#808080' }}>
                <span style={{ color: '#c9a84c', marginTop: '0.3rem' }}>⬧</span>
                <span>{fn}</span>
              </li>
            ))}
          </ul>
          <Paragraph>
            Ces fonctions illustrent que la noblesse régionale représentée par la 
            Maison du Wicquet n'était pas seulement une noblesse de prestige, 
            mais une noblesse d'administration et de service territorial.
          </Paragraph>
        </Section>

        <div className="divider-noble" />

        <Section subtitle="— PATRIMOINE —" title="Le château d'Ordre">
          <Paragraph>
            Le <strong style={{ color: '#e8e4d9' }}>château d'Ordre</strong> occupe une 
            place centrale dans la mémoire matérielle de la Maison du Wicquet. Sa présence 
            dans le patrimoine régional constitue une preuve physique de l'ancien prestige 
            de la famille et devient une incarnation concrète de sa mémoire dynastique.
          </Paragraph>
          <Paragraph>
            L'édifice se distingue par ses extensions architecturales successives, 
            ses salons aux boiseries remarquables, ses allées d'ormes, ses cheminées 
            monumentales et l'ensemble de son mobilier historique. Ces éléments font 
            l'objet d'une attention patrimoniale particulière, face aux risques de 
            dispersion qui constituent une préoccupation constante dans la préservation 
            du patrimoine familial.
          </Paragraph>
          <div className="mt-6">
            <Link to="/chateau-ordre" className="btn-noble">
              Découvrir le Château d'Ordre
            </Link>
          </div>
        </Section>

        <div className="divider-noble" />

        <Section subtitle="— PROJET —" title="Mémoire et préservation (2025–2026)">
          <Paragraph>
            Le projet actuel de la Maison du Wicquet s'inscrit dans une démarche 
            de <strong style={{ color: '#e8e4d9' }}>préservation historique et mémorielle</strong>. 
            Les objectifs affichés pour la période 2025–2026 témoignent d'une volonté 
            de passer d'un site mémoriel amateur à une archive familiale numérique 
            structurée et documentée.
          </Paragraph>
          <Paragraph>
            Ce programme comprend notamment la numérisation des archives familiales, 
            la consolidation des sources généalogiques, la création de documents officiels, 
            et la participation des branches cousines au projet mémoriel commun.
            La démarche s'accompagne d'une volonté de légitimation historique par 
            la documentation et la présentation fiable des sources vérifiées.
          </Paragraph>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/archives" className="btn-noble">Archives</Link>
            <Link to="/genealogie" className="btn-noble">Généalogie</Link>
            <Link to="/chronologie" className="btn-noble">Chronologie</Link>
          </div>
        </Section>

      </div>
    </>
  );
}

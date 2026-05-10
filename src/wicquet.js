/**
 * Données statiques de la Maison du Wicquet
 * IMPORTANT : Seules les informations documentées sont présentes.
 * Toute information présentée ici est sourcée ou clairement signalée.
 */

export const MAISON_INFO = {
  nom: 'Maison du Wicquet',
  devise: 'TOUJOURS LOYAL',
  cri: 'MACHICOURT',
  fondation: '1281',
  territoire: 'Boulonnais et Hainaut',
  description: `La Maison du Wicquet est une ancienne lignée noble du Boulonnais et du Hainaut, 
  dont la présence est attestée par les actes depuis 1281, avec la mention d'Hugues du Wicquet. 
  Cette ancienneté fonde la reconnaissance historique de la maison comme lignée enracinée 
  dans le territoire du Nord de la France.`,
};

export const BLASON = {
  blazon: 'De sinople au chevron d\'argent, accompagné de trois rustres du même',
  devise: 'TOUJOURS LOYAL',
  cri: 'MACHICOURT',
  description: {
    sinople: 'Le sinople (vert) évoque la loyauté et les terres boisées du Boulonnais et du Hainaut, territoires d\'ancrage de la famille.',
    chevron: 'Le chevron d\'argent symbolise l\'honneur, la protection et la noblesse.',
    rustres: 'Les rustres — losanges percés d\'un rond — constituent une figure héraldique rare et ancienne, marque de l\'ancienneté et de la singularité de la maison.',
    devise: 'La devise "TOUJOURS LOYAL" exprime la fidélité chevaleresque de la famille à travers les siècles.',
    cri: 'Le cri "MACHICOURT" est l\'expression dynastique et territoriale de la maison.',
  }
};

export const TIMELINE_EVENTS = [
  {
    id: 1,
    year: 1281,
    yearLabel: '1281',
    title: 'Première mention : Hugues du Wicquet',
    description: 'Hugues du Wicquet est cité dans les actes en 1281. Cette mention constitue le fondement documentaire de la lignée. C\'est le plus ancien ancêtre attesté de la Maison du Wicquet.',
    category: 'fondation',
    importance: 3,
    location: 'Hainaut / Boulonnais',
  },
  {
    id: 2,
    year: 1300,
    yearLabel: 'XIVe siècle (début)',
    title: 'Implantation dans le Boulonnais et le Hainaut',
    description: 'La famille s\'établit durablement sur les territoires du Boulonnais et du Hainaut, exerçant progressivement des charges administratives et seigneuriales.',
    category: 'territoire',
    importance: 2,
    location: 'Boulonnais – Hainaut',
  },
  {
    id: 3,
    year: 1400,
    yearLabel: 'XVe siècle',
    title: 'Exercice des charges de maîtres des eaux et forêts',
    description: 'Des membres de la Maison du Wicquet exercent la charge de maîtres des eaux et forêts, fonction seigneuriale attestée témoignant de l\'intégration de la famille dans l\'administration territoriale.',
    category: 'titre',
    importance: 2,
    location: 'Boulonnais',
  },
  {
    id: 4,
    year: 1500,
    yearLabel: 'XVIe siècle',
    title: 'Fonctions de mayeurs et capitaines',
    description: 'La Maison compte parmi ses membres des mayeurs et capitaines dont les activités sont attestées. Ces fonctions illustrent le rôle actif de la famille au-delà du titre honorifique.',
    category: 'titre',
    importance: 2,
    location: 'Boulonnais – Hainaut',
  },
  {
    id: 5,
    year: 1600,
    yearLabel: 'XVIIe siècle',
    title: 'Le château d\'Ordre : symbole architectural',
    description: 'Le château d\'Ordre s\'affirme comme symbole matériel du prestige de la Maison. Ses extensions, boiseries, salons et allées d\'ormes témoignent d\'un ancrage patrimonial fort.',
    category: 'patrimoine',
    importance: 3,
    location: 'Château d\'Ordre',
  },
  {
    id: 6,
    year: 2025,
    yearLabel: '2025–2026',
    title: 'Programme de préservation et numérisation',
    description: 'La Maison du Wicquet engage un programme de structuration mémorielle : numérisation des archives, consolidation des sources généalogiques, création de documents officiels et participation des branches cousines.',
    category: 'patrimoine',
    importance: 2,
    location: 'En ligne',
  },
];

export const BRANCHES = [
  {
    slug: 'boulonnais',
    name: 'Branche du Boulonnais',
    description: 'Branche principale, établie dans le Boulonnais depuis le XIIIe siècle. Territoire d\'ancrage historique de la Maison du Wicquet.',
    region: 'Boulonnais',
    color: '#1a3a1a',
    isActive: true,
  },
  {
    slug: 'hainaut',
    name: 'Branche du Hainaut',
    description: 'Rameau attesté en Hainaut depuis la première mention de 1281. Hugues du Wicquet y est cité dans les actes, faisant du Hainaut l\'origine géographique la plus ancienne de la lignée.',
    region: 'Hainaut',
    color: '#2d4a1e',
    isActive: true,
  },
  {
    slug: 'cousines',
    name: 'Branches cousines',
    description: 'Ensemble des branches collatérales dont les connexions avec la lignée principale font l\'objet de recherches généalogiques en cours dans le cadre du projet 2025–2026.',
    region: 'Divers',
    color: '#3d5a2e',
    isActive: true,
  },
];

export const ANCESTORS_FEATURED = [
  {
    slug: 'hugues-du-wicquet',
    firstName: 'Hugues',
    lastName: 'du Wicquet',
    title: 'Seigneur du Wicquet',
    birthYear: null,
    deathYear: null,
    yearLabel: 'Cité en 1281',
    shortBio: 'Premier ancêtre attesté de la Maison du Wicquet, cité dans les actes en 1281. Son nom est associé aux territoires du Hainaut et du Boulonnais.',
    functions: ['Seigneur du Wicquet'],
    isFeatured: true,
  },
];

export const PLACES = [
  {
    slug: 'chateau-ordre',
    name: 'Château d\'Ordre',
    type: 'Château',
    shortDescription: 'Résidence historique de la Maison du Wicquet. Symbole architectural du prestige dynastique, caractérisé par ses extensions successives, ses salons aux boiseries remarquables et ses allées d\'ormes.',
    latitude: 50.5,
    longitude: 2.1,
    region: 'Boulonnais',
    isFeatured: true,
  },
  {
    slug: 'boulonnais',
    name: 'Le Boulonnais',
    type: 'Territoire historique',
    shortDescription: 'Territoire d\'ancrage principal de la Maison du Wicquet. La famille y exerce ses fonctions seigneuriales et administratives depuis le XIIIe siècle.',
    latitude: 50.72,
    longitude: 1.61,
    region: 'Pas-de-Calais',
    isFeatured: true,
  },
  {
    slug: 'hainaut',
    name: 'Le Hainaut',
    type: 'Territoire historique',
    shortDescription: 'Origine géographique première de la Maison du Wicquet, attestée dès 1281 avec la mention d\'Hugues du Wicquet.',
    latitude: 50.35,
    longitude: 3.52,
    region: 'Nord',
    isFeatured: true,
  },
];

export const CATEGORY_LABELS = {
  fondation: 'Fondation',
  territoire: 'Territoire',
  titre: 'Titre & Fonction',
  patrimoine: 'Patrimoine',
  alliance: 'Alliance',
  conflit: 'Conflit',
};

export const CATEGORY_COLORS = {
  fondation: '#c9a84c',
  territoire: '#4a7c4a',
  titre: '#6b8fa0',
  patrimoine: '#8a6b4a',
  alliance: '#9a6b8a',
  conflit: '#8a4a4a',
};

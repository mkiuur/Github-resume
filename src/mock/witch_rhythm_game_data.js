import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Margaret Riese | Computer Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Margaret Riese Portfolio Website', // e.g: Welcome to my website
};

// // HERO DATA
export const heroData = {
  title: '',
  name: 'Margaret Riese',
  subtitle: 'Computer Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Work_Photo.jpg',
  paragraphOne:
  'Witch Rhythm Game',
  paragraphTwo:
  'Create helpful potions by casting spells along to music! The purpose of this project is further my knowledge about game development and Unity\'s animation features.',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/13_lCtgol_VL0ybbYB13QqvnAUJ7H592x/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'witch mini mood board.jpg',
    title: 'Concept',
    info:
    'The basic idea for the game is that a little witch creates potions by casting spells along to music. ',
    info2:
    'Projectiles (spells) would fly towards hit boxes (magic cards) for the rhythm game. The witch asset would perform different animations based on the key sequence behind the main gameplay.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '2D rhythm game tutorial trimmed.gif',
    title: 'Rhythm Game Tutorial',
    info:
    'I followed a tutorial on how to make a basic rhythm game in Unity and reproduced the example.',
    info2:
    'Through this I learned most of the basic skills I would need moving forward.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '2D rhythm game with pooling trimmed.gif',
    title: 'Object Pooling',
    info: 'Anticipating a large amount of potential instantiations and destructions, I implemented an object pooling system for the projectiles to reuse objects.',
    info2: 'I also started looking into user interface elements.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '3d rhythm game trimmed.gif',
    title: 'Conversion to 3D',
    info: 'With the basic game loop completed, I converted the entire project to 3D.',
    info2: 'I also tried to rotate the projectiles in 3D to give them a less static feel.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '3d rhythm game circle config trimmed.gif',
    title: 'Circle Configuration',
    info: 'In my original concept I wanted the rhythm game to have a circular configuration. This makes it more difficult becuase it is harder to judge the consecutive order of the required key presses.',
    info2: 'Down the line I also want to add circular witch themed art.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'particle effects, spin animations.gif',
    title: 'Particle effects and spinning card animations',
    info: 'I added some particle effects and trails to the projectiles to make them look like they were flying as apposed to transforming. I also made the box colliders more card shaped and gave them a spin animation for when they are hit.',
    info2: 'More cards were added so that a player has to incorporate multiple key presses to hit diagonal cards.',
    url: '',
    repo: 'https://github.com/mkiuur/Witch-Rhythm-Game', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'mkiuur@gmail.com',
  btn: "Let's Talk",
  email: 'mkiuur@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/margaret-riese/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mkiuur',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

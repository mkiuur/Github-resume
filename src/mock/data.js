import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Margaret Riese | Computer Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Margaret Riese Portfolio Website', // e.g: Welcome to my website
};

// HERO DATA
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
    'I am a Canadian Computer Engineer with industry experience building and maintaining large software applications. I specialize in C/C++ and Python.',
  paragraphTwo:
    'Even when I leave the office, I tend to be coding at home. Most recently I have been working on a cyberpunk racing game and a website for a local gallery.',
  paragraphThree: 'Take a look at my work and feel free to reach out!',
  resume: 'https://drive.google.com/file/d/13_lCtgol_VL0ybbYB13QqvnAUJ7H592x/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Pitch Fix Image.jpg',
    title: 'Pitch Fix | Python',
    info:
      'From 2019 to 2020, I built a vocal misuse detection desktop application in Python which required expert navigation of a large and expanding codebase.',
    info2:
      'I implemented an algorithm to isolate the fundamental frequency of a person’s voice, which was then used to detect vocal strain. I also designed all of the assets for the application.',
    url: 'https://drive.google.com/file/d/1GOd8hpswHYhkGIiCi8WDngLnKcBWtRYE/view',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Knights and Monsters Image.jpg',
    title: 'Knights and Monsters | C++',
    info:
      'In spring 2020 I made 3D knights and monster assets that could move their limbs and be interacted with in real time. To facilitate movement I created a kinematics and mass spring system.',
    info2:
      'I also built a shader pipeline and a bounding volume hierarchy system to light the scene while maintaining performance.',
    url: 'https://drive.google.com/file/d/1SvJnw3wrdw3bZ7VK9aGkerqgs1Tbqo6h/view?usp=sharing',
    repo: 'https://github.com/mkiuur/Knights-and-Monsters', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Friend Connect Image.jpg',
    title: 'Friend Connect | Framer',
    info: 'In 2016 I created a beta demonstration phone app for social media - a mapping extension',
    info2: "The app found friends locations on a map similar to Snapchat's Bitmoji map feature",
    url: 'https://drive.google.com/file/d/15qXVYjBh2GNuhln1BZ5YJVtMksu1us0G/view?usp=sharing',
    repo: '', // if no repo, the button will not show up
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
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
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

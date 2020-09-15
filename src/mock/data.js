import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Margaret Riese | Computer Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Margaret Riese Portfolio Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Computer Engineer',
  name: 'Margaret Riese',
  subtitle: 'Computer Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Work_Photo.jpg',
  paragraphOne:
    'I am a Computer Engineer with industry experience building and maintaining large software applications. I specialize in C/C++ and Python. Take a look at my work and feel free to reach out!',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/13_lCtgol_VL0ybbYB13QqvnAUJ7H592x/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Pitch Fix | Python',
    info:
      'From 2019 to 2020, I worked with a small team to create a vocal misuse detection desktop application in Python which required expert navigation of a large and expanding codebase. I researched and implemented an algorithm to isolate the fundamental frequency of a person’s voice, which was then used in other parts of the application to detect vocal strain. I also researched benchmark GUIs and designed all of the assets for the application as well as building the user interface.',
    info2: '',
    url: 'Pitch Fix Image.jpg',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '647 787 6180',
  btn: '',
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

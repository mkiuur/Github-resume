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
  'Even when I leave the office, I tend to be coding at home. Most recently I have been working on a little witch themed rhythm game and a website for a local gallery.',
  paragraphThree: 'Take a look at my work and feel free to reach out!',
  resume: 'https://drive.google.com/file/d/1T1G5ues8XyVWqMB_ueYOfTkz4LoO7GL8/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Knights and Monsters Image.jpg',
    title: 'Knights and Monsters | C++',
    info:
    'In spring 2020 I made 3D knights and monster assets that could move their limbs and be interacted with in real time. To facilitate movement I created a kinematics and mass spring system.',
    info2:
    'I also built a shader pipeline and a bounding volume hierarchy system to light the scene while maintaining performance.',
    url: '/knights-and-monsters',
    repo: 'https://github.com/mkiuur/Knights-and-Monsters', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'AnimationLearningImage.jpg',
    // img: 'https://www.youtube.com/watch?v=4Hg1Kudd_x4&ab_channel=HomeworkRadio',
    title: 'Unity Animation Demonstrations | C#, Unity',
    info: 'I am currently working on learning about the animation features available in Unity including blend trees, retargetting, and layering',
    info2: "This project is a part of my personal development and is ongoing",
    url: '/learning-unity-animation-features',
    repo: 'https://github.com/mkiuur/Learning-Unity-Animation-Features', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'witch-rhythm-game.jpg',
    title: 'Witch Rhythm Game | C#, Unity',
    info: 'Create helpful potions by casting spells along to music! The purpose of this project is further my knowledge about game development and Unity\'s animation features.',
    info2: "This project is a part of my personal development and is ongoing",
    url: '/witch-rhythm-game',
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

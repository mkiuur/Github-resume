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
    'Learning Unity Animation Features',
  paragraphTwo:
    'I have recently been learning how to use Unity\'s animation features. Check out my progress!',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/13_lCtgol_VL0ybbYB13QqvnAUJ7H592x/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Boolean Animation Controller.gif',
    title: 'Boolean Animation Controller',
    info:
      'Animations are changed based on boolean values. e.g. if \'w\' is pressed, she will walk, if \'shift\' is pressed, she will run.',
    info2:
      'Switching between walking and running animations is immediate and choppy looking.',
    url: '',
    repo: 'https://github.com/mkiuur/Learning-Unity-Animation-Features/blob/main/animationStateController.cs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '1D Blend Trees.gif',
    title: '1D Blend Trees',
    info:
      'The animations for walking and running are blended together based on a float value for velocity in the X direction. The longer \'w\' is pressed, the greater the velocity.',
    info2:
      'As the velocity increases, the running animation will be further blended into the walking animation.',
    url: '',
    repo: 'https://github.com/mkiuur/Learning-Unity-Animation-Features/blob/main/animationStateControllerBlend.cs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '2D Blend Trees.gif',
    title: '2D Blend Trees',
    info: 'The walking and running animations are now blended with a right strafe and left strafe animation depending on the velocity float in the Z direction.',
    info2: 'The X and Z velocities are locked and reset at 0.5f for walking and 2.0f for running based on whether the \'shift\' key is being pressed.',
    url: '',
    repo: 'https://github.com/mkiuur/Learning-Unity-Animation-Features/blob/main/twoDimensionalAnimationStateController.cs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Animation Retargetting Before.gif',
    title: 'Animation Retargetting Before',
    info: 'When starting to retarget animations to other characters, because the animations were not mapped to humanoid characters, there were some unexpected results...',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Animation Retargetting After.gif',
    title: 'Animation Retargetting After',
    info: 'After mapping all the animations to be humanoid using Unity\'s humanoid animation retargetting system, the animations work as expected for all humanoid rigs.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Animation Layers.gif',
    title: 'Animation Layers',
    info: 'By creating an mask of the humanoid rig, a separate animation can be used for different parts of the body. ',
    info2: 'An example of this would be using an upper body mask for an idle pistol holding animation while the lower body continues to play a walking or running animation.',
    url: '',
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

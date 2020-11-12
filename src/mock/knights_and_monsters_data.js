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
    'Knights and Monsters',
  paragraphTwo:
    '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'raster-images.gif',
    title: 'Raster Images',
    info:
      'I built a handful of rasterization converters. Given a RGBA picture, the converters would be able to manually rotate, recolor, or perform a number of transformations on the image.',
    info2:
      'These functions are manually performed using a number of matrix transformations and manipulations of the RGB, HSL, or alpha values. ',
    url: 'https://drive.google.com/file/d/1eZJnlv00kQMYxOWo_nzvOHpjvYeaV2O8/view?usp=sharing',
    repo: 'https://github.com/mkiuur/Pitch-Fix-Public', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'casterImages.jpg',
    title: 'Ray Casting',
    info:
      'The ray caster I built casts rays from the camera into the scene to judge depth and lighting. Combining the components or the casting vectors, the system determines the intersection point of the ray and any object in the scene within view.',
    info2:
      'For each pixel in the image, the system generated a ray and then, for each object in the scene, if the ray intersects the object, a pixel color is set. The system is inefficient and is improved upon in later parts of the project.',
    url: 'https://drive.google.com/file/d/1SvJnw3wrdw3bZ7VK9aGkerqgs1Tbqo6h/view?usp=sharing',
    repo: 'https://github.com/mkiuur/Knights-and-Monsters', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sphere-and-plane.gif',
    title: 'Ray Tracing',
    info: 'The ray tracing system takes the intersection point from the ray caster and fires a new ray to each point or directional light source to determine how much the object is lit.',
    info2: "The system also calculates ambient lighting, diffuse lighting, specular reflection, and refraction based on the material of the object. These are combined in the Blinn Phong model.",
    url: 'https://drive.google.com/file/d/15qXVYjBh2GNuhln1BZ5YJVtMksu1us0G/view?usp=sharing',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rubber-ducky-aabb-tree.jpg',
    title: 'Bounding Volume Hierarchies',
    info: 'I built a bounding box system to reduce the time taken to search for intersections during ray tracing. First all the objects are encapsulated in one large object oriented bounding box. ',
    info2: "Then the bounding box is filled with half the objects in the box recursively, duplicating objects that intersect more than one box. This allows objects to be searched for in O(logn) instead of O(n).",
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bob-subdivision.gif',
    title: 'Meshes',
    info: 'To reduce storage size, I changed the triangle meshes from being stored as individual triangles to being stored as half edges. This takes up 1/3 of the original method.',
    info2: "I also implemented per-corner normals and a system to recursively subdivide surfaces of a mesh to create a smoother surface.",
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'giphy 2.gif',
    title: 'Shader Pipeline',
    info: 'To further reduce space, I split the polygon into equal segments and average the colors to reduce the colors that need to be stored for a particular asset.',
    info2: "I also created a texture mapping system that would generate perlin noise with a random seed to reduce the amount of mesh complexity required in certain scenarios. I also made sure the shadow of the object reflected the new surface texture.",
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://drive.google.com/file/d/1SvJnw3wrdw3bZ7VK9aGkerqgs1Tbqo6h/preview',
    title: 'Kinematics',
    info: 'Using inverse kinematics, I create a rotation and translation matrix for each bone and then recursively multiply the matrices from the origin of the movement to the base of the skeleton.',
    info2: "The mesh is deformable. Each point on the mesh is attached to multiple bones with weights that can be averaged to create a smooth deformation. ",
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'flag.gif',
    title: 'Mass Spring System',
    info: 'Each point in the mesh is assigned a mass and an acceleration for an initial force and any external forces are added to this. e.g. gravity, wind',
    info2: "By recursively calculating the effects of other points in the mesh on a single point like a group of connected springs, the total movement can be calculated. The spring constants are assigned to simulate the intended material.",
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

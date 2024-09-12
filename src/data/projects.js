import compmanlogo from '../assets/img/companlogo.png';
import screenshot from '../assets/img/image.png';

export const projects = [
  {
    image: compmanlogo,
    link: 'https://compman.netlify.app/',
    title: 'Compman',
    subtitle: 'Dance Competition Manager',
    description:
      'Utilizing the MERN stack, this application is designed to help dance competition organizers manage their events, competitors, and judges. It also provides a platform for  competitors to register for events and view their scores.',
    tech: 'MongoDB, Express, React, Node.js, Redux, Material-UI, Sass, JWT, Bcrypt, Mongoose, Axios, Vite, Heroku, Netlify, Git, GitHub, Postman',
    concepts:
      'Fullstack Development, RESTful APIs, CRUD Operations, Authentication, Authorization, State Management, Responsive Design, Error Handling, Deployment, Version Control, Multi-Tenant Architecture',
    story:
      'I built this app because a friend needed something like this for her dance studio since the current solutions were either too expensive and too complicated. I wanted to create a simple, user-friendly, and affordable solution that could be used by small dance studios and large competition organizers alike. I learned a lot about fullstack development, RESTful APIs, state management, deployment, multi-tenant architecture, and more.',
    screenshot: screenshot,
  },
];

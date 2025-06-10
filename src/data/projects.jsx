import compmanlogo from '../assets/img/companlogo.png';
import compmanScreenshot from '../assets/img/image.png';
import handmanlogo from '../assets/img/handmanicon.png';
import handmanScreenshot from '../assets/img/handmanss.png';

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
    signIn: (
      <>
        <p>
          <strong>Email:</strong> <code>j@gmail.com</code>
        </p>
        <p>
          <strong>Password:</strong> <code>qwerty</code>
        </p>
      </>
    ),
    screenshot: compmanScreenshot,
  },
  {
    image: handmanlogo,
    link: 'https://handmanpro.netlify.app',
    title: 'Han-D-Man Pro',
    subtitle: 'Handyman Service Management',
    description:
      'Utilizing the MERN stack, this application is designed to help handymen manage their jobs, clients, invoices, proposals, receipts and schedules. It also provides a platform for clients to book services, sign documents, pay for services and leave reviews.',
    tech: 'MongoDB, Google API, Express, React, Node.js, Redux, Material-UI, Sass, JWT, Bcrypt, Mongoose, Axios, Vite, Heroku, Netlify, Git, GitHub, Postman',
    concepts:
      'Fullstack Development, RESTful APIs, CRUD Operations, Authentication, Authorization, State Management, Responsive Design, Error Handling, Deployment, Version Control, Multi-Tenant Architecture',
    story:
      'I built this app because I wanted to create a simple, user-friendly, and affordable solution for handymen to manage their jobs and clients. I learned a lot about fullstack development, RESTful APIs, state management, deployment, multi-tenant architecture, and more. This app is designed to help handymen save time and focus on their work instead of managing their business.',
    signIn: (
      <p>
        <code>Use your google account to sign in</code>
      </p>
    ),
    screenshot: handmanScreenshot,
  },
];

import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import reactPF from "../assets/projects/ReactPF.png";
import flightImg from "../assets/projects/Flight.png";

export const HERO_CONTENT = `Hey there ! I'm an experienced Software/ Web developer . With 2 years of hands-on experience on projeccts with mostly Frontend technologies related work, where I develop ,enhance, optimise and work on UI enhanements of Websites and Web apps ,I have honed my skills in Frontend technologies like Angular 14+, AngularJs & React Js.`;

export const ABOUT_TEXT = `I'm from Noida, Uttar Pradesh, India and ompleted my Highschool from same city also I have completed my graduation in Bachelors Of Technology in Computer Science Engineering from Noida Institute Of Engineering & Technolgies & after completion I've started to work with capgemini as my starting organisation where I;m urrently working on improving my skills by providing the required work to my organisation with new tasks on projects`;

export const EXPERIENCES = [
  {
    year: "June(2022) - Present",
    role: "Frontend Web Developer",
    company: "Capgemini",
    description: `In recent 2 years of my experience I've been working closely with customers with Fronted technolgies development where I've been working on new development of UI , optimisation , and new functionality implementation using tehnolgies mentioned below and to work losely with foreign backend team to produce the required development outcomes on time. `,
    technologies: [
      "Angular",
      "Javascript",
      "ReactJs",
      "AngularJs",
      "HTML",
      "CSS",
      "GitHub",
      "PrimeNG",
      "Material",
    ],
  },
  {
    year: "Feb(2022) - June(2022)",
    role: "Full Stack Intern",
    company: "Capgemini",
    description: `Underwent a Full Stack Development training program as a new joinee where as a team of 4 we developed a group projet showing full fledged working of an Eyeclinic Web App with both frontend & backend technologies to book & manage appointments for both Admin & Customers`,
    technologies: [
      "Angular",
      "HTML",
      "CSS",
      "Javascript",
      "Springboot",
      "Postman",
      "MySQL",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    image: reactPF,
    description:
      "A fully responsive portfolio website to let someone know about Me, My work experience and Skills ,it was firstly built purely in HTML,CSS,JS then later improved with ReactJs and Framer Motion ",
    technologies: [
      "ReactJs",
      "Framer Motion",
      "HTML",
      "CSS",
      "React",
      "Node.js",
    ],
  },
  {
    title: "Flight Fare Predictor WebApp",
    image: flightImg,
    description:
      "Developed a frontend for my colleagues backend project that used Mahine Learning , Python to predict the flight fare based on previously present data.",
    technologies: [
      "Flask",
      "Bootstrap",
      "Python",
      "Mahine Learning",
      "HTML",
      "CSS",
    ],
  },
];

export const CONTACT = {
  address: "Noida, INDIA",
  phoneNo: "+91 8447515278",
  email: "cr7sahilmalik@gmail.com",
};

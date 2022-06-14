// Skills Icons
import cplusplusIcon from "./images/cplusplus.svg"
import javascriptIcon from "./images/javascript.svg"
import pythonIcon from "./images/python.svg"
import reactIcon from "./images/react.svg"
import unityIcon from "./images/unity.svg"
import djangoIcon from "./images/django.svg"
import gitIcon from "./images/git.svg"
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import nodejsIcon from "./images/nodejs.svg"
import awsIcon from "./images/aws.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Kent",
  headerTagline: "If you don't give up, you'll get through.",
  //   Header Paragraph
  headerParagraph: "",

  //Contact Email
  contactEmail: "kentphan2000@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "ApeJobs", //Project Title - Add Your Project Title Here
      para:
        "ApeJobs is a job application platform for UCR students and professors. Professors can list jobs relating to their courses or interests, such as research, TA, and grader positions.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://user-images.githubusercontent.com/46156230/172455978-ceceafbc-49da-412a-b2f5-752f96023427.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/UCR-CS110/final-project-scottyjobs",
    },
    {
      title: "Covid Dashboard", //Project Title - Add Your Project Title Here
      para:
        "Covid Dashboard is a web application built to analyze a COVID-19 dataset. The goal is to help users understand statistical information about COVID-19 globally.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://user-images.githubusercontent.com/46156230/144631247-b714d17f-8008-42c3-875f-4449bf6c827b.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Moltenfuzzy/Covid-Dashboard",
    },
    {
      title: "InfestationZ", //Project Title - Add Your Project Title Here
      para:
        "A top down zombie shooter built from scratch with C++ and SFML. Using A* pathfinding, zombies can locate the player based off their current node. ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://user-images.githubusercontent.com/46156230/103430666-42e07900-4b7b-11eb-83c7-c7e75f40710b.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Moltenfuzzy/InfestationZ",
    },
    {
      title: "Attack the Towers", //Project Title - Add Your Project Title Here
      para:
        "A real-time tower defense developed in Unity where the user plays against an AI", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/454/752/datas/original.png",
      //Project URL - Add Your Project Url Here
      url: "https://devpost.com/software/unity-game-attack-the-towers/",
    },
    {
      title: "Predator and Prey Simulation", //Project Title - Add Your Project Title Here
      para: "A predator and prey simulation written in C++ and SFML", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://media.tenor.com/images/651be223713eebe5d355ac2c861c671e/tenor.gif",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Moltenfuzzy/Predator-and-Prey-Simulation",
    },
    {
      title: "Graphing Calculator", //Project Title - Add Your Project Title Here
      para:
        "A graphing calculator application built upon various expression parsing algorithms and written in C++ using SFML.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: "https://i.imgur.com/hJZS2Sy.png",
      //Project URL - Add Your Project Url Here
      url: "https://www.youtube.com/watch?v=iFK0CaNwHyY",
    },
    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne: [
    "Hi, my name is Kent! I am a Computer Science graduate from The University of California, Riverside. ",
    "When I am not building my next million dollar app idea, I love to play video games. ",
    "Some of my favorites are Valorant and Pokemon! If you noticed, this picture is with some of my favorite pro valorant players! ",
    "I am currently in search for a job. Please check out resume and connect with me if you are interested! ",
  ],
  aboutParaTwo: [
    "Relevant Coursework: Intermediate Data Structures & Algorithms, Compilers, Operating Systems, Software Engineering, Natural Language Processing, Data Analysis, Computer Architecture, Design Patterns, Web Development, Game Development",
  ],
  aboutImage:
    "https://media.discordapp.net/attachments/662359000272207929/928748783943155712/IMG_8230.jpg?width=352&height=469",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: cplusplusIcon,
      para: "C++",
    },
    {
      img: pythonIcon,
      para: "Python",
    },
    {
      img: javascriptIcon,
      para: "JavaScript",
    },
    {
      img: reactIcon,
      para: "React",
    },
    {
      img: djangoIcon,
      para: "Django",
    },
    {
      img: unityIcon,
      para: "Unity",
    },
    {
      img: gitIcon,
      para: "Git",
    },
    {
      img: htmlIcon,
      para: "HTML",
    },
    {
      img: cssIcon,
      para: "CSS",
    },
    {
      img: nodejsIcon,
      para: "NodeJS",
    },
    {
      img: githubIcon,
      para: "GitHub",
    },
    {
      img: awsIcon,
      para: "AWS",
    },
  ],

  // End Skills Section --------------------------

  //   //   Promotion Section --------------------------

  //   promotionHeading: "Heading",
  //   promotionPara:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   // End Promotion Section -----------------

  //   Contact Section --------------

  //   contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/moltenfuzzy" },
    { img: linkedinIcon, url: "https://linkedin.com/in/kentphan2000" },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com

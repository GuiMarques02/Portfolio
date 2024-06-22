import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";

export const HERO_CONTENT = `I'm a wannabe front-end developer in my training arc. With a solid 0 years of experience, I'm on the exciting journey of mastering front-end technologies. As for back-end and database technologies, well, let's just say there's plenty of room for growth but hey, everyone starts somewhere, right? My goal is just to live day by day. 

I'm dedicated to creating innovative UIs that deliver beautiful and simple user experiences. Adaptable and with a good sense of humor, I'm eager to grow my skills and career in this ever-evolving world of web development.`;


export const ABOUT_TEXT = `(You can skip this by the way. It's not that relevant.)

My journey has been anything but conventional. I initially aspired to join the marines, but a surgical operation altered my course. Undeterred, I enrolled in a Bachelor's program in Computer Engineering at ISCTE with zero prior experience. During my studies, I delved into various programming languages and discovered a profound interest in design and web development.

Beyond the world of coding, I'm a sports junkie with an unyielding passion for athletics. Although I didn't pursue a career in sports, I have exciting plans to merge my love for sports with my software skills in the future.

Creativity is my forte, and I pride myself on my high adaptability and vibrant sense of humor. As I continue to develop my skills, I'm eager to grow my career in this dynamic field, blending my diverse interests into unique and innovative projects.`;

export const EXPERIENCES = [
  {
    year: "2021 - 2024",
    role: "Student",
    company: "ISCTE - IUL",
    description: "Bachelor's in Computer Engineering, where I have built a strong foundation in various programming languages and web development. I had several group projects, where I honed my skills in both teamwork, leadership and software development",
    technologies: ["Java", "Python", "PHP", "HTML/CSS", "React", "MySQL"],
  },
  {
    year: "2020 - 2021",
    role: "Retail Cashier",
    company: "ALDI - Supermarkets",
    description: "Performed several functions mainly cashier operations but also replenishment, warehouse cleaning, and bakery assistance. Developed a strong understanding of responsibility, teamwork, and effective communication with clients.",
    technologies: ["Responsibility", "Communication", "Teamwork", "Client Interaction"],
  },
  {
    year: "2019 - 2020",
    role: "Futsal Coach",
    company: "C.D.R - Os Vinhais",
    description: "Led a youth futsal team, focusing on developing players' skills and fostering teamwork. My role demanded strong leadership, effective communication, and strategic decision-making to achieve the team's goals.",
    technologies: ["Team Management", "Leadership", "Communication", "Decision Making"],
  },
  
];

export const PROJECTS = [
  {
    title: "Rogue Game",
    image: project5,
    description:
      "A fully functional Java rogue like game with features like an inventory, enemys, keys and objetives.",
    technologies: ["Java", ],
  },
  {
    title: "LabTech Solutions",
    image: project2,
    description:
      "An application for managing experiences in a laboratory with rats. Uses various techonolgies to make sure everything in the lab runs smoothly.",
    technologies: ["Java", "HTML", "CSS", "MongoDB", "MySQL", "PHP", "Flutter", "Android Studio"],
  },
  {
    title: "APOSTA NA DESPORTIVA",
    image: project3,
    description:
      "A betting website for Liga Portuguesa. Various types of users each one having his own role.",
    technologies: ["Django", "HTML", "CSS"],
  },
  {
    title: "AI Space Shooter Game",
    image: project4,
    description:
      "Genetic algorithm space shooter game with algorithm knowledge to make the best protection against an alien invasion.",
    technologies: ["Python"],
  },
  {
    title: "Thread Based Snake Game",
    image: project1,
    description:
      "A classic game of snake but with a little twist. Everything is done on threads and it can have multiple players simultaneously",
    technologies: ["Java"],
  },
  {
    title: "Fenix++",
    image: project6,
    description:
      "A platform for ISCTE teachers, can be used to update class schedules. Need to miss a class? No problem quickly create a substitution class in seconds and much more.",
    technologies: ["React", "JS", "Trello", "GitHub"],
  },
  
];

export const CONTACT = {
  email: "sftenglm@gmail.com",
};

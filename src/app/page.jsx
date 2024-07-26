import Navbar from "../components/Navbar/Navbar";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import Footer from "@/components/Footer/Footer";
import ArticleWork from "@/components/ArticleWork/ArticleWork";
import slack from "../components/ArticleWork/icons/slack.png";
import micro from "../components/ArticleWork/icons/microsoft.png";
import spotify from "../components/ArticleWork/icons/SPOTIFY.png";
import SignupWidget from "@/components/WigetSignup/SignupWidget";
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import profileIcon from "../components/ProfileHeader/ProfileIcon/koki.jpeg";
import SkillsWidget from "@/components/SkillsWidgets/SkillsWidgets";
import htmlIcon from "../components/SkillsWidgets/icons/html5.png";
import cssIcon from "../components/SkillsWidgets/icons/css3.png";
import javascriptIcon from "../components/SkillsWidgets/icons/javaScript.png";
import Switcher from "../components/Switcher/Switcher";

const articles = [
  {
    date: "Nov 15, 2021",
    title: "Everything you need to know about React",
    content:
      "The ability to build stuff in React is one of the hottest skills to have today in software engineering. There is a lot of demand for React developers among startups as well as MNCs.",
    link: "https://medium.com/the-research-nest/everything-you-need-to-know-about-react-ab24da4275ea",
  },
  {
    date: "Jan 4, 2024",
    title: "How to learn React step-by-step",
    content:
      "A software developer should learn React because it's widely used for building dynamic user interfaces, offers efficient development with its component-based approach, and enhances job opportunities due to its popularity in the industry.",
    link: "https://www.freecodecamp.org/news/how-to-learn-react-step-by-step/",
  },
  {
    date: "Sep 2, 2020",
    title: "The Missing Introduction to React",
    content:
      "React is the world’s most popular JavaScript framework, but it’s not cool because it’s popular. It’s popular because it’s cool. Most React introductions jump right into showing you examples of how to use React, and skip the “why”.",
    link: "https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76",
  },
];
const works = [
  { name: "Slack", icon: slack, startYear: 2016, endYear: "current" },
  { name: "Spotify", icon: spotify, startYear: 2014, endYear: 2015 },
  { name: "Microsoft", icon: micro, startYear: 2010, endYear: 2013 },
];
const skills = [
  { name: "HTML", proficiency: 60, icon: htmlIcon },
  { name: "CSS", proficiency: 50, icon: cssIcon },
  { name: "JavaScript", proficiency: 75, icon: javascriptIcon },
];
// >>>>>>> 54bdfa288e55094ea02f17b3eb14243f340e64e5
export default function Home() {
  return (
    <div>
      <Navbar
        options={[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/projects", label: "Projects" },
          { path: "/uses", label: "Uses" },
        ]}
      />
      {/* <Switcher darkClassName="dark-mode" /> */}
      <div className="profile-header-container">
        <ProfileHeader
          name="Software engineer"
          bio="Dedicated software engineer with expertise in HTML, CSS, java, and nearly advanced JavaScript. With a keen eye for design and a knack for problem-solving, they craft elegant and functional web applications. Their proficiency in CSS and HTML ensures visually appealing and responsive user interfaces, while their growing mastery of JavaScript enables them to create dynamic and interactive web experiences. Continuously striving for excellence, [Name] is committed to honing their skills and staying abreast of the latest trends and technologies in the ever-evolving field of software development."
          linkedinUrl="https://www.linkedin.com/in/yourprofile"
          imageUrl={profileIcon} // Pass the imported profile icon image as a prop
        />
      </div>
      <div className="footerContainer">
        <div className="mainCard">
          <div className="articles">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                date={article.date}
                title={article.title}
                content={article.content}
                link={article.link}
              />
            ))}
          </div>
          <div className="rightSidebar">
            <SignupWidget
              title={"Stay up to date"}
              content={"Get notified when I publish something new, and unsubscribe at any time."}
            />
            <ArticleWork
              title={"Work"}
              content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."}
              items={works}
            />
            <SkillsWidget
              title={"Skills"}
              content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."}
              skills={skills}
            />
          </div>
        </div>
        <div className="footerBar">
          <Footer
            options={[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/projects", label: "Projects" },
              { path: "/uses", label: "Uses" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

// export const metadata = {
//   title: 'Portfolio - Home',
//   description: 'Home page of my portfolio.',
// }

// export default function Home() {
//   return (
//     <div>
//       Home
//     </div>
//   );
// }

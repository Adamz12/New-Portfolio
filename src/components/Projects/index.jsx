import { useState, useEffect } from "react";
import "./style.css";
import BackgroundLines from "../BackgroundLines";
import WorkCard from "../WorkCard";
import ScrambleText from "../ScrambleText";
import ParaWriting from "../ParaWriting";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import work1 from "../../assets/Images/summarist2.png";
import work2 from "../../assets/Images/twitter-clone.png";
import work3 from "../../assets/Images/nft-marketplace4.png";

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleComplete = () => {
    setHasAnimated(true);
  };

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const works = [
    {
      client: "Summarist",
      year: "2023",
      img: work1,
      title: "Summarist App",
      detail:
        "Conceptualized and launched an intuitive platform enabling users to effortlessly grasp fundamental concepts from extensive literary works using AI. Received a 95% satisfaction rate based on user feedback, highlighting the system’s accuracy and readability. Developed a dynamic web application leveraging React Typescript, Firebase and Redux, allowing users to seemingly login, sign up and manage subscription plans. Utilized Next.js for server-side rendering, enhanced performance, and integrated Material-UI for visual appealing and consistent user interface ",
    },
    {
      client: "Twitter Clone",
      year: "2023",
      img: work2,
      title: "Twitter Clone",
      detail:
        "Developed a Twitter clone with firebase as the backend database to facilitate real-time storage and retrieval of tweets, enhancing the user experience with efficient data handling. Integrated Redux for streamlined state management, ensuring a cohesive design and smooth interaction between components while maintaining scalability and organization",
    },
    {
      client: "Nft Market",
      year: "2023",
      img: work3,
      title: "Nft Market",
      detail:
        "Transformed a completely static HTML, CSS, JavaScript and React single page application into an interactive user interface using animations, transitions, and carousels Processed API requests with Axios to dynamically represent data from a cloud server and represented it through skeleton loading states, pagination, and dynamic routing Utilized Git version control and the GitHub interface to work and thrive in a virtual and collaborative team environment",
    },
  ];

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 0.5 }}
          className="projects--grid--title"
        >
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              03
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Expertise
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              );
            })}
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 1 }}
          onAnimationComplete={() => handleComplete()}
          className="projects--grid--detail"
        >
          <p className="theme--detail">
            <ScrambleText delay={1}>
              Discover a curated portfolio of projects where each line of code
              tells a story of problem-solving, creativity, and technical
              finesse.
            </ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import { Tilt } from "react-tilt";
import { motion, spring } from "framer-motion";
import { styles } from "../styles";
import { technologies } from "../contants/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";
import Fade from "react-reveal/Fade";
import Swing from "react-reveal/Swing";
// import { SectionWrapper } from "../hoc/index.js";

const ServiceCard = ({ index, name, icon }) => {
  return (
    <Tilt className="xs:w-[250px]  w-full">
      <Fade top duration={1500}>
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className=" w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            title={name}
            options={{ max: 45, scale: 1, speed: 450 }}
            className="
        bg-tertiary rounded-[20px] py-5 px-12  min-h-[200px] min-w-[245px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={name} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {name}
            </h3>
          </div>
        </motion.div>
      </Fade>
    </Tilt>
  );
};

const About = () => {
  const paraValue = `I am a front-end developer beginner with a Bachelor's degree in computer
  applications. I am seeking a position as a Frontend Developer to learn
  from experienced professionals, grow in the field, and contribute to
  real-world projects. I possess the ability to design visually appealing
  and user-friendly websites and applications and am eager to provide
  meaningful contributions to any front-end development team.`;
  return (
    <section className={`${styles.AllCenter}`} id="about">
      <Fade>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
      </Fade>

      <Fade top>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className=" mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {paraValue}
        </motion.p>
      </Fade>

      <div className="mt-20 flex flex-wrap gap-10  justify-center">
        <Swing>
          {technologies.map((service, index) => {
            return (
              <ServiceCard key={service.name} index={index} {...service} />
            );
          })}
        </Swing>
      </div>
    </section>
  );
};

export default About;

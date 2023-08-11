import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../contants";
import { fadeIn, textVariant } from "../utils/motion";
import { Fade, Slide } from "react-reveal";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  return (
    <div
      onClick={() => {
        window.open(`${website_link}`, "_blank");
      }}
    >
      <Slide left>
        <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
          <Tilt
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-tertiary p-5 rounded-xl sm:w-[360px] w-full"
          >
            <div className="relative w-full h-[230px]">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
              />

              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() => {
                    window.open(source_code_link, "_blank");
                  }}
                  className="black-gradient rounded-full flex justify-center  items-center cursor-pointer w-10 h-10"
                >
                  <img
                    src={github}
                    alt="Github"
                    className=" w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h3 className=" text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>
            <div className=" mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </Tilt>
        </motion.div>
      </Slide>
    </div>
  );
};

const Works = () => {
  return (
    <section className={`${styles.AllCenter}`} id="project">
      <Fade>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </Fade>

      <div className="w-full flex">
        <Fade top>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            My portfolio consists of projects that demonstrate my skills and
            expertise through real-world examples of my work. Each project is
            succinctly described with links to code repositories and live demos,
            showcasing my ability to tackle complex problems, work with diverse
            technologies, and effectively manage projects.
          </motion.p>
        </Fade>
      </div>

      <div className="mt-20 flex flex-wrap gap-7  items-center justify-center">
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} {...project} index={index} />
          );
        })}
      </div>
      <div className=" p-1 m-1 max-w-7xl flex justify-between flex-row-reverse">
        <Slide right>
          <button
            className=" text-white text-[17px] leading-[30px] bg-gradient-to-r from-blue-900  to-indigo-950 rounded p-2 hover:from-blue-950 hover:to-indigo-900  "
            onClick={() => {
              window.open(
                "https://github.com/LakshyaRoy?tab=repositories",
                "_blank"
              );
            }}
          >
            View More
          </button>
        </Slide>

        <Slide left>
          <button
            className=" text-white text-[17px] leading-[30px] bg-gradient-to-r from-blue-900  to-indigo-950 rounded p-2 hover:from-blue-950 hover:to-indigo-900"
            onClick={() => {
              window.open(
                "https://drive.google.com/uc?export=download&id=1UThu7ZcBewoEU-dj5sQ5mi5cHhd2M7L7",
                "_blank"
              );
            }}
          >
            Download Resume📓
          </button>
        </Slide>
      </div>
    </section>
  );
};

export default Works;

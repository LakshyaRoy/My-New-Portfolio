import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, warning } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../contants";
import { textVariant } from "../utils/motion";
import Fade from "react-reveal";

const Experience = () => {
  return (
    <section className={`${styles.AllCenter}`} id="work">
      <Fade>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I have Done So Far</p>
          <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        </motion.div>
      </Fade>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experiences, key) => {
            return (
              <VerticalTimelineElement
                key={key}
                contentStyle={{ background: "#1d1836", color: "#fff" }}
                contentArrowstyle={{ borderRight: "7px solid #232631" }}
                date={experiences.date}
                iconStyle={{ background: experiences.iconBg }}
                icon={
                  <div
                    className="flex
                   justify-center items-center  w-full h-full"
                  >
                    <img
                      src={experiences.icon}
                      alt={experiences.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
              >
                <div>
                  <h3 className=" text-white text-[24px] font-bold">
                    {experiences.title}
                  </h3>
                  <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                  >
                    {experiences.company_name}
                  </p>
                </div>
                <ul className=" mt-5 list-disc ml-5 space-y-2">
                  {experiences.points.map((points, index) => (
                    <li
                      key={index}
                      className=" text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                      {points}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;

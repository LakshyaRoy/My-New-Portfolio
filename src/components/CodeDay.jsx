import { styles } from "../styles";
import GitHubCalendar from "react-github-calendar";
import Fade from "react-reveal/Fade";

const CodeDay = () => {
  const theme = {
    light: ["#f0f0f0", "#384259"],
    dark: [
      "#1f1f1f", //", // Deepest shade
      "#38265f", // Deeper shade
      "#291e4a", // Even darker shade
      "#1d1635", // Darker shade
      "#151030", // Your reference color
    ],
  };

  return (
    <section className={`${styles.AllCenter}`}>
      <Fade top>
        <h1
          className=" font-bold text-center text-6xl text-white"
          style={{ paddingBottom: "20px" }}
        >
          Days I <strong className=" text-[#38265f]">Code</strong>
        </h1>
      </Fade>

      <Fade top>
        <GitHubCalendar
          username="lakshyaroy"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          theme={theme}
          responsive={true}
          color="#38265f"
        />
      </Fade>
    </section>
  );
};

export default CodeDay;

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import Slide from "react-reveal";

// template_9ykv5tt

// gmail: =   service_ev7mkwh

// key :- KLqRga4rKblqg61o7
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_ev7mkwh",
        "template_9ykv5tt",
        {
          from_name: form.name,
          to_name: "Lakshya",
          from_email: form.email,
          to_email: "yadavlakshya729@gmail.com",
          message: form.message,
        },
        "KLqRga4rKblqg61o7"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, I will get back to you as soon as possible. 😊 ");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log("Error from Contact Component!", { error });
          alert("SomeThing Went Wrong! 😔 ");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ${styles.AllCenter}`}
      id="contact"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in Touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <Slide left>
          <form
            ref={formRef}
            onSubmit={handleChange}
            className=" mt-12 flex  flex-col gap-8"
          >
            <label htmlFor="flex flex-col ">
              <span className=" text-white font-medium mb-4">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's Your Name?"
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium  "
            />

            <label htmlFor="flex flex-col ">
              <span className=" text-white font-medium mb-4">Your Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's Your Email?"
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium  "
            />

            <label htmlFor="flex flex-col ">
              <span className=" text-white font-medium mb-4">Your Message</span>
            </label>
            <textarea
              rows="7"
              type="text  "
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="👋 What do You want to say?"
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium  "
              id="text-box-port"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </Slide>
      </motion.div>

      <motion.div
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[350px]"
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Contact;

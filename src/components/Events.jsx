/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { events, aboutContent } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Card from "./Card";
import LettersAnimation from "./LettersAnimation";
import { SectionWrapper } from "../hoc";

const Events = () => {
  return (
    <>
      <motion.div variants={textVariant(0.2)} initial='hidden' animate="show">
        <p className={styles.sectionSubText}>Events</p>
        <LettersAnimation
          initialText="Du darsft entscheiden!"
          dataValue="Du darsft entscheiden!"
        />
      </motion.div>
      <motion.p variants={fadeIn("right", "spring", 0.5, 1)} initial='hidden' animate="show" className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        {aboutContent.text}
      </motion.p>
      <div className="mt-20 flex flex-wrap w-full justify-center gap-20">
        {events.map((event, index) => (
          <Card key={event.title} index={index} title={event.title} image={event.image} text={event.text}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper (Events, "events");

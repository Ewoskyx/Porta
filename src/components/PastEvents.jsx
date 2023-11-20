import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { past_events } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import PastEventCard from "./PastEventCard";
import LettersAnimation from "./LettersAnimation";

const PastEvents = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Aktuellste</p>
        <LettersAnimation
          initialText="Glücksmomente unserer Gäste"
          dataValue="Glücksmomente unserer Gäste"
        />
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {past_events.map((past_event, index) => (
            <PastEventCard
              key={index}
              title={past_event.title}
              iconBg={past_event.iconBg}
              icon={past_event.icon}
              about={past_event.about}
              date={past_event.date}
              event_type={past_event.event_type}
              type_style={past_event.type_style}
              cardBg={past_event.cardBg}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(PastEvents, "past_events");

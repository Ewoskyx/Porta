/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Card = (props) => {
  const { title, image, text, index } = props;

  return (
    <Tilt
      glareEnable={true}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={750}
      glareMaxOpacity={0.45}
      scale={1.02}
      gyroscope={true}
      glareColor={"rgb(145,94,254)"}
      className="w-3/5 flex"
    >
      <motion.div
        variants={fadeIn("right", "spring", 2 * index,2)}
        initial='hidden' animate="show"
        className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="w-full h-full bg-tertiary rounded-[20px]  py-5 px-12 flex">
          <img src={image} alt={title} className="object-contain w-1/2" />
          <div className="w-1/2 flex-column">
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
            <div className="w-full text-left">
              <p className="text-[14px] p-4">{text}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default Card;

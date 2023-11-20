/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const PastEventCard = (past_event) => {
    const {title,icon,iconBg,date,about,event_type,type_style,cardBg} = past_event;
  return (
    <VerticalTimelineElement
        contentStyle={{
            backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cardBg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
            color: '#fff'}}
        contentArrowStyle={{borderRight: '7px solid #232631'}}
        date={date}
        iconStyle={{ background: iconBg}}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                <img
                    src={icon}
                    alt="icon"
                    className="w-[100%] h-[100%] object-contain"
                />
            </div>
        }
    >
        <div>
            <h3 className="text-white text-[20px] font-bold">{title}</h3>
            <p style={{color:`${type_style}`,fontSize:'18px'}}>{event_type}</p>
        </div>
        <p className="text-white-100 pl-1 text-justify" style={{fontSize:'14px'}}>{about}</p>

    </VerticalTimelineElement>
  )
}

export default PastEventCard
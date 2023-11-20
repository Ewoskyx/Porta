import LettersAnimation from "./LettersAnimation";
import {SectionWrapper} from '../hoc';
import { styles } from "../styles";
import Slideshow from './Slideshow';


const Hochzeit = () => {

  return (
    <>
        <p className={styles.sectionSubText}>Hochzeit</p>
       <LettersAnimation
          initialText="Unser einzigartiger Eventsaal"
          dataValue="Unser einzigartiger Eventsaal"
          
        />
        <div>
          <p style={{letterSpacing: '1px', lineHeight:'24px', textAlign:'justify', maxWidth: '68%', paddingLeft: '2rem', marginTop: '1rem'}}>Unser einzigartiger Eventsaal - Immer wieder neu, immer perfekt auf dich abgestimmt! Bei uns setzen wir auf kreative Vielfalt und Flexibilität, um deinen Veranstaltungen das gewisse Etwas zu verleihen. Unser Team von Experten sorgt dafür, dass unser Eventsaal stets mit frischer und ansprechender Dekoration gestaltet wird. Von eleganten Blumenarrangements bis hin zu themenbezogenen Dekoelementen - wir bringen immer wieder neue inspirierende Akzente in unseren Saal ein. Komm zu uns und erlebe, wie sich unser Eventsaal immer wieder in eine zauberhafte Kulisse verwandelt. Lass uns gemeinsam deine Vision verwirklichen und ein unvergessliches Event gestalten, das deine Gäste begeistern wird. Kontaktiere uns noch heute, um deine Veranstaltung bei uns zu planen und von unserer flexiblen Dekoration und individuellen Gestaltung zu profitieren.</p>
        </div>
        <Slideshow styles={{height: '100vh', border: '1px solid red'}}/>
    </>
  )
}

export default SectionWrapper(Hochzeit,'hochzeit');
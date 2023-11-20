import "./Gallery.css"; 
import {galerieImages} from '../constants';
import LettersAnimation from "./LettersAnimation";
import {SectionWrapper} from '../hoc';

const Gallery = () => {
  
  
  return (
    <>
      <LettersAnimation
          initialText="Galerie"
          dataValue="Galerie"
        />
    <div className="screen-wrapper"  style={{margin: '44px 0px'}}>
      
     {
      galerieImages.map((image,idx) => (
        <div className="screen" key={idx}>
        <div className="screen-image" style={{backgroundImage: `url(${image.original})`}}></div>
        <div className="screen-overlay"></div>
        <div className="screen-content">
         
          <div className="screen-user">
            <span className="name">
              ...Scanning
            </span>
          </div>
        </div>
      </div>
      ))
     }
     </div>
    </>
  );
};

export default SectionWrapper(Gallery,'galerie');

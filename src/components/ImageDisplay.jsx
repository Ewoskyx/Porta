/* eslint-disable react/prop-types */
import './Gallery.css';
const ImageDisplay = ({ imgSrc, onClose }) => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      background: 'rgba(0,0,0,0.5)',
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      zIndex: 9999, 
    }}
  >
    <button
      onClick={onClose}
      style={{
        position: 'absolute',
        top: '12%',
        right: '10px',
        zIndex: 1, 
      }}
    >
     <ion-icon name="close-circle-outline"></ion-icon>
    </button>
    <img
      src={imgSrc}
      alt="Enlarged"
      style={{
        width: 'auto',
        maxWidth: '90%',
        maxHeight: '90%',
      }}
    />
  </div>
);

export default ImageDisplay;

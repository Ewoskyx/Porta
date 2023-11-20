import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { styles } from '../styles';

const LettersAnimation = ({ initialText, dataValue }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [animatedText, setAnimatedText] = useState(initialText);

  useEffect(() => {
    let interval = null;

    const sanitizedClassName = `letters-animation-${initialText.replace(/\s/g, '-').replace(/[^a-zA-Z0-9-_]/g, '')}`;

    const onMouseOver = () => {
      let iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        setAnimatedText((prevText) =>
          prevText
            .split("")
            .map((letter, index) =>
              index < iteration ? dataValue[index] : getRandomCharacter(letter)
            )
            .join("")
        );

        if (iteration >= dataValue.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const getRandomCharacter = (character) => {
      if (character === ' ') {
        return ' '; 
      } else if (character.match(/[A-Za-z]/)) {
        return letters[Math.floor(Math.random() * 26)];
      } else {
        return character; 
      }
    };

    const h1Element = document.querySelector(`.${sanitizedClassName}`);
    h1Element.addEventListener("mouseover", onMouseOver);

    return () => {
      h1Element.removeEventListener("mouseover", onMouseOver);
      clearInterval(interval);
    };
  }, [dataValue, initialText]);

  return (
    <div>
      <h1 style={{color: 'orange'}} className={`${styles.sectionHeadText} letters-animation-${initialText.replace(/\s/g, '-').replace(/[^a-zA-Z0-9-_]/g, '')}`} data-value={dataValue}>
        {animatedText}
      </h1>
    </div>
  );
};

LettersAnimation.propTypes = {
  initialText: PropTypes.string.isRequired,
  dataValue: PropTypes.string.isRequired,
}

export default LettersAnimation;

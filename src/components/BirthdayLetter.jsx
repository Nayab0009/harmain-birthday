import { useEffect, useState } from 'react';
import { birthdayConfig } from '../config/birthdayConfig';

function BirthdayLetter() {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= birthdayConfig.letterMessage.length) {
      return undefined;
    }

    const timer = setTimeout(() => {
      const nextChar = birthdayConfig.letterMessage[currentIndex];
      setTypedText((previous) => previous + nextChar);
      setCurrentIndex((previous) => previous + 1);
    }, 16);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="letter-section">
      <div className="section-tag">Letter</div>
      <h2 className="main-title">{birthdayConfig.letterHeading}</h2>

      <div className="letter-card glass-card">
        <p className="letter-copy">{typedText}</p>
      </div>
    </div>
  );
}

export default BirthdayLetter;

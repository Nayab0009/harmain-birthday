import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import BirthdayReveal from './components/BirthdayReveal';
import FunZone from './components/FunZone';
import PhotoGallery from './components/PhotoGallery';
import BirthdayLetter from './components/BirthdayLetter';
import FinalSurprise from './components/FinalSurprise';
import MusicPlayer from './components/MusicPlayer';
import ConfettiEffect from './components/ConfettiEffect';

function App() {
  const [giftOpened, setGiftOpened] = useState(false);
  const [celebrateConfettiKey, setCelebrateConfettiKey] = useState(0);
  const [celebrateBurstActive, setCelebrateBurstActive] = useState(false);

  const openGift = () => {
    setGiftOpened(true);

    setTimeout(() => {
      document.getElementById('birthday-reveal')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 220);
  };

  const celebrate = () => {
    setCelebrateConfettiKey((value) => value + 1);
    setCelebrateBurstActive(true);

    setTimeout(() => {
      setCelebrateBurstActive(false);
    }, 900);

    setTimeout(() => {
      document.getElementById('fun-zone')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  };

  const replay = () => {
    setGiftOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <MusicPlayer />
      <ConfettiEffect active={celebrateBurstActive} triggerKey={celebrateConfettiKey} />

      <WelcomeScreen onOpenGift={openGift} isOpened={giftOpened} />

      <main className="page-content">
        <section id="birthday-reveal" className="story-section reveal-section">
          <BirthdayReveal onCelebrate={celebrate} isOpen={giftOpened} />
        </section>

        <section id="fun-zone" className="story-section">
          <FunZone />
        </section>

        <section className="story-section">
          <PhotoGallery />
        </section>

        <section className="story-section">
          <BirthdayLetter />
        </section>

        <section className="story-section final-section">
          <FinalSurprise onReplay={replay} />
        </section>
      </main>
    </div>
  );
}

export default App;

import { motion } from 'framer-motion';
import { Gift, Sparkles } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

function WelcomeScreen({ onOpenGift, isOpened }) {
  return (
    <motion.section
      className={`welcome-screen ${isOpened ? 'opened' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <div className="floating-stars" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} className="star" style={{ '--delay': `${index * 0.55}s` }} />
        ))}
      </div>

      <motion.div
        className="gift-scene"
        animate={
          isOpened
            ? { scale: 0.94, rotateX: 18, rotateY: -18 }
            : { scale: 1, rotateX: 0, rotateY: 0 }
        }
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <div className={`gift-box ${isOpened ? 'gift-box-open' : ''}`}>
          <div className="gift-lid" />
          <div className="gift-bow bow-left" />
          <div className="gift-bow bow-right" />
          <div className="gift-body">
            <span className="gift-ribbon ribbon-vertical" />
            <span className="gift-ribbon ribbon-horizontal" />
          </div>
        </div>
      </motion.div>

      <div className="welcome-copy">
        <div className="eyebrow-row">
          <Sparkles size={14} />
          <span>Birthday Surprise</span>
        </div>
        <h1>{birthdayConfig.greeting}</h1>
        <p>{birthdayConfig.surpriseText}</p>
        <button className="primary-button" onClick={onOpenGift}>
          <Gift size={18} />
          {birthdayConfig.introButton}
        </button>
      </div>
    </motion.section>
  );
}

export default WelcomeScreen;

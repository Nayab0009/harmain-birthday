import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Sparkles } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

function WelcomeScreen({ onOpenGift, isOpened }) {
  const [showHeartBurst, setShowHeartBurst] = useState(false);
  const [burstKey, setBurstKey] = useState(0);

  const heartBurstParticles = useMemo(() => {
    const colors = ['#ff1a3d', '#d6002f', '#a80025'];

    return Array.from({ length: 84 }, (_, index) => {
      const angle = (index / 84) * Math.PI * 2;
      const distance = 110 + (index % 18) * 10 + Math.random() * 40;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      const drift = (Math.random() - 0.5) * 80;
      const rotation = (Math.random() - 0.5) * 260;
      const size = 12 + Math.random() * 18;
      const delay = (index % 12) * 0.015 + Math.random() * 0.05;

      return {
        id: `${burstKey}-${index}`,
        x,
        y,
        drift,
        rotation,
        size,
        delay,
        color: colors[index % colors.length],
      };
    });
  }, [burstKey]);

  const handleOpenGift = () => {
    if (showHeartBurst) return;

    setShowHeartBurst(true);
    setBurstKey((prev) => prev + 1);
    onOpenGift();

    window.setTimeout(() => {
      setShowHeartBurst(false);
    }, 1200);
  };

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
            ? { scale: 0.94, rotateX: 18, rotateY: -18, y: 8 }
            : { scale: 1, rotateX: 0, rotateY: 0, y: [0, -10, 0] }
        }
        transition={
          isOpened
            ? { duration: 0.8, ease: 'easeInOut' }
            : { duration: 2.5, ease: 'easeInOut', repeat: Infinity }
        }
      >
        <div className={`gift-box ${isOpened ? 'gift-box-open' : ''}`}>
          <div className="gift-lid" />
          <div className="gift-bow bow-left" />
          <div className="gift-bow bow-right" />
          <div className="gift-body">
            <span className="gift-ribbon ribbon-vertical" />
            <span className="gift-ribbon ribbon-horizontal" />
            <div className="gift-pop">
              <div className="gift-pop-box" />
              <div className="gift-pop-bow bow-pop-left" />
              <div className="gift-pop-bow bow-pop-right" />
            </div>
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
        <div className="surprise-button-wrap">
          {showHeartBurst && (
            <div className="red-heart-burst" aria-hidden="true">
              {heartBurstParticles.map((particle) => (
                <span
                  key={particle.id}
                  className="red-heart"
                  style={{
                    '--dx': `${particle.x}px`,
                    '--dy': `${particle.y}px`,
                    '--delay': `${particle.delay}s`,
                    '--size': `${particle.size}px`,
                    '--red': particle.color,
                    '--rot': `${particle.rotation}deg`,
                    '--drift': `${particle.drift}px`,
                  }}
                >
                  ❤
                </span>
              ))}
            </div>
          )}

          <button className="primary-button" onClick={handleOpenGift}>
            <Gift size={18} />
            {birthdayConfig.introButton}
          </button>
        </div>
      </div>
    </motion.section>
  );
}

export default WelcomeScreen;

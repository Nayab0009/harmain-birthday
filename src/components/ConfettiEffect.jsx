import { useEffect } from 'react';
import confetti from 'canvas-confetti';

function ConfettiEffect({ active, triggerKey }) {
  useEffect(() => {
    if (!active) {
      return undefined;
    }

    const duration = 1800;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 30,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.5,
        },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    return () => undefined;
  }, [active, triggerKey]);

  return null;
}

export default ConfettiEffect;

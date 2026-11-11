import { useEffect } from 'react';
import confetti from 'canvas-confetti';

function ConfettiEffect({ active, triggerKey }) {
  useEffect(() => {
    if (!active) {
      return undefined;
    }

    const duration = 900;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 34,
        startVelocity: 24,
        spread: 360,
        origin: { x: Math.random(), y: Math.random() * 0.45 },
        colors: ['#ff6b6b', '#ffd93d', '#7ae582', '#63c7ff', '#c084fc', '#ff9f1c'],
        scalar: 1.1,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
    return undefined;
  }, [active, triggerKey]);

  return null;
}

export default ConfettiEffect;

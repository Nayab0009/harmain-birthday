import { useState } from 'react';

function BirthdayCake({ isLit = true }) {
  const [litCandles, setLitCandles] = useState([true, true, true]);

  const toggleCandle = (index) => {
    setLitCandles((current) =>
      current.map((value, candleIndex) =>
        candleIndex === index ? !value : value,
      ),
    );
  };

  return (
    <div className="cake-scene">
      <div className="cake-glow" />
      <div className="cake-stand" />

      <div className="birthday-cake">
        <div className="cake-top">
          <div className="cake-icing" />
        </div>

        <div className="cake-layer cake-layer-top" />
        <div className="cake-layer cake-layer-mid" />
        <div className="cake-layer cake-layer-bottom" />

        <div className="cake-plate" />

        {Array.from({ length: 3 }).map((_, index) => (
          <button
            key={index}
            type="button"
            className={`candle ${litCandles[index] && isLit ? 'lit' : 'off'}`}
            style={{ '--candle-index': index }}
            onClick={() => toggleCandle(index)}
            aria-label={`Toggle candle ${index + 1}`}
          >
            <span className="flame" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default BirthdayCake;

import { HeartHandshake, Landmark, Pill, Rocket } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

const iconMap = {
  blue: Landmark,
  purple: Pill,
  silver: HeartHandshake,
  default: Rocket,
};

function JourneySection() {
  return (
    <div className="journey-section">
      <div className="section-tag">Journey</div>
      <h2 className="main-title">{birthdayConfig.journeyHeading}</h2>

      <div className="journey-grid">
        {birthdayConfig.journeyCards.map(({ title, text, accent }, index) => {
          const Icon = iconMap[accent] || iconMap.default;

          return (
            <div className="journey-card glass-card" key={`${title}-${index}`}>
              <div className={`journey-icon ${accent}`}>
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default JourneySection;

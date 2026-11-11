import { useState } from 'react';
import { Gift, Laugh, Sparkles } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

const miniCards = [
  { icon: Gift, title: 'Good Vibes', text: 'Birthday energy unlocked.' },
  { icon: Laugh, title: 'Laughter', text: 'The best kind of support system.' },
  { icon: Sparkles, title: 'Big Dreams', text: 'You were born to shine.' },
];

function FunZone() {
  const [message, setMessage] = useState(birthdayConfig.friendshipMessages[0]);

  const randomizeMessage = () => {
    const nextMessage =
      birthdayConfig.friendshipMessages[
        Math.floor(Math.random() * birthdayConfig.friendshipMessages.length)
      ];
    setMessage(nextMessage);
  };

  return (
    <div className="fun-zone">
      <div className="section-tag">Friendship Energy</div>
      <h2 className="main-title">{birthdayConfig.funHeading}</h2>

      <div className="mini-card-grid">
        {miniCards.map(({ icon: Icon, title, text }) => (
          <div key={title} className="mini-card glass-card">
            <Icon size={20} />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>

      <div className="message-panel glass-card">
        <p className="message-quote">“{message}”</p>
        <button className="secondary-button" onClick={randomizeMessage}>
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default FunZone;

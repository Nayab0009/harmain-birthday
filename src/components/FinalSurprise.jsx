import { motion } from 'framer-motion';
import { ArrowLeft, Heart } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

function FinalSurprise({ onReplay }) {
  return (
    <motion.div
      className="final-surprise"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="section-tag">Finale</div>
      <h2 className="main-title final-heading">{birthdayConfig.finalHeading}</h2>

      <div className="final-message glass-card">
        <Heart className="final-heart" size={32} />
        <p>{birthdayConfig.finalMessage}</p>
      </div>

      <button className="secondary-button replay-button" onClick={onReplay}>
        <ArrowLeft size={18} />
        Replay the Surprise
      </button>
    </motion.div>
  );
}

export default FinalSurprise;

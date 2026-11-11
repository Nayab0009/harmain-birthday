import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BirthdayCake from './BirthdayCake';
import { birthdayConfig } from '../config/birthdayConfig';

function BirthdayReveal({ onCelebrate, isOpen }) {
  return (
    <motion.div
      className="reveal-wrap"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-tag">Birthday Moment</div>
      <h2 className="main-title reveal-title">{birthdayConfig.revealTitle}</h2>
      <p className="subheading">{birthdayConfig.revealSubtitle}</p>

      <BirthdayCake isLit={isOpen} />

      <button className="primary-button celebrate-button" onClick={onCelebrate}>
        {birthdayConfig.celebrateButton}
        <ArrowRight size={18} />
      </button>
    </motion.div>
  );
}

export default BirthdayReveal;

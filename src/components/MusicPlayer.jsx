import { useEffect, useRef, useState } from 'react';
import { Music2, Volume2, VolumeX } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.45);

  useEffect(() => {
    const audio = new Audio(birthdayConfig.musicFile);
    audio.loop = true;
    audio.volume = volume;
    audio.preload = 'auto';
    audioRef.current = audio;

    const handleError = () => {
      setIsPlaying(false);
      console.warn('Birthday music audio could not be loaded. The page will still function normally.');
    };

    audio.addEventListener('error', handleError);

    return () => {
      audio.pause();
      audio.removeEventListener('error', handleError);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggleMusic = async () => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.warn('User interaction needed before playing audio.', error);
    }
  };

  return (
    <div className="music-player glass-card">
      <button type="button" className="music-toggle" onClick={toggleMusic} aria-label="Toggle background music">
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
        <span>{isPlaying ? 'Music On' : 'Music Off'}</span>
      </button>

      <div className="volume-control">
        <Music2 size={16} />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(event) => setVolume(Number(event.target.value))}
          aria-label="Volume control"
        />
      </div>
    </div>
  );
}

export default MusicPlayer;

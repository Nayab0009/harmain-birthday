import { useEffect, useRef, useState } from 'react';
import { Music2, Volume2, VolumeX } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.45);
  const previousVolumeRef = useRef(0.45);

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

    if (volume > 0) {
      previousVolumeRef.current = volume;
    }
  }, [volume]);

  const toggleMusic = async () => {
    if (!audioRef.current) {
      return;
    }

    if (volume === 0) {
      const targetVolume = previousVolumeRef.current || 0.45;
      setVolume(targetVolume);
      audioRef.current.volume = targetVolume;

      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.warn('User interaction needed before playing audio.', error);
      }
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

  const isMuted = !isPlaying || volume === 0;

  return (
    <div className="music-player glass-card">
      <button
        type="button"
        className="music-toggle"
        onClick={toggleMusic}
        aria-label={isMuted ? 'Play background music' : 'Mute background music'}
        title={isMuted ? 'Play music' : 'Mute music'}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      <div className="volume-control">
        <Music2 size={16} />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(event) => {
            const nextVolume = Number(event.target.value);
            setVolume(nextVolume);

            if (nextVolume === 0) {
              audioRef.current?.pause();
              setIsPlaying(false);
              return;
            }

            if (!isPlaying) {
              audioRef.current?.play().catch(() => undefined);
            }
            setIsPlaying(true);
          }}
          aria-label="Volume control"
        />
      </div>
    </div>
  );
}

export default MusicPlayer;

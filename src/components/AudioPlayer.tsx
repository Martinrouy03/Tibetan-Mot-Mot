import { useRef, useState, useEffect, useCallback } from 'react';
import './AudioPlayer.css';

interface AudioPlayerProps {
  src: string;
}

function formatTime(seconds: number): string {
  if (!isFinite(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function AudioPlayer({ src }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onDurationChange = () => setDuration(audio.duration);
    const onEnded = () => setPlaying(false);

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('durationchange', onDurationChange);
    audio.addEventListener('loadedmetadata', onDurationChange);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('durationchange', onDurationChange);
      audio.removeEventListener('loadedmetadata', onDurationChange);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  const seek = useCallback((delta: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, Math.min(audio.duration || 0, audio.currentTime + delta));
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  }, [playing]);

  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * duration;
  }, [duration]);

  const progress = duration > 0 ? currentTime / duration : 0;
  const remaining = duration > 0 ? duration - currentTime : 0;

  return (
    <div className="audio-player">
      <div
        className="audio-progress-bar"
        onClick={handleProgressClick}
      >
        <div className="audio-progress-fill" style={{ width: `${progress * 100}%` }} />
      </div>
      <div className="audio-controls">
        <span className="audio-time">{formatTime(currentTime)}</span>
        <div className="audio-center-controls">
          <button className="audio-seek-btn" onClick={() => seek(-10)} aria-label="-10 secondes"><span className="audio-seek-icon">↺</span> −10s</button>
          <button className="audio-play-btn" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Lecture'}>
            {playing ? '⏸' : '▶'}
          </button>
          <button className="audio-seek-btn" onClick={() => seek(10)} aria-label="+10 secondes">+10s <span className="audio-seek-icon">↻</span></button>
        </div>
        <span className="audio-time">−{formatTime(remaining)}</span>
      </div>
      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  );
}

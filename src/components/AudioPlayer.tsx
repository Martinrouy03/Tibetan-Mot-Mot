import { useRef, useState, useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setSeekToTimestamp } from '../store/uiSlice';
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
  const pendingSeekRef = useRef<number | null>(null);
  const dispatch = useAppDispatch();
  const seekToTimestamp = useAppSelector((s) => s.ui.seekToTimestamp);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loop, setLoop] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onDurationChange = () => setDuration(audio.duration);
    const onEnded = () => setPlaying(false);
    const onLoadedMetadata = () => {
      setDuration(audio.duration);
      if (pendingSeekRef.current !== null) {
        audio.currentTime = pendingSeekRef.current;
        pendingSeekRef.current = null;
      }
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('durationchange', onDurationChange);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('durationchange', onDurationChange);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  useEffect(() => {
    if (seekToTimestamp === null) return;
    const audio = audioRef.current;
    dispatch(setSeekToTimestamp(null));
    if (!audio) return;
    if (audio.readyState >= 1) {
      audio.currentTime = seekToTimestamp;
    } else {
      pendingSeekRef.current = seekToTimestamp;
    }
  }, [seekToTimestamp, dispatch]);

  const seek = useCallback((delta: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, Math.min(audio.duration || 0, audio.currentTime + delta));
  }, []);

  const toggleLoop = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = !loop;
    audio.loop = next;
    setLoop(next);
  }, [loop]);

  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setPlaying(false);
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

  const seekToX = useCallback((clientX: number, rect: DOMRect) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    audio.currentTime = ratio * duration;
  }, [duration]);

  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    seekToX(e.clientX, e.currentTarget.getBoundingClientRect());
  }, [seekToX]);

  const handleProgressTouch = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    const touch = e.touches[0] ?? e.changedTouches[0];
    seekToX(touch.clientX, e.currentTarget.getBoundingClientRect());
  }, [seekToX]);

  const progress = duration > 0 ? currentTime / duration : 0;
  const remaining = duration > 0 ? duration - currentTime : 0;

  return (
    <div className="audio-player">
      <div
        className="audio-progress-bar"
        onClick={handleProgressClick}
        onTouchStart={handleProgressTouch}
        onTouchMove={handleProgressTouch}
      >
        <div className="audio-progress-fill" style={{ width: `${progress * 100}%` }} />
      </div>
      <div className="audio-controls">
        <span className="audio-time">{formatTime(currentTime)}</span>
        <div className="audio-center-controls">
          <button className="audio-seek-btn" onClick={() => seek(-10)} aria-label="-10 secondes">−10s</button>
          <button className="audio-play-btn" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Lecture'}>
            {playing
              ? <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><rect x="5" y="4" width="4" height="16" rx="1"/><rect x="15" y="4" width="4" height="16" rx="1"/></svg>
              : '▶'}
          </button>
          <button className="audio-stop-btn" onClick={stop} aria-label="Stop">
            <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>
          </button>
          <button className="audio-seek-btn" onClick={() => seek(10)} aria-label="+10 secondes">+10s</button>
          <button
            className={`audio-loop-btn${loop ? ' audio-loop-active' : ''}`}
            onClick={toggleLoop}
            aria-label="Lecture en boucle"
          >⟳</button>
        </div>
        <span className="audio-time">−{formatTime(remaining)}</span>
      </div>
      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  );
}

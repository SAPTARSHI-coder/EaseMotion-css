import React, { useEffect, useRef, useState } from 'react';
import './style.css';

const formatTime = (value) => {
  if (!Number.isFinite(value) || value < 0) {
    return '0:00';
  }

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

const buildWaveformBars = (count) =>
  Array.from({ length: count }, (_, index) => {
    const base = 32 + ((index * 17) % 42);
    const swing = index % 2 === 0 ? 10 : 6;
    return Math.max(12, Math.min(100, base + swing));
  });

const AudioPlayerWidget = ({
  audioSrc = '',
  title = 'Neon Nights',
  artist = 'Astra Lane',
  autoPlay = false,
  loop = false,
  waveformBars = 36,
  className = '',
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(Boolean(audioSrc));
  const [status, setStatus] = useState(audioSrc ? 'Loading...' : 'No audio source');
  const [isEnded, setIsEnded] = useState(false);
  const [barHeights, setBarHeights] = useState(() => buildWaveformBars(waveformBars));

  useEffect(() => {
    setBarHeights(buildWaveformBars(waveformBars));
    setCurrentTime(0);
    setDuration(0);
    setIsEnded(false);
    setIsPlaying(false);
    setIsLoading(Boolean(audioSrc));
    setStatus(audioSrc ? 'Loading...' : 'No audio source');
  }, [audioSrc, waveformBars]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return undefined;
    }

    audio.loop = Boolean(loop);

    const onLoadedMetadata = () => {
      setDuration(audio.duration || 0);
      setIsLoading(false);
      setStatus('Ready');

      if (autoPlay) {
        const playPromise = audio.play();
        if (playPromise) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setStatus('Playing');
            })
            .catch(() => {
              setStatus('Playback blocked');
            });
        }
      }
    };

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.currentTime > 0) {
        setIsEnded(false);
      }
    };

    const onPlay = () => {
      setIsPlaying(true);
      setStatus('Playing');
    };

    const onPause = () => {
      setIsPlaying(false);
      setStatus('Paused');
    };

    const onEnded = () => {
      setIsPlaying(false);
      setIsEnded(true);
      setCurrentTime(audio.duration || 0);
      setStatus('Ended');
    };

    const onWaiting = () => {
      setIsLoading(true);
      setStatus('Loading...');
    };

    const onCanPlay = () => {
      setIsLoading(false);
      if (!isPlaying) {
        setStatus('Ready');
      }
    };

    const onError = () => {
      setIsLoading(false);
      setStatus('Unable to play');
    };

    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('waiting', onWaiting);
    audio.addEventListener('canplay', onCanPlay);
    audio.addEventListener('error', onError);

    return () => {
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('waiting', onWaiting);
      audio.removeEventListener('canplay', onCanPlay);
      audio.removeEventListener('error', onError);
    };
  }, [autoPlay, loop, isPlaying]);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio || !audioSrc) {
      return;
    }

    if (audio.paused) {
      if (isEnded) {
        audio.currentTime = 0;
        setIsEnded(false);
      }

      try {
        await audio.play();
        setIsPlaying(true);
        setStatus('Playing');
      } catch {
        setStatus('Playback blocked');
      }
      return;
    }

    audio.pause();
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    const nextTime = Number(event.target.value);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
    setIsEnded(false);
  };

  const progressValue = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`audio-player-widget ease-fade-in ${className}`.trim()}>
      <div className="audio-player-widget__card ease-hover-lift">
        <audio ref={audioRef} src={audioSrc} preload="metadata" />

        <div className="audio-player-widget__header">
          <div>
            <p className="audio-player-widget__eyebrow">Now playing</p>
            <h3 className="audio-player-widget__title">{title}</h3>
            <p className="audio-player-widget__artist">{artist}</p>
          </div>

          <button
            type="button"
            className="audio-player-widget__control-button"
            onClick={togglePlayback}
            aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
          >
            {isPlaying ? '❚❚' : '▶'}
          </button>
        </div>

        <div className="audio-player-widget__waveform" aria-label="Animated waveform">
          {barHeights.map((height, index) => (
            <span
              key={`${height}-${index}`}
              className={`audio-player-widget__bar${isPlaying ? ' is-playing' : ''}`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>

        <div className="audio-player-widget__meta">
          <span className="audio-player-widget__status">{isLoading ? 'Loading…' : status}</span>
          <span className="audio-player-widget__time">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>

        <input
          type="range"
          min="0"
          max={duration || 0}
          step="0.01"
          value={currentTime}
          onChange={handleSeek}
          className="audio-player-widget__range"
          aria-label="Seek audio"
        />

        <div className="audio-player-widget__footer">
          <span className="audio-player-widget__progress-label">{isEnded ? 'Playback finished' : 'Tap to seek'}</span>
          <span className="audio-player-widget__progress-value">{Math.round(progressValue)}%</span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayerWidget;

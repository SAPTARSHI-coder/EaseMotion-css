import React, { useEffect, useMemo, useRef, useState } from "react";
import "./style.css";

export default function AudioPlayerWidget({
  src,
  title = "Untitled track",
  artist = "Unknown artist",
  artwork = "",
  waveformBars = 42,
  accentColor = "#7c5cff",
  autoPlay = false,
  loop = false,
  muted = false,
  initialVolume = 0.8,
  onPlay,
  onPause,
  onEnded,
  className = "",
}) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(Boolean(autoPlay));
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(clamp(initialVolume, 0, 1));
  const [isMuted, setIsMuted] = useState(Boolean(muted));
  const [error, setError] = useState("");

  const bars = useMemo(
    () =>
      Array.from({ length: Math.max(12, waveformBars) }, (_, index) => ({
        height: 24 + ((index * 37 + index * index * 7) % 68),
        delay: (index % 12) * -0.07,
      })),
    [waveformBars],
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.muted = isMuted;
  }, [volume, isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !autoPlay) return;

    audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  }, [autoPlay, src]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio || !src) {
      setError("Add a valid audio source to play this track.");
      return;
    }

    setError("");

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
        onPlay?.();
      } else {
        audio.pause();
        setIsPlaying(false);
        onPause?.();
      }
    } catch {
      setIsPlaying(false);
      setError("The audio could not be played. Check the source URL or file.");
    }
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;
    if (!audio) return;
    const nextTime = Number(event.target.value);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const handleVolume = (event) => {
    const nextVolume = Number(event.target.value);
    setVolume(nextVolume);
    if (nextVolume > 0 && isMuted) setIsMuted(false);
  };

  const handleLoadedMetadata = () => {
    const nextDuration = audioRef.current?.duration;
    setDuration(Number.isFinite(nextDuration) ? nextDuration : 0);
    setError("");
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    onEnded?.();
  };

  const progress = duration > 0
    ? `${Math.min((currentTime / duration) * 100, 100)}%`
    : "0%";

  return (
    <section
      className={`audio-player-jp ease-fade-in ease-hover-lift ${className}`.trim()}
      style={{ "--audio-accent-jp": accentColor }}
      aria-label={`Audio player for ${title}`}
    >
      <audio
        ref={audioRef}
        src={src}
        loop={loop}
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
        onDurationChange={handleLoadedMetadata}
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime ?? 0)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={handleEnded}
        onError={() => setError("Unable to load the supplied audio source.")}
      />

      <div className="audio-player-jp__header">
        <div className="audio-player-jp__artwork" aria-hidden={!artwork}>
          {artwork ? <img src={artwork} alt="" /> : <span className={isPlaying ? "ease-pulse" : ""}>♪</span>}
        </div>

        <div className="audio-player-jp__metadata">
          <p className="audio-player-jp__eyebrow">Now playing</p>
          <h2>{title}</h2>
          <p>{artist}</p>
        </div>

        <button
          type="button"
          className="audio-player-jp__play ease-hover-grow"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pause audio" : "Play audio"}
          aria-pressed={isPlaying}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>

      <div
        className={`audio-player-jp__waveform ${isPlaying ? "audio-player-jp__waveform--playing" : ""}`}
        aria-hidden="true"
      >
        {bars.map((bar, index) => (
          <span
            key={index}
            style={{
              "--bar-height-jp": `${bar.height}%`,
              "--bar-delay-jp": `${bar.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="audio-player-jp__timeline">
        <span>{formatTime(currentTime)}</span>
        <label className="audio-player-jp__seek">
          <span className="sr-only-jp">Seek through audio</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={Math.min(currentTime, duration || 0)}
            onChange={handleSeek}
            disabled={!duration}
            style={{ "--seek-progress-jp": progress }}
          />
        </label>
        <span>{formatTime(duration)}</span>
      </div>

      <div className="audio-player-jp__footer">
        <button
          type="button"
          className="audio-player-jp__mute"
          onClick={() => setIsMuted((value) => !value)}
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          aria-pressed={isMuted}
        >
          {isMuted || volume === 0 ? <MutedIcon /> : <VolumeIcon />}
        </button>

        <label className="audio-player-jp__volume">
          <span className="sr-only-jp">Volume</span>
          <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolume} />
        </label>

        <span className="audio-player-jp__status" aria-live="polite">
          {error || (isPlaying ? "Playing" : "Paused")}
        </span>
      </div>
    </section>
  );
}

function formatTime(value) {
  if (!Number.isFinite(value) || value < 0) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(Number(value) || 0, minimum), maximum);
}

function PlayIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10-6.5-10-6.5Z" fill="currentColor" /></svg>;
}

function PauseIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7V5Zm6 0h4v14h-4V5Z" fill="currentColor" /></svg>;
}

function VolumeIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4Zm11.5-.7a5 5 0 0 1 0 7.4l1.4 1.4a7 7 0 0 0 0-10.2l-1.4 1.4Z" fill="currentColor" /></svg>;
}

function MutedIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4Zm11.7 1.6 1.6-1.6 1.4 1.4-1.6 1.6 1.6 1.6-1.4 1.4-1.6-1.6-1.6 1.6-1.4-1.4 1.6-1.6-1.6-1.6L15.1 9l1.6 1.6Z" fill="currentColor" /></svg>;
}

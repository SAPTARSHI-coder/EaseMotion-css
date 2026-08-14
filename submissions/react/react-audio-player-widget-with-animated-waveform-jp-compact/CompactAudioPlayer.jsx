import React, { useEffect, useMemo, useRef, useState } from "react";
import "./style.css";

/**
 * Compact audio player with animated waveform and playlist-ready metadata.
 *
 * EaseMotion CSS utilities used:
 * - ease-fade-in
 * - ease-hover-lift
 * - ease-hover-grow
 * - ease-pulse
 */
export default function CompactAudioPlayer({
  src,
  title = "Untitled Track",
  artist = "Unknown Artist",
  durationLabel = "",
  accentColor = "#22c55e",
  waveformBars = 36,
  autoPlay = false,
  loop = false,
  initialVolume = 0.75,
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
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState("");

  const bars = useMemo(
    () =>
      Array.from({ length: Math.max(16, waveformBars) }, (_, index) => ({
        height: 26 + ((index * 29 + index * index * 11) % 70),
        delay: (index % 10) * -0.08,
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

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, [autoPlay, src]);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio || !src) {
      setError("Provide a valid audio source.");
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
      setError("Unable to play this audio source.");
    }
  };

  const seekTo = (event) => {
    const audio = audioRef.current;
    if (!audio) return;

    const nextTime = Number(event.target.value);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const updateMetadata = () => {
    const audio = audioRef.current;
    setDuration(Number.isFinite(audio?.duration) ? audio.duration : 0);
    setError("");
  };

  const progress =
    duration > 0 ? Math.min((currentTime / duration) * 100, 100) : 0;

  return (
    <article
      className={`compact-player-jp ease-fade-in ease-hover-lift ${className}`.trim()}
      style={{ "--compact-accent-jp": accentColor }}
      aria-label={`Audio player for ${title}`}
    >
      <audio
        ref={audioRef}
        src={src}
        loop={loop}
        preload="metadata"
        onLoadedMetadata={updateMetadata}
        onDurationChange={updateMetadata}
        onTimeUpdate={() =>
          setCurrentTime(audioRef.current?.currentTime ?? 0)
        }
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
          onEnded?.();
        }}
        onError={() => setError("Unable to load the supplied audio source.")}
      />

      <button
        type="button"
        className="compact-player-jp__play ease-hover-grow"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
        aria-pressed={isPlaying}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>

      <div className="compact-player-jp__body">
        <div className="compact-player-jp__meta">
          <div>
            <p className="compact-player-jp__eyebrow">Now playing</p>
            <h2>{title}</h2>
            <p>{artist}</p>
          </div>

          <span
            className={`compact-player-jp__activity ${
              isPlaying ? "ease-pulse" : ""
            }`}
            aria-hidden="true"
          />
        </div>

        <div
          className={`compact-player-jp__waveform ${
            isPlaying ? "compact-player-jp__waveform--active" : ""
          }`}
          aria-hidden="true"
        >
          {bars.map((bar, index) => (
            <span
              key={index}
              style={{
                "--compact-bar-height-jp": `${bar.height}%`,
                "--compact-bar-delay-jp": `${bar.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="compact-player-jp__timeline">
          <span>{formatTime(currentTime)}</span>

          <label className="compact-player-jp__seek">
            <span className="sr-only-jp">Seek through track</span>
            <input
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={Math.min(currentTime, duration || 0)}
              disabled={!duration}
              onChange={seekTo}
              style={{ "--compact-progress-jp": `${progress}%` }}
            />
          </label>

          <span>{durationLabel || formatTime(duration)}</span>
        </div>
      </div>

      <div className="compact-player-jp__volume-group">
        <button
          type="button"
          className="compact-player-jp__mute"
          onClick={() => setIsMuted((value) => !value)}
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          aria-pressed={isMuted}
        >
          {isMuted || volume === 0 ? <MutedIcon /> : <VolumeIcon />}
        </button>

        <label className="compact-player-jp__volume">
          <span className="sr-only-jp">Volume</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(event) => {
              const next = Number(event.target.value);
              setVolume(next);
              if (next > 0) setIsMuted(false);
            }}
          />
        </label>
      </div>

      <span className="compact-player-jp__status" aria-live="polite">
        {error || (isPlaying ? "Playing" : "Paused")}
      </span>
    </article>
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
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5.5v13l10-6.5L8 5.5Z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 5h4v14H7V5Zm6 0h4v14h-4V5Z" fill="currentColor" />
    </svg>
  );
}

function VolumeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 9v6h4l5 4V5L8 9H4Zm11.5-.7a5 5 0 0 1 0 7.4l1.4 1.4a7 7 0 0 0 0-10.2l-1.4 1.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MutedIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 9v6h4l5 4V5L8 9H4Zm11.7 1.6 1.6-1.6 1.4 1.4-1.6 1.6 1.6 1.6-1.4 1.4-1.6-1.6-1.6 1.6-1.4-1.4 1.6-1.6-1.6-1.6L15.1 9l1.6 1.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

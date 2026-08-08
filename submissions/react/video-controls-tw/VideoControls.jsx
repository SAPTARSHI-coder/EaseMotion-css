import React, { useRef, useState, useEffect } from "react";

/**
 * VideoControls
 *
 * A lightweight, accessible custom control bar for the native <video> element.
 * Wraps play/pause, seek, volume, and fullscreen behind EaseMotion CSS
 * utility classes so hover/tap states get consistent motion for free.
 */
export default function VideoControls({ src, poster, autoPlay = false }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => setProgress(video.currentTime);
    const onLoadedMetadata = () => setDuration(video.duration);
    const onFullscreenChange = () =>
      setIsFullscreen(document.fullscreenElement === video.parentElement);

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    document.addEventListener("fullscreenchange", onFullscreenChange);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    const newTime = Number(e.target.value);
    video.currentTime = newTime;
    setProgress(newTime);
  };

  const handleVolume = (e) => {
    const video = videoRef.current;
    const newVolume = Number(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
  };

  const toggleFullscreen = () => {
    const container = videoRef.current?.parentElement;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="ease-video-wrapper ease-fade-in">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        className="ease-video-element"
      />

      <div className="ease-video-controls ease-slide-up">
        <button
          type="button"
          onClick={togglePlay}
          className="ease-btn ease-hover-scale ease-video-play-btn"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? "❚❚" : "►"}
        </button>

        <span className="ease-video-time">{formatTime(progress)}</span>

        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={progress}
          onChange={handleSeek}
          className="ease-video-seekbar ease-hover-lift"
          aria-label="Seek video"
        />

        <span className="ease-video-time">{formatTime(duration)}</span>

        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={volume}
          onChange={handleVolume}
          className="ease-video-volume ease-hover-lift"
          aria-label="Volume"
        />

        <button
          type="button"
          onClick={toggleFullscreen}
          className="ease-btn ease-hover-scale ease-video-fullscreen-btn"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? "⤡" : "⤢"}
        </button>
      </div>
    </div>
  );
}

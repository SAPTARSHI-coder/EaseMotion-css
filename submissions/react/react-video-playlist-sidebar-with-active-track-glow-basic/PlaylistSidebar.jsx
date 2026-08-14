import { useState } from "react";

/**
 * PlaylistSidebar
 * A video playlist sidebar where the currently active track
 * has a glowing highlight indicator.
 *
 * Props:
 * @param {{ id: string|number, title: string, duration: string, thumbnail?: string }[]} tracks
 * @param {string|number} initialActiveId
 * @param {(id: string|number) => void} onSelect
 */
export default function PlaylistSidebar({
  tracks = [
    { id: 1, title: "Introduction to EaseMotion", duration: "4:12" },
    { id: 2, title: "Building Your First Animation", duration: "7:45" },
    { id: 3, title: "Advanced Transition Utilities", duration: "9:20" },
    { id: 4, title: "Accessibility Best Practices", duration: "6:03" },
  ],
  initialActiveId = tracks[0]?.id,
  onSelect,
}) {
  const [activeId, setActiveId] = useState(initialActiveId);

  function handleSelect(id) {
    setActiveId(id);
    onSelect?.(id);
  }

  return (
    <ul className="ease-playlist-sidebar" role="listbox" aria-label="Video playlist">
      {tracks.map((track, index) => {
        const isActive = track.id === activeId;
        return (
          <li key={track.id}>
            <button
              type="button"
              className={`playlist-track ${isActive ? "is-active" : ""}`}
              role="option"
              aria-selected={isActive}
              onClick={() => handleSelect(track.id)}
            >
              <span className="track-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="track-info">
                <span className="track-title">{track.title}</span>
                <span className="track-duration">{track.duration}</span>
              </span>
              {isActive && <span className="track-glow" aria-hidden="true" />}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
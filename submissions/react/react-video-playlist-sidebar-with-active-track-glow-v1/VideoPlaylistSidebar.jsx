import { useState } from "react";

const defaultPlaylist = [
  {
    id: 1,
    title: "Introduction to EaseMotion CSS",
    duration: "04:12",
  },
  {
    id: 2,
    title: "Animation Utilities",
    duration: "07:28",
  },
  {
    id: 3,
    title: "Hover Effects",
    duration: "05:10",
  },
  {
    id: 4,
    title: "Building Components",
    duration: "09:45",
  },
];

export default function VideoPlaylistSidebar({
  playlist = defaultPlaylist,
  defaultActive = 1,
}) {
  const [activeId, setActiveId] = useState(defaultActive);

  return (
    <aside
      style={{
        width: "320px",
        background: "#0f172a",
        padding: "1rem",
        borderRadius: "12px",
        color: "#fff",
        fontFamily: "system-ui",
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>Playlist</h2>

      {playlist.map((video) => {
        const active = video.id === activeId;

        return (
          <div
            key={video.id}
            onClick={() => setActiveId(video.id)}
            className={active ? "ease-glow" : ""}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: ".8rem 1rem",
              marginBottom: ".6rem",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "all .3s ease",
              background: active ? "#2563eb" : "#1e293b",
              boxShadow: active
                ? "0 0 20px rgba(37,99,235,.7)"
                : "none",
            }}
          >
            <span>{video.title}</span>
            <small>{video.duration}</small>
          </div>
        );
      })}
    </aside>
  );
}
# Ease Lava Lamp Background

## 1. What does this do?
This submission provides a glowing, fluid lava lamp ambient background using pure CSS morphing animations and composite filters.

## 2. How is it used?
It combines heavy `filter: blur(60px)` on a container element with asymmetrical `border-radius` morphing (e.g., `40% 60% 70% 30% / 40% 50% 60% 50%`) and `mix-blend-mode: screen` across multiple floating blob elements (`.ease-blob-1`, `.ease-blob-2`, `.ease-blob-3`) to render liquid organic shapes and smooth color blending.

## 3. Why is it useful?
This modern approach bypasses the glitchy `feColorMatrix` SVG filter technique, retaining true color vibrancy, clean edges, accessibility (via `prefers-reduced-motion`), and offloading rendering entirely to the GPU via standard CSS compositor animations.

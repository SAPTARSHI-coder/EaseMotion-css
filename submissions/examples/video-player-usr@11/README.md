# Custom Video Player Submission

## 1. What does this do?
It provides a modern, fully-featured custom video player with animated controls, progress bar, volume control, playback speed adjustment, and fullscreen support.

## 2. How is it used?
Wrap your `<video>` element in the `.video-player` container. The component automatically adds custom controls with play/pause, rewind/forward, volume, speed, and fullscreen functionality. All controls are animated with EaseMotion utilities.

## 3. Why is it useful?
- Essential component for video platforms, online courses, and media websites
- Fully custom controls with smooth animations
- Interactive progress bar with drag-to-seek
- Volume control with mute toggle
- Adjustable playback speed (0.5x to 2x)
- Fullscreen support
- Keyboard shortcuts (Space, K, Arrow keys, F, M)
- Auto-hide controls when video is playing
- Loading spinner for buffering states
- Fully accessible with ARIA labels
- Includes `prefers-reduced-motion` support
- Mobile-responsive design
- Maintainer can easily standardize this as `.ease-video-player-[YOUR_INITIALS]` in the core library.
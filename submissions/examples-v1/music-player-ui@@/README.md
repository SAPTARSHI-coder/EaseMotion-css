# Interactive Music Player UI

This is a self-contained example demonstrating how to create a modern, interactive music player interface with rotating vinyl animation, audio visualizer, custom progress slider, and playlist UI using pure CSS animations and minimal JavaScript, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 🎵 **Rotating Vinyl Animation:** Realistic vinyl disc that spins when playing and slides out from behind album art.
- 🎨 **Album Art with Badge:** "Now Playing" badge with pulse animation.
- 📊 **Audio Visualizer:** 20 animated equalizer bars with staggered delays.
- 🎚️ **Custom Progress Slider:** Gradient-filled range input with hover-reveal thumb.
- ⏯️ **Animated Play/Pause Button:** Smooth icon transition between play and pause states.
- 🔀 **Shuffle & Repeat Toggles:** Active state indicators for playback modes.
- 🔊 **Volume Control:** Custom styled volume slider.
- 📋 **Playlist Sidebar:** Scrollable playlist with mini visualizer for active track.
- ♿ **Fully Accessible:** Proper ARIA labels, keyboard navigation, and reduced motion support.
- 📱 **Responsive Design:** Adapts from desktop two-column to mobile single-column layout.
- 🚫 **Minimal JavaScript:** Only for state toggling and slider updates.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Copy the player HTML structure.
4. Replace album art URLs and track info with your own.
5. Include the JavaScript at the bottom for interactivity.

## HTML Structure

### Main Player
```html
<div class="player-card">
  <!-- Album Art with Vinyl -->
  <div class="album-container">
    <div class="vinyl" id="vinyl">
      <!-- Vinyl grooves and label -->
    </div>
    <div class="album-art">
      <img src="album.jpg" alt="Album" class="album-art__image" />
      <div class="album-art__overlay">
        <span class="album-art__badge">NOW PLAYING</span>
      </div>
    </div>
  </div>

  <!-- Track Info -->
  <div class="track-info">
    <h2 class="track-info__title">Track Name</h2>
    <p class="track-info__artist">Artist</p>
  </div>

  <!-- Visualizer -->
  <div class="visualizer" id="visualizer">
    <!-- 20 visualizer bars -->
  </div>

  <!-- Progress Bar -->
  <div class="progress-container">
    <span class="progress-time">1:42</span>
    <div class="progress-bar">
      <input type="range" class="progress-bar__input" />
      <div class="progress-bar__fill"></div>
    </div>
    <span class="progress-time">4:58</span>
  </div>

  <!-- Controls -->
  <div class="controls">
    <!-- Shuffle, Prev, Play, Next, Repeat buttons -->
  </div>

  <!-- Volume -->
  <div class="volume-container">
    <!-- Volume icon and slider -->
  </div>
</div>
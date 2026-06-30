# CSS-Only Neumorphic Audio Player

## Overview

A fully styled, CSS-only audio player inspired by modern neumorphic interfaces. The component features soft extruded shadows, floating controls, a spinning vinyl record, and an animated progress bar to create a premium music player experience without requiring JavaScript.

This example demonstrates how motion and depth can be combined to create engaging interfaces using only HTML and CSS.

---

## Features

### 🎵 Neumorphic Design

- Soft extruded shadows
- Layered depth and elevation
- Floating control buttons
- Modern glass-like appearance

### 💿 Animated Vinyl Record

- Continuously spinning record
- Realistic grooves created with CSS gradients
- Center label and spindle detail

### ⏱️ Animated Progress Bar

- Auto-animating progress indicator
- Synchronized with vinyl rotation for demonstration purposes

### 🎛️ Player Controls

- Play button
- Previous button
- Next button
- Pressed state interactions

### 📱 Responsive Design

- Mobile-friendly layout
- Fluid sizing
- Adaptive spacing

---

## Usage

### HTML

```html
<div class="player">
  <div class="record-wrapper">
    <div class="record">
      <div class="record-center"></div>
    </div>
  </div>

  <div class="content">
    <div class="song-info">
      <h2>Song Name</h2>
      <p>Album Name</p>
    </div>

    <div class="progress">
      <div class="progress-fill"></div>
    </div>

    <div class="controls">
      <button class="control-btn">⏮</button>
      <button class="play-btn">▶</button>
      <button class="control-btn">⏭</button>
    </div>
  </div>
</div>
```

---

## CSS Classes

| Class             | Description                 |
| ----------------- | --------------------------- |
| `.player`         | Main audio player container |
| `.record-wrapper` | Vinyl record wrapper        |
| `.record`         | Spinning vinyl record       |
| `.record-center`  | Center spindle              |
| `.song-info`      | Track information           |
| `.progress`       | Progress bar container      |
| `.progress-fill`  | Animated progress indicator |
| `.controls`       | Controls container          |
| `.control-btn`    | Previous and next buttons   |
| `.play-btn`       | Primary play button         |

---

## Animations

### Vinyl Rotation

```css
@keyframes spinRecord;
```

Continuously rotates the record.

### Progress Animation

```css
@keyframes progressMove;
```

Animates the playback progress indicator.

---

## Why It Fits EaseMotion CSS

- Animation-first design
- Pure CSS implementation
- Demonstrates advanced shadow techniques
- Shows creative use of gradients
- Lightweight and dependency-free
- Reusable UI pattern
- Visually engaging showcase component

---

## Demo

Open:

```text
demo.html
```

directly in your browser.

---

## Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge

---

## Possible Enhancements

Future improvements could include:

- Theme variants
- Equalizer visualization
- Dark mode switch
- Multiple album cover themes
- Interactive play/pause state
- CSS-only waveform animations
- Playlist example

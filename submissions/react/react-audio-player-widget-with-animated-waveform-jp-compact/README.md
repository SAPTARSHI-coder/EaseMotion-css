# React Compact Audio Player with Animated Waveform

## Description

`CompactAudioPlayer` is a horizontal, playlist-ready React audio player with play/pause, seeking, volume, mute, animated waveform feedback, responsive styling, and playback callbacks.

This implementation is intentionally distinct from a large artwork-led player. It is designed for compact media lists, podcast queues, dashboard cards, and embedded music rows.

## Files

```text
CompactAudioPlayer.jsx
style.css
README.md
```

## Installation

Copy the folder into a React project and load EaseMotion CSS once:

```jsx
import "easemotion-css/easemotion.min.css";
```

Then import the component:

```jsx
import CompactAudioPlayer from "./CompactAudioPlayer";
```

## Usage

```jsx
import "easemotion-css/easemotion.min.css";
import CompactAudioPlayer from "./CompactAudioPlayer";

export default function PlaylistRow() {
  return (
    <CompactAudioPlayer
      src="/audio/product-update.mp3"
      title="Product Update"
      artist="Company Podcast"
      accentColor="#22c55e"
      waveformBars={40}
      onPlay={() => console.log("Playing")}
      onPause={() => console.log("Paused")}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|---|---|---:|---|
| `src` | `string` | — | Audio source URL. |
| `title` | `string` | `"Untitled Track"` | Track title. |
| `artist` | `string` | `"Unknown Artist"` | Artist, speaker, or subtitle. |
| `durationLabel` | `string` | `""` | Optional custom duration text. |
| `accentColor` | `string` | `"#22c55e"` | Player accent color. |
| `waveformBars` | `number` | `36` | Decorative waveform bar count. |
| `autoPlay` | `boolean` | `false` | Requests autoplay. Browser policies may block it. |
| `loop` | `boolean` | `false` | Repeats audio after completion. |
| `initialVolume` | `number` | `0.75` | Initial volume from 0 to 1. |
| `onPlay` | `function` | — | Called after playback starts from the component control. |
| `onPause` | `function` | — | Called after playback pauses from the component control. |
| `onEnded` | `function` | — | Called when playback finishes. |
| `className` | `string` | `""` | Additional root class names. |

## EaseMotion CSS utilities used

```text
ease-fade-in
ease-hover-lift
ease-hover-grow
ease-pulse
```

## Accessibility

- Native buttons and range inputs are used.
- Every control has an accessible name.
- Playback status uses `aria-live`.
- Decorative waveform bars are hidden from assistive technology.
- Focus-visible styles are included.
- Reduced-motion mode disables waveform bouncing.

## Behavior notes

The waveform is decorative rather than a real-time audio analyser. This keeps the component dependency-free and avoids cross-origin and AudioContext restrictions.

# React Audio Player Widget with Animated Waveform

## Description

`AudioPlayerWidget` is a modular React audio player with play/pause controls, seeking, volume and mute controls, playback callbacks, responsive styling, and a CSS-animated waveform.

It uses React hooks, the native HTML audio API, scoped CSS, and standard EaseMotion CSS utility classes. It has no runtime dependencies outside React and EaseMotion CSS.

## Installation

Copy the component folder into a React project and load EaseMotion CSS once:

```jsx
import "easemotion-css/easemotion.min.css";
import AudioPlayerWidget from "./AudioPlayerWidget";
```

## Usage

```jsx
export default function MusicPage() {
  return (
    <AudioPlayerWidget
      src="/audio/sample-track.mp3"
      title="Midnight Signals"
      artist="Nova Avenue"
      artwork="/images/midnight-signals.jpg"
      accentColor="#7c5cff"
      waveformBars={48}
      onPlay={() => console.log("Playback started")}
      onPause={() => console.log("Playback paused")}
    />
  );
}
```

The `src` can be a local public asset, imported file URL, or remote URL that permits browser audio playback.

## Props

| Prop | Type | Default | Description |
|---|---|---:|---|
| `src` | `string` | — | Audio file URL. Required for playback. |
| `title` | `string` | `"Untitled track"` | Track title. |
| `artist` | `string` | `"Unknown artist"` | Artist or secondary metadata. |
| `artwork` | `string` | `""` | Optional artwork image URL. |
| `waveformBars` | `number` | `42` | Number of decorative waveform bars; minimum 12. |
| `accentColor` | `string` | `"#7c5cff"` | Main accent color. |
| `autoPlay` | `boolean` | `false` | Requests autoplay; browsers may block it. |
| `loop` | `boolean` | `false` | Loops playback. |
| `muted` | `boolean` | `false` | Initial mute state. |
| `initialVolume` | `number` | `0.8` | Initial volume from 0 to 1. |
| `onPlay` | `function` | — | Called after playback starts from the component control. |
| `onPause` | `function` | — | Called after playback pauses from the component control. |
| `onEnded` | `function` | — | Called when a non-looping track ends. |
| `className` | `string` | `""` | Extra classes for the root element. |

## EaseMotion CSS utilities used

```text
ease-fade-in
ease-hover-lift
ease-hover-grow
ease-pulse
```

## Accessibility

- Native buttons and range inputs.
- Accessible names for play, mute, seek, and volume controls.
- `aria-live` playback/error status.
- Visible focus styles.
- Decorative waveform hidden from assistive technology.
- Reduced-motion fallback.

## Notes

The waveform is a decorative animated visualization rather than a real-time frequency analyser. This keeps the component dependency-free and copy-paste ready.

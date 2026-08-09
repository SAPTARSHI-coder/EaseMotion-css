# VideoControls

A lightweight, accessible custom control bar for the native `<video>` element, built with EaseMotion CSS utility classes for its hover/tap animations.

## Description

`VideoControls` wraps a native `<video>` element and replaces the default browser chrome with a custom play/pause button, seek bar, time display, volume slider, and fullscreen toggle. It's fully controlled via React state and uses standard HTMLMediaElement APIs, so it needs no external dependencies.

## Props

| Prop       | Type      | Default | Description                                  |
| ---------- | --------- | ------- | --------------------------------------------- |
| `src`      | `string`  | —       | **Required.** URL of the video file to play.  |
| `poster`   | `string`  | `undefined` | Optional poster image shown before playback starts. |
| `autoPlay` | `boolean` | `false` | Whether the video should start playing automatically. |

## Usage

```jsx
import VideoControls from "./VideoControls";

function App() {
  return (
    <VideoControls
      src="/media/demo-clip.mp4"
      poster="/media/demo-poster.jpg"
      autoPlay={false}
    />
  );
}
```

## Why this is useful

Native video controls are inconsistent across browsers and can't be restyled directly. `VideoControls` gives contributors a consistent, themeable player skin that inherits EaseMotion's motion language (`ease-hover-scale`, `ease-hover-lift`, `ease-fade-in`, `ease-slide-up`) instead of shipping its own bespoke transitions — keeping video UI visually consistent with the rest of an EaseMotion-powered page.

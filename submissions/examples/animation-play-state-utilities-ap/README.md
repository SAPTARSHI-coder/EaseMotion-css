# EaseMotion CSS — Animation Play State Utilities

This directory implements core utility classes for controlling the CSS `animation-play-state` property in EaseMotion CSS.

---

## What is Animation Play State?

The `animation-play-state` CSS property allows developers to pause and resume animations dynamically. Rather than restarting an animation from the first keyframe (which happens if you add or remove animation classes), pausing freezes the animation at its current frame. When set back to running, the animation resumes exactly where it was frozen.

---

## Utility Classes Reference

EaseMotion CSS provides clean and intuitive utility prefixes for configuring animation play states.

### 1. Basic Play State Controls

| Utility Class        | Standard Class  | CSS Rule                         | Description                                             |
| :------------------- | :-------------- | :------------------------------- | :------------------------------------------------------ |
| `.anim-play-running` | `.play-running` | `animation-play-state: running;` | Default: Keyframe cycles render continuously.           |
| `.anim-play-paused`  | `.play-paused`  | `animation-play-state: paused;`  | Freezes the animation sequence at its current keyframe. |

### 2. Interactive Modifiers

| Utility Class           | CSS Rule                         | Description                                             |
| :---------------------- | :------------------------------- | :------------------------------------------------------ |
| `.hover-paused:hover`   | `animation-play-state: paused;`  | Pauses animation when cursor hovers over the element.   |
| `.hover-running:hover`  | `animation-play-state: running;` | Resumes animation when hovered (if paused by default).  |
| `.active-paused:active` | `animation-play-state: paused;`  | Pauses animation when the element is clicked/active.    |
| `.focus-paused:focus`   | `animation-play-state: paused;`  | Pauses animation when the element gains keyboard focus. |

---

## Usage Examples

### 1. Marquee Hover-Pause (Accessibility Pattern)

Marquees and auto-scrolling tickers can make reading difficult or cause distractions. Use `.hover-paused` to let users pause the marquee simply by placing their cursor over it:

```html
<!-- The marquee track pauses instantly when hovered -->
<div class="marquee-band hover-paused">
  <div class="marquee-track anim-marquee-infinite">
    <span>Scrolling News Item 1</span>
    <span>Scrolling News Item 2</span>
  </div>
</div>
```

### 2. Orbit Orbiting Planet Toggle (JavaScript Controls)

Use JavaScript to toggle play states on elements using the core utility classes. This prevents having to track complex keyframe states manually:

```html
<div id="planet" class="anim-rotate-infinite play-running"></div>
<button
  onclick="document.getElementById('planet').className = 'anim-rotate-infinite play-paused'"
>
  Pause Orbit
</button>
```

---

## Accessibility (WCAG 2.1) Guidelines

> [!IMPORTANT]
> Under **WCAG 2.1 Success Criterion 2.2.2 (Pause, Stop, Hide)**, any moving, blinking, or scrolling content that starts automatically, lasts more than five seconds, and is presented in parallel with other content _must_ have a mechanism for the user to pause, stop, or hide it.

- **Provide clear pause toggles**: Always provide accessible buttons (like a pause symbol button) for critical scrolling widgets, infinite carousels, or animated background hero panels.
- **Support focus-based pausing**: Combine hover-pausing with focus-pausing (`.focus-paused`) to ensure keyboard/screen-reader users can also pause the animations when navigating your interface.

---

## Browser Compatibility Notes

The `animation-play-state` property is standard CSS and has **universal support** across all modern browsers:

- Google Chrome & Edge (Blink)
- Mozilla Firefox (Gecko)
- Apple Safari (WebKit)

---

## Verification & Testing

Verify that your styles load correctly by launching `demo.html` in your web browser. Ensure the sandbox sliders apply CSS values dynamically. Run standard smoke tests to confirm build compliance:

```bash
npm test
```

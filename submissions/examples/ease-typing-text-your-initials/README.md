# ease-typing-text

A pure CSS typewriter animation component for EaseMotion CSS. No JavaScript required.

## Features

- Single-line typewriter with blinking cursor
- Multi-line staggered typing
- Paragraph clip-path reveal
- Speed modifiers (fast / slow)
- Custom cursor colors (primary, success, danger, white, dark)
- No-cursor clean reveal variant
- `prefers-reduced-motion` accessibility support
- Fully customizable via CSS custom properties

## Usage

### Basic Single Line

```html
&lt;span class="ease-typing" style="--ease-typing-steps: 24; --ease-typing-speed: 2.5s;"&gt;
  Hello, EaseMotion CSS!
&lt;/span&gt;
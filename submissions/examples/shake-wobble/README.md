# ease-shake & ease-wobble

> Micro-interaction feedback animations for EaseMotion CSS

## What it does

Attention and error-feedback animations for buttons, inputs, icons,
and badges. Two trigger modes: class-based (add/remove via JS) and
hover-only (pure CSS, zero JS).

## Usage

    <!-- Trigger by adding class via JS -->
    <button class="ease-shake">Wrong answer!</button>
    <input class="ease-error-flash" />

    <!-- Hover variant -- pure CSS, no JS -->
    <button class="ease-shake-hover">Hover to shake</button>
    <span class="ease-wobble-hover">Hover to wobble</span>

## JS trigger snippet

    function trigger(el, cls) {
      el.classList.remove(cls);
      void el.offsetWidth;
      el.classList.add(cls);
      el.addEventListener('animationend', () => el.classList.remove(cls), { once: true });
    }

## Class Reference

| Class                       | Description                          |
| --------------------------- | ------------------------------------ |
| ease-shake                  | Horizontal shake, error feedback     |
| ease-shake-hover            | Shake on hover, no JS                |
| ease-wobble                 | Rotational wobble, playful attention |
| ease-wobble-hover           | Wobble on hover, no JS               |
| ease-bounce-attention       | Vertical bounce, notification style  |
| ease-bounce-attention-hover | Bounce on hover, no JS               |
| ease-pulse-attention        | Scale pulse, heartbeat style         |
| ease-pulse-attention-hover  | Pulse on hover, no JS                |
| ease-error-flash            | Shake + red border flash combined    |

## Use cases

- Wrong password / failed form validation -- ease-shake or ease-error-flash
- New notification badge -- ease-wobble or ease-bounce-attention
- Call-to-action button nudge -- ease-pulse-attention
- Empty cart / no results -- ease-wobble

## CSS Variables used

| Token           | Role                            |
| --------------- | ------------------------------- |
| --ease-ease-out | Easing curve for all animations |

## Browser support

| Feature               | Chrome | Edge | Firefox | Safari |
| --------------------- | ------ | ---- | ------- | ------ |
| CSS animations        | yes    | yes  | yes     | yes    |
| CSS custom properties | yes    | yes  | yes     | yes    |

Submitted under MIT License · EaseMotion CSS · 2026

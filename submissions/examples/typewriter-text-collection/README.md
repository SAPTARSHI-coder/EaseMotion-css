# ease-typewriter – Animated Typewriter Text Effects

A **pure CSS** typewriter text effect collection built for EaseMotion CSS.  
No JavaScript — uses `steps()` timing function and `@keyframes`.

## Variants

| Class                      | Behavior                                     |
|----------------------------|----------------------------------------------|
| `ease-typewriter`          | Base typing animation with blinking caret    |
| `ease-typewriter-loop`     | Type → erase → retype continuously           |
| `ease-typewriter-fast`     | Faster typing speed                          |
| `ease-typewriter-slow`     | Slower, deliberate typing                    |
| `ease-typewriter-no-caret` | Typing animation without blinking cursor     |

## Usage

```html
<h1 class="ease-typewriter">Hello, World!</h1>
<p class="ease-typewriter ease-typewriter-slow ease-delay-300">Building with EaseMotion CSS.</p>
<span class="ease-typewriter ease-typewriter-loop">Animation-first. Zero deps. Ship it.</span>
<p class="ease-typewriter ease-typewriter-slow ease-typewriter-loop ease-delay-500">
  Slow, looping, with a delay.
</p>
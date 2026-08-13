# CSS Neon Flicker Text

## 1. What does this do?
This component renders an interactive neon sign displaying retro text that contains realistic, staggered electrical hum and flickering animations mapped to individual letters.

## 2. How is it used?
Configure standard text headers and assign specific glow or flicker animation helpers to span letters:
```html
<main class="sign-board">
  <h1 class="neon-title">
    <!-- Steady Glow -->
    <span class="neon-pink-glow">G</span>
    <!-- Staggered Flickers -->
    <span class="neon-pink-glow flicker-fast">L</span>
    <span class="neon-cyan-glow flicker-slow">W</span>
  </h1>
  <p class="sign-subtext">Electric Hum Sign</p>
</main>
```

## 3. Why is it useful?
It provides front-end developers with an elegant aesthetic sign pattern using native keyframe timing percentages and text-shadow layering, replacing canvas drawing loop files.

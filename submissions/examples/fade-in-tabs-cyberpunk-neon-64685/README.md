# Cyberpunk Neon Fade-In Tabs

This submission provides a pure CSS layout for a tabbed interface styled with a cyberpunk neon aesthetic, featuring a smooth, dynamic fade-in entrance animation for the tab panels.

## What does this do?
It provides a pure CSS, zero-JavaScript interactive tab component using radio buttons to switch between different content panels with a neon cyberpunk theme and fade-in animations.

## How is it used?

```html
<div class="cyber-tabs-wrapper">
  <input type="radio" name="cyber-tabs" id="tab1" checked>
  <input type="radio" name="cyber-tabs" id="tab2">

  <div class="cyber-tabs-nav">
    <label for="tab1" class="cyber-tab-btn ease-hover-lift">Uplink</label>
    <label for="tab2" class="cyber-tab-btn ease-hover-lift">Proxy</label>
  </div>

  <div class="cyber-tabs-content">
    <div class="cyber-tab-panel panel1">
      <h2 class="neon-text">Uplink Established</h2>
      <p>Connection stable.</p>
    </div>
    <div class="cyber-tab-panel panel2">
      <h2 class="neon-text">Proxy Active</h2>
      <p>Routing traffic.</p>
    </div>
  </div>
</div>
```

## Why is it useful?

It provides an interactive, performant, and zero-JavaScript tab component. The neon-styled fade-in animation creates a high-tech feel, suitable for futuristic or gaming-oriented interfaces, while fully supporting `prefers-reduced-motion` for accessibility and following the EaseMotion CSS philosophy of utilizing smooth CSS transitions and keyframe animations.

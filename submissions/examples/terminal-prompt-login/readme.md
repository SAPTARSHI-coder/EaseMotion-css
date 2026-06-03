# Terminal Prompt Login Form

## What does this do?

Provides a terminal-inspired login form with command-line styling, status dots, monospace typography, prompt-based labels, and a blinking terminal caret animation.

## How is it used?

```html
<form class="lf-term">
  <div class="lf-term-bar">
    <span class="lf-term-dot r"></span>
    <span class="lf-term-dot y"></span>
    <span class="lf-term-dot g"></span>
    <span class="lf-term-title">~/login</span>
  </div>

  <div class="lf-term-body">
    <div class="lf-term-line">
      <span class="lf-term-prompt">user:</span>
      <input type="email" placeholder="you@example.com">
    </div>
  </div>
</form>
```

## Why is it useful?

This component recreates a terminal-style authentication experience suitable for developer portfolios, SaaS dashboards, documentation websites, and technical landing pages. It follows EaseMotion CSS principles by providing a reusable, animation-friendly, and human-readable UI pattern.
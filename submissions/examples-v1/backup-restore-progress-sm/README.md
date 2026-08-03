# Backup Restore Progress

## What does this do?

Backup Restore Progress is a self-contained HTML and CSS recovery dashboard pattern with animated restore meters, staged progress cards, status chips, and readable restore checkpoints.

## How is it used?

Create a `restore-board` wrapper and add `restore-card` items with stage classes such as `stage-done`, `stage-active`, or `stage-waiting`.

```html
<article class="restore-card stage-active">
  <div class="stage-ring" aria-hidden="true">
    <span>68%</span>
  </div>
  <div class="stage-content">
    <p class="stage-kicker">Restore</p>
    <h2>Records are being replayed</h2>
    <div class="stage-bar" aria-hidden="true">
      <span></span>
    </div>
  </div>
</article>
```

Available stage classes:

- `stage-done`
- `stage-active`
- `stage-waiting`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to make recovery progress easier to scan: cards enter gently, rings show stage completion, bars reveal restore progress, and focus states keep actions accessible. The demo works directly by opening `demo.html` in a browser.

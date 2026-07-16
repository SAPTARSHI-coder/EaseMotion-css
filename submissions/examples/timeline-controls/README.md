# timeline-controls

## What it does
Provides utility classes to pause, resume, and reverse CSS animations
at runtime — either via class toggling or JavaScript helpers.

## Proposed ease-* class names
- `.ease-pause` — pauses the animation
- `.ease-resume` — resumes a paused animation
- `.ease-reverse` — reverses animation direction

## Usage
```html
<!-- Static usage -->
<div class="ease-fade-in ease-pause">Paused on load</div>

<!-- JS toggle -->
<div class="ease-spin" id="box"></div>
<button onclick="document.getElementById('box').classList.toggle('ease-pause')">
  Toggle Pause
</button>
```

## Acceptance criteria met
- ✅ Animations can be paused
- ✅ Animations can be resumed
- ✅ Reverse playback functions correctly
- ✅ Existing animation behavior unchanged

## Closes
Issue #9213
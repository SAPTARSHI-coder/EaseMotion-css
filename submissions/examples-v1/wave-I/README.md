 
# Wave Animation for Text & Icons

Cascading wave effect across child elements using nth-child animation delays.

## Files

- demo.html - Interactive demo
- style.css - Wave animation styles
- README.md - Documentation

## Classes

- ease-wave - Base wave (normal speed, normal height)
- ease-wave-subtle - Smaller movement
- ease-wave-strong - Larger movement
- ease-wave-fast - Fast animation
- ease-wave-slow - Slow animation
- ease-wave-hover - Trigger on hover
- ease-wave-infinite - Continuous loop

## Usage

```html
<div class="ease-wave">
    <span>W</span><span>A</span><span>V</span><span>E</span>
</div>

<!-- Different wave heights -->
<div class="ease-wave-subtle">Subtle wave</div>
<div class="ease-wave-strong">Strong wave</div>

<!-- Hover trigger -->
<div class="ease-wave-hover">Hover to wave</div>
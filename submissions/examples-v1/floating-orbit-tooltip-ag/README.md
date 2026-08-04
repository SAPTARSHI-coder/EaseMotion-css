# Floating Orbit Tooltip (`floating-orbit-tooltip-ag`)

## 1. What does this do?
This is a pure CSS, keyboard-accessible animated tooltip featuring a smooth, customizable floating orbit/circular drift transition styled with a premium Cyberpunk Neon aesthetic.

## 2. How is it used?
Structure the trigger button and the tooltip content inside a relative wrapper. The tooltip's visibility is controlled via hover/focus triggers with zero JavaScript.

```html
<div class="orbit-tooltip-wrapper-ag">
  <button class="orbit-tooltip-trigger-ag" type="button" aria-describedby="tooltip-id">
    HOVER LINK
  </button>
  <div class="orbit-tooltip-ag orbit-tooltip-top-ag" id="tooltip-id" role="tooltip">
    <div class="orbit-tooltip-inner-ag">
      <div class="orbit-tooltip-header-ag">
        <span>HEADER</span>
        <span>01</span>
      </div>
      Tooltip description text goes here.
    </div>
  </div>
</div>
```

### Configurable CSS Custom Properties
You can adjust the behavior of the tooltip by modifying these custom properties on `:root` or the element:
* `--tooltip-transition-duration`: Entry/exit scale and opacity transition time (default: `300ms`)
* `--tooltip-transition-easing`: Timing function for the zoom-in effect (default: `cubic-bezier(0.34, 1.56, 0.64, 1)`)
* `--tooltip-orbit-duration`: Duration of a complete circular orbit drift cycle (default: `6s`)
* `--tooltip-orbit-radius`: Horizontal amplitude of the orbital motion (default: `6px`)
* `--tooltip-float-dist`: Vertical amplitude of the orbital motion (default: `4px`)
* `--tooltip-scale-from`: Collapsed starting scale factor (default: `0.85`)
* `--tooltip-offset`: Displacement distance from the trigger button (default: `12px`)
* `--tooltip-bg`: Background color of the tooltip bubble
* `--tooltip-border-color`: Neon glow border color
* `--tooltip-accent-color`: Highlight header text color

## 3. Why is it useful?
It fits EaseMotion's philosophy by using clean, human-readable CSS transitions and animations to make interactions feel premium and responsive. By splitting the entry zoom transition from the infinite orbital drift into a two-tier nested HTML structure, it ensures fluid, hardware-accelerated motion without transform collisions or screen flickers, while remaining fully accessible and responsive under 200 lines of pure CSS.

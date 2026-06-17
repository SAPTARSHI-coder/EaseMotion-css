# ease-btn-magnetic

## What does this do?

Provides a `.ease-btn-magnetic` button class that subtly follows the cursor. As the user moves their mouse over the button, it translates toward the cursor position, creating a playful magnetic micro-interaction.

## How is it used?

Add the class and the companion script:

```html
<button class="ease-btn-magnetic" data-magnetic-strength="0.3">
  Click me
</button>

<script>
  document.querySelectorAll(".ease-btn-magnetic").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const strength = parseFloat(btn.dataset.magneticStrength) || 0.3;
      btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });
</script>
```

### Configuration

| Attribute | Default | Description |
|---|---|---|
| `data-magnetic-strength` | `0.3` | Translation factor (0–1). Higher values = more movement. |

## Why is it useful?

Magnetic buttons are a popular micro-interaction in modern UI design. They add a layer of polish and playfulness that makes interfaces feel responsive and alive. This component standardizes the effect across the EaseMotion framework.

## Features

- Mouse position tracking with cursor-following translate
- Configurable strength via `data-magnetic-strength`
- Smooth 200ms `ease-out` return transition
- Degrades gracefully on touch devices (no effect)
- Respects `prefers-reduced-motion` (no movement)
- Skipped automatically on disabled buttons

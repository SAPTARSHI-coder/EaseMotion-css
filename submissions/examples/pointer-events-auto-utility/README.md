# Pointer Events Auto Utility

Introduces the pointer-interaction target override utility token (`.ease-pointer-auto`) under issue #15143.

## Functional Mechanics

- **The Problem:** When crafting layered user interfaces—such as custom map viewports with floating HUD tools, slide-out notification templates, carousel slide rails, or absolute graphical image masks—developers use `pointer-events: none` on broad wrapper frames to allow clicking through to lower layout assets. However, if any action blocks like target buttons or links live *inside* that un-clickable parent frame, they become completely broken and dead to mouse interactions.
- **The Solution:** Granular click-target restoration. The `.ease-pointer-auto` utility applies `pointer-events: auto`. This overrides the inherited dead-zone rules from the parent wrapper, creating a precise bubble of interactivity around specific click targets while keeping the surrounding glass overlay pass-through.

## Usage Layout Structure
```html
<div class="global-overlay-layer" style="pointer-events: none;">
  
  <button class="ease-pointer-auto">
    Active Trigger Button
  </button>
</div>
```

Closes #15143

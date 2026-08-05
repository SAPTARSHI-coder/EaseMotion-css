# Tab — Gradient Variant

## 1. What does this do?

A pure CSS-interactive neumorphic tab component featuring a smooth, sliding gradient glider pill that transitions behind the active tab labels and triggers slide-up panel content overlays.

## 2. How is it used?

Incorporate radio buttons with matching label targets and a glider pill inside a card layout to design a script-free tabs widget:

```html
<input
  type="radio"
  id="tab-1"
  name="gradient-tabs"
  checked
  style="display: none;"
/>
<div class="tabs-card">
  <div class="tabs-bar">
    <div class="active-pill-glider"></div>
    <label for="tab-1" class="tab-label label-1">Dashboard</label>
  </div>
</div>
```

## 3. Why is it useful?

It conforms fully to the EaseMotion CSS design philosophy:

- **Human-readable**: Semantic naming configurations like `active-pill-glider` and `tab-panel` explain their roles directly.
- **Animation-first**: Implements smooth spring-like elastic glide transitions for active pills and slide-up scales for panel entrances.
- **Composable**: Perfect for configuration modals, category selection widgets, user profile views, or settings panels in modern dark-mode layouts.

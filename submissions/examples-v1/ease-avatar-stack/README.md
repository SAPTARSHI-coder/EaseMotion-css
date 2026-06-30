# Avatar Group (`ease-avatar-group`)

An overlapping avatar stack component featuring a smooth hover-spread animation. Built for the EaseMotion-css framework.

## 🚀 Features

- **Negative Margin Overlap**: Seamlessly stacks avatars using configurable negative margins.
- **Group Hover Spread**: Hovering anywhere on the group gently pulls the avatars apart, improving visibility of individual faces.
- **Individual Hover Pop**: Hovering a specific avatar scales it up and brings it to the front using z-index manipulation.
- **Responsive Sizes**: Includes base size, Small (`.ease-avatar-sm`), and Large (`.ease-avatar-lg`).
- **Overflow Support**: Includes a `.ease-avatar-overflow` utility for the classic "+N" remaining indicator.
- **Zero JavaScript**: Operates purely on CSS `:hover` states and transitions.

## 🛠️ Usage

Wrap individual `.ease-avatar` elements inside an `.ease-avatar-group` container.

```html
<div class="ease-avatar-group">
  <div class="ease-avatar">
    <img src="user1.jpg" alt="User 1" />
  </div>
  <div class="ease-avatar">
    <img src="user2.jpg" alt="User 2" />
  </div>
  <div class="ease-avatar ease-avatar-overflow">
    <span>+3</span>
  </div>
</div>
```

# Ease Avatar Group Zd

## What does this do?
An animated avatar group component with stacked image avatars and initials-based avatars, hover spread animation, count overflow badge, and descriptive labels — pure HTML and CSS.

## How is it used?
```html
<!-- Image avatars -->
<div class="ag-group">
  <img class="ag-avatar" src="avatar1.jpg" alt="Name" width="40" height="40">
  <img class="ag-avatar" src="avatar2.jpg" alt="Name" width="40" height="40">
  <span class="ag-count">+5</span>
</div>
<div class="ag-label"><strong>12 members</strong> online now</div>

<!-- Initials avatars -->
<div class="ag-group">
  <span class="ag-avatar-initials" style="background:#6c5ce7;" aria-label="Name">AC</span>
  <span class="ag-count">+3</span>
</div>
```

Use `.ag-avatar` for image avatars, `.ag-avatar-initials` for letter avatars, and `.ag-count` for the overflow count badge.

## Why is it useful?
Avatar groups are a standard UI pattern for showing multiple people in collaborative contexts — team projects, document sharing, chat rooms, and social features. The hover spread animation reveals the full set without taking up extra space.

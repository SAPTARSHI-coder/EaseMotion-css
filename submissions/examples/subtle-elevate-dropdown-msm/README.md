# Subtle Elevate Dropdown

## What does this do?

The Subtle Elevate Dropdown adds a soft HTML/CSS dropdown menu that gently lifts into view with calm shadows and refined easing.

## How is it used?

Add the dropdown markup to a navigation area and include the local stylesheet:

```html
<nav class="subtle-dropdown" aria-label="Workspace navigation">
  <button class="dropdown-button" type="button" aria-haspopup="true">
    Workspace menu
    <span class="chevron" aria-hidden="true"></span>
  </button>

  <ul class="dropdown-menu" aria-label="Workspace options">
    <li><a href="#overview">Project overview</a></li>
    <li><a href="#activity">Recent activity</a></li>
    <li><a href="#settings">Team settings</a></li>
  </ul>
</nav>
```

## Why is it useful?

It gives EaseMotion CSS users a restrained dropdown component that feels responsive and polished without external scripts, while supporting hover, keyboard focus, responsive layouts, and reduced-motion preferences.

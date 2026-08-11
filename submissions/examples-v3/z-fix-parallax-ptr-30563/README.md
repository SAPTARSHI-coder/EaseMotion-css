# Fix: Pull-To-Refresh + Parallax Scroll Conflict

Issue: #30563

## Problem

`ease-pull-to-refresh`
applies:

```css
overscroll-behavior: contain;
```

directly on the scrolling container.

`ease-parallax`
requires:

```css
overflow-y: scroll;
perspective: 2px;
```

on the same element.

When both utilities are attached to a single container,
the browser prevents natural overscroll boundaries,
which negatively impacts the parallax depth illusion.

---

## Solution

Use a nested container pattern.

### Outer Container

Responsible for:

- pull to refresh
- overscroll containment

```css
.ptr-wrapper{

overscroll-behavior:contain;

overflow-y:auto;

}
```

### Inner Container

Responsible for:

- perspective
- parallax layers
- scroll transforms

```css
.parallax-scroll{

overflow-y:scroll;

perspective:2px;

}
```

---

## Benefits

- preserves pull-to-refresh behavior
- restores parallax depth
- avoids clipping artifacts
- composable with EaseMotion utilities

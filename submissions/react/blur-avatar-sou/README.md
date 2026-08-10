# Blur Avatar (React Component)

A reusable React `Avatar` component that leverages the EaseMotion CSS `ease-blur` utility class to render a soft blur while the image loads (progressive-image style) and to indicate offline / disabled user states.

---

## File

`Avatar.jsx`

---

## What It Does

`BlurAvatar` is a lightweight, accessibility-aware React component that:

- Uses the EaseMotion `ease-blur` utility class to show a soft blur while the image is loading — the blur smoothly transitions away once the image is ready (progressive-image effect).
- Falls back to initials (auto-generated from the `name` prop) if no `src` is provided or the image fails to load.
- Ships with 5 size tokens (`xs`, `sm`, `md`, `lg`, `xl`), 3 shape variants (`circle`, `rounded`, `square`), and a status badge (`online`, `away`, `offline`).
- Applies `ease-blur` permanently when the user is `offline` or when the `blurred` prop is `true`.
- Uses `ease-transition` and `ease-hover-lift` utilities for smooth interaction feedback when clickable.

No custom CSS is required — all visual behavior comes from composed EaseMotion utility classes.

---

## Props Reference

| Prop           | Type                                              | Default    | Description                                                             |
| -------------- | ------------------------------------------------- | ---------- | ----------------------------------------------------------------------- |
| `src`          | string                                            | `undefined`| Image source URL. If missing or errors, initials are shown instead.     |
| `alt`          | string                                            | `""`       | Alt text for the image.                                                 |
| `name`         | string                                            | `""`       | Full name — used to auto-generate 2-letter initials for the fallback.   |
| `size`         | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"`    | `"md"`     | Avatar size token.                                                      |
| `shape`        | `"circle"` \| `"rounded"` \| `"square"`           | `"circle"` | Avatar shape.                                                           |
| `status`       | `"online"` \| `"away"` \| `"offline"` \| `"none"` | `"none"`   | Renders a status badge; `offline` also applies `ease-blur` permanently. |
| `blurred`      | boolean                                           | `false`    | Force the avatar into a blurred state (useful for disabled users).      |
| `progressive`  | boolean                                           | `true`     | Start blurred and un-blur once the image finishes loading.              |
| `className`    | string                                            | `""`       | Extra classes appended to the wrapper.                                  |
| `onClick`      | function                                          | `undefined`| Optional click handler; makes the avatar keyboard-accessible.           |
| `...rest`      | any                                               | —          | Any additional native HTML attributes (id, data-*, aria-*, etc).        |

---

## EaseMotion Utility Classes Used

- `ease-blur` — Core blur utility this issue targets. Applied to the image while loading, when the user is offline, or when `blurred={true}`.
- `ease-avatar` — Base avatar wrapper class.
- `ease-avatar-{size}` — Size modifier (`xs`, `sm`, `md`, `lg`, `xl`).
- `ease-avatar-{shape}` — Shape modifier (`circle`, `rounded`, `square`).
- `ease-avatar-status-{status}` — Status ring around the avatar.
- `ease-avatar-badge` / `ease-avatar-badge-{status}` — Small colored dot indicating status.
- `ease-avatar-img` — The `<img>` element inside the wrapper.
- `ease-avatar-fallback` — The initials fallback.
- `ease-transition` — Smooth transitions for the blur → sharp animation.
- `ease-hover-lift` — Applied only when `onClick` is provided (for clickable avatars).

---

## Usage

Import the component and use it like any other React component:

    import React from "react";
    import BlurAvatar from "./Avatar";

    export default function UserList() {
      return (
        <div style={{ display: "flex", gap: "1rem" }}>
          {/* Progressive image loading (blurred → sharp) */}
          <BlurAvatar
            src="https://i.pravatar.cc/150?img=1"
            alt="Jane Doe"
            name="Jane Doe"
            size="lg"
            status="online"
          />

          {/* Offline user — permanently blurred */}
          <BlurAvatar
            src="https://i.pravatar.cc/150?img=2"
            alt="John Smith"
            name="John Smith"
            size="lg"
            status="offline"
          />

          {/* Clickable avatar with hover-lift */}
          <BlurAvatar
            src="https://i.pravatar.cc/150?img=3"
            alt="Ada Lovelace"
            name="Ada Lovelace"
            size="lg"
            status="away"
            onClick={() => alert("Profile clicked")}
          />

          {/* Fallback initials (no src) */}
          <BlurAvatar name="Grace Hopper" size="lg" shape="rounded" />
        </div>
      );
    }

### Additional Examples

    // Force-blurred (e.g. hidden / disabled user)
    <BlurAvatar
      src="https://i.pravatar.cc/150?img=4"
      alt="Hidden User"
      blurred
    />

    // Disable progressive blur (image renders sharp immediately)
    <BlurAvatar
      src="https://i.pravatar.cc/150?img=5"
      alt="Fast Path"
      progressive={false}
    />

    // Small square avatar for compact UIs
    <BlurAvatar
      src="https://i.pravatar.cc/150?img=6"
      alt="Compact"
      size="xs"
      shape="square"
    />

---

## Accessibility

- Uses `role="img"` on the wrapper when the avatar is decorative and `role="button"` when clickable.
- Provides `aria-label` from `alt` or `name` so screen readers announce the avatar.
- Clickable avatars are keyboard-accessible: `tabIndex={0}` plus `Enter` / `Space` key handlers.
- The status badge has its own `aria-label` (e.g. `status: online`) so status is announced.
- The image is `draggable={false}` to prevent accidental drag interactions.
- Falls back gracefully to initials if the image fails to load — no broken image icon.

---

## Why It Fits EaseMotion CSS

- **Utility-first:** Uses only EaseMotion utility classes — no custom CSS, no inline styles, no external libraries.
- **Composable:** Layers `ease-blur`, `ease-transition`, and `ease-hover-lift` naturally to show how utilities combine.
- **Framework-native:** Demonstrates the recommended pattern for wrapping EaseMotion utilities inside a reusable React component.
- **Human-readable:** Class names like `ease-blur`, `ease-avatar-status-online` describe intent, matching EaseMotion's readability-first philosophy.
- **Progressive by default:** Shows a real, practical use case for the `ease-blur` utility (progressive image loading) — not just a demo prop.
- **Accessible:** Ships with proper ARIA roles, keyboard support, and graceful fallbacks.

---

## Author

**soumyasekharshee265-ux**

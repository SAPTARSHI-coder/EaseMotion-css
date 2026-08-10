# Ease Bell

## What does this do?

Displays a dark-mode notification bell button that rings and sends a pulse on click, opens a spring-animated dropdown panel with staggered notification items and an animated badge counter, and lets the user mark all notifications as read — using CSS animations and minimal vanilla JS.

## How is it used?

**1. Bell button with badge:**

```html
<div class="bell-wrap">
  <button class="bell-btn" aria-label="Notifications"
          aria-haspopup="true" aria-expanded="false"
          aria-controls="bell-panel" type="button">
    <!-- bell SVG -->
    <span class="bell-badge is-visible" aria-label="3 unread">3</span>
  </button>

  <div id="bell-panel" class="bell-panel" role="dialog" aria-label="Notifications">
    <!-- panel content -->
  </div>
</div>
```

**2. Trigger the ring animation** (add/remove class on click):

```js
bellBtn.classList.add('is-ringing');
bellBtn.addEventListener('animationend', () => bellBtn.classList.remove('is-ringing'));
```

**3. Open / close the panel** (toggle class):

```js
panel.classList.toggle('is-open');
bellBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
```

**4. Notification item structure:**

```html
<li class="bell-item is-unread" role="listitem" tabindex="0">
  <div class="bell-item-icon type-message">💬</div>
  <div class="bell-item-body">
    <p class="bell-item-text"><strong>Sarah</strong> sent you a message</p>
    <span class="bell-item-time">2 minutes ago</span>
  </div>
  <span class="bell-unread-dot"></span>
</li>
```

**Item icon type modifiers:** `type-message` · `type-mention` · `type-task` · `type-star` · `type-system`

**5. Clear badge** (after mark-all-read):

```js
badge.classList.remove('is-visible');
badge.classList.add('is-cleared');
```

## Why is it useful?

EaseMotion CSS treats motion as a first-class citizen. A notification bell is one of the most motion-rich patterns in modern UI — it should communicate urgency through animation, not just colour. This submission extends EaseMotion's motion language to that pattern with:

- **`bell-ring` keyframe** — a natural multi-step pendulum swing (`rotate`) that reads instantly as a bell ringing, ready to become `ease-ring` in the framework.
- **`bell-pulse-ring` keyframe** — a scale + fade expanding ring matching EaseMotion's existing `.ease-ping` philosophy but scoped to a specific interaction trigger.
- **`badge-pop` keyframe** — an elastic scale entrance (`cubic-bezier(0.34, 1.56, 0.64, 1)`) consistent with EaseMotion's spring easing across hover and entrance classes.
- **Staggered `item-slide-in`** — cascading `animation-delay` per `nth-child`, mirroring `ease-delay-*` utilities already in the framework.
- **Spring panel open** — same elastic easing curve used across EaseMotion for dropdowns and modals.
- **Full accessibility** — `aria-expanded`, `aria-haspopup`, `role="dialog"`, `aria-live`, keyboard `Escape` close, `:focus-visible` rings, and `prefers-reduced-motion` all handled.
- **Zero dependencies** — `demo.html` opens directly in any modern browser with no server or build step.

Once curated, the maintainer can standardise class names to `ease-bell`, `ease-bell-ring`, `ease-badge-pop`, etc., and pull the keyframes into `core/animations.css`.

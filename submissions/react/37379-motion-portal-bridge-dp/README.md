# MotionPortalBridge

## 1. What does this do?

MotionPortalBridge coordinates enter/exit animation lifecycle and visibility between a trigger element in the React tree and content rendered through a React Portal.

---

## 2. How is it used?

Example

```jsx
<MotionPortalBridge
  isOpen={open}
  triggerRef={buttonRef}
  enterClass="ease-fade-in"
  exitClass="ease-fade-out"
>
  <PortalContent />
</MotionPortalBridge>
```

Developers control visibility with a single `isOpen` boolean and pass a `triggerRef` pointing at the element that opened the content. MotionPortalBridge mounts the children into a portal, applies the `enterClass` on open, swaps to the `exitClass` on close, and unmounts the portal only after the exit animation's `duration` has elapsed. Lifecycle callbacks (`onEnterStart`, `onEnterEnd`, `onExitStart`, `onExitEnd`) let consumers hook into each phase, and any component — a modal, popover, tooltip, floating menu, or command palette — can supply its own markup as `children`.

---

## 3. Why is it useful?

MotionPortalBridge follows the EaseMotion CSS philosophy of reusable, lightweight, CSS-first animation. It stays React-friendly by relying only on hooks and portals, remains framework-agnostic by delegating actual motion to existing EaseMotion CSS classes, and is composable so it can back any production-inspired floating UI pattern without being tied to a specific component's design.

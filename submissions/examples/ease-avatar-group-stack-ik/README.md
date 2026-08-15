# EaseMotion CSS — Overlapping Avatar Group Stack (`ease-avatar-group-stack-ik`)

Overlapping user avatar group stack (`ease-avatar-stack`) featuring spring hover spread scale micro-animations (`avatar-img`) and tooltip reveals.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides an overlapping avatar stack component (`ease-avatar-stack`) that elevates and expands user profile circles (`avatar-img`) on hover with smooth 3D spring lift animations (`translateY(-6px) scale(1.15)`).

---

## 2. How is it used?

Include the avatar stack container in your HTML markup:

```html
<div class="ease-avatar-stack">
  <div class="avatar-item" data-tooltip="Ishita Katiyar">
    <span class="avatar-img av-cyan">IK</span>
  </div>
  <div class="avatar-item" data-tooltip="Saptarshi Sadhu">
    <span class="avatar-img av-purple">SS</span>
  </div>
</div>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS focuses on responsive team profile indicators. The Avatar Group Stack component delivers 60fps GPU compositor lift micro-interactions while providing accessible hover tooltips.

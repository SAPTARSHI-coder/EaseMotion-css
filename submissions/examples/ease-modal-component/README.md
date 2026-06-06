# Ease Modal Component

## What does this do?
A collection of highly interactive, responsive, and beautifully animated modal overlay dialogs, alert prompt configurations, side drawers, and fullscreen panels, supporting both HTML5 `<dialog>` and standard `div` structures.

---

## Why is it useful?
Modals are critical UI elements for displaying forms, confirm messages, notifications, settings, and warnings without sending the user to another page. This component delivers 10 distinct, lightweight modal variants with smooth entrance keyframes, full keyboard accessibility (ESC key to exit), backdrop overlays, and auto dark-light theme adaptation. It empowers developers to deploy responsive overlay drawers and alerts instantly.

---

## How is it used?

### Option A: Standard DIV Backdrop Markup

```html
<!-- Modal Overlay Backdrop Wrapper -->
<div class="ease-modal-overlay" id="my-modal">
  
  <!-- Modal Card Dialog Container -->
  <div class="ease-modal-container">
    
    <!-- Header -->
    <div class="ease-modal-header">
      <h3 class="ease-modal-title">Confirm Purchase</h3>
      <button class="ease-modal-close" onclick="closeMyModal()">
        <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
    
    <!-- Body Content -->
    <div class="ease-modal-body">
      <p>Are you sure you want to proceed with this subscription tier purchase?</p>
    </div>
    
    <!-- Footer actions -->
    <div class="ease-modal-footer">
      <button class="btn btn--secondary" onclick="closeMyModal()">Cancel</button>
      <button class="btn btn--primary" onclick="closeMyModal()">Confirm</button>
    </div>
    
  </div>
</div>
```

---

### Option B: Native HTML5 `<dialog>` Tag

```html
<dialog class="ease-modal-container" id="my-native-dialog">
  <div class="ease-modal-header">
    <h3 class="ease-modal-title">Native Dialog</h3>
    <button class="ease-modal-close" onclick="document.getElementById('my-native-dialog').close()">
      <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
  </div>
  <div class="ease-modal-body">
    <p>This dialog tag does not require an overlay class wrap as the browser generates the backdrop overlay automatically.</p>
  </div>
</dialog>
```

---

### Basic Vanilla JS Controller

```javascript
// Open Modal
function openModal(id) {
  const overlay = document.getElementById(id);
  overlay.classList.add('ease-modal--open');
  document.body.style.overflow = 'hidden'; // Lock screen scroll
}

// Close Modal
function closeModal(id) {
  const overlay = document.getElementById(id);
  overlay.classList.remove('ease-modal--open');
  document.body.style.overflow = ''; // Release scroll
}
```

---

## Features
- **Overlay & Keyboard Accessibility**: Native support for backdrop click-to-close and Keyboard `Escape` key close.
- **Micro-animations**: Transition presets supporting scale zoom-ins, elastic bounces, flips, and top-down slides.
- **Sleek Side Drawer Panel**: Slides cleanly from the right margin, perfect for settings sliders.
- **Fullscreen Slide-up**: Cover the viewport with fluid slide transitions for major onboarding suites.
- **Responsive Layout**: Modals adapt fluidly to fit mobile viewports, scaling down container dimensions and layout paddings automatically.
- **Adaptive Dark Mode**: Adapts borders and background surfaces automatically using standard `prefers-color-scheme`.

---

## Variants

1. **Default Modal**: Standard centered overlay container.
2. **Center Modal** (`.ease-modal--center`): Explicitly centers horizontally and vertically using margins.
3. **Side Drawer Modal** (`.ease-modal--drawer`): Slides out from the right margin as a full-height settings panel.
4. **Fullscreen Modal** (`.ease-modal--fullscreen`): Stretches 100% width and height, sliding up from the bottom boundary.
5. **Success Modal** (`.ease-modal--success`): Green top-accent border signaling completed actions.
6. **Error Modal** (`.ease-modal--error`): Red top-accent border signaling failures or blocked clearances.
7. **Warning Modal** (`.ease-modal--warning`): Amber top-accent border warning before dangerous database purges.
8. **Info Modal** (`.ease-modal--info`): Blue top-accent border for updates and notifications.
9. **Minimal Modal** (`.ease-modal--minimal`): Simple layout with transparent overlay backdrops and no border lines in header or footer.
10. **Animated Modal**: Supports custom entry animation transition overrides:
    - `.ease-animate--bounce` (elastic spring ease entry)
    - `.ease-animate--flip` (3D perspective flip from 45 degrees)
    - `.ease-animate--slide-down` (slides down from top boundary)

---

## Modal Structure Class Names

- **`.ease-modal-overlay`**: Semi-transparent backdrop overlay container. Use `.ease-modal--open` to fade in.
- **`.ease-modal-container`**: Modal dialogue box.
- **`.ease-modal-header`**: Header flex bar.
- **`.ease-modal-title`**: Bold bold dialog title.
- **`.ease-modal-close`**: Icon-button to trigger close handlers.
- **`.ease-modal-body`**: Body wrapper, allows vertical scroll overlays.
- **`.ease-modal-footer`**: Actions bar containing buttons.

---

## Customization

Override variables inside `:root` or wrap within specific styling sections:

```css
:root {
  --em-modal-overlay-bg: rgba(15, 23, 42, 0.8); /* Darken overlay backdrop background */
  --em-modal-overlay-blur: 8px; /* Increase overlay blur intensity */
  
  --ease-radius-lg: 1.5rem; /* Increase modal container corner rounds */
}
```

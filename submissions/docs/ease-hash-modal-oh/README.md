# Hash-Based Modal Deep-Linking Lab

This submission implements the Hash-Based Modal Deep-Linking Lab for GSSoC issue **#44486**.

## Description

An interactive documentation lab demonstrating modal.js hash open/close behavior, URL state updates, and accessibility features.

## Features

- **Hash-Based Modal Control**: Open/close modals via URL hash
- **Live URL State Display**: Real-time hash update panel
- **Backdrop Click**: Close modal by clicking outside
- **Escape Key Support**: Close with keyboard
- **Focus Management**: Trapped focus inside modal
- **Interaction Log**: Action logging panel
- **Multiple Modals**: Three demo modals with chaining

## How It Works

### Opening a Modal
```html
<a href="#modal-1">Open Modal</a>
```

### Closing a Modal
- Click the close button
- Click the backdrop
- Press Escape key
- Click "Close All" link

### URL Hash Behavior
The URL hash (#modal-1) controls modal state, enabling:
- Deep-linking (shareable URLs)
- Browser back/forward support
- Bookmarkable modal states

## Usage

```html
<!-- Trigger -->
<a href="#modal-id">Open Modal</a>

<!-- Modal -->
<div id="modal-id" class="modal">
  <div class="modal-backdrop" onclick="closeModal('modal-id')"></div>
  <div class="modal-content">
    <button class="modal-close" onclick="closeModal('modal-id')">×</button>
    <h2>Modal Title</h2>
    <p>Content here...</p>
  </div>
</div>
```

## Keyboard Controls

| Key | Action |
|-----|--------|
| Escape | Close active modal |
| Tab | Navigate elements |
| Enter | Activate button |

## Accessibility

- `role="dialog"` for modal semantics
- `aria-modal="true"` for screen readers
- Focus trap inside modal
- Keyboard dismiss support

## Acceptance Criteria

- ✅ Hash-based modal open/close demo
- ✅ Live URL hash state display
- ✅ Backdrop click close demonstration
- ✅ Escape key close behavior
- ✅ Focus trap notes
- ✅ Copy-ready HTML snippets
- ✅ Educational notes on deep-linking
- ✅ Responsive design

# Accessible Keyboard Navigation for Tabs — Issue #23655

## What does this do?

This submission proposes enhancements to the Tabs component to make it fully compliant with WAI-ARIA standards by dynamically injecting appropriate roles (`tablist`, `tab`, `tabpanel`) and properties (`aria-selected`, `aria-controls`, `aria-labelledby`, `tabindex`), and adding keyboard navigation using Arrow keys, Home, End, Enter, and Space keys.

## How is it used?

In HTML, construct the tab structure normally using EaseMotion CSS:

```html
<div class="ease-tabs">
  <input type="radio" id="tab-1" name="tabs" class="ease-tab-input" checked />
  <input type="radio" id="tab-2" name="tabs" class="ease-tab-input" />

  <div class="ease-tabs-nav">
    <label for="tab-1" class="ease-tab-label">Tab 1</label>
    <label for="tab-2" class="ease-tab-label">Tab 2</label>
    <div class="ease-tab-underline"></div>
  </div>

  <div class="ease-tabs-content">
    <div class="ease-tab-panel">Content 1</div>
    <div class="ease-tab-panel">Content 2</div>
  </div>
</div>
```

The JavaScript file `core/tabs.js` automatically detects `.ease-tabs` elements, initializes them, and binds the appropriate keyboard handlers. Keyboard users can:

- **Tab** to focus on the active tab header.
- Use **Left/Right Arrows** (or **Up/Down Arrows**) to move focus between tab headers.
- Press **Enter** or **Space** to activate the focused tab.
- Press **Home** to focus the first tab, and **End** to focus the last tab.

## Why is it useful?

It bridges a major accessibility gap in the existing tabs component, ensuring that keyboard-only users and assistive technologies (like screen readers) can navigate and operate the tab switchers seamlessly, complying with modern web accessibility guidelines.

---

## Proposed Changes in Core Code

To promote this submission, the following modifications are proposed for the core files:

### 1. File: `core/tabs.js`

Replace the initialization loop to inject ARIA attributes and key listeners:

```javascript
// ... existing setup logic ...
// Setup ARIA roles & attributes
if (nav) {
  nav.setAttribute("role", "tablist");
}

Array.prototype.forEach.call(labels, function (label, index) {
  var input = inputs[index];
  var isChecked = input ? input.checked : false;

  label.setAttribute("role", "tab");
  label.setAttribute("aria-selected", isChecked ? "true" : "false");
  label.setAttribute("tabindex", isChecked ? "0" : "-1");

  var tabId = label.id || "ease-tab-" + containerIndex + "-" + index;
  label.id = tabId;

  var panel = panels[index];
  if (panel) {
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", tabId);
    var panelId = panel.id || "ease-panel-" + containerIndex + "-" + index;
    panel.id = panelId;
    label.setAttribute("aria-controls", panelId);
  }
});

// Update ARIA on radio input change
Array.prototype.forEach.call(inputs, function (input, index) {
  input.addEventListener("change", function () {
    Array.prototype.forEach.call(labels, function (lbl, idx) {
      var isSelected = idx === index;
      lbl.setAttribute("aria-selected", isSelected ? "true" : "false");
      lbl.setAttribute("tabindex", isSelected ? "0" : "-1");
    });
  });
});

// Keydown handler for Arrow, Home, End, Enter, Space keys
if (nav) {
  nav.addEventListener("keydown", function (e) {
    var target = e.target;
    if (!target.classList.contains("ease-tab-label")) return;

    var labelArray = Array.prototype.slice.call(labels);
    var currentIndex = labelArray.indexOf(target);
    if (currentIndex === -1) return;

    var newIndex = -1;
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        newIndex = (currentIndex + 1) % labelArray.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        newIndex = (currentIndex - 1 + labelArray.length) % labelArray.length;
        break;
      case "Home":
        newIndex = 0;
        break;
      case "End":
        newIndex = labelArray.length - 1;
        break;
      case " ":
      case "Spacebar":
      case "Enter":
        e.preventDefault();
        var correspondingInput = inputs[currentIndex];
        if (correspondingInput && !correspondingInput.checked) {
          correspondingInput.checked = true;
          correspondingInput.dispatchEvent(
            new Event("change", { bubbles: true })
          );
        }
        return;
      default:
        return;
    }

    if (newIndex !== -1) {
      e.preventDefault();
      var nextLabel = labelArray[newIndex];
      nextLabel.focus();
    }
  });
}
```

### 2. File: `components/tabs.css`

Add focus visible styles for the tab label:

```css
.ease-tab-label:focus-visible {
  outline: 2px solid var(--ease-color-primary) !important;
  outline-offset: -2px !important;
  border-radius: 4px;
}
```

Fixes #23655

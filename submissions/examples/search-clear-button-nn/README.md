# Search Clear Button NN

## 1. What does this do?

This component introduces a clean, interactive search input featuring an animated clear button. The clear button remains hidden when the input is empty and reveals itself with a rotation and scale transition when text is typed. Clicking the clear button clears the input, focus returns to the text field, and the items grid is instantly restored with smooth fade-in animations.

## 2. How is it used?

Include the stylesheet and apply the namespaced `*-nn` structure inside your layout:

```html
<!-- Search Input Wrapper -->
<div class="search-input-wrapper-nn">
  <!-- Search Icon -->
  <svg
    class="search-icon-nn"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>

  <!-- Text Input -->
  <input
    type="text"
    class="search-input-nn"
    id="search-input-nn"
    placeholder="Search..."
    autocomplete="off"
  />

  <!-- Animated Clear Button -->
  <button
    class="search-clear-btn-nn"
    id="search-clear-btn-nn"
    aria-label="Clear search input"
  >
    &times;
  </button>
</div>
```

Control visibility in your JavaScript by toggling the `.visible-nn` class:

```javascript
const searchInput = document.getElementById("search-input-nn");
const clearBtn = document.getElementById("search-clear-btn-nn");

// Show/hide clear button on input
searchInput.addEventListener("input", () => {
  if (searchInput.value.trim().length > 0) {
    clearBtn.classList.add("visible-nn");
  } else {
    clearBtn.classList.remove("visible-nn");
  }
});

// Clear input on click
clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearBtn.classList.remove("visible-nn");
  searchInput.focus(); // Restore focus
});
```

## 3. Why is it useful and how does it fit EaseMotion CSS philosophy?

Micro-interactions are essential to premium design layouts. This feature:

- **Ensures Smooth Transitions**: Instead of using sudden visibility toggles (`display: none`), the button transitions elegantly via `opacity` and `transform: scale() rotate()` using a bouncy cubic-bezier timing function (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **Supports Accessibility**: The clear button includes an `aria-label` and toggles `pointer-events: none` when hidden to avoid keyboard tab-focus issues.
- **Responsive & Lightweight**: Pure HTML, CSS, and lightweight JS code with zero external libraries or frame constraints.

# Animated Pagination (`ease-pagination-animated`)

A responsive pagination controller featuring a sliding active-state highlight and interactive boundary logic. Built for the EaseMotion-css framework.

## 🚀 Features

- **Sliding Highlight Indicator**: Uses an absolutely positioned highlight element (`.ease-page-highlight`) that slides under the active number utilizing a `cubic-bezier` timing function.
- **Dynamic Math via JavaScript**: By reading the native `offsetLeft` property of the clicked button, the JavaScript reliably calculates the exact `translateX` distance needed, ensuring the highlight tracks perfectly regardless of font-size, padding, or screen width!
- **Boundary Disabling**: Automatically appends the `.disabled` class to the Previous or Next arrows when reaching the edges of the pagination stack.

## 🛠️ Usage

Ensure your page buttons are grouped inside the `.ease-page-numbers` container alongside the `.ease-page-highlight` element. 

```html
<nav class="ease-pagination">
  <!-- Prev Button -->
  <button class="ease-page-btn disabled" id="prev-btn"> ◀ </button>
  
  <!-- Number Wrapper -->
  <div class="ease-page-numbers">
    <div class="ease-page-highlight" id="page-highlight"></div>
    
    <button class="ease-page-num active">1</button>
    <button class="ease-page-num">2</button>
    <button class="ease-page-num">3</button>
  </div>
  
  <!-- Next Button -->
  <button class="ease-page-btn" id="next-btn"> ▶ </button>
</nav>

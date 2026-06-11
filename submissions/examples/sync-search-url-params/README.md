# 🔗 Sync Search State with URL Query Parameters

A premium web application feature that synchronizes search input state with browser URL query parameters in real time. This allows users to bookmark search queries, reload pages without losing search context, and generate shareable links easily.

## 📋 Features

- ⚙️ **Real-Time Synchronization** - Updates the URL search parameter `?q=` instantly as the user types.
- ⚡ **Performance Debounce** - Uses a lightweight `150ms` input debounce before writing to history to avoid browser history floods and layout lag.
- 📥 **Query Parameter Hydration** - Automatically reads parameters from the URL when the page loads to hydrate the input field and execute filtering.
- 📋 **Share Link Generation** - A built-in "Copy Link" utility constructs full URLs with active search params, providing quick sharing options.
- 🖥️ **Mock Browser Shell** - Demonstrates URL parameter mutations visually inside an interactive address bar layout.

## 🚀 Quick Start

### 1. HTML Search Box Structure

Ensure you have a query search input:

```html
<input type="text" id="searchInput" placeholder="Search..." />
<div id="itemsGrid"></div>
```

### 2. URL Sync JavaScript Pattern

Implement this logic in your client code:

```javascript
const searchInput = document.getElementById("searchInput");

// 1. Load parameters on start
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q") || "";
  if (query) {
    searchInput.value = query;
    renderItems(query); // Your filtering function
  }
});

// 2. Sync parameters on search input changes
let debounceTimer;
searchInput.addEventListener("input", (e) => {
  const val = e.target.value;
  renderItems(val); // Update list immediately

  // Debounce history write to prevent flooding history
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const url = new URL(window.location);
    if (val) {
      url.searchParams.set("q", val);
    } else {
      url.searchParams.delete("q");
    }
    window.history.replaceState({}, "", url);
  }, 150);
});
```

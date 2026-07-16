# Client-Side Search / Filter for Docs Class List

## What does this do?
A real-time search bar placed above the EaseMotion CSS class list that instantly filters visible entries as the user types — no page reload, no backend call, pure client-side JavaScript.

## How is it used?

**HTML — place above the class list:**
```html
<div class="docs-search-wrapper">
  <input
    type="search"
    id="docs-search"
    placeholder="Search classes…"
    aria-label="Search EaseMotion CSS classes"
    autocomplete="off"
  />
  <span class="docs-search-count" id="search-count"></span>
</div>

<p class="docs-empty-state" id="docs-empty" style="display:none;">
  No classes found for "<span id="empty-query"></span>". Try a different keyword.
</p>

<ul class="class-list" id="class-list">
  <li class="class-item">
    <code>.ease-fade-in</code>
    <p>Fades an element in smoothly on load.</p>
  </li>
  <!-- ...more items -->
</ul>
```

**JavaScript — runs on `input` event:**
```js
const input  = document.getElementById('docs-search');
const items  = document.querySelectorAll('.class-item');
const empty  = document.getElementById('docs-empty');
const count  = document.getElementById('search-count');
const emptyQ = document.getElementById('empty-query');

input.addEventListener('input', () => {
  const q = input.value.toLowerCase().trim();
  let visible = 0;
  items.forEach(item => {
    const match = item.textContent.toLowerCase().includes(q);
    item.style.display = match ? '' : 'none';
    if (match) visible++;
  });
  count.textContent = q ? `Showing ${visible} of ${items.length} classes` : '';
  empty.style.display = visible === 0 && q ? 'block' : 'none';
  if (empty.style.display === 'block') emptyQ.textContent = input.value;
});

input.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    input.value = '';
    input.dispatchEvent(new Event('input'));
  }
});
```

## Why is it useful?

As EaseMotion CSS grows, the docs class list becomes harder to navigate. A developer looking for a specific animation utility currently has to scroll manually or rely on `Ctrl+F`. This feature aligns with EaseMotion's philosophy of being **developer-experience first** — fast to find, fast to use.

- **Instant:** Filters on every keystroke with zero network requests
- **Accessible:** Uses `aria-label` and keyboard (`Esc` to clear) support
- **Composable:** Works over any existing DOM list — no restructuring needed
- **Zero dependencies:** Pure vanilla JS, no frameworks, no build step
- **Scalable:** No matter how many classes are added, discoverability stays instant

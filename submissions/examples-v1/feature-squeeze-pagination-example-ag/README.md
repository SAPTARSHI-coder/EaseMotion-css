# Squeeze Pagination Example

Resolves #54681

An interactive pagination navigation bar demonstrating a smooth CSS transform squeeze/squish hover and active motion effect.

## What does this do?
Provides a set of pagination button elements that organically morph (compress and stretch) in response to hover and click triggers.

## How is it used?
```html
<nav class="squeeze-pagination-container-ag" aria-label="Pagination">
  <button class="squeeze-btn-ag">1</button>
  <button class="squeeze-btn-ag active-page-ag" aria-current="page">2</button>
  <button class="squeeze-btn-ag">3</button>
</nav>
```

## Why is it useful?
It provides rich interactive visual feedback to the user on active selection items, using hardware-accelerated CSS scaling matrices without adding Javascript overhead.

# Pastel Breadcrumb Navigation

Quick guide for accessible breadcrumb navigation.

## Basic Usage

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <a href="/">Home</a>
  <span aria-hidden="true">›</span>
  <a href="/products">Products</a>
  <span aria-hidden="true">›</span>
  <span aria-current="page">Details</span>
</nav>
# SaaS Modern Announce Top Bar Documentation

Comprehensive configuration guide for theming, custom CSS properties, and accessibility compliance for the SaaS Modern Announce Top Bar component.

## Index Reference
This documentation is linked in the main index under [`docs/README.md`](../README.md).

---

## Markup Examples

### Base Announcement Bar
```html
<aside class="announce-bar" aria-label="Announcement">
  <div class="announce-bar__container">
    <span class="announce-bar__badge">New Feature</span>
    <p class="announce-bar__message">
      We just launched our new API key dashboard. 
      <a href="#learn-more" class="announce-bar__link">Explore updates <span aria-hidden="true">&rarr;</span></a>
    </p>
    <button type="button" class="announce-bar__close" aria-label="Dismiss announcement">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</aside>

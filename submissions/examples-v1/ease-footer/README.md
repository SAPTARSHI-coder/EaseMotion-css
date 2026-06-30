\# ease-footer

Responsive footer component with multi-column layout, links, and social media slots.

\## Classes

| Class | Description |

|-------|-------------|

| `ease-footer` | Base footer component |

| `ease-footer-dark` | Dark variant footer |

| `ease-footer-light` | Light variant footer |

| `ease-footer-centered` | Centered content footer |

| `ease-footer-grid` | Multi-column grid layout |

| `ease-footer-column` | Individual column |

| `ease-footer-links` | Navigation links list |

| `ease-footer-social` | Social media icons container |

| `ease-footer-social-link` | Individual social link |

\## Usage

```html
<!-- Basic Footer -->

<footer class="ease-footer">
  &#x20;
  <div class="ease-footer-container">
    &#x20;
    <div class="ease-footer-brand">
      &#x20;
      <h3>Brand</h3>

      &#x20;
    </div>

    &#x20;
    <div class="ease-footer-copyright">
      &#x20;
      <p>\&copy; 2026 Company</p>

      &#x20;
    </div>

    &#x20;
  </div>
</footer>

<!-- Multi-Column Footer -->

<footer class="ease-footer ease-footer-dark">
  &#x20;
  <div class="ease-footer-container ease-footer-grid">
    &#x20;
    <div class="ease-footer-column">
      &#x20;
      <h4>Column Title</h4>

      &#x20;
      <ul class="ease-footer-links">
        &#x20;
        <li><a href="#">Link 1</a></li>

        &#x20;
      </ul>

      &#x20;
    </div>

    &#x20;
  </div>

  &#x20;
  <div class="ease-footer-social">
    &#x20; <a href="#" class="ease-footer-social-link">📘</a>

    &#x20;
  </div>
</footer>
```

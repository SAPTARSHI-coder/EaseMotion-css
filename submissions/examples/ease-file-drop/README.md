\# ease-file-drop

Styled drag-and-drop file upload zone with animations.

\## Classes

| Class | Description |

|-------|-------------|

| `ease-file-drop` | Base drop zone container |

| `ease-file-drop-content` | Content wrapper |

| `ease-file-drop-icon` | Icon element |

| `ease-file-input` | Hidden file input |

| `ease-file-drop-success` | Success checkmark |

| `ease-file-primary` | Primary color variant |

| `ease-file-success` | Success color variant |

| `ease-file-dark` | Dark color variant |

\## Features

\- 📁 Dashed border with pulse animation

\- 🔄 Drag-over state: scale up + color change

\- ✅ Drop success: checkmark appears with bounce

\- 🖱️ Click to browse files

\- 🎨 Multiple color variants

\## Usage

```html
<div class="ease-file-drop">
  &#x20;
  <div class="ease-file-drop-content">
    &#x20; <span class="ease-file-drop-icon">📁</span>

    &#x20;
    <p>Drag \& drop files here</p>

    &#x20;
  </div>

  &#x20; <input type="file" class="ease-file-input" multiple />

  &#x20;
  <div class="ease-file-drop-success">✓</div>
</div>
```

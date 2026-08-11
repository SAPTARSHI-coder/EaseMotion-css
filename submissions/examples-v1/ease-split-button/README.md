\# ease-split-button



Button split into primary action + dropdown arrow for secondary actions.



\## Classes



| Class | Description |

|-------|-------------|

| `ease-split-btn` | Base split button container |

| `ease-split-btn-primary` | Primary button variant |

| `ease-split-btn-success` | Success button variant |

| `ease-split-btn-danger` | Danger button variant |

| `ease-split-btn-outline` | Outline button variant |

| `ease-split-btn-sm` | Small size |

| `ease-split-btn-lg` | Large size |

| `ease-split-btn-disabled` | Disabled state |



\## Features



\- 🔽 Primary action + dropdown menu

\- 🎨 Multiple color variants (primary, success, danger, outline)

\- 📏 Size variants (small, normal, large)

\- 💫 Animated dropdown (scaleY)

\- ⌨️ CSS-only using :focus-within



\## Usage



```html

<div class="ease-split-btn">

&#x20;   <button class="ease-split-btn-primary">Save</button>

&#x20;   <div class="ease-split-btn-dropdown">

&#x20;       <button class="ease-split-btn-arrow">▼</button>

&#x20;       <div class="ease-split-btn-menu">

&#x20;           <a href="#">Save as Draft</a>

&#x20;           <a href="#">Save as Copy</a>

&#x20;           <a href="#">Export</a>

&#x20;       </div>

&#x20;   </div>

</div>


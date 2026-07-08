\# ease-chip



Chip/tag component for filters, categories, and labels.



\## Classes



| Class | Description |

|-------|-------------|

| `ease-chip` | Base chip component |

| `ease-chip-removable` | Removable chip with × button |

| `ease-chip-remove` | Remove button for removable chip |

| `ease-chip-primary` | Primary color variant |

| `ease-chip-success` | Success color variant |

| `ease-chip-danger` | Danger color variant |

| `ease-chip-warning` | Warning color variant |

| `ease-chip-info` | Info color variant |

| `ease-chip-small` | Small size |

| `ease-chip-large` | Large size |



\## Features



\- 🏷️ Multiple color variants

\- ❌ Removable chips with × button

\- 📏 Size variants (small, default, large)

\- 🎯 Hover effect

\- 📱 Responsive design



\## Usage



```html

<!-- Basic chip -->

<div class="ease-chip">Tag name</div>



<!-- Removable chip -->

<div class="ease-chip ease-chip-removable">

&#x20;   Removable

&#x20;   <button class="ease-chip-remove" onclick="this.parentElement.remove()">×</button>

</div>



<!-- Color variants -->

<div class="ease-chip ease-chip-primary">Primary</div>

<div class="ease-chip ease-chip-success">Success</div>


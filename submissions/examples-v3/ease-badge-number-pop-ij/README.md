# ease-badge-number-pop

An animated badge component that displays a number counter with a pop animation when the value changes. The badge scales up and overshoots briefly, creating a playful "pop" effect that draws attention to the updated count.

## HTML Structure

```html
<span class="ease-badge" id="myBadge">0</span>
```

Trigger the animation by adding the `ease-badge-pop` class whenever the value changes:

```js
el.textContent = newValue;
el.classList.remove('ease-badge-pop');
void el.offsetWidth; // force reflow
el.classList.add('ease-badge-pop');
```

## CSS Variables

| Variable           | Default    | Description                          |
|--------------------|------------|--------------------------------------|
| `--badge-bg`       | `#4f46e5`  | Background color of the badge        |
| `--badge-color`    | `#fff`     | Text color of the badge              |
| `--badge-size`     | `28px`     | Minimum width / height of the badge  |
| `--badge-duration` | `0.35s`    | Duration of the pop animation        |

## Example

```html
<span class="ease-badge" style="--badge-bg: #059669; --badge-size: 36px;">5</span>
```

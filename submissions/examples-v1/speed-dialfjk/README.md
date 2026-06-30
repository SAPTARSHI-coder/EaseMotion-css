# Speed Dial Component

A floating action button (FAB) menu that expands into multiple quick actions with smooth animations.

## Files

```text
demo.html
style.css
README.md
```

## Features

- Floating Action Button (FAB)
- Expandable Speed Dial Menu
- Staggered Action Animations
- Smooth Open / Close Effects
- Click Outside to Close
- Mobile Friendly
- No Dependencies

## Structure

```html
<div class="speed-dial">

    <div class="speed-actions">
        <button class="speed-action">
            Action
        </button>
    </div>

    <button class="fab">
        +
    </button>

</div>
```

## Open State

```css
.speed-dial.active .speed-action{
    opacity:1;
    transform:
        translateY(0)
        scale(1);
}
```

## FAB Rotation

```css
.speed-dial.active .fab{
    transform:rotate(45deg);
}
```

The "+" icon rotates into an "×" style close icon.

## Customization

### Change FAB Color

```css
.fab{
    background:#3b82f6;
}
```

### Change Position

```css
.speed-dial{
    right:30px;
    bottom:30px;
}
```

### Change Animation Speed

```css
transition:.25s ease;
```

### Add More Actions

```html
<button class="speed-action">
    New Action
</button>
```

## Use Cases

- Mobile Navigation
- Dashboard Actions
- Quick Contact Menus
- Chat Launchers
- Productivity Apps
- Admin Panels

## Browser Support

- Chrome
- Firefox
- Safari
- Edge

## Run

Open:

```text
demo.html
```

and click the floating action button.
# CSS Slide-Up Popover for Responsive Dashboard Layouts

A pure CSS, fully responsive, and keyboard-accessible Popover component tailored for Dashboard layouts (e.g., Notifications dropdown, User settings). It features a smooth slide-up animation and dashboard-centric styling, all achieved without a single line of JavaScript.

## 🌟 Key Features

- **Slide-Up Animation**: Transitions smoothly from a lower vertical offset (`translateY`) upwards, while seamlessly scaling and fading in. It utilizes a `cubic-bezier` timing function for a spring-like feel.
- **Responsive Dashboard Aesthetics**: Styled within a typical admin dashboard layout. On smaller screens, the sidebar hides, and the popover intelligently snaps to a full-width fixed position below the header.
- **Pure CSS State Management**: Managed purely through CSS using `:focus-within` and `:hover`. No JavaScript event listeners or state variables are required.
- **Keyboard Accessible**: Tabbing to the notification bell opens the popover. The popover remains safely open as long as the user tabs through the inner notification links or action buttons.
- **Custom Properties (API)**: Easily modify the interaction style via standard CSS custom properties on the `:root` element.

---

## 🛠️ Custom Properties (API)

The component is highly customizable. By overriding the following CSS variables at the `:root` level, you can completely change the feel of the animation without touching the core logic.

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--popover-timing` | `0.35s` | Duration of the slide-up animation. Increase for a slower, more dramatic effect. |
| `--popover-easing` | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Easing function. The default provides a slightly bouncy "spring" feel. |
| `--popover-slide-offset` | `15px` | The initial vertical `Y` offset from which the popover will slide up. |
| `--popover-scale-start` | `0.95` | The starting scale factor of the popover before it transitions to `1`. |
| `--popover-gap` | `12px` | Vertical space between the trigger button and the top of the popover panel. |

### Example: Customizing the Animation
If you want a slower, linear fade-in without the bounce, simply add this to your CSS:
```css
:root {
    --popover-timing: 0.5s;
    --popover-easing: ease-out;
    --popover-slide-offset: 5px; /* Shorter slide distance */
}
```

---

## 🚀 How It Works (The CSS Magic)

Building an interactive, accessible popover without JavaScript requires leveraging CSS pseudo-classes effectively. 

### State Management
The core logic revolves around this CSS selector block:
```css
.popover-container:hover .popover-content,
.popover-container:focus-within .popover-content {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
}
```
1. **`:hover`**: When a mouse user hovers over the container (which includes both the trigger button and the popover itself), the popover becomes visible.
2. **`:focus-within`**: This is the crucial part for accessibility. It triggers when the container *or any of its descendants* receives focus. When a user tabs to the trigger button, it opens. When they press tab again to navigate into the popover's links, the container *still* has focus within it, keeping the popover open.

### The Animation
Instead of animating `display` (which is historically tricky in CSS without newer `@starting-style` features), we animate `visibility`, `opacity`, and `transform`.
* `visibility: hidden` ensures the popover cannot be clicked or tabbed into when closed.
* Upon triggering, `visibility` becomes `visible` instantly, while `opacity` and `transform` smoothly transition over `--popover-timing`.

---

## 📱 Responsive Behavior

Dashboard navigation often needs to adapt drastically on smaller screens. This component includes a media query breakpoint at `768px`:

- **Desktop ( > 768px )**: The popover acts as a standard relative dropdown, anchored securely to the right side of the notification bell.
- **Mobile ( <= 768px )**: 
  - The dashboard sidebar and search bar are hidden to save space.
  - The `.popover-content` shifts from absolute positioning to `position: fixed`.
  - It snaps directly below the mobile header, expanding to fill the width of the screen (`left: 1rem; right: 1rem;`).
  - *Note: Despite being `fixed`, the `:focus-within` DOM relationship remains intact, meaning the pure CSS interaction still functions perfectly.*

---

## ♿ Accessibility Notes

- **Keyboard Navigation**: Fully supports `Tab` and `Shift+Tab`.
- **Semantic HTML**: Uses appropriate `<button>` tags for actions and `<a>` tags for links.
- **ARIA Attributes**: 
  - The trigger button uses `aria-haspopup="dialog"` to announce to screen readers that it controls a popover menu.
  - The popover panel uses `role="dialog"` and an `aria-label` to provide context once entered.
- **Focus Rings**: Custom `:focus-visible` states are implemented using `outline` and `box-shadow` to ensure keyboard users can clearly see which element is currently focused, enhancing the overall dashboard experience.

---

## 💻 Usage Instructions

To implement this in your own project:

1. Copy the HTML structure from `demo.html`, ensuring you maintain the `.popover-container` wrapping logic.
2. Ensure the trigger element (e.g., `<button class="popover-trigger">`) is focusable.
3. Place `.popover-content` inside the container as a sibling to the trigger.
4. Copy the relevant styles from `style.css` (specifically the Variables and Popover Component Implementation sections).

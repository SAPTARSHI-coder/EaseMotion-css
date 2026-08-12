# Kanban Column Focus Transition

A sleek, responsive Kanban board that elegantly highlights the active column while softly fading and blurring the surrounding columns to maintain user focus.

### 1. What does this do?
It demonstrates a smooth focus and de-emphasis motion for Kanban columns using only CSS hover states and transitions, guiding the user's attention to the active workflow without losing the overall board context.

### 2. How is it used?
Apply the hover logic to the parent container (`.kanban-board`) and the individual items (`.kanban-column`). 

```html
<main class="kanban-board">
    <section class="kanban-column">
        <!-- Column content -->
    </section>
    <section class="kanban-column">
        <!-- Column content -->
    </section>
</main>
```

```css
/* Fade all columns when the board is hovered */
.kanban-board:hover .kanban-column {
    opacity: 0.4;
    filter: blur(2px) grayscale(50%);
    transform: scale(0.98);
}

/* Bring the hovered column back to full focus and elevate it */
.kanban-board .kanban-column:hover {
    opacity: 1;
    filter: blur(0) grayscale(0);
    transform: scale(1.02) translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5);
    z-index: 10;
}
```

### 3. Why is it useful?
In complex dashboard interfaces or task management apps, having many columns can be visually overwhelming. This micro-interaction reduces cognitive load by emphasizing the current interaction area while keeping the peripheral context visible but unobtrusive.

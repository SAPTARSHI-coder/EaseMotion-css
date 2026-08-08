# Card Stack Swipe Component

A reusable **Card Stack Swipe** component built using HTML, CSS, and JavaScript. It presents content as a stacked deck of cards where users can dismiss the top card by swiping left or right using action buttons. The next card smoothly animates into the foreground, creating a Tinder-style interaction.

---

## Features

* 🃏 Stacked card layout using CSS transforms
* ⬅️ Swipe left and ➡️ swipe right interactions
* 🔄 Automatic promotion of the next card
* 🎞 Smooth rotate and translate animations
* ✨ Staggered entrance animation
* 📱 Fully responsive design
* 🎨 Easy customization using CSS variables
* ♿ Accessibility support with `prefers-reduced-motion`

---

## Folder Structure

```text
u-card-stack-swipe-20562/
├── demo.html
├── style.css
└── README.md
```

---

## CSS Variables

```css
:root{
    --ease-primary:#2563eb;
    --ease-danger:#ef4444;
    --ease-success:#22c55e;
    --ease-bg:#f8fafc;
    --ease-card:#ffffff;
    --ease-radius:18px;
}
```

These variables can be customized to change:

* Primary color
* Success and danger button colors
* Background color
* Card appearance
* Border radius
* Shadows
* Animation timing

---

## Component Highlights

* Tinder-style swipe interaction
* Layered card stack illusion
* Animated card dismissal
* Automatic next-card promotion
* Staggered entrance effect
* Avatar placeholders
* Responsive controls
* Smooth hover animations

---

## JavaScript Functionality

The demo includes lightweight JavaScript to:

* Handle left and right swipe actions
* Remove the active card from the stack
* Recalculate card positions
* Promote the next card to the front
* Display a completion message when all cards have been dismissed

---

## Accessibility

The component respects users who prefer reduced motion.

```css
@media (prefers-reduced-motion: reduce){
    *,
    *::before,
    *::after{
        animation:none !important;
        transition:none !important;
    }
}
```

---

## Browser Support

* Chrome
* Edge
* Firefox
* Safari
* Opera

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* CSS Variables
* Flexbox
* CSS Transforms
* CSS Animations

---

## Use Cases

* Dating applications
* Product recommendations
* Candidate review systems
* Content discovery
* Interactive galleries
* Survey choices
* Learning flashcards
* Decision-making interfaces

---

## Customization

You can easily customize:

* Card dimensions
* Stack depth
* Swipe distance
* Rotation angle
* Button styles
* Avatar content
* Animation speed
* Color themes

---

## Future Enhancements

* Drag-and-swipe gesture support
* Touch and mobile swipe interactions
* Keyboard navigation
* Undo last swipe
* Dynamic card loading
* Infinite card stack
* Theme presets

---

## License

This example is created for the **EaseMotion CSS** project and demonstrates a reusable swipeable card stack component using HTML, CSS, and JavaScript.

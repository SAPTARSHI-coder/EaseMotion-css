# Typing Text Animation (`ease-text-typing-dj`)

A pure CSS utility class that produces a realistic typewriter-style text animation. The effect reveals text character-by-character while displaying a continuous blinking cursor.

## Features
- **Pure CSS**: No JavaScript required.
- **Realistic Typing**: Uses CSS `steps()` for a character-by-character reveal.
- **Blinking Cursor**: Features an infinite blinking cursor that remains visible after typing is complete.
- **Accessible**: Respects `prefers-reduced-motion` by disabling the animation and displaying the full text immediately for users who prefer reduced motion.

## Usage

Include `style.css` in your project and apply the `.ease-text-typing-dj` class to your text element. 

### Pro Tip: Perfect Cursor Alignment
Because the animation uses `width: 0` to `width: 100%`, the cursor might travel past your text if the parent container is wider than the text itself. To ensure the cursor stops exactly at the last character, wrap your text in a relative container and use a hidden duplicate text to set the exact width:

```html
<div style="position: relative; display: inline-block;">
    <!-- Hidden text sets the perfect width for the wrapper -->
    <h1 style="visibility: hidden; white-space: nowrap; margin: 0;">Welcome to EaseMotion CSS!</h1>
    
    <!-- Animated text animates from 0 to 100% of the wrapper -->
    <h1 class="ease-text-typing-dj" style="position: absolute; top: 0; left: 0; margin: 0;">
        Welcome to EaseMotion CSS!
    </h1>
</div>
```

### Customization

You can easily customize the speed, number of steps, and cursor color by overriding the CSS properties on your element:

```css
.my-custom-typing {
    /* Change cursor color by changing the text color */
    color: #38bdf8; 
    
    /* Change speed (3s) and steps (adjust steps to match your character count for realism) */
    animation: 
        ease-text-typing-dj-typing 3s steps(26, end) forwards,
        ease-text-typing-dj-blink-caret 0.75s step-end infinite;
}
```

## Demo

Open `demo.html` in your browser to see the typing effect and blinking cursor in action!

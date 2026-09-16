# Cyberpunk Vertical Timeline (Accessibility Setup Guide)

This guide details the strict accessibility standards required when implementing the Cyberpunk Vertical Timeline. Highly stylized "Neon/Cyberpunk" aesthetics often sacrifice accessibility for visual flair, specifically failing contrast ratio checks and ignoring users with motion sensitivities.

## 1. Semantic HTML Structure

A timeline is essentially an ordered list of events. We must use semantic HTML so screen readers can properly parse and announce the sequence.

- **Use `<ol>`**: Wrap the entire timeline in an ordered list so assistive tech announces the total number of items and their order.
- **Use `<time>`**: Wrap dates/times in a `<time>` element with a valid `datetime` attribute.
- **Use Headings**: Wrap the title of each event in an `<h3>` (or appropriate heading level) to create a document outline that users can jump through.

### Example Markup

```html
<!-- Use aria-label to give context to the list -->
<ol class="cyber-timeline" aria-label="System event timeline">
    
    <li class="timeline-item">
        <!-- Machine-readable datetime -->
        <time datetime="2077-10-12T04:00" class="timeline-date">2077.10.12 // 04:00</time>
        
        <div class="timeline-content">
            <h3 class="timeline-title">SYSTEM_INIT</h3>
            <p class="timeline-desc">Core systems online.</p>
            <a href="#" class="cyber-link">VIEW_LOGS</a>
        </div>
    </li>
    
</ol>
```

## 2. Keyboard Focus Visibility

Cyberpunk aesthetics rely heavily on CSS `box-shadow` to create glowing effects. However, a subtle glow is often insufficient as a focus indicator for keyboard users. 

You must define a distinct, solid outline using `:focus-visible` to ensure WCAG compliance.

```css
.cyber-link:focus-visible {
    /* Solid, high-contrast outline */
    outline: 2px solid var(--neon-yellow);
    /* Offset it so it doesn't get lost in the component's internal glow */
    outline-offset: 4px;
    /* Optional: shift the background slightly for extra visibility */
    background-color: rgba(252, 238, 10, 0.1);
}
```

## 3. Reduced Motion (`prefers-reduced-motion`)

Neon aesthetics often feature pulsing glows, typing animations, or rapid hover transitions. These can trigger motion sickness or vestibular disorders in some users. 

You must respect the user's OS-level motion preferences by disabling or speeding up transitions using the `@media (prefers-reduced-motion: reduce)` query.

```css
/* Define transition speed as a variable */
:root {
    --animation-speed: 0.3s;
}

.cyber-link {
    transition: all var(--animation-speed) ease;
}

/* 
 * If the user prefers reduced motion, set the transition speed to 0s
 * to make changes instantaneous instead of animated.
 */
@media (prefers-reduced-motion: reduce) {
    :root {
        --animation-speed: 0s;
    }
}
```

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*

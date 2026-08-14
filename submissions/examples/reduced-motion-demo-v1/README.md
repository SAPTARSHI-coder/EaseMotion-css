\# prefers-reduced-motion Support



Adds accessibility support for users who prefer reduced motion.



\## Implementation



Add this CSS to respect user motion preferences:



```css

@media (prefers-reduced-motion: reduce) {

&#x20;   \*,

&#x20;   \*::before,

&#x20;   \*::after {

&#x20;       animation-duration: 0.01ms !important;

&#x20;       animation-iteration-count: 1 !important;

&#x20;       transition-duration: 0.01ms !important;

&#x20;   }

}


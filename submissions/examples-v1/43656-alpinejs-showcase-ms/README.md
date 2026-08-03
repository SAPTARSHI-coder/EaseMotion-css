# Alpine.js + EaseMotion Integration Showcase

Resolves #43656.

### What does this do?
Provides a reference implementation showcasing how to use EaseMotion classes within an Alpine.js component. It demonstrates the use of the `x-transition` attribute to map entry and exit animations.

### How is it used?
Using Alpine's built-in transition classes, you can map `x-transition:enter` to `ease-fade-in-up` (or any other entering animation) and `x-transition:leave` to `ease-fade-out-down`. Alpine automatically manages adding and removing these classes at the correct times during the element's lifecycle.

### Why is it useful?
Alpine.js is heavily used by the Laravel and Tailwind ecosystems. A dedicated integration guide snippet proves to these developers that EaseMotion CSS plays perfectly with their existing declarative toolkit.

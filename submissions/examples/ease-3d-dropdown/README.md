# 3D Origami Dropdown Menu

A premium 3D spatial animation where sub-menu items sequentially "unfold" like origami toward the user, rather than simply fading or sliding in.

### Usage
```html
<nav>
    <ul>
        <li class="ease-dropdown-wrapper">
            <a href="#">Services</a>
            <ul class="ease-3d-dropdown">
                <li class="dropdown-item"><a href="#">Web Development</a></li>
                <li class="dropdown-item"><a href="#">UI/UX Design</a></li>
                <!-- Add more items here -->
            </ul>
        </li>
    </ul>
</nav>
```

### Why is it useful?
Most standard dropdowns feel stiff and lack polish. Achieving a sequenced, springy 3D entrance usually prompts developers to reach for heavy JS animation libraries like GSAP to orchestrate the timeline.

This component implements a stunning timeline sequence natively in CSS. By applying `perspective` to the parent wrapper and defaulting the child items to `transform: rotateX(-90deg)` with a `transform-origin: top`, the items are essentially folded completely backward out of view. 

On hover, they transition to `rotateX(0deg)`. The real magic is the cascaded `transition-delay` on the `:nth-child()` selectors, which staggers the folding animation. Furthermore, the delays are reversed when the hover is removed, creating a satisfying "snap back" effect where the menu folds itself up from the bottom to the top.

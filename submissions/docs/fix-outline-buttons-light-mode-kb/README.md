# What does this do?
This submission fixes the visibility issue of outline and loading buttons in Light Mode by removing the hardcoded semi-transparent white inline styles (`rgba(255,255,255,0.3)` and `#fff`) and allowing the border and spinner to adapt to the active theme.

# How is it used?
Remove the hardcoded inline styling from the outline buttons and let the framework's `.ease-btn-outline` and `.ease-btn-loading` handle the theme-appropriate border/spinner colors automatically:
```html
<button class="ease-btn ease-btn-outline ease-btn-loading">Loading</button>
```

# Why is it useful?
It ensures that outline and loading buttons remain fully visible and readable across both Light and Dark themes, adhering to EaseMotion CSS's accessibility and plug-and-play philosophy.

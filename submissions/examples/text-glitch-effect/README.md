# Text Glitch Effect

**What does this do?**
Creates a highly dynamic, cyberpunk-style stutter and chromatic aberration (red/cyan) glitch effect on text using pure CSS keyframes and clip-paths.

**How is it used?**
Apply the class to a text element and pass the exact same text into a `data-text` attribute (which CSS uses to duplicate the text for the glitch slices):

```html
<h1 class="glitch-text" data-text="ERROR">ERROR</h1>
```

**Why is it useful?**
It provides an intense, eye-catching visual aesthetic perfect for "404 Error" pages, gaming themes, or emphasis. It achieves a very complex visual completely native to the browser without any canvas or JS dependencies.

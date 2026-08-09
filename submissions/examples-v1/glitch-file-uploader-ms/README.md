# Glitch File Uploader

Resolves #42392.

### What does this do?
Adds a Glitch File Uploader component to EaseMotion CSS tailored for edgy, modern Social Media interfaces (like TikTok or gaming platforms). It utilizes duplicated SVGs absolutely positioned on top of each other. When hovered, the underlying layers shift colors to cyan and magenta and animate using CSS `clip-path` and `transform` to create a frantic RGB glitch effect.

### How is it used?
Copy the HTML from `demo.html` into your project and use `style.css` for the design layout. The invisible `<input type="file">` handles native file clicks over the entire area, so the "Browse" button is just visual. 

### Why is it useful?
Social media platforms targeting younger demographics often use brutalist or cyberpunk motifs. This glitch effect provides a highly engaging micro-interaction without needing heavy canvas elements or JavaScript.

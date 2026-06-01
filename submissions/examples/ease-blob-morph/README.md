# Ease Blob 💧

An organic, seamlessly morphing shape animation built purely with CSS.

## 🚀 What it does
The `ease-blob` is a smooth, continuously morphing shape that mimics organic, fluid movement. It achieves this effect without any JavaScript, SVGs, or complex canvas rendering. 

Instead, it leverages the "secret" **8-value `border-radius`** property combined with CSS `@keyframes`. By transitioning between multiple distinct 8-value coordinate sets, it creates a non-uniform, organic loop that seamlessly returns to its starting position without any jagged jumps.

## 🛠️ How to use it
You can easily drop this component into your project to use as a background element, a profile picture frame, or an interactive card.

### 1. Add the HTML structure
Create a file named `demo.html` and add the following:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ease Blob Animation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="content-wrapper">
        <header class="header">
            <h2>CSS Morphing Shape</h2>
            <p>Using the secret 8-value border-radius</p>
        </header>

        <div class="blob-container">
            <!-- The ease-blob element now acts as a card/container -->
            <div class="ease-blob">
                <h1>Ease Blob</h1>
                <p>Pure CSS Animation</p>
            </div>
        </div>
    </div>
</body>
</html>
```

### 2. Add the CSS
Create a file named `style.css` and include the following styles:

```css
:root {
    /* Acceptance Criteria: --ease-blob-speed var */
    --ease-blob-speed: 6s;
    --text-color: #f0f6fc;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #0d1117; /* Dark background to match GitHub theme */
    color: var(--text-color);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    margin: 0;
}

.content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
}

.header {
    text-align: center;
}

.header h2 {
    margin: 0 0 0.5rem 0;
    font-size: 2rem;
}

.header p {
    margin: 0;
    color: #8b949e;
}

.ease-blob {
    width: 320px;
    height: 320px;
    background: linear-gradient(135deg, #7928CA, #FF0080);
    
    /* Center the text inside the blob */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    /* Acceptance Criteria: 8-value border-radius base */
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    
    /* Acceptance Criteria: Infinite seamless loop */
    animation: morph var(--ease-blob-speed) ease-in-out infinite;
    
    /* Add a subtle shadow for depth */
    box-shadow: 0 20px 50px rgba(121, 40, 202, 0.3);
}

.ease-blob h1 {
    margin: 0 0 0.5rem 0;
    font-size: 2.2rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.ease-blob p {
    margin: 0;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 0.9rem;
    opacity: 0.9;
}

/* Acceptance Criteria: 3+ organic keyframe shapes */
@keyframes morph {
    0% {
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    33% {
        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
    66% {
        border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
    }
    100% {
        /* Ends exactly as it started for a seamless loop */
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
}
```

##  Why it fits EaseMotion CSS
This component perfectly aligns with the core philosophy of the EaseMotion CSS library:
* **Zero Dependencies:** It relies strictly on native CSS properties, keeping the library lightweight and avoiding JavaScript bloat.
* **Highly Performant:** It avoids expensive layout recalculations, ensuring buttery smooth, hardware accelerated rendering.
* **Developer Friendly:** By exposing the `--ease-blob-speed` variable, developers can easily integrate and tweak the animation behavior without having to reverse-engineer the underlying `@keyframes` math.
* **Organic Aesthetic:** It brings a modern, ease driven aesthetic to the DOM, elevating standard boxy UI elements into engaging, dynamic focal points.
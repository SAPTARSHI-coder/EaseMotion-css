# Interactive 3D Book Page-Flipper

### 1. What does this do?
This component renders an interactive 3D book. The book container uses `perspective` and `transform-style: preserve-3d` to maintain spatial depth. Individual pages can be clicked to flip over along the Y-axis (`rotateY(-180deg)`), revealing the pages underneath sequentially.

### 2. How is it used?
Include the HTML structure. Ensure `style.css` is loaded. The `script.js` file fetches the page data dynamically from `content.json` and injects it into the DOM, making it easy to populate the book without cluttering the HTML. Clicking any generated page triggers the CSS flip transition.

### 3. Why is it useful?
It provides a highly engaging, interactive narrative element for websites (e.g., portfolios, onboarding tutorials). Using pure CSS 3D transforms ensures hardware acceleration and smooth frame rates, while keeping the data layer decoupled via JSON.

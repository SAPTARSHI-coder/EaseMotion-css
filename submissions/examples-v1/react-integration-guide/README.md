# React Integration Guide

### What does this do?
This submission provides a step-by-step guide and interactive preview demonstrating how to install, import, and dynamically toggle EaseMotion CSS animations inside React projects.

---

### How is it used?

Developers looking to integrate EaseMotion CSS with React should:

1. **Install the package**:
   ```bash
   npm install easemotion-css
   ```
2. **Import stylesheets in the entrypoint (`main.jsx` or `index.js`)**:
   ```javascript
   import 'easemotion-css/core/variables.css';
   import 'easemotion-css/core/base.css';
   import 'easemotion-css/core/animations.css';
   import 'easemotion-css/core/utilities.css';
   ```
3. **Trigger animations statically or conditionally using React state**:
   ```jsx
   const [active, setActive] = useState(false);
   
   return (
     <div className={`ease-card ${active ? 'ease-shake' : ''}`}>
       Interact with Me!
     </div>
   );
   ```

---

### Why does it fit EaseMotion CSS?

React is the leading framework for modern web development. Showing developers how to seamlessly use human-readable utility classes (`className="ease-slide-up"`) and dynamic state-bound triggers (`isShaking ? 'ease-shake' : ''`) drives project adoption and enables interactive component-driven layouts to move beautifully with zero friction, which matches EaseMotion CSS's core philosophy.

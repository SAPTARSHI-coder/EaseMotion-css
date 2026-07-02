# React Interactive Code Block Snippet Copy Button

A premium, interactive React code block component with built-in copy-to-clipboard animation effects, powered by **EaseMotion CSS** utility animations and design variables.

## What does this do?
This modular React component renders a clean, styled code window with a copy button that triggers real-time copy actions and delivers tactile visual feedback (button squishing, icon transitions, checkmark bounces, and border-glow animations) when successful.

## How is it used?

### 1. Install Dependencies
Ensure you have `react` and `easemotion-css` installed in your project:
```bash
npm install react easemotion-css
```

### 2. Import Stylesheets
Import the EaseMotion design tokens and animations in your main entrypoint file (such as `main.jsx` or `index.js`):
```javascript
import 'easemotion-css/core/variables.css';
import 'easemotion-css/core/animations.css';
```

### 3. Render the Component
Import and render `CodeSnippetBlock` inside your React layout components:

```jsx
import React from 'react';
import CodeSnippetBlock from './CodeSnippetBlock';

function App() {
  const exampleCode = `const hello = "world";\nconsole.log(hello);`;

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <CodeSnippetBlock
        code={exampleCode}
        language="javascript"
        buttonText="Copy Code"
        copiedText="Copied!"
        onCopy={() => console.log('Successfully copied to clipboard!')}
      />
    </div>
  );
}

export default App;
```

---

## Component API (Props)

The `<CodeSnippetBlock />` component supports the following customizable configuration options:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `code` | `string` | *(Required)* | The code string sequence to be rendered inside the block and written to the clipboard. |
| `language` | `string` | `""` | Optional programming language label shown at the top left of the header bar. |
| `buttonText` | `string` | `"Copy"` | Plain-text description shown on the action button before copying. |
| `copiedText` | `string` | `"Copied!"` | Success text overlay shown temporarily after a copy operation. |
| `onCopy` | `function` | `undefined` | Callback function fired immediately when text is copied. |
| `className` | `string` | `""` | Optional parent element custom styling class name. |

---

## Why is it useful?
- **Tactile UX Animations**: Integrates EaseMotion CSS animations (such as `.ease-squish-button` on hover, `.ease-pulse-border-emphasis` on copy active, and `.ease-bounce-in` / `.ease-zoom-in` for text triggers) to make basic utility actions feel reactive and highly premium.
- **Zero Runtime Bloat**: Runs on standard HTML5 Clipboard APIs, React state hooks, and native CSS classes. Does not require external packages like `react-copy-to-clipboard` or separate styles.
- **Accessibility & Focus-Ring compliance**: Features focus-indicator compliance, custom keyboard actions (fully navigable by keyboard standard triggers), and screen reader notification attributes (`aria-label`, `aria-live="polite"`).
- **Responsive Layout Design**: Adapts width fluidly within parent boundaries, showing horizontal scrollbars for overflow code lines automatically.

# CSS Animated Deploy Pipeline

A pure-CSS implementation of a Continuous Integration / Continuous Deployment (CI/CD) status timeline. It provides a visual sequence of steps (e.g., Build, Test, Deploy) with clearly defined state modifiers for Success, Running, and Pending statuses, complete with connecting lines and infinite loading animations.

## 📋 Mandatory Questions

### 1. What does this do?

This component renders a responsive progress pipeline. On desktop, it displays as a horizontal track of steps connected by lines. On mobile, it intelligently snaps into a vertical timeline. The visual state of each step (and its connecting line) is entirely controlled by a single CSS class applied to the list item (`.status-success`, `.status-running`, or `.status-pending`).

### 2. How is it used?

The structure uses an ordered list (`<ol>`) where each `<li>` represents a pipeline step. The CSS utilizes the `::after` pseudo-element on each step to automatically draw the connecting line to the next step in the sequence.

```html
<ol class="pipeline-track">
  
  <!-- Success Step (Green circle + Green line) -->
  <li class="pipeline-step status-success">
    <div class="step-indicator">✓</div>
    <span class="step-label">Build</span>
  </li>
  
  <!-- Running Step (Blue pulsing circle + Gray line) -->
  <li class="pipeline-step status-running" aria-current="step">
    <div class="step-indicator"><div class="spinner"></div></div>
    <span class="step-label">Test</span>
  </li>
  
</ol>
```

**Customization via CSS Properties:**
You can easily map the pipeline colors to your specific brand or application theme via root variables:

```css
:root {
  --color-success: #10b981; 
  --color-running: #3b82f6; 
  --color-pending: #cbd5e1; 
  --indicator-size: 24px;
}
```

### 3. Why is it useful?

Tracking multi-step asynchronous processes is ubiquitous in modern SaaS applications (deployments, data processing, onboarding). Traditionally, building the connecting lines between dynamic elements required JavaScript calculation or complex SVG path manipulation. By utilizing flexbox and absolute positioning on pseudo-elements, this CSS-only approach provides a fluid, responsive timeline that adapts perfectly to any screen size without a single line of JS. Furthermore, it leverages CSS `@keyframes` for the loading spinner, ensuring the animation runs smoothly on the GPU thread without blocking main thread execution.

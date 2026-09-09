# Animated File Upload Component

A modern, high-performance SaaS dashboard file upload component built using **pure HTML and CSS**. It leverages the CSS radio trigger hack to demonstrate multiple visual states (Default, Simulated Drag Over, Uploading, Success, and Error) with floating icons, dashed hover borders, progress load animations, and fade-in cards—all without external libraries or JavaScript.

---

## 1. What does this do?

This component provides a fully functional, interactive drag-and-drop dashboard deck showcasing five crucial upload states:
- **Default Empty State**: Features a clean upload zone with a floating cloud upload icon, click-to-browse link, and supported format tags.
- **Drag Over (Simulated)**: Highlights the dropzone with a glowing, pulsing indigo border, speeds up the floating cloud icon, and exposes a dashed "ghost card" hovering below.
- **Uploading State**: Shows multiple files actively processing with a diagonally-shining progress bar, loading state badges, and cancel button hover states.
- **Success State**: Displays successfully uploaded files with green checkmarks, fade-in animations, file sizes, and action-ready delete trash icons.
- **Upload Error**: Illustrates upload failures (such as file size exceeded or invalid formats) using danger badges, retry buttons with rotational transitions, and explanatory helper texts.

### Animation Details
1. **Floating Icon**: The cloud icon moves smoothly up and down using a custom ease keyframe (`floatIcon`).
2. **Hover Glow Effect**: Hovering over the zone scales it up slightly and adds a rich indigo box-shadow glow.
3. **Pulsing Drag highlights**: Under the dragover state, the dashed border pulses with high-contrast glowing shadows.
4. **Stripe Progress Load**: Active progress fills contain a moving diagonal shine effect to indicate ongoing background activity.
5. **Staggered Entry**: File status preview cards fade and slide up sequentially using custom animation delays.
6. **Retry Rotation**: Hovering over retry actions triggers a infinite rotation keyframe.

---

## 2. How is it used?

### HTML Structure
To instantiate the component with its state engine, add radio triggers before the component card, then build the zones and list segments:

```html
<div class="upload-card">
  <!-- Hidden Radio Inputs -->
  <input type="radio" id="state-default" name="demo-state" class="state-radio" checked>
  <input type="radio" id="state-dragover" name="demo-state" class="state-radio">
  <!-- ... state-uploading, state-success, state-error ... -->

  <!-- Upload Area -->
  <div class="upload-zone">
    <input type="file" class="upload-input" multiple>
    <div class="upload-icon-wrapper">
      <!-- SVG Cloud -->
    </div>
    <h2 class="upload-title">Drag & drop files here or <span class="browse-text">browse</span></h2>
    <!-- format badges -->
  </div>

  <!-- Queue Lists -->
  <div class="files-list-section">
    <div class="files-cards-container">
      <!-- Default Placeholder -->
      <div class="empty-placeholder state-empty">...</div>
      
      <!-- Ghost Drag card -->
      <div class="file-card ghost-card state-dragover-ghost">...</div>
      
      <!-- Uploading card -->
      <div class="file-card state-uploading-card">...</div>

      <!-- Success card -->
      <div class="file-card state-success-card">...</div>
      
      <!-- Error card -->
      <div class="file-card state-error-card">...</div>
    </div>
  </div>
</div>
```

### CSS State Routing
The visibility and transition parameters of the cards respond to the active radio checked selector rules:

```css
/* Hide all cards by default */
.files-list-section,
.files-cards-container .file-card {
  display: none;
}

/* Enable only the checked state list items */
#state-default:checked ~ .upload-card .files-list-section .state-empty {
  display: flex;
  animation: cardFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

#state-uploading:checked ~ .upload-card .files-list-section .state-uploading-card {
  display: flex;
  animation: cardFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

---

## 3. Why is it useful?

1. **Zero JavaScript Overhead**: The component displays complex state transitions and status lists using pure CSS selectors, ensuring rendering pipelines are never blocked by heavy JS parsing.
2. **Interactive State Demonstration**: Rather than static mockups, developers can preview all 5 major workflow states instantly via the segmented switcher tabs.
3. **Refined UX Details**: Staggered animation delays, moving loading stripes, and hover feedback provide a highly polished, responsive feel.
4. **Standard File Fallback**: A real `<input type="file">` overlay ensures that double-clicking the browse button triggers the native OS file picker interface automatically.
5. **Completely Responsive**: Adapts fluidly to small viewports, transforming the selector dashboard into a responsive grid system and sizing down preview cards automatically.

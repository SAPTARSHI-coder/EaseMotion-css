# Animated Download Button with Progress (`ease-download-btn-has`)

### 1. What does this do?
This is an interactive download button that transforms into a progress loading bar when clicked and snaps into a circular checkmark button upon completion.

### 2. How is it used?
Structure the HTML with the class `.download-btn` and toggle states via JS:
```html
<button class="download-btn">
  <span class="btn-text">Download Asset</span>
  <span class="btn-icon">
    <!-- SVG Icon -->
  </span>
  <div class="progress-bar"></div>
  <span class="success-icon">
    <!-- Checkmark SVG -->
  </span>
</button>
```

Toggle the classes `.loading` and `.success` using JavaScript based on download state.

### 3. Why is it useful?
It improves user experience by giving immediate visual feedback during file downloads, replacing generic progress spinners with a unified, micro-animated component that fits EaseMotion's focus on expressive UIs.

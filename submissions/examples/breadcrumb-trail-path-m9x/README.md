1. What does this do?
An accessible, animated breadcrumb navigation bar featuring interactive hover states and a glowing active path indicator.

2. How is it used?
<nav class="btp-nav" aria-label="Breadcrumb">
  <ol class="btp-list">
    <li class="btp-item">
      <a href="#" class="btp-link">Home</a>
      <span class="btp-separator">/</span>
    </li>
    <li class="btp-item">
      <a href="#" class="btp-link btp-active" aria-current="page">
        <span>Current</span>
        <span class="btp-pulse-indicator"></span>
      </a>
    </li>
  </ol>
</nav>

3. Why is it useful?
It gives developers a zero-dependency, WCAG-compliant breadcrumb navigation component with subtle motion indicators for the active page state.
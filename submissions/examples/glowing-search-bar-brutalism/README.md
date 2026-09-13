Glowing Search Bar Input — Brutalism

A bold, high-contrast search bar component featuring a brutalist visual style and glowing focus interaction.

The component is implemented using pure HTML and CSS with no JavaScript dependencies.

Overview

The Glowing Search Bar provides:

Brutalist visual styling
High-contrast black, off-white and neon-accent palette
Glowing focus state
Animated search icon
Interactive hover and active states
Responsive mobile, tablet and desktop layouts
Keyboard-accessible controls
prefers-reduced-motion support
Forced-colors/high-contrast support
Zero JavaScript dependencies
Directory Structure
components/
└── glowing-search-bar/
    ├── demo.html
    ├── style.css
    └── README.md
Features
Brutalist Design

The component uses:

Strong borders
Hard offset shadows
Square corners
Heavy display typography
High-contrast colors
Minimal decorative elements
Intentional visual asymmetry
Glowing Focus State

When the search input receives focus, the parent search component uses :focus-within to create a neon glow.

This allows the interaction to work without JavaScript.

CSS-Only Interaction

The component does not require JavaScript.

Interaction is provided through native HTML controls and CSS pseudo-classes including:

:hover
:active
:focus-visible
:focus-within

The form uses native HTML semantics so it can later be connected to a real search endpoint without changing the visual component.

EaseMotion

Motion-related CSS custom properties are defined centrally:

--ease-standard
--ease-emphasized
--ease-decelerate
--ease-accelerate

--motion-fast
--motion-normal
--motion-slow

If the host repository already provides official EaseMotion tokens, those project-level definitions should take precedence over the local fallback values.

Responsive Behavior
Desktop

The search field and search action are displayed horizontally.

Tablet

The search control adapts to narrower layouts while maintaining the large brutalist visual treatment.

Mobile

The search button moves to a full-width row underneath the input.

The component remains usable at narrow viewport sizes.

Accessibility

The component includes:

A semantic <form role="search">
A properly associated <label>
Accessible button labels
Visible :focus-visible indicators
Keyboard-accessible native controls
High-contrast focus treatment
prefers-reduced-motion support
forced-colors support

The decorative search icon is marked with aria-hidden="true".

Reduced Motion

Motion is disabled/reduced when the user has enabled:

@media (prefers-reduced-motion: reduce)

This prevents unnecessary animation for users who prefer reduced motion.

Browser Compatibility

The implementation uses broadly supported CSS features:

CSS custom properties
Flexbox
CSS Grid
:focus-within
:focus-visible
Media queries
prefers-reduced-motion
forced-colors

Cross-browser verification should be performed in the project's supported browser matrix before release.

Recommended verification:

Chrome
Edge
Firefox
Safari
Mobile Chrome
Mobile Safari
Usage

Include the stylesheet:

<link rel="stylesheet" href="style.css">

Then place the search component in the required page.

No JavaScript package or runtime dependency is required.

Dependencies

None.

Testing Checklist

Desktop layout tested

Tablet layout tested

Mobile layout tested

Keyboard navigation tested

Focus indicator visible

Screen reader labels verified

Reduced-motion mode tested

Forced-colors/high-contrast mode tested

Chrome tested

Firefox tested

Safari tested

Edge tested

Acceptance Criteria

Pure CSS implementation

Located under components/

EaseMotion-compatible CSS variables included

Smooth state transitions included

Responsive layout implemented

Zero JavaScript dependencies

prefers-reduced-motion support included

Cross-browser verification completed

Important Note

The demo provides the visual and interaction layer for a search input. Submitting an actual search requires a backend/search endpoint or application-level integration.

The component itself does not use JavaScript.

License

Use the license specified by the parent repository.

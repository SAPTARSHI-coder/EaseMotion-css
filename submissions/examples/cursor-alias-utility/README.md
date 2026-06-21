# Cursor Alias Interaction Utilities

An isolated user-interface utility package adding the `.ease-cursor-alias` token modifier under issue #13841. This utility manages desktop-level pointer decoration overrides during complex file layout mapping sequences.

## Functional Mechanics

- **The Problem:** In desktop-grade web applications handling complex dragging architectures, file management decks, or workspace graph mappings, users often get confused about whether dropping an element will clone it, move its raw data path, or merely create a reference link.
- **The Solution:** Applying `.ease-cursor-alias` overrides the system mouse matrix to render the OS-native shortcut modifier icon (typically an arrow accompanied by a small link ribbon symbol). This instantly communicates system intent purely through structural hover affordances.

## Usage Layout Structure
```html

<div class="dropzone-link-target ease-cursor-alias">
  <p>Drop to create workspace shortcut icon link</p>
</div>
```

Closes #13841

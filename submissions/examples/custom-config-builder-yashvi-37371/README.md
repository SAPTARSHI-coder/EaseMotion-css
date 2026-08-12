# Modular Custom Configuration Builder & CLI Script

A CLI compilation utility that reads a user-defined config file (`easemotion.config.json`) and generates a tailor-made, lightweight, and minified version of the EaseMotion CSS framework containing only selected modules.

---

## Questions

1. **What does this do?**  
   It provides a Node.js compiler script (`build-custom.mjs`) that parses `easemotion.config.json` configuration options, dynamically maps modules (core layers, individual components, or standalone keyframe packages), resolves base dependencies like variables, and packages them into a single custom-compiled, minified CSS bundle.

2. **How is it used?**  
   Create an `easemotion.config.json` in the root workspace, choose your desired modules, and run the compiler:
   ```bash
   node submissions/examples/custom-config-builder-yashvi-37371/build-custom.mjs
   ```
   Example config structure:
   ```json
   {
     "core": ["variables", "base", "animations"],
     "components": ["buttons", "cards", "loaders"],
     "animations": ["fade", "zoom"]
   }
   ```

3. **Why is it useful?**  
   By default, the compiled framework imports all components and styles, weighing around 178KB minified. This builder allows developers who only need a small set of styles (e.g., buttons and fade reveals) to generate custom bundles under 15KB—drastically improving page loads and network speeds, aligned with the long-term treeshaking vision.

---

## Features

- **Granular treeshaking:** Select only the parts you need (e.g., core, individual components, modular animations).
- **Auto-dependency resolution:** Automatically injects custom variables if components are used but variables are missing.
- **Minification on-the-fly:** Reuses compiler regex passes to strip CSS comments, collapse spacing, and minifies output directly.
- **Double distribution output:** Writes to the project `dist/` directory as well as the local demonstration path for self-contained preview.

---

## Configuration Keys

- `core`: Options include `variables`, `base`, `animations`, `utilities` (from the `core/` folder).
- `components`: Name of component styles (from the `components/` folder, e.g. `buttons`, `cards`, `tabs`, `modals`, `loaders`).
- `animations`: Modular animation packages (from the `easemotion/` folder, e.g. `fade`, `slide`, `zoom`, `bounce`, `hover`).

---

Issue: #37371

EaseMotion CSS

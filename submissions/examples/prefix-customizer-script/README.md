# EaseMotion Prefix Customizer

A standalone Node.js post-processing utility that allows developers to safely customize the default `.em-` CSS namespace prefix in the compiled library without modifying the core source code.

## Features
- **The Problem**: Frameworks often use a namespace prefix (like `.em-` for EaseMotion) to prevent class name collisions. However, if a developer imports two libraries that coincidentally use the same prefix, their styles will clash and break the UI.
- **The Solution**: Rather than asking developers to setup a complex build pipeline (like PostCSS or Webpack) just to rename classes, this submission provides a zero-dependency, plug-and-play Node script that uses RegEx to intelligently swap out the prefix across the minified CSS bundle.
- **Variable Support**: The script correctly identifies and renames associated CSS Custom Properties (e.g., `--em-duration` becomes `--custom-duration`) to ensure the animation engine remains perfectly functional under the new namespace.

## Usage
1. Open your terminal.
2. Navigate to this directory: `cd submissions/examples/prefix-customizer-script/`
3. Run the script and pass your desired prefix as an argument:
   ```bash
   node customize.js cool-motion-
   ```
4. The script will locate the root `easemotion.min.css`, parse it, and generate a new `easemotion.custom.css` file in this directory.
5. You can now use classes like `class="cool-motion-fade-in"` in your HTML!

## Files
- `customize.js`: The zero-dependency Node.js string-replacement engine.
- `demo.html`: Documentation and usage instructions.

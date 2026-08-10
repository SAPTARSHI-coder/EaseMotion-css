# EaseMotion File Size Optimizer

A standalone Node.js post-processing utility that allows developers to aggressively strip legacy vendor prefixes from the compiled library to reduce file size bloat.

## Features
- **The Problem**: EaseMotion CSS aims for maximum compatibility out-of-the-box, meaning the compiled `easemotion.min.css` file contains hundreds of `-moz-`, `-ms-`, and `-o-` vendor prefixes. For modern web applications that no longer support Internet Explorer 11 or legacy browsers, this results in over 20% unnecessary file size bloat.
- **The Solution**: Rather than forcing the EaseMotion maintainers to drop support for older browsers, this submission provides a zero-dependency script that users can run to clean the file themselves. It safely uses Regex to strip out `-moz-`, `-ms-`, and `-o-` properties, while intentionally preserving `-webkit-` prefixes (which are still strictly required by modern Safari/iOS for hardware acceleration).

## Usage
1. Open your terminal.
2. Navigate to this directory: `cd submissions/examples/file-size-optimization-script/`
3. Run the script:
   ```bash
   node optimize.js
   ```
4. The script will locate the root `easemotion.min.css`, parse it, and generate a new `easemotion.modern.min.css` file in this directory with a significantly smaller file size.

## Files
- `optimize.js`: The zero-dependency Node.js string-replacement engine.
- `demo.html`: Documentation and usage instructions.

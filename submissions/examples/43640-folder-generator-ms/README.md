# Contributor Suffix & Folder Name Generator

Resolves #43640.

### What does this do?
Provides a handy web tool for contributors to generate valid EaseMotion PR folder names according to the `CONTRIBUTING.md` guidelines (e.g., `[issue-number]-[component-name]-[unique-suffix]`).

### How is it used?
It uses Vanilla JS to instantly slugify the component name and suffix while concatenating the issue number. The output can be copied to the clipboard with a single click.

### Why is it useful?
Automating the folder naming process reduces friction and errors for new contributors, ensuring their PRs don't get blocked by automated CI checks for invalid folder structures.

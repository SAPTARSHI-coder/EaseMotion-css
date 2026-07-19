# VitePress Documentation Architecture Refactor

## What does this do?
Proposes a complete architectural migration of the project's documentation folder (`docs/`) to a modern Static Site Generator (SSG) such as **VitePress**.

## How is it used?
The maintainer will initialize a VitePress project inside the `docs/` folder:
```bash
npm add -D vitepress
npx vitepress init
```
All existing raw `.html` files (like `index.html`, `cheatsheet.html`) and raw markdown files (`accessibility-guide.md`) will be converted into a centralized VitePress markdown structure with a single, dynamically generated sidebar and navbar configured in `.vitepress/config.js`.

## Why is it useful?
Currently, the documentation is heavily fragmented. Spanning over 15+ files, it relies on standalone raw `.html` and `.md` files without any unifying framework. This forces maintainers and contributors to manually copy-paste the exact same navbar and footer code across every single HTML file. When a new page is added, the navigation menu must be manually updated in 15 different places, leading to inevitable broken links and a poor developer experience.

By porting the `docs/` folder to VitePress, the framework instantly gains:
1. **A Single Source of Truth:** One `config.js` file controls the navbar and sidebar for all pages.
2. **Markdown-First Authoring:** Documentation becomes trivial to write and maintain.
3. **Built-in Search:** VitePress provides out-of-the-box local search capabilities.
4. **Vite Speeds:** Lightning-fast HMR during development.

This structural refactor will permanently solve the documentation fragmentation and drastically lower the barrier to entry for new contributors.

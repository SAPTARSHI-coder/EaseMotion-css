# Framework-Aware Installation Guide with Dynamic Command Generator

## What does this do?
This component introduces an interactive framework selector tool to the "Getting Started" documentation, updating recommended command line instructions, configuration setups, and import code-blocks dynamically depending on the developer's project tech stack.

## How is it used?
Developers use a clean `<select>` HTML element containing core modern environments (such as React, Vue, HTML/CDN). Upon selection change, an event handler modifies the DOM elements inside `#installation-output` with context-specific setups instantly.

## Why is it useful?
It heavily reduces cognitive load and text scanning fatigue for newcomers browsing EaseMotion CSS documentation. Rather than sorting through long, scrolling blocks of configuration variants (NPM, granular, or CDN methods simultaneously), a developer is served only the codebase-specific requirements relevant to their framework layout.
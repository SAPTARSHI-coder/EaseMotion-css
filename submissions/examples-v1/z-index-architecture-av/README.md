# Unified Z-Index Architecture

## What does this do?
Proposes a unified CSS variable scale for z-indexes (`--ease-z-modal`, `--ease-z-tooltip`, etc.) to replace hardcoded values (like `z-index: 9999`) across the framework.

## How is it used?
Developers and component authors use variables like `z-index: var(--ease-z-dropdown);` instead of raw integers. This centralizes layer management into the core `variables.css`.

## Why is it useful?
Currently, z-indexes are hardcoded inconsistently across `components/modals.css`, `components/tooltips.css`, and dozens of submissions. This guarantees layering bugs (like tooltips appearing under modals or navbars appearing over dropdowns) when combining elements. A unified scale entirely eliminates these conflicts by providing a single source of truth for the z-axis.

# Prompt Engineering Studio

## What does this do?

The Prompt Engineering Studio is a developer workbench to optimize, align, test, and version-control prompts for Large Language Models (LLMs). It includes system and user prompt inputs, parameter controls (Temperature, Token Limits, Engine selectors), interactive sidebars, before/after comparative output viewports with animated scan sweeps, real-time metric gauges (Clarity, Efficiency, Safety), and a comprehensive version-history stack.

## How is it used?

Open `demo.html` directly in any modern browser:

- **Load Presets**: Click on "Code Refactoring", "JSON Schema", or "Logic Reasoner" chips to pre-populate system roles and raw prompts.
- **Run Optimization**: Click "Optimize Prompt" to run a simulated AI optimizer. Watch the scanning laser sweep down the comparison viewport as the prompt is reformatted, output cards fill up, and score metrics gauge alignment improvements.
- **Adjust Configuration**: Modify Temperature, Token limits, or select alternate LLM Engines. Watch these parameters update in real-time.
- **Test Draft**: Click "Test Draft" to inspect raw prompt behavior without re-structuring or optimizing.
- **Version Control**: Click on past versions in the Version History sidebar to restore the prompt workspace inputs, configurations, outputs, and alignment scores to that specific snapshot.

## Why is it useful?

Refining prompts for LLMs is an iterative process. Storing past drafts, configuring temperature profiles, and evaluating response structure requires systematic workspace environments.

This studio solves prompt design workflows by:

1. Highlighting before/after differences side-by-side using high-contrast typography and clear system role contexts.
2. Integrating visual laser scanning indicators (`scanning-bar` keyframes) to represent computational optimization passes.
3. Incorporating interactive versioning to prevent work loss and enable immediate A/B comparisons.

## Tech Stack

- HTML5
- CSS3 (scanning linear keyframes, triple-column studio grid, meter track fills, responsive grids)
- JavaScript (preset managers, simulator timelines, score gauge transitions, version history controllers)

## Preview

Open [demo.html](file:///submissions/examples/prompt-eng-studio-bv/demo.html) directly in your browser.

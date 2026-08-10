# Container Query Units Deep Dive

## What

A deep-dive demo into all six container query length units: `cqw`, `cqh`, `cqi`, `cqb`, `cqmin`, and `cqmax`. A resizable container holds a grid of cards whose typography, spacing, border-radius, and shadows respond to the container's inline and block sizes. A range slider lets users freely resize the container to see units in action.

## How

The `.cq-container` element sets `container-type: inline-size` and `container-name: demo`. Each card uses a different `cq*` unit: `font-size: 5cqw` (percentage of container width), `padding: 2cqh` (percentage of container height), `gap: 3cqi` (inline axis), `margin-block: 2cqb` (block axis), `border-radius: 1cqmin` (smaller axis), and `box-shadow` offset via `0.5cqmax` (larger axis). A `@container` query switches the grid to single-column when the container shrinks below 500px.

## Why

Container query units are the missing piece of responsive design — they let elements scale relative to their parent container rather than the viewport. This is essential for reusable components that live in varying layout contexts. Understanding `cqw`/`cqh`/`cqi`/`cqb`/`cqmin`/`cqmax` lets developers build truly container-adaptive interfaces without fragile viewport breakpoints.

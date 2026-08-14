# Container Query Scroll State Helper

A reusable SCSS helper for working with CSS container scroll-state queries.

## Feature

This helper simplifies styling elements based on their scroll state.

It is particularly useful for sticky elements that need to change
appearance when they become stuck.

## Basic Usage

```scss
.sticky-element {
  position: sticky;
  top: 0;

  @include scroll-state-stuck {
    box-shadow: 0 4px 15px rgb(0 0 0 / 15%);
  }
}
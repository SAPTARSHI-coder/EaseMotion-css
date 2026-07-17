# Infinite Scroll Trigger

A scroll-triggered loading component using IntersectionObserver. New items appear with a fade+slide-up animation. CSS handles the loading spinner rotation and item entrance via `--fi-delay`.

## Features

- IntersectionObserver triggers load at bottom
- New items animate in with fadeSlideUp
- Spinning ring indicator during load
- Staggered delay via --fi-delay CSS variable
- Simulated async loading

## Usage

The `.load-more` element acts as a sentinel. When visible, JS loads more items. Each `.feed-item` can use `--fi-delay` for staggered entrance animation.

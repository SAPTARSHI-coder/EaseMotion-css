# Modal Content Clipping Fix

## Description

This utility fixes modal content clipping issues on smaller screens by adding responsive overflow handling.

## Problem

Large modal content can exceed the viewport height, causing hidden content and inaccessible action buttons.

## Solution

The modal uses:

```css
max-height: 85vh;
overflow-y: auto;
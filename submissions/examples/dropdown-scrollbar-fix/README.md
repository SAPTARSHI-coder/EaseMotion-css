# Dropdown Scrollbar Fix

## Description

This example demonstrates a scrollable dropdown menu that remains open while users interact with its scrollbar.

## Problem

Scrollable dropdowns may close unexpectedly when users try to scroll through long lists, making item selection difficult.

## Solution

- Added a scrollable dropdown using:
  ```css
  max-height: 180px;
  overflow-y: auto;
  ```
- Kept the dropdown open during interactions inside the dropdown.
- Closed the dropdown only when clicking outside it.

## Usage

Open `demo.html` in a browser and click the button to view the scrollable dropdown.

## Benefits

- Better usability
- Improved handling of long option lists
- Responsive and lightweight implementation
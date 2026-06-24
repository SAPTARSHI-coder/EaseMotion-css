# Display Table-Cell

## Overview

Demonstrates how `display: table`, `display: table-row`, and `display: table-cell` create table-like layouts from non-table HTML elements. Covers equal-height columns and vertical centering — two classic use cases that table-cell handles natively.

## Key Concepts

- **Table layout model**: Using `display: table` / `table-row` / `table-cell` mimics the HTML table layout algorithm, including equal-height cells in the same row.
- **Vertical centering**: `vertical-align: middle` on a table-cell vertically centers content, a technique that was the standard before Flexbox and Grid.
- **Equal height columns**: Table cells in the same row automatically stretch to the height of the tallest cell, creating equal-height columns without JavaScript.
- **Border spacing**: Use `border-spacing` on the table wrapper to control gaps between cells (replaces `gap` in modern layouts).
- **Modern alternatives**: Flexbox (`align-items: stretch`) and CSS Grid provide equal-height columns with simpler markup and better gap control.

## Usage

Open `demo.html` to see two table-cell columns of different content lengths but equal heights, a vertically centered panel, and a comparison between the table-cell approach and modern Flexbox.

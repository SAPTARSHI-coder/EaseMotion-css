# Tooltip Component

**Submitted by:** [Your Name](https://github.com/YOUR-USERNAME)  
**Issue:** GSSoC Contribution #3  
**Status:** Pending Review

---

## Overview

A pure CSS tooltip with bounce animation, 4 positions, color variants, and full keyboard accessibility. Zero JavaScript.

## Classes

| Class | Description |
|-------|-------------|
| `.ease-tooltip` | Base tooltip (top by default) |
| `.ease-tooltip-bottom` | Position below target |
| `.ease-tooltip-left` | Position left of target |
| `.ease-tooltip-right` | Position right of target |
| `.ease-tooltip-primary` | Primary color theme |
| `.ease-tooltip-success` | Success/green theme |
| `.ease-tooltip-danger` | Danger/red theme |
| `.ease-tooltip-multiline` | Allow text wrapping |

## Usage

```html
&lt;!-- Basic top tooltip --&gt;
&lt;span class="ease-tooltip" data-tooltip="Hello!" tabindex="0"&gt;
  Hover me
&lt;/span&gt;

&lt;!-- Bottom position --&gt;
&lt;span class="ease-tooltip ease-tooltip-bottom" data-tooltip="Below!" tabindex="0"&gt;
  Hover me
&lt;/span&gt;

&lt;!-- With color --&gt;
&lt;span class="ease-tooltip ease-tooltip-primary" data-tooltip="Primary!" tabindex="0"&gt;
  Hover me
&lt;/span&gt;

&lt;!-- Multi-line --&gt;
&lt;span class="ease-tooltip ease-tooltip-multiline" 
      data-tooltip="Line one. Line two." tabindex="0"&gt;
  Hover me
&lt;/span&gt;
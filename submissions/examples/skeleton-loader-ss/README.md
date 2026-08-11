# Skeleton Loader Component

**Submitted by:** [Your Name](https://github.com/YOUR-USERNAME)  
**Issue:** GSSoC Contribution #2  
**Status:** Pending Review

---

## Overview

A pure CSS skeleton loader with shimmer animation for loading states. Zero JavaScript required — just add classes while data loads, then swap for real content.

## Classes

| Class | Description |
|-------|-------------|
| `.ease-skeleton` | Base shimmer block |
| `.ease-skeleton-text` | Text line placeholder |
| `.ease-skeleton-text-sm` | Small text line |
| `.ease-skeleton-text-lg` | Large text line |
| `.ease-skeleton-circle` | Circular shape |
| `.ease-skeleton-avatar` | Avatar size (40px) |
| `.ease-skeleton-avatar-lg` | Large avatar (64px) |
| `.ease-skeleton-image` | 16:9 image placeholder |
| `.ease-skeleton-card` | Card-sized block |
| `.ease-skeleton-button` | Button-sized block |
| `.ease-skeleton-header` | Flex row for avatar + text |
| `.ease-skeleton-w-1/4` | 25% width |
| `.ease-skeleton-w-1/2` | 50% width |
| `.ease-skeleton-w-3/4` | 75% width |
| `.ease-skeleton-w-full` | 100% width |

## Usage

```html
&lt;!-- Simple text lines --&gt;
&lt;div class="ease-skeleton ease-skeleton-text"&gt;&lt;/div&gt;
&lt;div class="ease-skeleton ease-skeleton-text ease-skeleton-w-1/2"&gt;&lt;/div&gt;

&lt;!-- Avatar + name header --&gt;
&lt;div class="ease-skeleton-header"&gt;
  &lt;div class="ease-skeleton ease-skeleton-avatar"&gt;&lt;/div&gt;
  &lt;div class="ease-skeleton ease-skeleton-text"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Full card --&gt;
&lt;div class="ease-skeleton ease-skeleton-image"&gt;&lt;/div&gt;
&lt;div class="ease-skeleton ease-skeleton-text"&gt;&lt;/div&gt;
&lt;div class="ease-skeleton ease-skeleton-button"&gt;&lt;/div&gt;
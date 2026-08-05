# Accessibility Fix: prefers-reduced-motion Support

## Issue
Issue #61569 - Not all component-specific animations respect prefers-reduced-motion

## Problem
While base animations support prefers-reduced-motion, several component-specific animations don't have proper overrides:

- Marquee animations
- Scroll gallery animations  
- Typewriter effects
- Loading spinners
- Hover effects

## Solution
Add comprehensive prefers-reduced-motion overrides for ALL animation classes in the framework.

## Changes Made

### New File: accessibility-reduced-motion.css
A comprehensive override file that disables all animations when user prefers reduced motion.

### Classes Covered
- All `.ease-*` animation classes
- All `.ease-kf-*` keyframe animations
- Marquee, typewriter, spinner animations
- Hover-triggered animations
- Scroll-triggered animations

## Testing
- All animations disabled for users with prefers-reduced-motion
- Hover effects disabled
- Loading states show static content
- Typewriter shows full text immediately

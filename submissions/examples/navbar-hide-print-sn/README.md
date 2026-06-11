# Fix: Navbar Hidden When Printing

## Problem
Navbar renders on every printed page wasting space.

## Fix
Added `@media print` rule to completely hide `.ease-navbar` during printing.
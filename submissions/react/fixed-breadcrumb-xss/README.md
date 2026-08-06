# BreadcrumbTrail - Fixed Version

## Overview
This is a fixed version of the BreadcrumbTrail component that addresses an XSS vulnerability.

## Vulnerability Fixed
The original component used `dangerouslySetInnerHTML` without sanitization.

## Fix Applied
Added DOMPurify sanitization before using `dangerouslySetInnerHTML`.

## Related Issue
Fixes #38698

## Labels
- `level:critical`
- `type:security`
- `gssoc:approved`

# SearchAutocomplete - Fixed Version

## Overview

This is a fixed version of the SearchAutocomplete component that addresses a critical ReDoS vulnerability.

## Vulnerability Fixed

The original component used user input directly in a RegExp constructor without escaping special characters:

```javascript
const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

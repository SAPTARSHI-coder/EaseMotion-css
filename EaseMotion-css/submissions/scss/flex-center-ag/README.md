SCSS Flex Center Mixin
A lightweight, reusable SCSS mixin for the EaseMotion CSS framework that perfectly centers child elements horizontally and vertically using Flexbox.

Features
Eliminates repetitive flexbox centering boilerplate.
Accepts an optional $direction parameter to easily switch between row (default) and column layouts.
Uniquely named flex-center-ag to prevent global mixin conflicts.

Usage
Import the mixin into your SCSS stylesheet and @include it within your target class:

// Import the file
@use 'path/to/submissions/scss/flex-center-ag/flex-center' as *;

// Default Usage (Row)
.my-centered-card {
  @include flex-center-ag;
  height: 200px;
  background-color: #1e293b;
}

// Column Usage
.my-centered-column {
  @include flex-center-ag(column);
  gap: 1rem;
}

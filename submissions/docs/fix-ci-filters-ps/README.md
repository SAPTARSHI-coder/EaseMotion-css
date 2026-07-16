# Fix CI Path Filters for Engine and Packages (#40055)

### 1. What does this do?
This proposal updates the core CI workflow path filters to ensure changes to the motion engine, test suites, package dependencies, and core runtime files trigger the validation pipeline instead of being skipped.

### 2. How is it used?
The maintainer can copy the updated paths block into `.github/workflows/ci.yml`. 

Proposed configuration change:
```yaml
paths:
  - '**/*.css'
  - '**/*.html'
  - 'scripts/**'
  - '.github/workflows/ci.yml'
  - 'stylelint.config.json'
  - 'htmlhint.config.json'
  - 'package.json'
  - 'package-lock.json'
  - 'tests/**'
  - 'easemotion/**/*.js'
  - 'core/**/*.js'
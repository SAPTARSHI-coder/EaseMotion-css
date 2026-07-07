# Minification Automation POC

This submission demonstrates the build logic required to resolve Issue #33440. 
It includes a `bundle.js` script that utilizes `clean-css` to automate the 
synchronization between `easemotion.css` and `easemotion.min.css`.

- **Purpose**: To provide the maintainers with a functional script to eliminate manual sync errors.
- **Status**: Provided as a Proof of Concept (POC) to respect the current Core Freeze on framework modifications.
- **How to use**: This script can be integrated into the CI/CD pipeline once the freeze is lifted.
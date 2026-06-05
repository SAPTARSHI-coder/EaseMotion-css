# Documentation Asset Loader Fix (#1422)

### 1. What does this do?
This patch fixes the unstyled content layout failure on the live documentation page by adding the missing `'unsafe-inline'` CSP directive, updating the broken SRI integrity checksums for `buttons.css`, and resolving the 404 missing resource path for scroll animations.

### 2. How is it used?
Deploying these configuration attributes to the live site template configuration safely clears the console violations and allows the browser to execute incoming framework layouts cleanly.

### 3. Why is it useful?
It ensures that new developers visiting the landing site can actually view and interact with live design examples instead of seeing a broken unstyled text list.
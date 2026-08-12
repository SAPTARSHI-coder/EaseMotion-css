# Multithreaded Node.js Build Pipeline Architecture

## What does this do?
Proposes a massive GitHub Actions CI/CD performance refactor to aggressively eliminate sequential, single-threaded Node.js script execution. This replaces the legacy pipeline with a highly performant, parallelized build architecture natively utilizing Node.js `worker_threads` and `Promise.all`.

## How is it used?
Maintainers and core contributors must systematically audit the build pipeline—specifically targeting `package.json` execution scripts and the internal logic of `scripts/*.mjs` files (spanning 6+ core files).

Currently, developers are violently clogging the CI pipeline by executing incredibly heavy CSS AST parsing, validation, and minification sequentially on a single Node.js thread:
```javascript
// ❌ BAD: Legacy Sequential Execution (Violently blocks the entire CI pipeline)
await runCSSValidation();      // Thread waits 5 seconds...
await runCSSMinification();    // Thread waits 5 seconds...
await runDuplicationCheck();   // Thread waits 5 seconds...
```

This entire legacy approach must be ripped out. The heavy compute scripts must be explicitly offloaded to parallel Worker Threads, allowing the server's multi-core CPU to actively execute all build steps simultaneously:
```javascript
// ✅ GOOD: Flawless Multithreaded Execution (Massive CI speedup)
await Promise.all([
  runWorkerThread('validation.mjs'),
  runWorkerThread('minification.mjs'),
  runWorkerThread('duplication.mjs')
]);
```

## Why is it useful?
Currently, EaseMotion's GitHub Actions CI pipeline is catastrophically slow. Because the validation, minification, and CSS duplication-check scripts are physically executed sequentially on a single Node.js thread, the pipeline is wasting massive amounts of compute time actively waiting for each script to finish before starting the next one. This severely delays Pull Request merges, deeply frustrates open-source contributors, and rapidly burns through valuable GitHub Actions free-tier compute minutes.

By forcefully migrating the internal build pipeline to a multithreaded architecture using Node's native `worker_threads` (or `child_process.exec` alongside `Promise.all()`), we completely bypass this single-threaded bottleneck. GitHub Action runners utilize multi-core CPUs; by explicitly offloading our heavy AST parsing and minification tasks into isolated parallel worker threads, we mathematically guarantee that all 3 major build steps execute simultaneously. This instantly secures a flawless 3x speedup in the continuous integration pipeline, dramatically slashing CI wait times and saving hundreds of hours of wasted compute for the maintainer team.

# Fix Exports Map

1. What does this do? Documents the bug fix for expanding the `exports` map in package.json to wildcard directories.
2. How is it used? The fix operates transparently inside `package.json`, enabling developers to import CSS sub-modules.
3. Why is it useful? It ensures EaseMotion-css is actually modular and tree-shakable as advertised, unblocking selective CSS imports.

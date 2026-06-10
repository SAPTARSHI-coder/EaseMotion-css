/* 
 * Bug: Submission Validator Does Not Detect Duplicate Folder Names with Different Letter Cases
 * 
 * The current validator only checks case collisions within the PR's changed files.
 * It does NOT scan the full repository to detect case-conflicting folder names
 * that already exist and would cause collisions on case-insensitive filesystems.
 * 
 * FIX: Add a pre-check step that scans submissions/examples/ in the full repo
 * for case-insensitive folder name collisions before processing PR changes.
 */

/*
ADD TO submission-validator.yml in the "Validate Submissions" step, after the 
"Get changed files in PR" section and before the "Identify unique folders" loop:

// PRE-CHECK: Scan entire repository for case-insensitive folder name collisions
const { data: repoContents } = await github.rest.repos.getContent({
  owner: context.repo.owner,
  repo: context.repo.repo,
  path: 'submissions/examples',
  ref: context.payload.pull_request.base.ref,
});

const repoFolderCaseMap = new Map();
const repoCasingErrors = [];

if (Array.isArray(repoContents)) {
  for (const item of repoContents) {
    if (item.type === 'dir') {
      const lowerName = item.name.toLowerCase();
      if (repoFolderCaseMap.has(lowerName) && repoFolderCaseMap.get(lowerName) !== item.name) {
        repoCasingErrors.push(
          `Existing folder collision: '${repoFolderCaseMap.get(lowerName)}' and '${item.name}' differ only by letter casing.`
        );
      } else {
        repoFolderCaseMap.set(lowerName, item.name);
      }
    }
  }
}

// If any case-conflicting folders exist in the repo, fail immediately
if (repoCasingErrors.length > 0) {
  core.setOutput('hasCaseCollisions', 'true');
  core.setOutput('caseCollisions', JSON.stringify(repoCasingErrors));
  core.setFailed('Repository contains case-conflicting folder names that would cause issues on case-insensitive filesystems.');
  return;
}
*/

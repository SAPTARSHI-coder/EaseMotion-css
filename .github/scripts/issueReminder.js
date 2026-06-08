// tell commentoer how to use bot commands
module.exports = async ({ github, context }) => {
  //Guard clauses: Ignore PRs and Bots
  if (context.payload.issue.pull_request) return;
  if (context.payload.comment.user.type === 'Bot') return;

  const { owner, repo } = context.repo;
  const issueNumber = context.payload.issue.number;

  // Fetch the latest issue state to prevent race conditions on closed issues
  const { data: issue } = await github.rest.issues.get({
    owner, repo, issue_number: issueNumber
  });

  if (issue.state === 'closed') return;

  const commentBody = context.payload.comment.body.toLowerCase();

  if (commentBody.includes('/claim') || commentBody.includes('/assign')) {
    return;
  }

// predefined comments
  const triggerPhrases = [
    'assign this issue to me',
    'assign this to me',
    'please assign me',
    'can i work on this',
    'can i take this',
    'i would like to work on this',
    'i want to work on this',
    "i'd like to work on this",
    'id like to work on this',
    'i want to take this issue',
    'i want to fix this',
    'i want to contribute',
    'let me work on this',
    'let me take this',
    'can i be assigned',
    'assign me to this',
    'assign me this',
    'work on this',
    "i'll work on this",
    'ill work on this',
    'i can work on this',
    'i am interested in this',
    'assign',
    "i'm interested in this"
  ];

  // Check if the comment contains any of the trigger phrases
  const needsReminder = triggerPhrases.some(phrase => commentBody.includes(phrase));
  if (!needsReminder) {
    return;
  }

  // Gather context variables
  const commenter = context.payload.comment.user.login;
  const issueAuthor = context.payload.issue.user.login;
  const { owner, repo } = context.repo;
  const issueNumber = context.payload.issue.number;

  // Check if the commenter is already assigned
  const assignees = context.payload.issue.assignees.map(a => a.login.toLowerCase());
  if (assignees.includes(commenter.toLowerCase())) return;

  const bodyLines = [
    `Hey @${commenter}! 👋 Thanks for your interest in contributing!`,
    ``,
    `To keep our workflow organized, we use an automated assignment system. If you'd like to take this on, please use our bot command:`,
    ``,
    `## How to Claim an Issue`,
    `💬 Reply to this issue with exactly: \`/claim\``,
    ``,
    `## 📋 Things to Remember`,
    `- You can hold a **maximum of 1 open issues** at a time.`,
    `- Make sure to read our **[CONTRIBUTING.md](https://github.com/${owner}/${repo}/blob/main/CONTRIBUTING.md)**.`
  ];

  // Post comment
  await github.rest.issues.createComment({
    owner,
    repo,
    issue_number: issueNumber,
    body: bodyLines.join('\n'),
  });
};
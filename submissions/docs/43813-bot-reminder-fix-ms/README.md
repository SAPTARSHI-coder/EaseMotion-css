# Prevent Duplicate Reminder Comments from Assignment Bot

Resolves #43813.

### What does this do?
Fixes a bug in the `.github/scripts/issueReminder.js` workflow where the GitHub Actions bot would post duplicate "Hey @user! Thanks for your interest..." comments every time a user posted a comment matching a trigger phrase, instead of only doing it once.

### How is it used?
The fixed script is provided in this directory. The maintainer can safely copy `issueReminder.js` over the existing script located at `.github/scripts/issueReminder.js`.

### Why is it useful?
Users often reply multiple times with "I want to work on this!" or "assign me" before figuring out the correct `/claim` command. The bot replying multiple times to the same user litters the issue timeline and creates unnecessary notification spam. This fix introduces a check against existing comments to ensure the bot only sends the welcome template once per user per issue.

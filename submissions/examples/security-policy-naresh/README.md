# Security Policy Update Submission

## 1. What does this do?
This submission proposes updates to the repository's `SECURITY.md` file to include an explicit "Out-of-Scope Items" section and a thank-you note in the "Acknowledgements" section to show appreciation for responsible disclosure. It also provides an interactive security policy viewer as a demo.

## 2. How is it used?
The proposed updates are documented in the local `SECURITY.md` file within this submission folder. A beautiful interactive viewer is provided as `demo.html` to preview the updated security guidelines.

## 3. Why is it useful?
Having a comprehensive security policy (including clear boundaries for what is in and out of scope) ensures security researchers know exactly how to report vulnerabilities responsibly. Appreciating researchers helps build trust and standardizes communication between the community and the maintainers.

---

## 🛠️ Integration Instructions for Maintainers
Since contributors cannot modify root-level or core configuration files directly (like the root `SECURITY.md`) due to the repository's strict code integrity validation rules, the maintainer should integrate these changes by:

1. Copying the updated security policy content from [SECURITY.md](./SECURITY.md) (inside this submission folder).
2. Overwriting or merging the content into the root [SECURITY.md](../../../SECURITY.md) file of the repository.

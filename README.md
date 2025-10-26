# michinglishapp – Vocabulary Puzzle Contribution Guide

> **Audience:** Student teams contributing new content to the **Vocabulary Puzzle** section.
>
> **Workflow:** Fork-based GitFlow with protected branches and individual student contributions.

---

## 1) Overview
This repository powers **michinglishapp**, a React-based learning app. Your task is to contribute **Vocabulary Puzzle** content (e.g., *adjectives, adverbs, animals, colors, familymembers, feelings,* etc.) following the folder and JSON structure required for the app to load the puzzles correctly.

Each student contributes using their **own student code** as the folder name (e.g., `1802038-5555`), not by group names.

---

## 2) Contribution model (Fork + GitFlow)
We use a **fork-first** approach and a simplified **GitFlow** model:

1. **Fork** the professor’s repo: `https://github.com/fredyunivalle/michinglishapp` to your personal GitHub account.
2. Do **not** work directly on `main` or `develop` — treat them as **protected branches**.
3. The **team leader** creates a **shared integration branch** in the fork, e.g.:
   - `feature/Group9`
   - All student contributions will ultimately be merged into this branch.
4. **Each student creates their own feature branch** off the leader’s branch and works there **(never on `main` or `develop`)**:
   - Naming: `feature/<student-code>/<topic>`
   - Examples: `feature/1802038-5555/adjectives`, `feature/1888888-5555/feelings`
5. When a student is confident their contribution is ready, they open a **PR targeting the leader’s branch** (`feature/Group9`).
   - Request **≥ 1 human reviewer** (a teammate) **and GitHub Copilot** as reviewer.
   - Fix comments, ensure tests pass, then the **leader merges** (prefer **Squash & Merge**).
6. Once all members’ PRs are merged and the group branch is green (tests pass, app works), the **leader opens ONE PR** from `feature/Group9` → **professor’s `develop`** branch.

> ✅ Never open PRs directly from student branches to the professor’s repo. All student work flows through the group branch.

---

## 3) Branch rules & required reviews
- **Never** commit directly to `main` or `develop`.
- Each PR must:
  - Include at least **one human reviewer** (a teammate).
  - Include **GitHub Copilot** as a reviewer (if available).
  - Pass all tests using `npm test`.

---



## 5) Folder & file structure for Vocabulary Puzzle
All content is stored under `public/vocabulary/<topic>/`. Each **student** must create a folder named exactly as their **student code** (e.g., `1802038-5555`), containing an `info.json` file. The `index.json` file lists all these student folders.

```
public/
  vocabulary/
    adjectives/
      index.json
      1802038-5555/
        info.json
      1888888-5555/
        info.json
    feelings/
      index.json
      1909090-3333/
        info.json
```

### 5.1 `index.json` (topic index)
Lists which folders should be loaded by the app for that topic:
```json
{
  "folders": [
    "1802038-5555",
    "1888888-5555"
  ]
}
```

### 5.2 `info.json` (student data)
Each student provides their **username**, **profile image**, **social link**, and **exactly four (4)** vocabulary pairs.

**Example:**
```json
{
  "user": {
    "username": "Fredy Ball",
    "profileImage": "https://static.wikia.nocookie.net/multiversus/images/a/ac/Superman_Portrait_Full.png",
    "socialLink": "@fredyballest"
  },
  "words": [
    { "id": 1, "en": "happy", "es": "feliz" },
    { "id": 2, "en": "tall",  "es": "alto" },
    { "id": 3, "en": "cold",  "es": "frío" },
    { "id": 4, "en": "strong","es": "fuerte" }
  ]
}
```

**Rules:**
- Each `info.json` must contain **exactly four (4)** word pairs.
- The folder name must match the **student’s code**.
- JSON must be valid and properly formatted.
- Each `id` must be unique within the file.
- The `en` and `es` values should be short, clear, and properly spelled.

---

## 6) Quality checklist
Before submitting the final PR:
- [ ] Each student folder name equals their student code.
- [ ] The topic folder (`adjectives`, `feelings`, etc.) includes all team members’ folders listed in `index.json`.
- [ ] Each `info.json` has exactly 4 word pairs.
- [ ] JSON is valid.
- [ ] Tests pass (`npm test`).
- [ ] The app runs and displays all the new puzzles correctly.

---

## 7) Pull Request flow
### Inside your fork (students → leader)
1. Students create branches off the group branch: `feature/<student-code>/<topic>` → target `feature/Group9`.
2. Open PRs to `feature/Group9` with ≥1 teammate + Copilot as reviewers.
3. Address feedback; ensure `npm test` passes and the app shows your dataset.
4. **Leader** merges approved PRs into `feature/Group9` (Squash & Merge).

### From leader → professor’s repo
When the group branch is stable and all contributions are integrated:
- Open **one** PR from `feature/Group9` → `develop` on `fredyunivalle/michinglishapp`.
- Include:
  - Summary of student folders added.
  - Checklist of validations completed.
  - Screenshots/GIFs and test output.

---

## 8) Commit and PR conventions
- Use prefixes: `feat:`, `fix:`, `docs:`, `chore:`.
- Example PR title: `feat(vocabulary): add adjectives puzzle for Group9`.
- Keep commits clean and descriptive.

---

## 9) Common mistakes
- ❌ Folder name not matching student code.
- ❌ Forgetting to include folder in `index.json`.
- ❌ More or fewer than 4 words in `info.json`.
- ❌ Opening PRs directly to the professor’s repo from individual students.
- ❌ Editing `main` or `develop` directly.

---

## 10) Testing
Before submitting:
```bash
npm test
```
Ensure your dataset passes the vocabulary validation tests.

---

## 11) Questions
If you encounter issues, open a **Discussion** or **Issue** in your fork and tag your team leader.

**Happy coding and good luck! 🧩**


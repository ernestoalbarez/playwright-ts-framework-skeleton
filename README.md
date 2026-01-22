# Playwright TypeScript Automation Framework Skeleton

A robust, production-ready skeleton for End-to-End (E2E) automation. This boilerplate focuses on maintainability, type safety, and developer experience using Playwright and TypeScript.

---

## Key Features

* **Type-Safe Testing:** Full TypeScript integration.
* **Modern Linting:** ESLint v9 (Flat Config) & Prettier for uncompromising code quality.
* **Git Hooks:** Automated pre-commit checks with Husky and lint-staged.
* **Architecture Ready:** Structured for Page Object Model (POM), custom fixtures, and utility helpers.
* **Optimized CI/CD:** Ready for headless execution and automated reporting.

---

## Project Structure

```text
├── tests/e2e/          # Test suites & E2E scenarios
├── pages/              # Page Object Models (POM)
├── fixtures/           # Custom Playwright fixtures
├── utils/              # Shared helper functions
├── playwright-report/  # Test execution artifacts (Git ignored)
└── eslint.config.js    # Modern ESLint configuration
```

---

## Getting Started

**Prerequisites**
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

**Installation**
1. Clone this template:
```bash
git clone <repo-url>
cd <project-folder>
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright Browsers:
```bash
npx playwright install
```

---

## Available Scripts
| Command | Action |
| :--- | :--- |
| `npm test` | Executes all Playwright tests |
| `npm run lint` | Runs ESLint to check for code issues |
| `npm run format` | Auto-formats code using Prettier |

> **Note:** Pre-commit hooks will automatically run `lint` and `format` on staged files to ensure code consistency.

---

## Best Practices Included

- **Isolation:** Each test runs in its own browser context.
- **Scalability:** Folder structure follows the Page Object Model pattern.
- **Clean Code:** Ignored directories (dist/, playwright-report/) keep the workspace clutter-free.

---

##  License

This project is licensed under the **MIT License**.

---

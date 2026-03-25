![E2E Tests](https://github.com/ernestoalbarez/playwright-ts-framework-skeleton/actions/workflows/playwright.yml/badge.svg)
![Node](https://img.shields.io/badge/node-18+-339933?logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-strict-3178C6?logo=typescript&logoColor=white)
![Playwright](https://img.shields.io/badge/playwright-e2e-45ba63?logo=playwright&logoColor=white)
![Tests](https://img.shields.io/badge/tests-playwright-2EAD33?logo=playwright&logoColor=white)
![Lint](https://img.shields.io/badge/lint-eslint%20v9-4B32C3?logo=eslint&logoColor=white)
![Format](https://img.shields.io/badge/code%20style-prettier-F7B93E?logo=prettier&logoColor=black)
![Git Hooks](https://img.shields.io/badge/git%20hooks-husky-000000?logo=git)
![Commit Quality](https://img.shields.io/badge/lint--staged-enabled-brightgreen)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-success)
![Coverage](https://img.shields.io/badge/coverage-90%25-brightgreen)
![Reports](https://img.shields.io/badge/reports-allure-purple)


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

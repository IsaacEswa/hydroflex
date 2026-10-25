# Contributing

## General

- Always English
- Descriptive and spelled out, no abbreviations (button, not btn)

### HTML and CSS: kebab-case

- Classes, ids, custom properties
- `contact-form`, `header-trigger`, `--primary-color`
- Not `contactForm`, `myForm`, `color-1`

### JavaScript: camelCase

- Variables and functions
- `initHeader`, `apiUrl`
- Not PascalCase for functions

### Svelte components: PascalCase

- `MemberCard.svelte`, `SquadGrid.svelte`


| Where                  | Style      | Example             |
| ---------------------- | ---------- | ------------------- |
| class / id / css var   | kebab-case | `.contact-form`     |
| JS variable / function | camelCase  | `getMembers`        |
| Component file         | PascalCase | `MemberCard.svelte` |

Also: `const` unless you need to reassign, never `var`.

## Git

### Naming branches

**Purpose prefixes** describe the intent of the work:

- `feature/` (or `feat/`): for new features (e.g. `feature/add-login-page-22`, `feat/add-login-page-22`)
- `bugfix/` (or `fix/`): for bug fixes (e.g. `bugfix/fix-header-bug-18`, `fix/header-bug-18`)
- `hotfix/`: for urgent fixes (e.g. `hotfix/security-patch-56`)
- `release/`: for branches preparing a release (e.g. `release/v1.2.0`)
- `chore/`: for non-code tasks like dependency or docs updates (e.g. `chore/update-dependencies`)

**Rules:**

- **Use lowercase alphanumerics, hyphens, and dots:** always use lowercase letters (a-z), numbers (0-9), and hyphens (`-`) to separate words. Avoid special characters, underscores, or spaces. For release branches, dots (`.`) may be used in the description to represent version numbers (e.g. `release/v1.2.0`).
- **No consecutive, leading, or trailing hyphens or dots:** ensure that hyphens and dots do not appear consecutively (e.g. `feature/new--login`, `release/v1.-2.0`), nor at the start or end of the description (e.g. `feature/-new-login`, `release/v1.2.0.`).
- **Keep it clear and concise:** the branch name should be descriptive yet concise, clearly indicating the purpose of the work.
- **Include ticket numbers:** if applicable, include the ticket number from your project management tool to make tracking easier. For example, for a ticket `issue-123`, the branch name could be `feature/issue-123-new-login`.

Source: https://conventionalbranch.org/#branch-naming-prefixes

## Folder structure

We use atomic design, so our folder structure becomes, for example:

```
src/
├── lib/
│   ├── atoms/
│   │   ├── Button.svelte
│   │   ├── Heading.svelte
│   │   └── Avatar.svelte
│   ├── molecules/
│   │   ├── SearchForm.svelte
│   │   └── MemberCard.svelte
│   ├── organisms/
│   │   ├── Header.svelte
│   │   └── SquadGrid.svelte
│   ├── styles/
│   │   └── global.css
│   └── index.js
└── routes/
    ├── +layout.svelte
    ├── +page.svelte
    └── +page.server.js
```

**What goes where**

- **Atoms:** smallest building blocks that do not consist of other components (button, label, icon, input)
- **Molecules:** a few atoms together with one task (label + input + button = search form)
- **Organisms:** larger parts of a page that consist of molecules and atoms (header, footer, grid with cards)
- **Templates and pages:** in SvelteKit these are your `+layout.svelte` and `+page.svelte` in `routes/`. So you do not create separate folders for them.

Source: https://atomicdesign.bradfrost.com/chapter-2/

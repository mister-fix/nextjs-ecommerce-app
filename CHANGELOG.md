# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v0.2.0] - 2025-07-22

### Added

- Integrated ShadCN UI components.
- Created custom `Icon` component using `lucide-react`.
- Added `"tensell"` to `cspell` dictionary to prevent false spelling errors.
- GitHub `stale.yml` configuration for issues and pull requests.
- Tensell primary and light colored logo SVGs in the `public` folder.

### Changed

- Updated favicon from default Vercel icon to custom favicon.
- Changed global font to `Inter Tight` with `Inter` as fallback in `layout.tsx` and `globals.css`.
- Simplified `page.tsx` to render a "Hello World" message.

### Fixed

- Punctuation in this CHANGELOG file.

### Refactored

- N/A (no refactors in this release)

### Removed

- Unused default SVG's in the `public` folder.

## [v0.1.1] - 2025-07-22

### Added

- Build workflow for GitHub actions (`.github/workflows/build.yml`).

### Changed

- Set `*.yml` and `*.yaml` files as language-detectable in `.gitattributes`.

### Fixed

- N/A (no fixes in this release)

### Refactored

- N/A (no refactors in this release)

### Removed

- N/A (no removals in this release)

## [v0.1.0] - 2025-07-22

### Added

- Initial Next.js project scaffold.
- Tailwind CSS integration for styling.
- Home page component (`src/app/page.tsx`) with Next.js and Vercel branding.
- Custom font and responsive layout setup.
- Example usage of `next/image` for optimized images.
- `.gitignore` for Node.js, Next.js, and editor files.
- `.npmrc` and `.nvmrc` for package and Node.js version management.
- `CHANGELOG.md` following Keep a Changelog format.
- README with project description, structure diagram, and quick start guide.
- Basic configuration files (`package.json`, `tsconfig.json`, etc.).
- ESLint, Prettier, and commitlint configuration files (`eslint.config.mjs`, `.prettierrc`, `commitlint.config.mjs`).
- Git `pre-commit` and `commit-msg` hooks with `husky`.
- Initialized `shadcn/ui` for UI components.

### Changed

- Log level setting in the `.npmrc` file.
- Project Node version in the `.nvmrc` file.

### Fixed

- Code spell check workflow to ensure the correct `cspell` script is being called.
- [Unreleased] link in this CHANGELOG file.

### Refactored

- N/A (no refactors in this release)

### Removed

- Markdown formatting configuration in the `.prettierrc` file.

[Unreleased]: https://github.com/mister-fix/nextjs-ecommerce-app/compare/v0.2.0...HEAD
[v0.2.0]: https://github.com/mister-fix/nextjs-ecommerce-app/compare/v0.1.1...v0.2.0
[v0.1.1]: https://github.com/mister-fix/nextjs-ecommerce-app/compare/v0.1.0...v0.1.1
[v0.1.0]: https://github.com/mister-fix/nextjs-ecommerce-app/releases/v0.1.0

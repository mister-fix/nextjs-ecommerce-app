# NextJS E-Commerce Application

![License](https://img.shields.io/github/license/mister-fix/nextjs-ecommerce-app?color=blue)
![Version](https://img.shields.io/github/v/tag/mister-fix/nextjs-ecommerce-app?label=version)
![Build](https://img.shields.io/github/actions/workflow/status/mister-fix/nextjs-ecommerce-app/build.yml)
![Last Commit](https://img.shields.io/github/last-commit/mister-fix/nextjs-ecommerce-app?color=yellow)
![Contributors](https://img.shields.io/github/contributors/mister-fix/nextjs-ecommerce-app?color=5d00ff)
![Open Issues](https://img.shields.io/github/issues/mister-fix/nextjs-ecommerce-app?color=ff0000)

A multi-tenant e-commerce platform where sellers can create their own storefronts and manage products independently. Each vendor receives a unique, vendor-specific URL for their store, enabling them to showcase and sell their products directly to customers. The application supports seamless onboarding for new vendors, centralized management for buyers, and scalable architecture for supporting multiple storefronts under one platform. Built with `Next.js`, `React`, `TailwindCSS`, `shadcn/ui`, `Stripe`, and `MongoDB`.

## Quick Start

Follow the steps below to get the **CODStats API** up and running on your local machine.

### Prerequisites

To ensure that the application works as intended on your local machine, make sure you have the following services running with the recommended versions below:

- [Git](https://git-scm.com/downloads): v2.49.0+
- [Node.js](https://nodejs.org/en/about/previous-releases): v22.13.1+
- [npm](https://npmjs.com/package/npm?activeTab=versions): v11.4.2+

### Run Locally

1. **Clone the repository:**

   ```sh
   git clone https://github.com/mister-fix/nextjs-ecommerce-app.git
   cd nextjs-ecommerce-app
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Try Online

You can interact with the application on the web at:
[https://nextjs-ecommerce-app-beta-sooty.vercel.app/](https://nextjs-ecommerce-app-beta-sooty.vercel.app/)

## Project Structure

```ASCII
nextjs-ecommerce-app/
├─ .github/                   # GitHub configuration (actions, issue templates, etc.)
│  ├─ workflows/              # CI/CD workflow definitions for GitHub Actions
├─ .husky/                    # Git hooks for enforcing code quality and commit standards
├─ .vscode/                   # VSCode workspace settings and recommended extensions
├─ public/                    # Static assets (images, favicon, etc.) served at the root
├─ src/                       # Source code for the application
│  ├─ app/                    # Next.js app directory (routing, pages, layouts)
│  ├─ components/             # Reusable UI components
│  ├─ hooks/                  # Custom React.js hooks
│  ├─ lib/                    # Shared libraries, utilities, and helper functions
├─ .editorconfig              # Editor configuration for consistent coding styles
├─ .gitattributes             # Git settings (e.g., line endings, diff behavior)
├─ .gitignore                 # Files and directories to exclude from Git tracking
├─ .npmrc                     # npm configuration (e.g., registry, install options)
├─ .nvmrc                     # Node.js version specification for NVM
├─ .prettierignore            # Files and folders ignored by Prettier formatting
├─ .prettierrc                # Prettier formatting configuration
├─ CHANGELOG.md               # Project changelog following Keep a Changelog format
├─ commitlint.config.mjs      # Commit message linting configuration
├─ components.json            # UI component registry/configuration (if using shadcn/ui)
├─ cspell.json                # Spell-checking configuration for code and docs
├─ eslint.config.mjs          # ESLint configuration for code linting
├─ LICENSE                    # Project license (MIT)
├─ next.config.ts             # Next.js configuration file
├─ package-lock.json          # npm lockfile for reproducible installs
├─ package.json               # Project metadata and dependencies
├─ postcss.config.mjs         # PostCSS configuration for CSS processing
├─ README.md                  # Project overview and documentation
└─ tsconfig.json
```

## Author

Created and maintained by [@mister-fix](https://github.com/mister-fix/).

## Contributors

- [@mister-fix](https://github.com/mister-fix/) 🐉

## License

This project is licensed under the [MIT License](./LICENSE). You can learn more about open-source licenses here:
[choosealicense.com](https://choosealicense.com/).

## Contact

For questions, suggestions, or contributions, open an issue or email:
[hellostephenwm@gmail.com](mailto:hellostephenwm@gmail.com).

## Miscellaneous

- Thanks to [@rxaviers](https://github.com/rxaviers/) for the emoji's used in this project, you can
  [check them out here](https://gist.github.com/rxaviers/7360908).
- Badges and shields used in the project markdown files are generated by [img.shields.io](https://img.shields.io/).

# Team Peking 2025 Wiki 👏

This repository contains the source code for the Team Peking 2025 iGEM team's wiki, built with [Astro](https://astro.build/).

## Project Description

*Helicobacter pylori* (*H. pylori*) infection is a global health issue, affecting more than half of the world's population. It is a major cause of chronic gastritis, peptic ulcer disease, and gastric cancer. This year, Team Peking 2025 started the **HpBuster Project** aims to develop a novel therapeutic strategy to combat *H. pylori* infection, addressing the challenges of antibiotic resistance and the side effects of current treatments.

## Technology Stack

-   **[Astro](https://astro.build/)**: The web framework used to build the wiki.
-   **[React](https://reactjs.org/)**: Used for interactive components.
-   **[Tailwind CSS](https://tailwindcss.com/)**: For styling the wiki.
-   **[MDX](https://mdxjs.com/)**: For writing content with JSX components.
-   **[TypeScript](https://www.typescriptlang.org/)**: For type-safe code.
-   **[Katex](https://katex.org/)**: For rendering mathematical formulas.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version specified in `.nvmrc`)
- [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://gitlab.igem.org/2025/peking.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd peking
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Development

To start the local development server, run the following command:

```bash
npm run dev
```

This will start a development server at `http://localhost:4321/`.

### Available Scripts

-   `npm run dev`: Starts the development server.
-   `npm run start`: Starts the development server.
-   `npm run build`: Builds the project for production.
-   `npm run preview`: Previews the production build locally.

## Deployment

The wiki is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The deployment process is defined in the `.github/workflows/deploy.yml` file.

## Project Structure

-   `src/`: Contains the source code of the project.
    -   `assets/`: Static assets like images and stylesheets.
    -   `components/`: Reusable Astro components.
    -   `content/`: Markdown files for the wiki pages.
    -   `layouts/`: Layout components for different page types.
    -   `pages/`: Astro pages.
-   `public/`: The output directory for the production build.
-   `static/`: Static files that are copied to the root of the `public` directory.
-   `astro.config.mjs`: The Astro configuration file.
-   `package.json`: The project's dependencies and scripts.

## Contribution

The code framework of this repository is derived from [Accessible-Astro-Starter](https://github.com/incluud/accessible-astro-starter) and is licensed under [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/). 

Any further derivative work of this repository must also adhere to iGEM Wiki Requirements (static assets requirement and so on).

As our effort to help developing the iGEM community, we welcome any further work based on this repository.

***Have a Good Day, iGEMers!👋***"# aigc-art" 

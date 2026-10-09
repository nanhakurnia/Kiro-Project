# Components

Reusable HTML section partials for the portfolio. Each file is a self-contained
markup block that mirrors a section rendered in `index.html`. For this static
build they document the component boundaries and can be dropped into a build
step (e.g. an include/templating tool) if the project later adds one.

## Available components

| File | Section |
|------|---------|
| `navbar.html` | Top navigation bar |
| `hero.html` | Fullscreen landing / hero |
| `about.html` | About + animated stats |

> Sections currently live in `index.html` for zero-dependency hosting. These
> partials are kept in sync as the single source of truth for each block.

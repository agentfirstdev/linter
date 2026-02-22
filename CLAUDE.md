# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Agent First** shared linting configuration, distributed as a Git submodule to other
Agent First projects. It provides standardized rules for JavaScript, JSX, JSON, CSS, and SQL files.

There is no build step, no test suite, and no `scripts` in `package.json`. This repo is consumed
entirely by parent projects that reference its config files.

## Commands

All linting commands are run from a **parent project** that includes this repo as a submodule.
Within this repo itself, the only relevant command is installing dependencies:

```shell
npm i
```

Parent projects wire up these scripts (paths assume the submodule is at `./linter`):

```shell
# JS/JSX/JSON
npx --prefix linter eslint -c linter/eslint.config.js [file]

# CSS
npx --prefix linter stylelint --config linter/.stylelintrc.json [file]

# SQL
npx --prefix linter prettier --config linter/.prettierrc --check [file]
```

## Architecture

```
eslint.config.js          Main ESLint flat config (ESLint 10, defineConfig)
  reads .prettierrc        Prettier formatting rules (100-char lines, single quotes, no trailing commas)
.prettierrc                Also configures SQL formatting via prettier-plugin-sql
.stylelintrc.json          CSS linting (stylelint-config-standard, relaxed naming patterns)
```

`eslint.config.js` defines three config blocks:

1. **JS/JSX** (`**/*.{js,mjs,cjs,jsx}`) -- ESLint recommended + React plugin + Prettier as
   warnings. Both `globals.node` and `globals.browser` are enabled. Unused vars prefixed with `_`
   are ignored.
2. **CommonJS** (`**/*.cjs`) -- overrides sourceType to `commonjs`.
3. **JSON** (`**/*.json`) -- parsed with `jsonc-eslint-parser`, formatted via Prettier.

The project uses ES modules (`"type": "module"` in `package.json`).

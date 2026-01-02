# ![Agent First](assets/social/logotype-optimized.png) [![X post](assets/social/x-post-optimized.png)](https://x.com/intent/post?text=Enhance%20your%20AI%20agent%20with%20research%20and%20browsing%20abilities%3A&url=https%3A%2F%2Fagentfirst.dev%2F%3Fref%3Dgithub&via=agentfirstdev)

_The missing services for agent-first development_

## House linter

The **Agent First** linter applies standardized linting to JavaScript, JSX, JSON, and (PL/pgSQL) SQL
files.

## Usage

To add the linter to a project, follow the steps below:

1. Go to the project directory where you want to add the linter.
2. Download the code to your directory:

   ```shell
   $ git submodule add https://github.com/agentfirstdev/linter
   $ git submodule update --init --recursive
   ```

3. Extend your project’s `package.json` file with and a `scripts` object, if necessary, and members
   of the object for running the linter:

   ```jsonc
   // ...
   "scripts": {
     // ...
     "lint": "npx eslint -c linter/eslint.config.js",
     "lint-sql": "bash -c 'diff -u \"$1\" <(./linter/3p/pgFormatter/pg_format -c linter/.pg_format \"$1\")' --"
   },
   // ...
   ```

4. Switch to the linter directory then import its dependencies:

   ```shell
   $ cd linter
   $ npm i
   ```

5. Lint any JS, JSX, or JSON file in your project thereafter:

   ```shell
   $ cd ..
   $ npm run lint -- [filename]
   ```

   If prompted on first run, agree to import the specified version of ESLint:

   ```console
     Need to install the following packages:
     eslint@[version]
     Ok to proceed? (y)
   ```

   Alternatively, lint any SQL file:

   ```shell
   $ npm run lint-sql -- [filename]
   ```

## Clients

The linter was developed with these projects:

* [Agent First website](https://github.com/agentfirstdev/www)
* [Agent First documentation](https://github.com/agentfirstdev/doc)
* [Agent First whitelabel resources](https://github.com/agentfirstdev/whitelabel)

## License

Copyright 2025– Agent First Dev, LLC.

This program is free software, excluding the brand features and third-party portions of the program
identified in the [Exceptions](#exceptions) below: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software Foundation, either
version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
[GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.html) for more details.

## Exceptions

The **Agent First** logos, trademarks, domain names, and other brand features used in this program
cannot be reused without permission and no license is granted thereto.

# Agent First linter

The Agent First linter applies standardized linting configuration.

## Usage

To add the linter to a project, follow the steps below:

1. Go to the directory where you want to add the linter.
2. Download the code:

   ```shell
   $ git submodule add https://github.com/agentfirstdev/linter
   ```

3. Add a `scripts` property, if necessary, to your project’s `package.json` file and a command for
   running the linter to the property:

   ```json
   …
   "scripts": {
     …
     "lint": "npx eslint --config linter/eslint.config.js"
   },
   …
   ```

4. Switch to the linter directory then import the dependencies:

   ```shell
   $ cd linter
   $ npm i
   ```

5. Lint any file afterward:

   ```shell
   $ npm run lint -- [Insert filename here]
   ```

6. If prompted, agree to install the given version of ESLint:

   ```console
     Need to install the following packages:
     eslint@9.37.0
     Ok to proceed? (y) 
   ```

## Clients

The linter was developed with these projects:

* [Agent First website](https://github.com/agentfirstdev/www)
* [Agent First documentation](https://github.com/agentfirstdev/doc)
* [Agent First whitelabeling resources](https://github.com/agentfirstdev/whitelabel)

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

The Agent First logos, trademarks, domain names, and other brand features used in this program
cannot be reused without permission and no license is granted thereto.

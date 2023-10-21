Writing clear and informative commit messages is essential for effective collaboration in version control systems like Git. A well-structured commit message helps you and your collaborators understand the purpose and context of a particular change. There's no one-size-fits-all standard for commit messages, but a commonly followed convention is the "Conventional Commits" format. This format makes it easy to generate changelogs and automate certain release processes. Here's an example of a commit message in the Conventional Commits format:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Here's a breakdown of each part:

1. `<type>`: Describes the purpose of the commit. It's typically one of the following:
   - `feat`: A new feature.
   - `fix`: A bug fix.
   - `docs`: Documentation changes.
   - `style`: Code style changes (e.g., formatting).
   - `refactor`: Code refactoring without adding features or fixing bugs.
   - `test`: Adding or modifying tests.
   - `chore`: Routine tasks, maintenance, or other non-code changes.

2. `<scope>`: Optional. Describes the scope of the commit, which can be a specific module, component, or feature. It helps to narrow down where the change occurred.

3. `<description>`: A brief, imperative statement of what the commit does. It should be in the present tense and start with a verb.

4. `[optional body]`: Optional. Provides additional context, motivation, or details about the change. Separate it from the header using a blank line.

5. `[optional footer]`: Optional. Used for providing references to issues or other commits, possibly in the form of "Closes #123" or "Fixes #456."

Here's an example commit message:

```
feat(auth): add user authentication

- Implemented user registration and login functionality.
- Used bcrypt for password hashing.
- Added token-based authentication.
- Created user profile page for managing user details.
- Improved error handling for authentication errors.
- Closes #123, Fixes #124
```

In this example:

- `<type>` is `feat` (for a new feature).
- `<scope>` is `auth` (indicating the scope of the change within the codebase).
- `<description>` is "add user authentication."
- The body provides more details about what the feature does.
- The footer references issues that are being closed or fixed by this commit.

Using a consistent format for commit messages like this can greatly improve collaboration, code review, and release management in your Git project.
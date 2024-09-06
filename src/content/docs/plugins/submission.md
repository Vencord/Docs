---
title: Plugin Submission
description: How to submit your plugin to the official Vencord repository
---

Submitting a plugin to Vencord allows you to share your work with the community and have it included in the official Vencord releases. Follow this guide to submit your plugin for consideration.

## Prerequisites

Before submitting your plugin, ensure that:
- Your plugin is fully developed and tested (refer to the [Creating Plugins guide](/plugins/creating) for help).
- You have a GitHub account and are familiar with basic Git commands.
- Your plugin adheres to the code quality, structure, and naming conventions used in Vencord (e.g., camelCase for plugin folder names).

## Submission Process

The submission process involves forking the Vencord repository, adding your plugin, and creating a pull request for review by the maintainers.

### Step 1: Fork the Vencord Repository

1. Go to the official [Vencord GitHub repository](https://github.com/Vendicated/Vencord).
2. Click the **Fork** button in the top-right corner to create a copy of the repository under your GitHub account.
3. Clone the forked repository to your local machine:
   ```bash
   git clone https://github.com/YourUsername/Vencord
   cd Vencord
   ```

### Step 2: Add Your Plugin

1. Navigate to the `src/plugins` folder in your cloned repository:
   ```bash
   cd src/plugins
   ```
2. Create a new folder for your plugin using camelCase (e.g., `myFirstPlugin`):
   ```bash
   mkdir myFirstPlugin
   ```
3. Add your plugin files (`index.ts`, `README.md`, and optionally `native.ts`):
    - **`index.ts`**: This is the main entry point for your plugin's code.
    - **`README.md`**: Document your plugin, explain its functionality, and provide installation instructions and usage examples.
    - **`native.ts`** (optional): If your plugin uses Node.js APIs, include this file.
  
   Make sure the `README.md` includes:
   - A short description of your plugin.
   - Instructions for installing and using the plugin.
   - Screenshots, GIFs, or videos if applicable to showcase your plugin.

### Step 3: Commit Your Changes

1. Add your changes to git:
   ```bash
   git add src/plugins/myFirstPlugin
   ```
2. Commit your changes with a descriptive message:
   ```bash
   git commit -m "Add myFirstPlugin"
   ```
3. Push the changes to your forked repository:
   ```bash
   git push origin main
   ```

### Step 4: Create a Pull Request

1. Go to your GitHub fork of the Vencord repository.
2. Click on the **Pull Requests** tab and then click **New Pull Request**.
3. Ensure that the base repository is `Vendicated/Vencord` and the base branch is `main`.
4. Provide a detailed description of your plugin, outlining what it does and any important information maintainers should know.

### Step 5: Review Process

After submitting the pull request, the Vencord maintainers will review your plugin. During this process:
- You may receive feedback or requests for changes. Be responsive and adjust your plugin as needed.
- The review ensures your plugin meets Vencord's standards for quality, security, and performance.

Once the review is complete, your plugin will be merged into the `main` branch and included in future official Vencord releases.

## License and Credits

All plugins submitted to Vencord must include a license header. When you commit your plugin, a license header will automatically be added to the top of your `index.ts` file:

```ts
/*
 * Vencord, a Discord client mod
 * Copyright (c) ${new Date().getFullYear()} Vendicated and contributors*
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
```

If you prefer, you may change the `Vendicated and contributors` portion to your own name, but this is not strictly required as you will be included in the "contributors" group automatically.

---

By following this guide, you can submit your plugin for official inclusion in Vencord. Make sure your plugin is thoroughly tested and well-documented to streamline the review process and ensure its acceptance.

For further assistance, feel free to ask for help in the [Vencord community channels](https://vencord.dev).

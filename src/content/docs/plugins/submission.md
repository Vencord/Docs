---
title: Plugin Submission
description: How to submit your plugin to the official Vencord repository
---

### How to submit your pre-made plugin to the official Vencord repository

If you have already developed a plugin and want to include it as a built-in plugin in Vencord, follow this guide to submit your plugin for consideration.

## Prerequisites

Before submitting your plugin, ensure that:
- Your plugin is fully developed, tested, and follows the [Creating Plugins guide](/plugins/creating).
- You have a GitHub account and are familiar with basic Git commands.
- Your plugin adheres to Vencord's code quality, structure, and naming conventions (e.g., camelCase for plugin folder names).

## Submission Process

The process involves forking the Vencord repository, adding your plugin, and creating a pull request for review by the maintainers.

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
3. Ensure your `README.md` file is added and includes:
   - A brief description of your plugin.
   - Screenshots, GIFs, or videos if applicable to showcase your plugin.

> Since this is for a built-in plugin, no installation instructions are required.

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
3. Ensure the base repository is `Vendicated/Vencord` and the base branch is `dev`. If you select `main`, maintainers will switch it to `dev` anyway.
4. Provide a detailed description of your plugin, outlining what it does and any important information for maintainers.

### Step 5: Review Process

After submitting the pull request, the Vencord maintainers will review your plugin. During this process:
- You may receive feedback or requests for changes. Be responsive and adjust your plugin as needed.
- The review ensures your plugin meets Vencord's standards for quality, security, and performance.

Once the review is complete, your plugin will be merged into the `dev` branch and included in future Vencord releases.

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

For further assistance, feel free to ask for help in the [Vencord community channels](https://vencord.dev/discord).

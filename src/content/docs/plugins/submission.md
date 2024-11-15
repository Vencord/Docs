---
title: Plugin Submission & Updates
description: Vencord Plugin submission and updates guide
---

This guide describes steps on how to release a new plugin to Vencord and to make changes to existing plugins.

## Initial Plugin Submission

### Pre-submission Checklist

- Your plugin folder has a camelCase name (e.g., `myAwesomePlugin`).
- `README.md` is in your plugin folder with a description, usage instructions, and usage examples.
- Your plugin's code adheres to Vencord's coding standards.
- You have thoroughly tested your plugin.

### Submission Steps

1. **Fork the Repository**: Go to [https://github.com/Vendicated/Vencord](https://github.com/Vendicated/Vencord) and click "Fork".

2. **Set Up Your Local Environment**:
   
   If you haven't installed Vencord for development:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Vencord.git
   cd Vencord
   ```

   If you've already installed Vencord with userplugins:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/Vencord.git
   git remote add upstream https://github.com/Vendicated/Vencord.git
   ```

3. **Add Your Plugin**: Place your plugin folder in the `Vencord/src/plugins/` directory.

4. **Create a Branch**:
   ```bash
   git checkout -b add-plugin/yourPluginName
   ```

5. **Commit Your Plugin**:
   ```bash
   git add src/plugins/yourPluginName
   git commit -m "feat(Plugin): YourPluginName"
   ```
   Replace 'YourPluginName' with your actual plugin name.

6. **Push to Your Fork**:
   ```bash
   git push -u origin add-plugin/yourPluginName
   ```

7. **Open a Pull Request**:
   - Navigate to your fork on Github
   - Click "Pull request"
   - Set base repository to `Vendicated/Vencord` and base branch to `dev`
   - Title your PR "feat(Plugin): YourPluginName"
   - Provide a clear explanation of what your plugin does in the description

### Review Process

- Vencord maintainers will review your submission.
- Respond to feedback and requested changes promptly.
- Be prepared for potential modifications to your plugin.

### Common Pitfalls

- Ensure the plugin folder name matches the one used in the commit message and PR title.
- Only commit files within your plugin's directory, unless absolutely necessary.
- Verify that your plugin doesn't conflict with existing Vencord functionality.

### Additional Notes

- For including screenshots or images, please attach them in the GitHub issue comments. There's a dedicated issue thread for this purpose.

## Updating Your Plugin

After your plugin is merged, you may need to make updates or corrections.

1. **Sync Your Fork**:
   ```bash
   git checkout dev
   git fetch upstream
   git merge upstream/dev
   git push origin dev
   ```

2. **Create a Branch for Your Update**:
   ```bash
   git checkout -b update-plugin/yourPluginName-briefDescription
   ```

3. **Make Your Changes**: Modify files in `src/plugins/yourPluginName/`

4. **Commit Your Changes**:
   ```bash
   git add src/plugins/yourPluginName
   git commit -m "YourPluginName: Brief description of changes"
   ```

5. **Push Your Changes**:
   ```bash
   git push -u origin update-plugin/yourPluginName-briefDescription
   ```

6. **Open a New Pull Request**:
   - Go to your fork on GitHub
   - Click "Pull request"
   - Set base repository to `Vendicated/Vencord` and base branch to `dev`
   - Title your PR to match your commit message
   - Provide details about the modifications and their importance

## Best Practices for Updates

- Focus each PR on a specific issue or improvement.
- Test changes thoroughly to avoid introducing new problems.
- Update documentation in README.md if usage changes.
- Adhere to the project's style guide and current practices.

For assistance, join the [Vencord Discord](https://vencord.dev/discord).

Note: It's recommended to familiarize yourself with basic git branching concepts before starting. This will help you navigate the development process more smoothly.

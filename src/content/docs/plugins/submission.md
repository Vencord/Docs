---
title: Plugin Submission & Updates
description: Vencord Plugin submission and updates guide
---

This guide describes steps on how to release a new plugin to Vencord and to make changes to the already existing plugin. 

## Initial Plugin Submission 

### Pre-submission Checklist 

- The folder in which stores your plugins should have camelCase name (for instance, `myAwesomePlugin`). 
- `README.md` is in your plugin folder with a description, usage instructions, screenshots(if any) 
- The coding of your plugin adheres to Vencord’s coding standards 
- This is the best because probably, you have engaged in rigorous testing of the plugin. 

### Submission Steps 

1. **Fork the Repository**: Go to the specific repository on [https://github.com/Vendicated/Vencord](https://github.com/Vendicated/Vencord) page and select “Fork”. 

2. **Clone Your Fork** 
```bash 
git clone https://github.com/YOUR_USERNAME/Vencord.git 
cd Vencord 
``` 

3. **Add Your Plugin** 
- Make sure that your plugin folder has the correct name (for example ‘myAwesomePlugin’) 
- Next, make a copy of your plugin folder and place it in the `Vencord/src/plugins/` directory. 

4. **Create a Branch** 
```bash 
git checkout -b add-plugin/yourPluginName 
``` 

5. **Commit Your Plugin** 
```bash 
git add src/plugins/yourPluginName 
git commit -m "feat(Plugin): YourPluginName. 
``` 
Note: Replace ‘YourPluginName’ with your own actual plugin name 

6. **Push to Your Fork** 
```bash 
git push –u origin add-plugin/YourPluginName 
``` 

7. **Open a Pull Request** 
- Navigate to the fork that you created earlier on Github 
- Click "Pull request" 
- Set base repository to `Vendicated/Vencord` and base branch to `dev` 
- Title your PR "feat(Plugin): YourPluginName
- In the plugin description, the author should give a clear explanation of what the plugin does. 

### Review Process 

- The Vencord maintainers will simply go through your submission. 
- Reply to any feedback as soon as possible or to changes that were requested 
- It needs to be understood that changes might be made, thus preparing for such changes needs to be in place. 

### Common Pitfalls 

- Please make sure that the folder name of the plugin is the same as the one used in the commit message and the PR title 
- Ensure that you have only committed files only found within your plugin’s directory. 
- Make sure that your plugin does not clash with something that is already implemented in Vencord

## Updating Your Plugin 

Another important action is that after the plugin has been merged you may require adjustments or correction works. Here's how to do that

1. **Sync Your Fork** 
Ensure your fork is up-to-date with the main Vencord repository: 
```bash 
git checkout dev 
git fetch upstream 
git merge upstream/dev 
git push origin dev 
``` 

2. **Opening a New Branch for your Update** 
```bash 
git checkout -b update-plugin/yourPluginName-description 
``` 
Instead of “description”, you should write a short tag of the change (for example, “fix-nitro-loading”). 

3. **Make Your Changes** 
Modify your plugin files in the directory src/plugins/yourPluginName/ 

4. **Commit Your Changes** 
```bash 
git add src/plugins/yourPluginName 
git commit -m "YourPluginName: fix Nitro users can not access the plugin 
``` 
Associated with the commit change, a brief and informative message should be written by the author. 

5. **Push Your Changes** 
```bash 
git push -u origin update-plugin/yourPluginName-description 
``` 

6. **Open a New Pull Request** 
- Go to the fork that you created on GitHub
- Click "Pull request" 
- For base repository select `Vendicated/Vencord` and for base branch select `dev` 
- Make sure that you title your PR in such a way that it would match the commit message that you want to be merged. 
- It is then useful to offers more information about these modifications and why they are vital. 

## Best Practices for Updates 

- Keep changes focused: In order to point out a certain issue or improvement each of the PRs should address one. 
- Test thoroughly: When implementing changes, be careful that you do not develop other problems. 
- Update documentation: If your changes are related to usage, this should be reflected on your plugin’s README.md 
- Try to stick to the current style guide that is used in the project and to the current practices that are adopted in the project. 

For assistance, join the [Vencord Discord](https://vencord.dev/discord). 

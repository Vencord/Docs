---
title: Plugin Submission
description: Submit your plugin for inclusion in Vencord
---

If you made a plugin, and want to submit it for inclusion in Vencord? It's quite easy! You simply need to create a pull request (PR) to Vencord, and the process and guidelines to do so is detailed in this page. Make sure to read and follow them, or your PR might be closed.

If you do not have a [GitHub](https://github.com) account, make one now. It will be needed for the following steps.

## Guidelines

You can read Vencord's [CONTRIBUTING.md](https://github.com/Vendicated/Vencord/blob/main/CONTRIBUTING.md) file to get familiarised with the contribution guidelines. Some plugins have also already been PRed (and, possibly rejected), so make sure to search through Vencord's pull requests to see if that is the case.

On top of that, avoid using AI tools to generate a plugin or pull request.

## Make a fork

To make a PR, you need a fork of the Vencord repository. To do this, go to [Vencord's repository](https://github.com/Vendicated/Vencord), then press the **Fork** button.

:::tip
The following commands are meant to be ran in a terminal, but you can also do this through VSCode!
:::

Then, add that fork as a remote in your Vencord folder, and check out a feature branch:

```sh
git remote add fork YOUR_FORK_URL
git feature -b your-feature # Replace your-feature with a descriptive branch name
```

## Commit your changes

```sh
git add .
git commit
```

Then, push your feature branch to the `fork` remote:
```sh
git push -u fork your-feature
```

## Make a pull request

Once your changes are pushed, go to your fork's GitHub repository, choose your branch in the branch picker, then click on the `Contribute` button to open a pull request.

Here, you will be able to write a short description for your PR, then open it.

Your PR may be reviewed in some time, there is no ETA for review. **Do not bump / reopen a new PR to get it noticed**. If you want to update your PR, you simply need to re-commit to the branch and push it. You do not need to reopen one.

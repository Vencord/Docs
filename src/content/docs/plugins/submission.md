---
title: Plugin Submission
description: How to submit your plugin to the official Vencord repository
---

## Prerequisites

- Latest [Dev Build of Vencord](https://github.com/Vendicated/Vencord)
- Check your code again. Does it meet the rules for a plugin?

1. Plugins that are not possible:
    - Message search changes (like extra filters)
    - Stereo Mic
    - Nitro features not already provided by [FakeNitro](https://vencord.dev/plugins/FakeNitro) or other existing plugins
      (e.g. free animated pfp, higher upload limit)
    - Reading private channels
2. Plugins that spam Discord and thus risk an account suspension:
    - Message Pruner
    - Animated Status
    - Nitro Snipers
    - [Selfbots](https://support.discord.com/hc/en-us/articles/115002192352-Automated-User-Accounts-Self-Bots)

- Plugins that replace text in your messages, like FxTwitter (use [TextReplace](https://vencord.dev/plugins/TextReplace))
- Plugins that just hide UI elements like the gif button (use quick CSS instead)
- Plugins that spy on other users (like FakeDeafen)

## Submitting custom Plugins

Contributions are sent via Pull Requests, aka **PR**s.

:::tip
A great way to get feedback and check the rules is by creating an Issue:

- Head to the [Plugin requests](https://github.com/Vencord/plugin-requests/issues/new) and create a new issue.
   - Make sure that no similar issue or pull request exists already.
   - Make sure to follow any rules given in the [Code of Conduct](/coc) & [Pre-Flight](/plugins/submission/#pre-flight).
:::

:::danger
Violating any of the rules may result in being blocked from creating any further issues.
:::

### Creating a Pull Request
:::caution[Warning]
Pull requests can be made to the `dev` and `main` branch of [Vencord](https://github.com/Vendicated/Vencord). Unless you are an advanced user, you should prefer the `main` branch. This is because the `dev` branch might contain unstable changes and gets force-pushed frequently, which could cause conflicts in your pull request.
:::

Now that you have everything ready, you can start making a pull request to Vencord:

If you are new to Git, check [this Guide](https://opensource.com/article/19/7/create-pull-request-github). **That guide explains how to make pull requests!** 
Make sure that your title mentions you're awaiting approval for a Plugin.

After creating the PR your code will go through checks and needs to get approved before getting pushed into the dev build of Vencord. 

However, if your PR gets denied, don't worry. Vencords Maintainers give comments on approval/denial, so you can always fix any issues. Unless your plugin is in violation of rules.

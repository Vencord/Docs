---
title: The Settings API
description: Add settings to your plugin
sidebar:
    order: 0
---

To improve the user experience, Vencord offers a settings API that you can use to store plugin configuration.

Plugin settings stored using the settings API are also automatically backed up to Vencloud and in local backups made
by users. Therefore, avoid storing sensitive information in them.

## Get started

Import the `definePluginSettings` function from `@api/settings`. 

Then, create a `settings` constant at the top-level and pass it the result of `definePluginSettings`, and pass that constant
to your plugin definition.


```ts ins="settings: definePluginSettings({ })" ins="import { definePluginSettings } from "@api/Settings";"
import { definePluginSettings } from "@api/Settings";

const settings = definePluginSettings({ });

export default definePlugin({
    name: "MyCoolPlugin",
    description: "I am very cute!",
    authors: [Devs.author],
    settings
});
```

## Define settings

In the `definePluginSettings` object, you can add settings in this format:
```json
settingName: {
    type: OptionType.STRING/NUMBER/BOOLEAN...,

    description: "Short description of the setting",

    restartNeeded: false,
    hidden: false // Use this for internal settings
}
```

:::tip
Your setting's key will also be the user-facing name for the setting, and should be in `camelCase` (first word lowercase, others start with uppercase, no spaces).

Vencord will turn the key into a Title Case name. Keep this in mind while naming your settings.
:::

:::note
A full list of option types and their respective properties is available in the Option Types page.
:::

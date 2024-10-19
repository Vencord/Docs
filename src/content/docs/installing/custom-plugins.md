---
title: Installing custom plugins
description: How to install custom plugins in Vencord
---

:::danger

These instructions are provided for **advanced users**.

If you don't understand these instructions, you should not attempt to install custom plugins.

We do not provide support with custom plugins / installs, and you are responsible for any issues that may arise from using them.

If you run into issues and can't figure them out yourself, please stick to the [official Vencord build](https://vencord.dev/download).
:::

*If you want to install a 3rd Party plugin refer to [Installing Unofficial plugins](#installing-unofficial-plugins)*

## Prerequisite

To add custom plugins, you need to build Vencord from source.

If you haven't already done so, first follow the [Installing from Source](/installing) guide. 

The following instructions assume you have already done so.

## Adding plugins

Open your Vencord folder. Inside it, you should find a folder called `src`. This folder houses all of Vencord's source code.

If you don't have this folder, you have not read the previous instructions. Go back and first follow the [Installing from Source](/installing) guide.

### Creating the `userplugins` folder

All official plugins are stored in the `src/plugins` folder.
However, unless you plan to [submit your plugin to the official repository](/plugins/submission), you should not put your plugin there, as you will run into conflicts.

Instead, you will want to use the `src/userplugins` folder. This folder is reserved for custom / private plugins.

This folder won't exist yet, so you'll have to first create it. Navigate to the `src` folder and create a new folder called `userplugins`.

### Adding your plugin

Inside the `userplugins` folder, you can now add your plugin.

Your plugin should be either a simple `myCoolPlugin.ts` or `myCoolPlugin.tsx` file, or a folder containing an `index.ts` or `index.tsx` file.

Place it inside the previously created userplugins folder and [build vencord](#building-vencord)

:::tip[Good]
- `src/userplugins/myCoolPlugin.ts`
- `src/userplugins/myCoolPlugin/index.tsx`
:::

:::danger[Bad]
- `src/userplugins/myCoolPlugin/myCoolPlugin.ts`
- `src/userplugins/coolPlugins/myCoolPlugin/index.tsx`
:::

## Installing Unofficial plugins

:::danger[Remember..]
These instructions are provided for **advanced users**.

If you don't understand these instructions, you should not attempt to install unofficial plugins.

We do not provide support with 3rd Party plugins / installs, and you are responsible for any issues that may arise from using them.

If you run into issues and can't figure them out yourself, please stick to the [official Vencord build](https://vencord.dev/download).
:::

### Adding plugins
1. Find a plugin you like from the [unofficial-plugins](https://discord.com/channels/1015060230222131221/1256395889354997771) channel or another source.
2. Then direct your terminal to the `userplugins` folder, e.g. `src/userplugins`. If you're confused, read the [guide](#creating-the-userplugins-folder) above
3.  Each plugin post will contain a GitHub repo link, like `https://github.com/PluginAuthor/CoolPlugin`. Copy it
Inside your terminal, run
```sh
# direct to userplugins 
cd src/userplugins

# clone repository into userplugins
git clone https://github.com/...
```
### Updating Plugins
You will have to make sure to keep up with the latest changes to fix issues and get new features. You can update a plugin by directing your terminal to its folder (cd src/userplugins/coolPlugin) and running:
```sh
# direct to folder
cd src/userplugins/coolPlugin

# pull recent code changes from repository
git pull
```

## Building Vencord

The last step is [rebuilding Vencord](/installing#building-vencord).

Restart Discord and your plugin should show up in the plugins tab!

:::caution
Be careful not to accidentally create an empty folder or an empty plugin file inside your `userplugins` folder.

If you get a `TypeError: Cannot read properties of undefined (reading 'localeCompare')` error, this is why.
:::
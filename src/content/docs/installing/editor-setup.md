---
title: Setting up your Editor
description: Setting up your editor for Vencord development
---

We use Visual Studio Code to develop Vencord, and our configs and extensions are tailored to it!
As such, we highly recommend you use VSCode.

If you don't already have it, [install it](https://code.visualstudio.com/download).

## Installing the recommended extensions

Open your Vencord directory in VSCode and you should see a notification in the bottom right corner asking you if you want to install the recommended extensions.

If you don't see this notification, click the Extensions tab in the left side bar and there should be a Recommended section.

Accept, and VSCode should install the following extensions:
- EditorConfig: This configures a few formatting settings to match our code style
- ESLint: This enforces consistent code style and catches common errors
- StyleLint: Same as ESLint, but for CSS
- Vencord Companion: Our homemade extension that adds useful features and code snippets for Vencord development
- JSON2TS: Tool to convert JSON objects to typescript interfaces, very useful for auto-generating types for Discord objects


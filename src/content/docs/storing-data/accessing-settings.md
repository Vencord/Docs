---
title: Access/Set Setting Value
description: How to get the value of a setting programmatically
sidebar:
    order: 2
---

Declaring settings is nice. However, what's even nicer is to access them and actually do things with them in your plugin.

The `settings` constant has a `store` property, containing a key-value store of each setting. Assuming that you properly followed the
documentation, you should be able to access it from anywhere in your `index.ts(x)` file as it should be on the top-level.

So, assuming the following setting:

```json
settingName: {
    type: OptionType.STRING,
    placeholder: "Optional example value that will be shown if setting is unset",
    default: "Sensible default value for that setting. Optional"
}
```

using `settings.store.settingName` should return its value.

## Access from another file

First, mark the `settings` constant as an export: 

```ts ins="export"
export const settings = definePluginSettings({
    /* ... */
});
```

then import it from the other file.

```ts
import { settings } from "."; 
```

## Set a setting programmatically

You may also need to edit a setting from your plugin code. To do so, simply set the `settings.store.settingName` value to whatever you'd like:

```ts
settings.store.settingName = "Hello world";
console.log(settings.store.settingName); // Hello world
```

## useSettings hook

If you are writing UI, you might want it to update dynamically based on a setting value.

In this case, you can use the `useSettings` hook:

```ts
import { useSettings } from "@api/Settings";

const dynamicSettings = useSettings(["plugins.MyCoolPlugin"]).plugins["MyCoolPlugin"];
```

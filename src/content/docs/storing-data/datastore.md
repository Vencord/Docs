---
title: DataStore
description: Store data that isn't configuration
sidebar:
    order: 3
---

Vencord has a key-value store named `DataStore`, that allows you to store any data that can't be considered "settings". 

This data is not backed up to Vencloud if Cloud Sync is on or exported in setting exports.

## How to use

:::note
DataStore's API is async, which means that you'll want to work in async functions.

Because of that, if you want to use DataStore in a React component, you have to use [an effect](https://react.dev/reference/react/useEffect), as React components cannot be async.
:::

First, import DataStore:
```ts
import * as DataStore from "@api/DataStore";
```

Then, you can get or set data! It's that easy.

```ts
await DataStore.get("key");

await DataStore.set("key", value);
```

---
sidebar_position: 1
---

# Installing from Source

## Prerequisites

Vencord is powered by Node.js, git and pnpm, so you will have to install all of those before you can get started:
- [Download git](https://git-scm.com/downloads)
- [Download Node.js](https://nodejs.org/en/download/)
- [Download pnpm](https://pnpm.io/installation)

Make sure that all of them are added to your PATH, you will need it.

To verify correct installation, run the following commands. All 3 should print the version of the respective software without errors:
```sh
git --version
node --version
pnpm --version
```

## Cloning the Vencord Repository

Next, you should check out the Vencord source code!

Pick a convenient folder that you can remember, for example your Documents folder.
Open a terminal and point it to the desired folder:
```sh
cd Documents
```
Then, clone the Vencord repository:
```sh
git clone https://github.com/Vendicated/Vencord
```
and finally point your terminal to the newly created Vencord folder:
```sh
cd Vencord
```

:::tip

Whenever you open a new terminal, you will have to navigate to the Vencord folder again.
If you stuck to the example above, the command to do this would be:
```sh
cd Documents/Vencord
```

:::

## Installing Dependencies

The next step is installing Vencord's dependencies. We use the `pnpm` package manager. Please do not use `npm` or `yarn`!

Issue the following command:
```sh
pnpm install --frozen-lockfile
```

:::warning

Vencord might add, remove or update dependencies at any time.
Thus, you might receive errors like `Cannot find package "foobar" imported from ...` after updating.

If this happens, you should run the same command once again to update the installed dependencies.
:::

## Building Vencord

Now you're almost done! The last step is compiling the Vencord code.

The steps for this will differ depending on which platform you want to build for.

### Discord Desktop app or Vesktop

```sh
pnpm build
```

### Web Browser (extension or Userscript)

```sh
pnpm build --web
```

:::tip

You can build a Development Build of Vencord by appending `--dev` to the build command, for example `pnpm build --dev`.

This gives you access to development tools like PatchHelper.

:::

:::warning

Whenever you make changes to the source code, you will have to rebuild Vencord to apply your changes.
To do so, simply run the same build command again.

Since this becomes tedious quickly, we also provide a command that watches for changes and rebuilds automatically whenever you make changes.
Simply replace `build` with `watch`, for example `pnpm watch --web`!

:::

## Installing your custom build

You're done! Now you can install your custom build of Vencord.

The installation process differs depending on the platform you want to install on.

### Discord Desktop app

Run
```sh
pnpm inject
```
This will launch the Vencord Installer. Just patch the desired Vencord install and you're done!

### Vesktop

1. Open Vesktop
2. Go to the Vesktop Settings category
3. Scroll down all the way to the `Vencord Location` section
4. Press `Change` and select the `dist` folder in your Vencord directory. For example, if you stuck to the example above, you would select `Documents/Vencord/dist`
5. Fully close and restart Vesktop and you're done!

:::warning

If you are using the Vesktop flatpak on Linux, the path might turn into `/run/1000/...`.
This is a temporary path granted by the flatpak runtime and might break after a restart.

You should grant the Vesktop flatpak access to the Vencord directory to solve this issue, for example via
```sh
flatpak override dev.vencord.Vesktop --filesystem="$HOME/Documents/Vencord"
```

::::

### Browser

You will find three builds in the `dist` folder:
- **extension-chrome.zip**: Extension for Chrome and Chromium-based browsers. To install, head to `chrome://extensions`, enable Developer Mode and drag the zip file into the window
- **extension-firefox.zip**: Extension for Firefox. To install, head to `about:addons`, click the gear icon and select `Install Add-on From File...`
- **Vencord.user.js**: Userscript for Tampermonkey, Greasemonkey and other userscript managers. Just open it with your Browser and your userscript manager should automatically prompt you to install it
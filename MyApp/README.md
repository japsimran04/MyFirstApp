## System Requirements

Before you begin, ensure that your system meets these prerequisites:

1. Processor: 64-bit processor
2. RAM: 8 GB or more
3. Windows: Windows 7 or later (64-bit)

## Installation Instructions

1. Install Node.js and NPM by downloading the installer from the official website: https://nodejs.org/en/download/
2. Install Android Studio by downloading the installer from the official website: https://developer.android.com/studio
3. Follow the installation wizard for Android Studio, ensuring to select the "Android Virtual Device" option during installation.
4. Launch Android Studio, navigate to "SDK Manager" through the "Tools" menu, and select "SDK Platforms."
5. In the SDK Manager, check "Show Package Details" and under "Android 13.0 (Tiramisu)," select:
"Android SDK Platform 33"
"Intel x86 Atom_64 System Image" (or your preferred system image).
6. Switch to the "SDK Tools" tab, check "Show Package Details," and under "Android SDK Build-Tools," select version "33.0.0" or the latest.
7. Click "Apply" to install the chosen packages.
8. Set the ANDROID_HOME environment variable:
Open the Control Panel.
Navigate to "User Accounts" > "Change my environment variables."
9. Under "User Variables," add a new variable named "ANDROID_HOME" with the Android SDK directory path (e.g., C:\Users\YourUsername\AppData\Local\Android\Sdk).
10. Verify the variable by running echo "ANDROID_HOME" in the command prompt.
11. Add platform-tools to the Path environment variable:
Under "User Variables," edit the "Path" variable.
12. Add the path to your platform-tools directory (e.g., C:\Users\YourUsername\AppData\Local\Android\Sdk\platform-tools).
13. Verify by running echo %LOCALAPPDATA%\Android\Sdk\platform-tools in the command prompt.


## Project Creation

1. Open a command prompt or terminal and navigate to the desired project directory.
2. Run the following command to create a new React Native project: 
   ```
   npx react-native init MyProject
   ```
3. Wait for the project creation and dependency installation to complete.

## Step 1: Start the Metro Server

To begin, you'll need to initiate **Metro**, the JavaScript bundler that comes with React Native.

Start Metro by running the following command from the root of your React Native project:


```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its dedicated terminal. Open a new terminal from the root of your React Native project and use the following command to launch your Android or iOS app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is configured correctly, your new app should start running in your Android Emulator or iOS Simulator, assuming you have set up your emulator/simulator properly.

This is one approach to run your app; alternatively, you can also run it directly from within Android Studio and Xcode.

## Step 3: Customizing your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and customized your React Native App

### Now what?

- If you wish to integrate this new React Native code into an existing application, refer to the[Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- For further exploration of React Native, explore the[Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

 If you encounter issues, refer to the[Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To delve deeper into React Native, explore these resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
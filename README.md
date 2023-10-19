# FaceTec Integration Steps for JS Files

### Step 1: Copy Code of App.tsx file From FaceTec Demo Project:


### Step 2: Copy `src` folder From FaceTec Demo Project or copy all the src folders files and paste your component folders



-------------

-----------




# Facetec - customize brand logo

## Adding Images to React Native Project

1. **Place your image in the project directory:**

   Add your image to the React Native project. For example, if your image is located at `src/assets/facetec/app_store.png`, ensure that the image name contains only small alphabets and underscores (`_`).

```bash
src/
|-- assets/
|   |-- facetec/
|       |-- app_store.png


```

# Installing `react-native-asset`

## Install `react-native-asset` globally:

Open your terminal and run the following command:

```bash
npm install -g react-native-asset
# or with yarn
yarn global add react-native-asset

```
# Configuring `react-native.config.js`

## Create a `react-native.config.js` file:

At the root of your project, create a file named `react-native.config.js`. Add the following content:

```javascript
module.exports = {
   assets: ['./src/assets/facetec/app_store.png'],
};

```

# Running `react-native-asset`

## Run `react-native-asset` command:

In your terminal, run the following command:

```bash
npx react-native-asset

```

# Using Brand Logo Name in React Native Code

## Pass logo name to `brandLogoName`:

In your React Native code, use the `RNFaceTec.setCustomization` method and pass the `brandLogoName` as shown below:

```javascript
import RNFaceTec from 'nativeModule/RNFaceTec';
// ...

RNFaceTec.setCustomization({
   Colors: themeColors,
   brandLogoName: 'app_store',
});


```

---------------


----------

# FaceTec Integration Steps for IOS


### Step 1: Copy Essential Folders

- From the FaceTec Project, copy the necessary folders:

- Ensure you copy only the required directories without the `Framework` folder.

```bash
FaceTec Project/
|-- Processors/
|-- Utilities/
|-- SupportingFiles/
```
- Navigate and paste into your React Native project:
- Move to the `ios/ProjectName` directory and paste the copied folders.

```bash

ios/
|-- ProjectName/
|   |-- Processors/
|   |-- Utilities/
|   |-- SupportingFiles/
```


### Step 2: Add Folders to Xcode

- Open your React Native project's iOS workspace in Xcode.

- Drag and drop the folders:

   - `Processors`
   - `Utilities`
   - `SupportingFiles`


### Step 3: Copy and Rename Essential Files

- Copy specific files from the FaceTec Project:

```bash
FaceTec Project/
|-- Config.Swift
|-- FaceTec.m
|-- FaceTecManager.swift
|-- BridgeHeader file
```

- Paste and rename in your React Native project:
- Move the files to the `ios` directory and rename the `BridgeHeader` file to your React Native project's name.

```bash
ios/
|-- Config.Swift
|-- FaceTec.m
|-- FaceTecManager.swift
|-- FacetecDemo-Bridging-Header.h
```

### Step 4: Update Build Settings in Xcode

- Navigate to Build Settings.
- Search for Objective-c bridge header and set the renamed bridge header file name.

### Step 5: Add Camera Permission

- Modify the Info.plist file in the iOS directory:

```bash
<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME) camera use</string>
```

### Step 6: Update Bridge Path in Xcode

- In `Build Settings`, add the path to the Bridge at the top level using drag and drop.

- For issues, navigate to Build Phases and remove any extras from `Copy Bundle Resources`.

### Step 7: Add Framework from Old Project

- Copy the Framework from the old project.

```bash
Old Project/
|-- Framework/
```

- Paste to the new React Native project and drag-drop in Xcode:

```bash
ios/
|-- Framework/
```

- In Xcode, set the framework to Embed & Sign.


-----------------


---------

# FaceTec Integration Steps for Android

### Step 1: Add the FaceTec SDK .aar file

- Copy the `facetec-sdk-9.6.51.aar` file from the FaceTecDemo project. You will find the file at `/android/facetec-sdk-9.6.51.aar`

- Paste this file in your React Native project at `android/facetec-sdk-9.6.51.aar`


Refer to the attached screenshot for further clarity.
![Screenshot 2023-10-17 at 9.23.30 PM.png](https://i.ibb.co/196hBfF/Android-aar-file.png)

### Step 2: Modify `android/build.gradle`
At the end of the android/build.gradle file, add the following code snippet:

```
allprojects {
    repositories {
        google()
        mavenCentral()

        // Reference local .aar file if it doesn't exist in maven
        flatDir{ dirs '../' }
    }
}
```
If the allprojects object is already available, simply add the flatDir directive under mavenCentral():

```
// Reference local .aar file if it doesn't exist in maven
flatDir{ dirs '../' }
```
Refer to the attached screenshot for further clarity.

![Android_build_gradle_file](https://i.ibb.co/KjvRdFR/Android-build-gradle-file.png)


### Step 3: Modify `android/app/build.gradle`
In the dependencies object of the android/app/build.gradle file, add:
```
implementation("com.squareup.okhttp3:okhttp:4.10.0")
implementation 'com.facetec:facetec-sdk:9.6.51@aar'
```

Refer to the attached screenshot for further clarity.

![Android_app_build_gradle_File](https://i.ibb.co/xsHxW4k/Android-app-build-gradle-File.png)

### Step 4: Copy Processors
- Copy the Processors folder located at `/android/app/src/main/java/Processors`.
- Paste this folder in your React Native project at `/android/app/src/main/java/`.

Refer to the attached screenshot for further clarity.

![Android_Processors](https://i.ibb.co/pvhxKnC/Android-Processors.png)


### Step 5: Update Imports in Processors
If your package name differs from ```com.facetecdemo```, update the import statement in ```all the files within the Processors folder```.

For example, if your package name is ```com.private```, change:

```import com.facetecdemo.FaceTecModule;```

to

```import com.private.FaceTecModule;```

![ANdroid_FacetecModule_Package_Files](https://i.ibb.co/qM5CWvx/Screenshot-2023-10-19-at-12-52-31-PM.png)


### Step 6: Copy FaceTec Java Files

- Copy the `FaceTecModule.java` and `FaceTecPackage.java` files located at /android/app/src/main/java/{Package_Name}.
- Paste these files in your project at /android/app/src/main/java/{Your_Package_Name}.


Refer to the attached screenshot for further clarity.


![ANdroid_FacetecModule_Package_Files](https://i.ibb.co/PMCvjHH/ANdroid-Facetec-Module-Package-Files.png)

### Step 6:  Update Package Name

- Update the package name at the top of both `FaceTecModule.java` and `FaceTecPackage.java` to match your application's package name.

![Android_Import_native_module](https://i.ibb.co/MScDMNW/Screenshot-2023-10-19-at-12-47-41-PM.png)


### Step 7:  Modify MainApplication.java

Add the following line in the MainApplication.java file:

```packages.add(new FaceTecPackage());```

Refer to the attached screenshot for further clarity.

![Android_Import_native_module](https://i.ibb.co/J3FxJfw/Android-Import-native-module.png)

### Step 8:  Run Clean Command Before Testing on a Real Device

Before you run your application on a real device, it's a good practice to clean your project to ensure there are no build artifacts from previous builds. Use the following command
```cd android && ./gradlew clean```

After successfully cleaning the Android folder, run your app with:

``` npm run android```




-----------------


---------












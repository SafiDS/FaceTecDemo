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
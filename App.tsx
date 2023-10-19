// Import necessary modules and components.
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button, Loader} from './src/components';
import RNFaceTec from './src/nativeModule/RNFaceTec';
import {EventsButtons, sdkConfig} from './src/utils/constant';
import {Type_Of_Native_Method} from './src/utils/enum';
import Methods from './src/utils/methods';

// Theme colors for the app.
const themeColors = {
  outerBackgroundColor: '#EFEFEF',
  frameColor: '#DDDDDD',
  borderColor: '#FF5733',
  ovalColor: '#3498db',
  dualSpinnerColor: '#27AE60',
  textColor: '#9B59B6',
  buttonAndFeedbackBarColor: '#F39C12',
  buttonAndFeedbackBarTextColor: '#2C3E50',
  buttonColorHighlight: '#E74C3C',
  buttonColorDisabled: '#3498db',
};

// Main App component.
const App = () => {

  // Local state to manage user enroll ID.
  const [enrollUserId, setEnrollUserId] = useState('');

  // Track SDK initialization status.
  const [isInitializingSDK, setInitializingSDK] = useState(true);

  // Track ongoing processes like user enrollment, liveness check etc.
  const [isProcessing, setProcessing] = useState(false);


  // Effect to initialize the FaceTec SDK and update the theme.
  useEffect(() => {
    updateTheme();
    RNFaceTec.initializeSDK(
      sdkConfig,
      () => {

        // On success, update SDK initialization status.
        setInitializingSDK(false);
      },
      () => {

        // On failure, also update SDK initialization status.
        setInitializingSDK(false);
      },
    );
  }, []);


  // Update the theme of the SDK.
  const updateTheme = () => {
    RNFaceTec.setCustomization({
      Colors: themeColors,
      brandLogoName: 'app_store',
    });
  };

  // Handle liveness check button press.
  const handleLivenessCheckPress = useCallback(() => {
    setProcessing(true);
    RNFaceTec.livenessCheck(
      res => {
        setProcessing(false);
        console.log('[FaceTec-LivenessCheck]', res);
      },
      e => {
        setProcessing(false);
        console.log('[FaceTec-LivenessCheck]-Error!', e);
      },
    );
  }, []);

  // Handle user enrollment button press.
  const handleEnrollUserPress = useCallback(() => {
    setProcessing(true);
    setEnrollUserId('');
    const id = Methods.generateRandomId(8);

    RNFaceTec.enrollUser(
      id,
      res => {
        setProcessing(false);
        setEnrollUserId(id);
        console.log('[FaceTec-Enroll User]', res);
      },
      e => {
        setProcessing(false);
        console.log('[FaceTec-Enroll User]-Error!', e);
      },
    );
  }, []);

  // Handle user authentication button press.
  const handleAuthenticateUserPress = useCallback(() => {
    if (!enrollUserId) {
      Alert.alert('Please enroll first before trying authentication.');
      return;
    }
    setProcessing(true);
    RNFaceTec.authenticateUser(
      enrollUserId,
      res => {
        setProcessing(false);
        console.log('[FaceTec-Authenticate User]', res);
      },
      e => {
        setProcessing(false);
        console.log('[FaceTec-Authenticate User]-Error!', e);
      },
    );
  }, [enrollUserId]);

  // Handle user identity check button press.
  const handleIdentityCheckUserPress = useCallback(() => {
    setProcessing(true);
    RNFaceTec.identityCheck(
      res => {
        setProcessing(false);
        console.log('[FaceTec-Identity Check]', res);
      },
      e => {
        setProcessing(false);
        console.log('[FaceTec-Identity Check]-Error!', e);
      },
    );
  }, []);

  // Handle user identity scan button press.
  const handleIdentityScanUserPress = useCallback(() => {
    setProcessing(true);
    RNFaceTec.identityScanOnly(
      res => {
        setProcessing(false);
        console.log('[FaceTec-Identity Scan]', res);
      },
      e => {
        setProcessing(false);
        console.log('[FaceTec-Identity Scan]-Error!', e);
      },
    );
  }, []);


  // Dispatch various native methods based on button press.
  const onButtonPress = (text: string, index: number) => {
    switch (index) {
      case Type_Of_Native_Method.livenessCheck:
        handleLivenessCheckPress();
        break;
      case Type_Of_Native_Method.enrollUser:
        handleEnrollUserPress();
        break;
      case Type_Of_Native_Method.authenticateUser:
        handleAuthenticateUserPress();
        break;
      case Type_Of_Native_Method.matchFaceToID:
        handleIdentityCheckUserPress();
        break;
      case Type_Of_Native_Method.scanAndOCRID:
        handleIdentityScanUserPress();
        break;
    }
  };

  // Render a button based on its title and index.
  const renderButtonComponent = (title: string, index: number) => {
    return (
      <Button
        key={`button list-${index}`}
        title={title}
        index={index}
        onButtonPress={onButtonPress}
        disabled={isProcessing}
      />
    );
  };

  // Render the main App component.
  return (
    <View style={styles.container}>
      {isInitializingSDK ? (
        <Loader />
      ) : (
        EventsButtons.map(renderButtonComponent)
      )}
    </View>
  );
};


// Styles for the App component.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;

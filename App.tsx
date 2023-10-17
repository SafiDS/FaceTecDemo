import React, {useCallback, useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button, Loader} from './src/components';
import RNFaceTec from './src/nativeModule/RNFaceTec';
import {EventsButtons, sdkConfig} from './src/utils/constant';
import {Type_Of_Native_Method} from './src/utils/enum';
import Methods from './src/utils/methods';

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

const App = () => {
  const [enrollUserId, setEnrollUserId] = useState('');
  const [isInitializingSDK, setInitializingSDK] = useState(true);

  const [isProcessing, setProcessing] = useState(false);

  useEffect(() => {
    updateTheme();
    RNFaceTec.initializeSDK(
      sdkConfig,
      () => {
        setInitializingSDK(false);
      },
      () => {
        setInitializingSDK(false);
      },
    );
  }, []);

  const updateTheme = () => {
    RNFaceTec.setCustomization({
      Colors: themeColors,
      brandLogoName: 'app_store',
    });
  };

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;

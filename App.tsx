import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text, TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import CustomButton from "./src/components/customButton";


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handle3dLiveNessPress = () => {
    console.log("handle3dLivenessPress clicked!");
  };

  const handleEnrollUserPress = () => {
    console.log("handleEnrollUserPress clicked!");
  };

  const handleAuthenticateUserPress = () => {
    console.log("handleAuthenticateUserPress clicked!");
  };

  const handleMatchFaceIDClick = () => {
    console.log("handleMatchFaceIDClick clicked!");
  };

  const handleScanIDClick = () => {
    console.log("Scan & OCRID clicked!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
        <View style={styles.container}>
          <CustomButton title="3D Liveness Check" onPress={() => handle3dLiveNessPress()} />
          <CustomButton title="Enroll User" onPress={() => handleEnrollUserPress()} />
          <CustomButton title="Authenticate User" onPress={() => handleAuthenticateUserPress()} />
          <CustomButton title="Match Face To ID" onPress={() => handleMatchFaceIDClick()} />
          <CustomButton title="Scan & OCR ID" onPress={() => handleScanIDClick()} />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

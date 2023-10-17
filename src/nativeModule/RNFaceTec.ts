import {NativeModules} from 'react-native';

const {Facetec} = NativeModules;

type Callback = (args: any) => void;

interface ColorConfigType {
  outerBackgroundColor: string;
  frameColor: string;
  borderColor: string;
  ovalColor: string;
  dualSpinnerColor: string;
  textColor: string;
  buttonAndFeedbackBarColor: string;
  buttonAndFeedbackBarTextColor: string;
  buttonColorHighlight: string;
  buttonColorDisabled: string;
}

interface ThemeConfig {
  Colors: Partial<ColorConfigType>;
  brandLogoName?: string;
}

interface SDKConfig {
  isProd: boolean;
  SDKkey: string;
  publicEncryptionKey: string;
  serverUrl: string;
  prodKeyText?: string;
}

interface FaceTecModule {
  initializeSDK(
    config: SDKConfig,
    onSuccess: Callback,
    onError: Callback,
  ): void;
  livenessCheck(onSuccess: Callback, onError: Callback): void;
  enrollUser(
    enrollUserId: string,
    onSuccess: Callback,
    onError: Callback,
  ): void;
  authenticateUser(
    authenticateUserId: string,
    onSuccess: Callback,
    onError: Callback,
  ): void;
  identityCheck(onSuccess: Callback, onError: Callback): void;
  identityScanOnly(onSuccess: Callback, onError: Callback): void;
  setCustomization: (theme: ThemeConfig) => void;
}

const RNFaceTec: FaceTecModule = {
  initializeSDK: Facetec.initializeSDK,
  livenessCheck: Facetec.livenessCheck,
  enrollUser: Facetec.enrollUser,
  authenticateUser: Facetec.authenticateUser,
  identityCheck: Facetec.identityCheck,
  identityScanOnly: Facetec.identityScanOnly,
  setCustomization: Facetec.setCustomization,
};

export default RNFaceTec;

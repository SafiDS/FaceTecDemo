export const EventsButtons = [
  '3D Liveness Check',
  'Enroll User',
  'Authenticate User',
  'Match Face To ID',
  'Scan & OCR ID',
];

export const SDK_KEY = 'dYhiLWgNCYugdOWjdxbD3hcbipOxIKOy';
export const PUBLIC_ENCRYPTION_KEY =
  '-----BEGIN PUBLIC KEY-----\n' +
  'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5PxZ3DLj+zP6T6HFgzzk\n' +
  'M77LdzP3fojBoLasw7EfzvLMnJNUlyRb5m8e5QyyJxI+wRjsALHvFgLzGwxM8ehz\n' +
  'DqqBZed+f4w33GgQXFZOS4AOvyPbALgCYoLehigLAbbCNTkeY5RDcmmSI/sbp+s6\n' +
  'mAiAKKvCdIqe17bltZ/rfEoL3gPKEfLXeN549LTj3XBp0hvG4loQ6eC1E1tRzSkf\n' +
  'GJD4GIVvR+j12gXAaftj3ahfYxioBH7F7HQxzmWkwDyn3bqU54eaiB7f0ftsPpWM\n' +
  'ceUaqkL2DZUvgN0efEJjnWy5y1/Gkq5GGWCROI9XG/SwXJ30BbVUehTbVcD70+ZF\n' +
  '8QIDAQAB\n' +
  '-----END PUBLIC KEY-----';

export const SERVER_URL = 'https://api.facetec.com/api/v3.1/biometrics';

export const sdkConfig = {
  isProd: false,
  SDKkey: SDK_KEY,
  publicEncryptionKey: PUBLIC_ENCRYPTION_KEY,
  serverUrl: SERVER_URL,
};

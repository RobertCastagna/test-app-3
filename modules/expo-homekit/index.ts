import ExpoHomeKitModule from './src/ExpoHomeKitModule';

export * from './src/ExpoHomeKit.types';

export async function getHomes() {
  return ExpoHomeKitModule.getHomes();
}

export async function requestAuthorization() {
  return ExpoHomeKitModule.requestAuthorization();
}

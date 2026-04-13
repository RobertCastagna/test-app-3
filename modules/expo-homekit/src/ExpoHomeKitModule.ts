import { requireNativeModule } from 'expo-modules-core';

import type { ExpoHomeKitModuleType } from './ExpoHomeKit.types';

export default requireNativeModule<ExpoHomeKitModuleType>('ExpoHomeKitModule');

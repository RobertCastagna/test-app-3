export type AuthorizationStatus =
  | 'determined'
  | 'restricted'
  | 'authorized'
  | 'unknown';

export type Characteristic = {
  uuid: string;
  type: string;
  value: unknown;
  isReadable: boolean;
  isWritable: boolean;
};

export type Service = {
  uuid: string;
  type: string;
  name: string | null;
  characteristics: Characteristic[];
};

export type Accessory = {
  uuid: string;
  name: string;
  manufacturer: string | null;
  model: string | null;
  isReachable: boolean;
  services: Service[];
};

export type Home = {
  uuid: string;
  name: string;
  isPrimary: boolean;
  accessories: Accessory[];
};

export type ExpoHomeKitModuleType = {
  getHomes(): Promise<Home[]>;
  requestAuthorization(): Promise<AuthorizationStatus>;
};

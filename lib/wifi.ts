import NetInfo, { type NetInfoState } from '@react-native-community/netinfo';
import { useCallback, useEffect, useState } from 'react';

export function useWifiInfo() {
  const [state, setState] = useState<NetInfoState | null>(null);

  useEffect(() => {
    NetInfo.fetch().then(setState);
    return NetInfo.addEventListener(setState);
  }, []);

  const refresh = useCallback(async () => {
    setState(await NetInfo.fetch());
  }, []);

  return { state, refresh };
}

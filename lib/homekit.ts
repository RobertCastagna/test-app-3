import { useCallback, useEffect, useState } from 'react';

import {
  type AuthorizationStatus,
  type Home,
  getHomes,
  requestAuthorization,
} from '../modules/expo-homekit';

type State = {
  homes: Home[];
  status: AuthorizationStatus | 'loading';
  error: string | null;
};

export function useHomeKit() {
  const [state, setState] = useState<State>({
    homes: [],
    status: 'loading',
    error: null,
  });

  const load = useCallback(async () => {
    setState((s) => ({ ...s, status: 'loading', error: null }));
    try {
      const status = await requestAuthorization();
      const homes = await getHomes();
      setState({ homes, status, error: null });
    } catch (e) {
      setState({
        homes: [],
        status: 'unknown',
        error: e instanceof Error ? e.message : String(e),
      });
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { ...state, refresh: load };
}

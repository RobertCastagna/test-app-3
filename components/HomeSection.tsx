import { StyleSheet, Text, View } from 'react-native';

import type { Home } from '../modules/expo-homekit';
import { AccessoryRow } from './AccessoryRow';

export function HomeSection({ home }: { home: Home }) {
  return (
    <View style={styles.section}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>{home.name}</Text>
        {home.isPrimary && <Text style={styles.badge}>PRIMARY</Text>}
      </View>
      {home.accessories.length === 0 ? (
        <Text style={styles.empty}>No accessories in this home.</Text>
      ) : (
        home.accessories.map((a) => <AccessoryRow key={a.uuid} accessory={a} />)
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginTop: 16 },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  title: { color: '#fff', fontSize: 22, fontWeight: '700' },
  badge: {
    color: '#0a84ff',
    fontSize: 11,
    fontWeight: '700',
    marginLeft: 8,
    letterSpacing: 0.5,
  },
  empty: { color: '#8e8e93', paddingHorizontal: 16, paddingVertical: 8 },
});

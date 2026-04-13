import { StyleSheet, Text, View } from 'react-native';

import type { Accessory } from '../modules/expo-homekit';

function shortType(uuidLike: string): string {
  // HomeKit characteristic/service types are long UUIDs; the leading 8 chars
  // before the first hyphen are the meaningful identifier.
  return uuidLike.split('-')[0];
}

function formatValue(value: unknown): string {
  if (value === null || value === undefined) return '—';
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

export function AccessoryRow({ accessory }: { accessory: Accessory }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.name}>{accessory.name}</Text>
        <Text style={[styles.dot, accessory.isReachable ? styles.dotOn : styles.dotOff]}>●</Text>
      </View>
      {(accessory.manufacturer || accessory.model) && (
        <Text style={styles.meta}>
          {[accessory.manufacturer, accessory.model].filter(Boolean).join(' · ')}
        </Text>
      )}
      {accessory.services.map((svc) => (
        <View key={svc.uuid} style={styles.service}>
          <Text style={styles.serviceName}>{svc.name ?? shortType(svc.type)}</Text>
          {svc.characteristics.map((c) => (
            <View key={c.uuid} style={styles.charRow}>
              <Text style={styles.charType}>{shortType(c.type)}</Text>
              <Text style={styles.charValue}>{formatValue(c.value)}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1c1c1e',
    borderRadius: 12,
    padding: 14,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  name: { color: '#fff', fontSize: 17, fontWeight: '600' },
  dot: { fontSize: 14 },
  dotOn: { color: '#34c759' },
  dotOff: { color: '#8e8e93' },
  meta: { color: '#8e8e93', fontSize: 13, marginTop: 2 },
  service: { marginTop: 10 },
  serviceName: { color: '#0a84ff', fontSize: 13, fontWeight: '600', marginBottom: 4 },
  charRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 3 },
  charType: { color: '#8e8e93', fontSize: 13, fontFamily: 'Menlo' },
  charValue: { color: '#fff', fontSize: 13, fontFamily: 'Menlo' },
});

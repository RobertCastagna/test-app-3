import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

import { InfoRow } from '../../components/InfoRow';
import { useWifiInfo } from '../../lib/wifi';

export default function WifiScreen() {
  const { state, refresh } = useWifiInfo();

  const wifiDetails = state?.type === 'wifi' ? state.details : null;

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
      refreshControl={<RefreshControl refreshing={false} onRefresh={refresh} tintColor="#0a84ff" />}>
      <SectionTitle>Connection</SectionTitle>
      <View style={styles.card}>
        <InfoRow label="Type" value={state?.type ?? null} />
        <InfoRow label="Connected" value={state?.isConnected ?? null} />
        <InfoRow label="Internet reachable" value={state?.isInternetReachable ?? null} />
      </View>

      <SectionTitle>WiFi details</SectionTitle>
      <View style={styles.card}>
        <InfoRow label="SSID" value={wifiDetails?.ssid ?? null} />
        <InfoRow label="BSSID" value={wifiDetails?.bssid ?? null} />
        <InfoRow label="IP address" value={wifiDetails?.ipAddress ?? null} />
        <InfoRow label="Subnet" value={wifiDetails?.subnet ?? null} />
        <InfoRow label="Frequency" value={wifiDetails?.frequency ?? null} />
        <InfoRow label="Strength" value={wifiDetails?.strength ?? null} />
      </View>

      <Text style={styles.footer}>
        SSID requires the WiFi-info entitlement and granted location permission.
      </Text>
    </ScrollView>
  );
}

function SectionTitle({ children }: { children: string }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: '#000' },
  content: { paddingVertical: 16, paddingBottom: 40 },
  title: {
    color: '#8e8e93',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.5,
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 6,
  },
  card: {
    backgroundColor: '#1c1c1e',
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  footer: {
    color: '#8e8e93',
    fontSize: 12,
    paddingHorizontal: 16,
    marginTop: 20,
    textAlign: 'center',
  },
});

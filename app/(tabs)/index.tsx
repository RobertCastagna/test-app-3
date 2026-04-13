import { ActivityIndicator, Platform, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

import { HomeSection } from '../../components/HomeSection';
import { useHomeKit } from '../../lib/homekit';

export default function HomeKitScreen() {
  const { homes, status, error, refresh } = useHomeKit();

  if (Platform.OS !== 'ios') {
    return <Centered text="HomeKit is only available on iOS." />;
  }

  if (status === 'loading') {
    return (
      <View style={styles.center}>
        <ActivityIndicator color="#0a84ff" />
        <Text style={styles.muted}>Loading homes…</Text>
      </View>
    );
  }

  if (error) {
    return <Centered text={`HomeKit error: ${error}`} />;
  }

  if (status !== 'authorized') {
    return <Centered text={`HomeKit access not granted (status: ${status}).`} />;
  }

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
      refreshControl={<RefreshControl refreshing={false} onRefresh={refresh} tintColor="#0a84ff" />}>
      {homes.length === 0 ? (
        <Centered text="No homes configured. Open the iOS Home app to add one." />
      ) : (
        homes.map((h) => <HomeSection key={h.uuid} home={h} />)
      )}
    </ScrollView>
  );
}

function Centered({ text }: { text: string }) {
  return (
    <View style={styles.center}>
      <Text style={styles.muted}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: '#000' },
  content: { paddingBottom: 32 },
  center: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    gap: 8,
  },
  muted: { color: '#8e8e93', textAlign: 'center', fontSize: 15 },
});

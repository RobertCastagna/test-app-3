import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: '#000', borderTopColor: '#1c1c1e' },
        tabBarActiveTintColor: '#0a84ff',
        tabBarInactiveTintColor: '#8e8e93',
        headerStyle: { backgroundColor: '#000' },
        headerTitleStyle: { color: '#fff' },
      }}>
      <Tabs.Screen name="index" options={{ title: 'HomeKit' }} />
      <Tabs.Screen name="wifi" options={{ title: 'WiFi' }} />
    </Tabs>
  );
}

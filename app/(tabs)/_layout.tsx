import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: '#000', borderTopColor: '#222' },
      tabBarActiveTintColor: '#fff',
    }}>
      <Tabs.Screen name="create" options={{ title: 'CREATE' }} />
      <Tabs.Screen name="drops" options={{ title: 'DROPS' }} />
      <Tabs.Screen name="sales" options={{ title: 'SALES' }} />
      <Tabs.Screen name="auto" options={{ title: 'AUTO' }} />
    </Tabs>
  );
}
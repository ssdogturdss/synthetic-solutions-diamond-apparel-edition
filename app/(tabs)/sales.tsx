import React from 'react';
import { View, Text } from 'react-native';

export default function SalesScreen() {
  return (
    <View className="flex-1 bg-black p-6 pt-16">
      <Text className="text-white text-2xl font-bold mb-6">SALES</Text>
      <View className="bg-zinc-900 p-6 rounded-2xl">
        <Text className="text-emerald-400 text-4xl">$2,184</Text>
        <Text className="text-zinc-400">Today Revenue • $1,792 profit</Text>
      </View>
      <Text className="text-zinc-400 mt-8">Last 7 days chart placeholder</Text>
    </View>
  );
}
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const mockDrops = [
  { id: '1', title: 'CRACKED DIAMOND', profit: 356, status: 'approved' },
];

export default function DropsScreen() {
  return (
    <View className="flex-1 bg-black p-6 pt-16">
      <Text className="text-white text-2xl font-bold mb-6">DROPS</Text>
      <FlatList
        data={mockDrops}
        renderItem={({ item }) => (
          <View className="bg-zinc-900 p-4 rounded-2xl mb-4">
            <Text className="text-white text-lg">{item.title}</Text>
            <Text className="text-emerald-400">Profit if 4 sold: ${item.profit}</Text>
            <TouchableOpacity className="mt-3 bg-white py-3 rounded-xl">
              <Text className="text-black text-center font-bold">DROP LIVE NOW</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
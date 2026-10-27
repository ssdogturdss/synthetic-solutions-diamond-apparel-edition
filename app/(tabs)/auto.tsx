import React from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';

export default function AutoScreen() {
  return (
    <View className="flex-1 bg-black p-6 pt-16">
      <Text className="text-white text-2xl font-bold">AUTOPILOT</Text>
      <Text className="text-emerald-400 mt-1">5 agents online</Text>

      <View className="mt-8 space-y-5">
        {['Auto-Generate Drop Daily at 9am', 'Auto-Publish at 10am', 'Auto-Fulfill Orders', 'Auto-Reprice', 'Auto-Restock'].map((label, i) => (
          <View key={i} className="flex-row justify-between items-center bg-zinc-900 p-4 rounded-2xl">
            <Text className="text-white">{label}</Text>
            <Switch value={true} trackColor={{ true: '#fff' }} />
          </View>
        ))}
      </View>

      <TouchableOpacity className="mt-auto mb-12 bg-white py-5 rounded-2xl">
        <Text className="text-black text-center font-bold tracking-widest">RUN FULL AUTOPILOT TODAY</Text>
      </TouchableOpacity>
    </View>
  );
}
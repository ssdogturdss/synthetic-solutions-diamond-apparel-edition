import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { runFullDrop } from '../../lib/agents/orchestrator';

export default function CreateScreen() {
  const [theme, setTheme] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [selected, setSelected] = useState<number[]>([]);

  const handleGenerate = async () => {
    if (!theme) return;
    setLoading(true);
    const drop = await runFullDrop(theme);
    setResult(drop);
    setLoading(false);
  };

  const toggleSelect = (idx: number) => {
    setSelected(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  return (
    <ScrollView className="flex-1 bg-black p-6">
      <Text className="text-white text-3xl font-bold tracking-[4px] mt-12">DIAMOND APPAREL</Text>
      <Text className="text-gray-400 mt-1">"PRESSURE MAKES DIAMONDS"</Text>

      <TextInput
        className="bg-zinc-900 text-white p-4 mt-8 rounded-xl border border-zinc-700"
        placeholder="What drop? e.g. 'cracked diamond, Fresno night'"
        placeholderTextColor="#666"
        value={theme}
        onChangeText={setTheme}
      />

      <TouchableOpacity
        onPress={handleGenerate}
        disabled={loading}
        className="mt-6 bg-white py-5 rounded-2xl active:bg-zinc-200"
      >
        <Text className="text-black text-center font-bold text-lg tracking-widest">
          {loading ? 'RUNNING AI TEAM...' : 'GENERATE DROP — RUN AI TEAM'}
        </Text>
      </TouchableOpacity>

      {result && (
        <View className="mt-8">
          <Text className="text-white text-xl mb-4">Generated Designs</Text>
          <View className="flex-row flex-wrap justify-between">
            {result.designs.map((url: string, i: number) => (
              <TouchableOpacity key={i} onPress={() => toggleSelect(i)} className="w-[48%] mb-3">
                <Image source={{ uri: url }} className="w-full h-48 rounded-xl" />
                <View className={`absolute bottom-2 right-2 px-3 py-1 rounded ${selected.includes(i) ? 'bg-white' : 'bg-black/60'}`}>
                  <Text className={selected.includes(i) ? 'text-black' : 'text-white'}>{selected.includes(i) ? 'SELECTED' : 'TAP'}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <Text className="text-white mt-6 text-xl">{result.copy.title}</Text>
          <Text className="text-zinc-400 mt-1">{result.copy.description}</Text>

          <Text className="text-emerald-400 mt-4 text-lg">Profit per tee: ${result.pricing.tee.profit} | Hoodie: ${result.pricing.hoodie.profit}</Text>

          <TouchableOpacity className="mt-8 bg-white py-4 rounded-2xl">
            <Text className="text-black text-center font-bold">APPROVE & CREATE PRODUCTS</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}
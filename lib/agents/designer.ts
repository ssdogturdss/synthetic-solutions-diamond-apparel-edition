import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.EXPO_PUBLIC_OPENAI_KEY! });

export async function generateDesigns(theme: string) {
  const prompt = `Premium streetwear design for DIAMOND APPAREL: ${theme}. Washed black aesthetic, cracked diamond, high contrast, 1024x1024, transparent background, luxury streetwear style`;

  const images: string[] = [];
  for (let i = 0; i < 4; i++) {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt,
      n: 1,
      size: '1024x1024',
    });
    if (response.data[0]?.url) images.push(response.data[0].url);
  }
  return { images, prompt };
}
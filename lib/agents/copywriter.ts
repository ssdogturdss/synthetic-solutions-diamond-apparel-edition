import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.EXPO_PUBLIC_OPENAI_KEY! });

export async function generateCopy(imageUrl: string, theme: string) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: `Generate product copy for DIAMOND APPAREL t-shirt/hoodie based on this image and theme: ${theme}. Return JSON: { "title": "", "description": "", "tags": [], "instagramCaption": "", "tiktokScript": "" }` },
          { type: 'image_url', image_url: { url: imageUrl } },
        ],
      },
    ],
    response_format: { type: 'json_object' },
  });
  return JSON.parse(response.choices[0].message.content!);
}
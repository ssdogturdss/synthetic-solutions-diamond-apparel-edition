import { generateDesigns } from './designer';
import { generateCopy } from './copywriter';
import { calculatePricing } from './pricing';
import { supabase } from '../supabase';

export interface DropResult {
  theme: string;
  designs: string[];
  copy: any;
  pricing: any;
}

export async function runFullDrop(theme: string): Promise<DropResult> {
  // Log start
  await supabase.from('agent_logs').insert({ agent_name: 'orchestrator', action: 'start', input: { theme } });

  const designs = await generateDesigns(theme);
  await supabase.from('agent_logs').insert({ agent_name: 'designer', action: 'complete', output: designs });

  const copy = await generateCopy(designs.images[0], theme);
  await supabase.from('agent_logs').insert({ agent_name: 'copywriter', action: 'complete', output: copy });

  const pricing = {
    tee: calculatePricing('tee'),
    hoodie: calculatePricing('hoodie'),
  };

  return { theme, designs: designs.images, copy, pricing };
}
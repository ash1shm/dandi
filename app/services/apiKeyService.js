import { supabase } from '../lib/supabase';

export const apiKeyService = {
  async fetchApiKeys() {
    const { data, error } = await supabase
      .from('api_keys')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async createApiKey(name) {
    const newKey = {
      name,
      key: `pk_${Math.random().toString(36).substring(2, 15)}`,
      status: 'active',
      created_at: new Date().toISOString()
    };

    const { data, error } = await supabase
      .from('api_keys')
      .insert([newKey])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateApiKey(id, name) {
    const { error } = await supabase
      .from('api_keys')
      .update({ name })
      .eq('id', id);

    if (error) throw error;
  },

  async deleteApiKey(id) {
    const { error } = await supabase
      .from('api_keys')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  async revokeApiKey(id) {
    const { error } = await supabase
      .from('api_keys')
      .update({ status: 'revoked' })
      .eq('id', id);

    if (error) throw error;
  }
}; 
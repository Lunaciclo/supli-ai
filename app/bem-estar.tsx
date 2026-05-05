import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import { useState } from 'react';

const habits = [
  { id: 1, name: 'Água (2L)', emoji: '💧', done: true },
  { id: 2, name: 'Exercício', emoji: '🏃', done: false },
  { id: 3, name: 'Sono 8h', emoji: '😴', done: true },
  { id: 4, name: 'Meditação', emoji: '🧘', done: false },
];

const tips = [
  { title: 'Jejum intermitente', desc: 'Janela de 16h potencializa NAC e autofagia', emoji: '⚡' },
  { title: 'Luz solar', desc: 'Exposição matinal de 10min ativa vitamina D endógena', emoji: '☀️' },
  { title: 'Respiração 4-7-8', desc: 'Reduz cortisol em 23% — ideal antes de dormir', emoji: '🌬️' },
];

export default function BemEstar() {
  const [items, setItems] = useState(habits);
  const done = items.filter(i => i.done).length;
  const mood = done >= 3 ? '😄' : done >= 2 ? '🙂' : '😐';

  const toggle = (id: number) => setItems(prev => prev.map(i => i.id === id ? { ...i, done: !i.done } : i));

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      <Text style={styles.title}>Bem-estar</Text>

      {/* Mascote reativo */}
      <View style={styles.mascotCard}>
        <Text style={styles.mascotEmoji}>{mood}</Text>
        <View style={styles.mascotText}>
          <Text style={styles.mascotTitle}>{done >= 3 ? 'Mandando muito bem!' : 'Continue firme!'}</Text>
          <Text style={styles.mascotSub}>{done} de {items.length} hábitos feitos hoje</Text>
        </View>
      </View>

      {/* Hábitos */}
      <Text style={styles.sectionTitle}>Hábitos do dia</Text>
      <View style={styles.habitsGrid}>
        {items.map(h => (
          <TouchableOpacity key={h.id} style={[styles.habitCard, h.done && styles.habitDone]} onPress={() => toggle(h.id)}>
            <Text style={styles.habitEmoji}>{h.emoji}</Text>
            <Text style={[styles.habitName, h.done && styles.habitNameDone]}>{h.name}</Text>
            {h.done && <Text style={styles.habitCheck}>✓</Text>}
          </TouchableOpacity>
        ))}
      </View>

      {/* Tips biohacking */}
      <Text style={styles.sectionTitle}>Biohacking do dia</Text>
      {tips.map(t => (
        <View key={t.title} style={styles.tipCard}>
          <Text style={styles.tipEmoji}>{t.emoji}</Text>
          <View style={styles.tipText}>
            <Text style={styles.tipTitle}>{t.title}</Text>
            <Text style={styles.tipDesc}>{t.desc}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg, padding: 20, paddingTop: 60 },
  title: { fontSize: 28, fontWeight: '800', color: Colors.black, marginBottom: 20 },
  mascotCard: { backgroundColor: Colors.accent, borderRadius: 24, padding: 24, flexDirection: 'row', alignItems: 'center', marginBottom: 28, gap: 16 },
  mascotEmoji: { fontSize: 52 },
  mascotText: { flex: 1 },
  mascotTitle: { fontSize: 18, fontWeight: '700', color: Colors.white },
  mascotSub: { fontSize: 13, color: Colors.accentLight, marginTop: 4 },
  sectionTitle: { fontSize: 17, fontWeight: '700', color: Colors.black, marginBottom: 12 },
  habitsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 28 },
  habitCard: { backgroundColor: Colors.white, borderRadius: 16, padding: 16, width: '47%', alignItems: 'center', borderWidth: 1, borderColor: Colors.border },
  habitDone: { backgroundColor: Colors.accent, borderColor: Colors.accent },
  habitEmoji: { fontSize: 28, marginBottom: 8 },
  habitName: { fontSize: 13, fontWeight: '600', color: Colors.black, textAlign: 'center' },
  habitNameDone: { color: Colors.white },
  habitCheck: { fontSize: 16, color: Colors.white, marginTop: 4 },
  tipCard: { backgroundColor: Colors.white, borderRadius: 16, padding: 16, marginBottom: 10, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: Colors.border, gap: 14 },
  tipEmoji: { fontSize: 28 },
  tipText: { flex: 1 },
  tipTitle: { fontSize: 14, fontWeight: '700', color: Colors.black },
  tipDesc: { fontSize: 12, color: Colors.muted, marginTop: 4, lineHeight: 18 },
});

import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import { useState } from 'react';

const supplements = [
  { id: 1, name: 'NAC', dose: '600mg', time: 'Manhã em jejum', checked: false, color: Colors.sage },
  { id: 2, name: 'Vitamina D3+K2', dose: '5000UI', time: 'Jantar com gordura', checked: false, color: Colors.amber },
  { id: 3, name: 'Magnésio Glicinato', dose: '400mg', time: 'Noite', checked: false, color: Colors.indigo },
  { id: 4, name: 'Colágeno Verisol', dose: '10g', time: 'Lanche + Vit C', checked: true, color: Colors.coral },
  { id: 5, name: 'Creatina', dose: '5g', time: 'Pós-treino', checked: true, color: Colors.accentLight },
];

const tips = [
  'Tome o Magnésio longe do Cálcio para melhor absorção 🧬',
  'Vitamina D funciona melhor com K2 — você já está fazendo certo! ✅',
  'Hidratação é fundamental: 35ml por kg de peso por dia 💧',
  'Consistência é tudo. Você está no caminho certo! 🔥',
];

export default function Home() {
  const [items, setItems] = useState(supplements);
  const [tipIndex, setTipIndex] = useState(0);
  const completed = items.filter(i => i.checked).length;

  const toggle = (id: number) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, checked: !i.checked } : i));
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Bom dia! 👋</Text>
          <Text style={styles.subGreeting}>Seu protocolo de hoje</Text>
        </View>
        <View style={styles.streakBadge}>
          <Text style={styles.streakNum}>7</Text>
          <Text style={styles.streakLabel}>dias 🔥</Text>
        </View>
      </View>

      {/* Progress bar */}
      <View style={styles.progressCard}>
        <Text style={styles.progressText}>{completed} de {items.length} suplementos tomados</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${(completed / items.length) * 100}%` }]} />
        </View>
      </View>

      {/* Mascot tip */}
      <TouchableOpacity style={styles.tipCard} onPress={() => setTipIndex((tipIndex + 1) % tips.length)}>
        <Text style={styles.tipEmoji}>🧬</Text>
        <Text style={styles.tipText}>{tips[tipIndex]}</Text>
      </TouchableOpacity>

      {/* Supplement list */}
      <Text style={styles.sectionTitle}>Suplementos de hoje</Text>
      {items.map(item => (
        <TouchableOpacity key={item.id} style={styles.suppCard} onPress={() => toggle(item.id)}>
          <View style={[styles.suppDot, { backgroundColor: item.color }]} />
          <View style={styles.suppInfo}>
            <Text style={[styles.suppName, item.checked && styles.suppChecked]}>{item.name}</Text>
            <Text style={styles.suppDetail}>{item.dose} · {item.time}</Text>
          </View>
          <View style={[styles.checkBox, item.checked && styles.checkBoxDone]}>
            {item.checked && <Text style={styles.checkMark}>✓</Text>}
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg, padding: 20, paddingTop: 60 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  greeting: { fontSize: 24, fontWeight: '800', color: Colors.black },
  subGreeting: { fontSize: 14, color: Colors.muted, marginTop: 2 },
  streakBadge: { backgroundColor: Colors.black, borderRadius: 16, padding: 12, alignItems: 'center' },
  streakNum: { fontSize: 20, fontWeight: '800', color: Colors.white },
  streakLabel: { fontSize: 11, color: Colors.accentLight },
  progressCard: { backgroundColor: Colors.white, borderRadius: 16, padding: 16, marginBottom: 16, borderWidth: 1, borderColor: Colors.border },
  progressText: { fontSize: 13, color: Colors.muted, marginBottom: 10 },
  progressBar: { height: 8, backgroundColor: Colors.border, borderRadius: 4 },
  progressFill: { height: 8, backgroundColor: Colors.accent, borderRadius: 4 },
  tipCard: { backgroundColor: Colors.accent, borderRadius: 16, padding: 16, marginBottom: 24, flexDirection: 'row', alignItems: 'center', gap: 12 },
  tipEmoji: { fontSize: 24 },
  tipText: { flex: 1, color: Colors.white, fontSize: 13, lineHeight: 20 },
  sectionTitle: { fontSize: 17, fontWeight: '700', color: Colors.black, marginBottom: 12 },
  suppCard: { backgroundColor: Colors.white, borderRadius: 16, padding: 16, marginBottom: 10, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: Colors.border },
  suppDot: { width: 12, height: 12, borderRadius: 6, marginRight: 14 },
  suppInfo: { flex: 1 },
  suppName: { fontSize: 15, fontWeight: '600', color: Colors.black },
  suppChecked: { textDecorationLine: 'line-through', color: Colors.muted },
  suppDetail: { fontSize: 12, color: Colors.muted, marginTop: 2 },
  checkBox: { width: 28, height: 28, borderRadius: 8, borderWidth: 2, borderColor: Colors.border, alignItems: 'center', justifyContent: 'center' },
  checkBoxDone: { backgroundColor: Colors.accent, borderColor: Colors.accent },
  checkMark: { color: Colors.white, fontSize: 14, fontWeight: '700' },
});

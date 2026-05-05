import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

const biomarkers = [
  { name: 'Vitamina D', value: 42, unit: 'ng/mL', status: 'Ótimo', color: Colors.amber, prev: 28 },
  { name: 'Ferritina', value: 68, unit: 'ng/mL', status: 'Bom', color: Colors.coral, prev: 52 },
  { name: 'B12', value: 380, unit: 'pg/mL', status: 'Ótimo', color: Colors.indigo, prev: 290 },
  { name: 'Magnésio', value: 2.1, unit: 'mg/dL', status: 'Normal', color: Colors.accentLight, prev: 1.8 },
];

const achievements = [
  { emoji: '🔥', title: '7 dias seguidos', desc: 'Streak ativo' },
  { emoji: '🧬', title: 'Protocolo criado', desc: 'Missão completa' },
  { emoji: '💊', title: '50 doses tomadas', desc: 'Consistente' },
  { emoji: '📊', title: 'Exames enviados', desc: 'Dados integrados' },
];

export default function Progresso() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      <Text style={styles.title}>Progresso</Text>

      {/* Streak hero */}
      <View style={styles.streakHero}>
        <Text style={styles.streakEmoji}>🔥</Text>
        <Text style={styles.streakNum}>7</Text>
        <Text style={styles.streakLabel}>dias consecutivos</Text>
        <Text style={styles.streakSub}>Continue assim! Próxima conquista em 3 dias</Text>
      </View>

      {/* Biomarkers */}
      <Text style={styles.sectionTitle}>Evolução dos biomarcadores</Text>
      {biomarkers.map(b => (
        <View key={b.name} style={styles.bioCard}>
          <View style={[styles.bioDot, { backgroundColor: b.color }]} />
          <View style={styles.bioInfo}>
            <Text style={styles.bioName}>{b.name}</Text>
            <Text style={styles.bioStatus}>{b.status}</Text>
          </View>
          <View style={styles.bioValues}>
            <Text style={styles.bioValue}>{b.value} {b.unit}</Text>
            <Text style={styles.bioPrev}>↑ antes: {b.prev}</Text>
          </View>
        </View>
      ))}

      {/* Achievements */}
      <Text style={styles.sectionTitle}>Conquistas</Text>
      <View style={styles.achievGrid}>
        {achievements.map(a => (
          <View key={a.title} style={styles.achievCard}>
            <Text style={styles.achievEmoji}>{a.emoji}</Text>
            <Text style={styles.achievTitle}>{a.title}</Text>
            <Text style={styles.achievDesc}>{a.desc}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg, padding: 20, paddingTop: 60 },
  title: { fontSize: 28, fontWeight: '800', color: Colors.black, marginBottom: 20 },
  streakHero: { backgroundColor: Colors.black, borderRadius: 24, padding: 32, alignItems: 'center', marginBottom: 28 },
  streakEmoji: { fontSize: 40, marginBottom: 8 },
  streakNum: { fontSize: 64, fontWeight: '800', color: Colors.white, lineHeight: 72 },
  streakLabel: { fontSize: 16, color: Colors.accentLight, fontWeight: '600', marginTop: 4 },
  streakSub: { fontSize: 13, color: Colors.muted, marginTop: 12, textAlign: 'center' },
  sectionTitle: { fontSize: 17, fontWeight: '700', color: Colors.black, marginBottom: 12 },
  bioCard: { backgroundColor: Colors.white, borderRadius: 16, padding: 16, marginBottom: 10, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: Colors.border },
  bioDot: { width: 12, height: 12, borderRadius: 6, marginRight: 14 },
  bioInfo: { flex: 1 },
  bioName: { fontSize: 15, fontWeight: '600', color: Colors.black },
  bioStatus: { fontSize: 12, color: Colors.muted, marginTop: 2 },
  bioValues: { alignItems: 'flex-end' },
  bioValue: { fontSize: 14, fontWeight: '700', color: Colors.accent },
  bioPrev: { fontSize: 11, color: Colors.muted, marginTop: 2 },
  achievGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 20 },
  achievCard: { backgroundColor: Colors.white, borderRadius: 16, padding: 16, width: '47%', alignItems: 'center', borderWidth: 1, borderColor: Colors.border },
  achievEmoji: { fontSize: 28, marginBottom: 8 },
  achievTitle: { fontSize: 13, fontWeight: '700', color: Colors.black, textAlign: 'center' },
  achievDesc: { fontSize: 11, color: Colors.muted, marginTop: 4, textAlign: 'center' },
});

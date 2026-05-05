import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

export default function Perfil() {
  const daysLeft = 83;
  const progress = ((90 - daysLeft) / 90) * 100;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      <Text style={styles.title}>Perfil</Text>

      {/* User card */}
      <View style={styles.userCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>A</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Arnaldo</Text>
          <View style={styles.planBadge}>
            <Text style={styles.planText}>✨ Plano Pro</Text>
          </View>
        </View>
      </View>

      {/* Protocolo countdown */}
      <View style={styles.countdownCard}>
        <Text style={styles.countdownTitle}>Protocolo ativo</Text>
        <Text style={styles.countdownDays}>{daysLeft} dias restantes</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.countdownSub}>Semana {Math.ceil((90 - daysLeft) / 7)} de 13</Text>
      </View>

      {/* Menu */}
      {[
        { emoji: '🧬', label: 'Meu protocolo' },
        { emoji: '📊', label: 'Meus exames' },
        { emoji: '🔔', label: 'Lembretes' },
        { emoji: '🔒', label: 'Privacidade' },
        { emoji: '❓', label: 'Suporte' },
      ].map(item => (
        <TouchableOpacity key={item.label} style={styles.menuItem}>
          <Text style={styles.menuEmoji}>{item.emoji}</Text>
          <Text style={styles.menuLabel}>{item.label}</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logoutText}>Sair da conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg, padding: 20, paddingTop: 60 },
  title: { fontSize: 28, fontWeight: '800', color: Colors.black, marginBottom: 20 },
  userCard: { backgroundColor: Colors.white, borderRadius: 20, padding: 20, flexDirection: 'row', alignItems: 'center', marginBottom: 16, borderWidth: 1, borderColor: Colors.border, gap: 16 },
  avatar: { width: 56, height: 56, borderRadius: 28, backgroundColor: Colors.accent, alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontSize: 24, fontWeight: '800', color: Colors.white },
  userInfo: { flex: 1 },
  userName: { fontSize: 20, fontWeight: '700', color: Colors.black },
  planBadge: { backgroundColor: Colors.amber, borderRadius: 999, paddingHorizontal: 12, paddingVertical: 4, alignSelf: 'flex-start', marginTop: 6 },
  planText: { fontSize: 12, fontWeight: '700', color: '#5A3A00' },
  countdownCard: { backgroundColor: Colors.black, borderRadius: 20, padding: 24, marginBottom: 24 },
  countdownTitle: { fontSize: 13, color: Colors.muted, fontWeight: '600', letterSpacing: 1 },
  countdownDays: { fontSize: 32, fontWeight: '800', color: Colors.white, marginTop: 4 },
  progressBar: { height: 6, backgroundColor: '#333', borderRadius: 3, marginTop: 16, marginBottom: 8 },
  progressFill: { height: 6, backgroundColor: Colors.accentLight, borderRadius: 3 },
  countdownSub: { fontSize: 12, color: Colors.muted },
  menuItem: { backgroundColor: Colors.white, borderRadius: 16, padding: 18, flexDirection: 'row', alignItems: 'center', marginBottom: 8, borderWidth: 1, borderColor: Colors.border },
  menuEmoji: { fontSize: 20, marginRight: 14 },
  menuLabel: { flex: 1, fontSize: 15, fontWeight: '600', color: Colors.black },
  menuArrow: { fontSize: 20, color: Colors.muted },
  logoutBtn: { marginTop: 16, padding: 18, alignItems: 'center' },
  logoutText: { fontSize: 15, color: Colors.muted, fontWeight: '600' },
});

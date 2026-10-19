import React, { useState } from 'react';
import { SafeAreaView, View, Text, Pressable, StyleSheet } from 'react-native';
import VeiculosScreen from './screens/VeiculosScreen';

export default function App() {
  const [mostrarVeiculos, setMostrarVeiculos] = useState(false);
  if (mostrarVeiculos) return <VeiculosScreen onVoltar={() => setMostrarVeiculos(false)} />;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>Aplicativo de cadastro</Text>
        <Text style={styles.descricao}>Acesse a tela para consultar a lista de veículos.</Text>
        <Pressable style={styles.botao} onPress={() => setMostrarVeiculos(true)}>
          <Text style={styles.textoBotao}>Ver veículos</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  conteudo: { flex: 1, justifyContent: 'center', padding: 24 },
  titulo: { fontSize: 26, fontWeight: 'bold', marginBottom: 12, color: '#0f172a' },
  descricao: { fontSize: 16, color: '#475569', marginBottom: 24 },
  botao: { backgroundColor: '#166534', padding: 15, borderRadius: 10, alignItems: 'center' },
  textoBotao: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
});

import { Text, View, StyleSheet } from "react-native";

// Passe os parametros de forma correta e realize a estilização do componente
export default function CardJogo(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Titulo: {props.titulo}</Text>
      <Text style={styles.info}>Genero: {props.genero}</Text>
      <Text style={styles.info}>Plataforma: {props.plataforma}</Text>
      <Text style={styles.info}>Nota: {props.nota}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgorundColor: "#fff".
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  info: {
    fontSize: 10,
  }
})

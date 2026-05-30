// TODO: estilizar esta tela com as cores e identidade visual do seu tema
// TODO: importar useState e useEffect — adicione a linha abaixo no topo:
import { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// TODO: substituir pelos jogos que voce escolheu
const jogos = [
  {
    id: '1',
    titulo: 'Minecraft',
    genero: 'Sobrevivência / Aventura / Mundo Aberto',
    plataforma: 'Disponível em praticamente todas as plataformas',
    nota: '9/10',
    sinopse:
      'Jogo de mundo aberto onde os jogadores exploram, coletam recursos, constroem estruturas e enfrentam criaturas.',
  },
  {
    id: '2',
    titulo: 'Fortnite',
    genero: 'Battle Royale / Tiro / Sobrevivência',
    plataforma: 'PS4 / Xbox / PC / Android',
    nota: '8.5/10',
    sinopse:
      'Até 100 jogadores competem em uma ilha até restar apenas um vencedor. Também possui modos criativos e eventos especiais.',
  },
  {
    id: '3',
    titulo: 'Among Us',
    genero: 'Estratégia / Multiplayer / Dedução Social',
    plataforma: 'PS4 / PC / Android / iOS',
    nota: '8/10',
    sinopse:
      'Tripulantes devem completar tarefas enquanto tentam descobrir quem são os impostores infiltrados na equipe.',
  },
  {
    id: '4',
    titulo: 'Roblox',
    genero: 'Plataforma de Jogos / Sandbox / Multiplayer',
    plataforma: 'PC / Switch / PS4 / Android / iOS',
    nota: '8/10',
    sinopse:
      'Plataforma que permite jogar milhões de experiências criadas pela comunidade ou desenvolver os seus próprios jogos.',
  },
  {
    id: '5',
    titulo: 'R.E.P.O.',
    genero: 'Terror Cooperativo / Ação / Extração',
    plataforma: 'PC',
    nota: '8.5/10',
    sinopse:
      'Os jogadores trabalham em equipe para recuperar objetos valiosos em locais perigosos enquanto evitam criaturas e armadilhas. O foco está na cooperação e na física dos objetos transportados.',
  },
  {
    id: '6',
    titulo: 'Call Of Duty: Black Ops 6',
    genero: 'Tiro em Primeira Pessoa / Ação',
    plataforma: 'PC / PS5 / PS4 / Xbox Series X/S / Xbox One',
    nota: '8/10',
    sinopse:
      'Campanha militar, modo multiplayer competitivo e modo zumbis. Faz parte de uma das franquias de tiro mais populares do mundo.',
  },
];

// TODO: adicionar { navigation } como parametro quando a navegacao estiver configurada
export default function HomeScreen({navigation}) {
  // TODO: estado para o texto digitado na busca
  const [busca, setBusca] = useState('');

  // TODO: estado com os jogos exibidos na lista — inicia com todos
  const [jogosFiltrados, setJogosFiltrados] = useState(jogos);

  // TODO: filtrar os jogos sempre que o valor de 'busca' mudar
  useEffect(() => {
    const resultado = jogos.filter((jogo) =>
       jogo.titulo.toLowerCase().includes(busca.toLowerCase())
     );
     setJogosFiltrados(resultado);
  }, [busca]);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        // TODO: implementar onPress com navigation.navigate passando os dados do jogo
        onPress={() => navigation.navigate('Detalhe', { titulo, genero, plataforma, nota, sinopse })}
      >
        <View style={styles.cardIcone}>
          {/* TODO: substituir pela inicial do titulo ou outro elemento do seu tema */}
          <Text style={styles.cardIconeTexto}>{item.titulo[0]}</Text>
        </View>
        <View style={styles.cardInfo}>
          {/* TODO: substituir pelos campos do seu tema */}
          <Text style={styles.cardTitulo}>{item.titulo}</Text>
          <Text style={styles.cardSubtitulo}>{item.genero}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* TODO: colocar o nome do seu app e subtitulo */}
        <Text style={styles.headerTitulo}>Catalogo de Games</Text>
        <Text style={styles.headerSubtitulo}>
          Escolha um jogo para ver os detalhes
        </Text>
      </View>

      {/* Campo de busca — TODO: adicionar value={busca} e onChangeText={setBusca} */}
      <View style={styles.buscaContainer}>
        <TextInput
          style={styles.buscaInput}
          placeholder="Buscar jogo..."
          placeholderTextColor="#999"
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      {/* TODO: trocar data={jogos} por data={jogosFiltrados} apos implementar o estado */}
      <FlatList
        data={jogosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

// TODO: estilizar com as cores e identidade visual do seu tema
const styles = StyleSheet.create({
  buscaContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  buscaInput: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: '#1A1A1A',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#333333',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitulo: {
    fontSize: 13,
    color: '#CCCCCC',
    marginTop: 4,
  },
  lista: {
    padding: 16,
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  cardIcone: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  cardIconeTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555555',
  },
  cardInfo: {
    flex: 1,
  },
  cardTitulo: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  cardSubtitulo: {
    fontSize: 13,
    color: '#888888',
  },
});

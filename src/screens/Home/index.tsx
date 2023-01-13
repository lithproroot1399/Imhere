import {Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import { Participant } from './components/Participant';
import { styles } from './styles';

export function Home() {
  const participants = ['Leandro', 'Caio', 'Alberto', 'Estefanio', 'Roberto', 'Mauro', 'Arlindo', 'Lalaio'];

  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!");
  }
  

  function handleParticipantRemove(name: String) {
    console.log(`Você clicou em remover o participante ${name}`);
  }
    return (
    <View style={styles.container}>
    <Text style={styles.eventName}>
      Nome do evento
      </Text>

    <Text style={styles.eventDate}>
      Segunda, 26 de Dezembro de 2022.
     </Text>

        <View style={styles.form}>

     <TextInput
     style={styles.input}
     placeholder="Nome do participante"
     placeholderTextColor="#6B6B6B"
     />

     <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
            +
        </Text>

     </TouchableOpacity>
     </View>
    
      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
          key={item}
          name={item}
          onRemove={() => handleParticipantRemove("Leandro")}
          />
        )}      
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
   </View>
  ); 
}

//Fazendo mudanças
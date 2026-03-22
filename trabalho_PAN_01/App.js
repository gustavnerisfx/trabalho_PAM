import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, Image, StyleSheet} from 'react-native';

const Artistas = {
  kurtcobain: require('./assets/img/kurtcobain.jpg'),
  chriscornell: require('./assets/img/cornell.jpg'),
  freddiemercury: require('./assets/img/mercury.jpg')
}

export default function App() {

  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState(null);

  const pesquisa = () => {
    const key = input.trim().toLowerCase(); 
    const url = Artistas[key];
    setImageUrl(url || null);
  }

  return (
    <View style={{ flex: 1, padding: 24, marginTop: 60 }}>
    
      <Text style={Styles.texto1}> Pesquise entre esses artistas: </Text>
      <Text style={Styles.texto2}> Kurt Cobain, Chris Cornell, Freddie Mercury </Text>
      <Text style={Styles.texto3}>(tudo em minusculo e junto)</Text>

      <TextInput 
        style={{ borderWidth: 1, marginTop: 30, padding: 6, textAlign: 'center'}}
        placeholder="Digite o nome do artista"
        value={input}
        onChangeText={setInput}  
      />

      <Pressable style={{backgroundColor: 'purple', padding: 10, justifyContent: 'center',
      marginTop: 20}} onPress={pesquisa}>
        <Text style={{color: 'white', textAlign: 'Center'}}>Buscar</Text>
      </Pressable>


      {imageUrl && (
          <Image
            source={imageUrl}
            style={{ width: '100%', height: 800, marginTop: 24 }}
            resizeMode="cover"
          />
      )}

      {!imageUrl && input !== '' && (
          <Text style={{ color: 'red', marginTop: 12 }}>Artista não encontrado.</Text>
      )}

    </View>
  );

}

const Styles = StyleSheet.create ({

  texto1: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  texto2: {
    marginTop: 5
  },
  texto3: {
    marginTop: 5,
    fontStyle: 'italic',
    color: 'grey'
  }
})



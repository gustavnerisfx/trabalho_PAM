import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, Image, StyleSheet} from 'react-native';

const Artistas = {
  kurtcobain: require('./assets/img/kurtcobain.jpg'),
  chriscornell: require('./assets/img/cornell.jpg'),
  freddiemercury: require('./assets/img/mercury.jpg')
}

export default function App() {

  const [image, setImage] = useState(Artistas.kurtcobain);

  return (

    <View style={styles.blocoA}>

      <Text style={styles.texto1}>Escolha uma imagem</Text>

      <View>
        <Image source={image} style={styles.imgA}/>
      </View>

      <View style={styles.blocoB}>

        <Pressable onPress={() => setImage(Artistas.kurtcobain)}>
          <Image source={Artistas.kurtcobain} style={styles.imgB}/>
        </Pressable>

        <Pressable onPress={() => setImage(Artistas.freddiemercury)}>
          <Image source={Artistas.freddiemercury} style={styles.imgB}/>
        </Pressable>

        <Pressable onPress={() => setImage(Artistas.chriscornell)}>
          <Image source={Artistas.chriscornell} style={styles.imgB}/>
        </Pressable>

      </View>

    </View>

  );

}

const styles = StyleSheet.create ({

  texto1: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30
  },

  blocoA: {
    flex: 1,
    justifyContent: 'center',
    padding: 8
  },

  imgA: {
    width: '100%',  
    height: 400,
    borderWidth: 3,  
    borderRadius: 10,
  },

  imgB: {
    width: 80,  
    height: 80,  
  },

  blocoB: {
    gap: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 8
  }
    
});
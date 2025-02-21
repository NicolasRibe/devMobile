import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SectionList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Botão pressionado!');
    }, 2000);
  };

  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  const sections = [
    {
      title: 'Seção 1',
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    },
    {
      title: 'Seção 2',
      data: [
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={StyleSheet.view}>
        <Text style={StyleSheet.text}> Olá, mundo !</Text>
        <Image
        source={{uri:'https://reactnative.dev/img/react_native_logo.png'}}
        style={styles.image}  
        ></Image>
        <TextInput>
          style={styles.textInput}
          placeHolder="Digite algo"
          value={text}
          OnChangeText={setText}

        </TextInput>

        <Button title="Clique aqui" onPress={handlePress}></Button>
        <TouchableOpacity style={styles.touchableOpacity} onPress={handlePress}>
        <Text style={styles.touchableOpacityText}>Toque aqui</Text></TouchableOpacity>

        <ActivityIndicator animating={isLoading}></ActivityIndicator>

      </View>

      <FlatList data={data}
      renderItem={({item})=><Text>{item.name}</Text>}
      keyExtractor={(item) => item.id.toString()}
      ></FlatList>


      <SectionList 
      sections={sections}
      renderItem={({item}) => <Text>{item.name}</Text>}
      renderSectionHeader={({section:{title}}) =><Text style={styles.sectionHeader}>{title}</Text>}
      keyExtractor={(item) => item.id.toString()}
      
      ></SectionList>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
  },
  view: {
      marginBottom: 20,
  },
  text: {
      fontSize: 20,
      marginBottom: 10,
  },
  image: {
      width: 100,
      height: 100,
      marginBottom: 10,
  },
  textInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
  },
  touchableOpacity: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
  },
  touchableOpacityText: {
      color: 'white',
      textAlign: 'center',
  },
  sectionHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
  },
});

export default App;


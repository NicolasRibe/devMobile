import React from "react";
import { View, StatusBar } from "react-native";
import styles from "./styles.js";
import Box from "./Box.js";

// Cria um array de 10 elementos, cada um contendo um número de 1 a 10
const boxes = new Array(10).fill(null).map((v, i) => i + 1);

// Componente principal App
export default function App() {
  return (
    // View principal que serve como container
    <View style={styles.container}>
      {/* Componente StatusBar para controlar a visibilidade da barra de status */}
      <StatusBar hidden={false} />
      
      {/* Mapeia o array 'boxes' e renderiza um componente Box para cada elemento */}
      {boxes.map((i) => (
        // Utiliza 'i' como chave para otimizar a renderização da lista
        <Box key={i}>#{i}</Box>
      ))}
    </View>
  );
}
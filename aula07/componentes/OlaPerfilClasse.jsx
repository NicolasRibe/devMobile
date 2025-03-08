import React from "react";
import { Text, View } from "react-native-web";

class OlaPerfilClasse extends React.Component {
  render() {
    return (
      <View>
        <Text>Ola,{this.props.name}</Text>
      </View>
    );
  }
}

export default OlaPerfilClasse;

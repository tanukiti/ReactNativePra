import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Title/>
        <Text style={styles.text}>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: '#000',
    padding: '10px',
    
  },
});

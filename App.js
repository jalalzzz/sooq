import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View style={styles.mainView}>
      <View style={styles.titleText}>
        <Text style={styles.tilteText2}>شركة ابو عواد لتجارة الفواكه</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Text style={styles.textButton}>إستلام </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Text style={styles.textButton}>بيع</Text>
        </TouchableOpacity>


      </View>
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection:"row",
  },
  titleText: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    marginTop:30,
    backgroundColor: '#ff0000',


  },
  mainView: {
    flex: 1,
    backgroundColor: '#ffff00',
    width: '100%', 
    height: '100%'
  },
  tilteText2: {
    textShadowColor: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    fontSize: 22,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
   
  },
  button: {

   

    backgroundColor: "#cccccc",
    padding: 10,
    width:'30%',
    height:100,
    borderRadius:15,


  },textButton:{
    marginVertical:20,
    textAlign:"center",
    fontSize: 22,
  }
});

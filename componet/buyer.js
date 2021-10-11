import * as React from 'react';
import {
    Button,
    View,
    Text,
    SafeAreaView
} from 'react-native';

const Buyer = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' ,margin:15}}>

      <Button onPress={() => navigation.navigate('newBuyer')} title="اضافة استلام جديد" />
    </View>
    );
  }
  

 
  export default Buyer;

 
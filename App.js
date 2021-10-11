import * as React from 'react';
import { Button, View, TouchableOpacity, I18nManager, Image, StyleSheet, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import Buyer from './componet/buyer';
import Seller from './componet/seller';
import NewBuyer from './componet/newBuyer';





function HomeScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', flexDirection: "row" }}>
      {/*<Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      /> */}
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Buyer')} >
        <View style={styles.absoluteView}>
          <Text style={styles.text}>استلام</Text>
        </View>
        <Image source={require('./assets/1.png')} style={styles.img} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Seller')} >
        <View style={styles.absoluteView}>
          <Text style={styles.text}>بيع</Text>
        </View>
        <Image source={require('./assets/2.png')} style={styles.img} />
      </TouchableOpacity>
    </View>
  );
}




const Drawer = createDrawerNavigator();

export default function App() {
  I18nManager.forceRTL(true);
  return (

    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home"
        screenOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen name="Home" component={HomeScreen}
          options={({ navigation }) => ({
            title: "الرئيسية",
            headerStyle: {
              backgroundColor: "rgb(0, 145, 234)",
            },
            drawerLabel: 'الرئيسية',
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white",

            },


          })
          }

        />
        <Drawer.Screen name="Buyer" component={Buyer}

          options={({ navigation }) => ({
            title: "استلام",
            headerStyle: {
              backgroundColor: "rgb(0, 145, 234)",
            },
            drawerLabel: 'استلام',
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white",

            },


          })
          }

        />
        <Drawer.Screen name="Seller" component={Seller}

          options={({ navigation }) => ({
            title: "بيع",
            headerStyle: {
              backgroundColor: "rgb(0, 145, 234)",
            },
            drawerLabel: 'بيع',
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white",

            },


          })
          }

        />
        <Drawer.Screen name="newBuyer" component={NewBuyer}

          options={({ navigation }) => ({
            title: "اضافة استلام جديد",
            headerStyle: {
              backgroundColor: "rgb(0, 145, 234)",
            },
            drawerLabel: 'اضافة استلام جديد',
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white",

            },


          })
          }

        />
      </Drawer.Navigator>
    </NavigationContainer>

  );

}

const styles = StyleSheet.create({
  absoluteView: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    textAlign: "center",

  },
  img: {},
  btn: {
    borderColor: "#0091EA",
    borderRadius: 15,
    borderWidth: 2,
    width: 100,
    height: 100
  }, text: {
    marginLeft: 20,
    fontSize: 22
  }
});


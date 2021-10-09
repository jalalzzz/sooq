import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { I18nManager } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function NotificationsScreen1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
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
        <Drawer.Screen name="Notifications" component={NotificationsScreen}

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
        <Drawer.Screen name="Notifications1" component={NotificationsScreen1}

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
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

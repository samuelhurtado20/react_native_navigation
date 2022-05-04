import * as React from 'react'
import { Button, View, Text } from 'react-native'
import { NavigationContainer, useFocusEffect } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

function SettingsScreen({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      alert('SettingsScreen was focused')
      // Do something when the screen is focused
      return () => {
        alert('SettingsScreen was unfocused')
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      }
    }, [])
  )

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  )
}

function ProfileScreen({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      alert('ProfileScreen was focused')
      // Do something when the screen is focused
      return () => {
        alert('ProfileScreen was unfocused')
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      }
    }, [])
  )

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  )
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </View>
  )
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to Details... again" onPress={() => navigation.push('Details')} />
    </View>
  )
}
const Tab = createBottomTabNavigator()
const SettingsStack = createNativeStackNavigator()
const HomeStack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Home') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-text' : 'ios-list'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray'
        })}
      >
        <Tab.Screen name="Settings">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen name="Settings Screen" component={SettingsScreen} />
              <SettingsStack.Screen name="Profile" component={ProfileScreen} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Home" options={{ tabBarBadge: 3 }}>
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home Screen" component={HomeScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

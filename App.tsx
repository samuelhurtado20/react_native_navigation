import * as React from 'react'
import { Text, TextInput, View, Button, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Create post" onPress={() => navigation.navigate('CreatePost')} />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  )
}

function LogoTitle() {
  return <Image style={{ width: 50, height: 50 }} source={require('./assets/icon-menu-hamburger-png-white.png')} />
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('')
  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 25, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: { post: postText },
            merge: true
          })
        }}
      />
    </>
  )
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerRight: () => <Button onPress={() => alert('This is a button!')} title="Info" color="#fff" />
          }}
        />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} options={{ headerTitle: (props) => <LogoTitle {...props} /> }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

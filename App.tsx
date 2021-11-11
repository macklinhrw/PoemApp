import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet, AppRegistry } from "react-native";
import { Home } from "./src/screens/Home";
import { NewPoem } from "./src/screens/NewPoem";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "http://10.0.0.36:4000/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="New Poem" component={NewPoem} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  animButton: {},
});

export default App;

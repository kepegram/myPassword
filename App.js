import Home from "./src/home/homescreen";
import Random from "./src/random/random";
import Memorable from "./src/memorable/memorable";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#b5b5b5",
            },
          }}
        />
        <Stack.Screen
          name="Random Password"
          component={Random}
          options={{
            headerStyle: {
              backgroundColor: "#b5b5b5",
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
        <Stack.Screen
          name="Memorable Password"
          component={Memorable}
          options={{
            headerStyle: {
              backgroundColor: "#b5b5b5",
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

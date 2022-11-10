import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddFood from "./screens/AddFood";
import AddPerson from "./screens/AddPerson";
import Calculate from "./screens/Calculate";
import EditFood from "./screens/EditFood";
import EditPerson from "./screens/EditPerson";
import Main from "./screens/Main";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Add Food" component={AddFood} />
        <Stack.Screen name="Edit Food" component={EditFood} />
        <Stack.Screen name="Add Person" component={AddPerson} />
        <Stack.Screen name="Edit Person" component={EditPerson} />
        <Stack.Screen name="Calculate" component={Calculate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

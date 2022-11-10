import { Button } from "@react-native-material/core";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { RootStackParamList } from "../types";

export default function Main({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) {
  return (
    <View>
      <Text>Main</Text>
      <Button
        title="Add Food"
        onPress={() => navigation.navigate("Add Food")}
      />
      <Button
        title="Edit Food"
        onPress={() => navigation.navigate("Edit Food")}
      />
      <Button
        title="Add Person"
        onPress={() => navigation.navigate("Add Person")}
      />
      <Button
        title="Add Person"
        onPress={() => navigation.navigate("Add Person")}
      />
      <Button
        title="Calculate"
        onPress={() => navigation.navigate("Calculate")}
      />
    </View>
  );
}

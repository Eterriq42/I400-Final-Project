import { Text, View, Button, StyleSheet } from "react-native";

import { useNavigation } from "expo-router";
// import countries from "./countries"; 

export default function Index() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="Get Started!" onPress={() => {
        navigation.navigate("index");
      }} />
    </View>
  );
}



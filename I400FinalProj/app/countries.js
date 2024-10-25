import { Text, View, Button, StyleSheet } from "react-native";

import { useNavigation } from "expo-router";
import resorts from "./resorts";

export default function Index() {
  const navigation = useNavigation();

  return (
    <View style={styles.style}>

      <View style={styles.container}>
        <Text style={styles.title}>Select a Country!</Text>

        <View style={styles.countryCont}>
          <Text>{resorts.mexico.name}</Text>
          <Button title={`Go to ${resorts.mexico.name}`} onPress={() => {
            navigation.navigate("tabs/mexico");
          }} />
        </View>

        <View style={styles.countryCont}>
          <Text>Dominican Republic</Text>
          <Button title="Go to Dominican Republic" onPress={() => {
            navigation.navigate("tabs/dominicanRepublic");
          }} />
        </View>

        <View style={styles.countryCont}>
          <Text>Puerto Rico</Text>
          <Button title="Go to Puerto Rico" onPress={() => {
            navigation.navigate("tabs/puertoRico");
          }} />
        </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  countryCont: {
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    margin: 100,
  },

})

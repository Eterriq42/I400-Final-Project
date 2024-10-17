import { Text, View, Button, StyleSheet } from "react-native";

import { useNavigation } from "expo-router";


export default function Index() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to JetQuest!</Text>
      <View style={styles.intro}>
        <Text>Ever Wanted to Go on a Nice Vacation?</Text>
        <Text>Here at JetQuest, you can find your best choice</Text>
        <Text>Including cheaper Resorts and Flights</Text>
      </View>
      <View style={styles.button}>
        <Button title="Get Started!" onPress={() => {
          navigation.navigate("countries");
        }} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: .5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor:'lightblue',
  },
  welcome: {
    flex: .5,
    fontSize: 30,
    fontWeight: "bold",
  },
  intro: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    margin: 20,
  }
 
})
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import resorts from "../resorts";
import { useCart } from "./cart";
import { useNavigation } from "expo-router";
import { useState, useEffect } from "react";
import getAllResortWeather from "./weather";

export default function Mexico() {
  const { addToCart } = useCart();
  const navigation = useNavigation();
  const [resortWeatherData, setResortWeatherData] = useState([]);

  useEffect(() => {
    (async () => {
      const weatherData = await getAllResortWeather();
      setResortWeatherData(weatherData.mexico);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {resortWeatherData.map((resort, index) => (
          <View key={index} style={styles.resortBox}>
            <Text style={styles.resortName}>{resort.name}</Text>
            <Text>{resort.description}</Text>
            <Text style={styles.price}>${resort.price}</Text>
            {resort.temperature && (
              <Text>{resort.temperature}°F</Text>
            )}
            <Button
              title="Add to Cart"
              onPress={() => {
                addToCart({ type: "resort", ...resort });
                navigation.navigate("tabs/flights");
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  resortBox: {
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  resortName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#636363",
    marginBottom: 10,
  },
  scrollContent: {
    paddingBottom: 20,
  }
});
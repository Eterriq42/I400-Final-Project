import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useCart } from "./cart";
import { useNavigation } from "expo-router";


const flights = [
    { airline: "Southwest Airlines", addOn: "+ $0" },
    { airline: "American Airlines", addOn: "+ $20" },
    { airline: "Delta", addOn: "+ $30" },
    { airline: "JetBlue", addOn: "+ $50" },
];

export default function Flights() {
    const { addToCart } = useCart();
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose Your Airline</Text>
            {flights.map((flight, index) => (
                <View key={index} style={styles.flightBox}>
                    <Text style={styles.airline}>{flight.airline}</Text>
                    <Text>{flight.addOn}</Text>
                    <Button
                        title="Select"
                        onPress={() => {
                            addToCart({ type: "airline", ...flight })
                            navigation.navigate("tabs/review")
                        }}
                    />
                </View>
            ))}
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
    flightBox: {
        marginVertical: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        alignItems: "center",
    },
    airline: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

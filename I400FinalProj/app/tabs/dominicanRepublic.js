import { Text, View, StyleSheet, Button } from "react-native";
import resorts from "../resorts";
import { useCart } from "./cart";
import { useNavigation } from "expo-router";

export default function DominicanRepublic() {
    const { addToCart } = useCart();
    const navigation = useNavigation();
    const domResorts = resorts.dominicanRepublic.resorts;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resorts in {resorts.dominicanRepublic.name}</Text>
            {domResorts.map((resort, index) => (
                <View key={index} style={styles.resortBox}>
                    <Text style={styles.resortName}>{resort.name}</Text>
                    <Text>{resort.description}</Text>
                    <Text style={styles.price}>{resort.price}</Text>
                    <Button title="Add to Cart" onPress={() => {
                        addToCart({ type: "resort", ...resort })
                        navigation.navigate("tabs/flights")
                    }} />

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
});
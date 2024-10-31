import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { useCart } from "./cart";



export default function Review() {
    const { cart } = useCart();


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Review Your Selections</Text>

            <FlatList
                data={cart}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemBox}>
                        {item.type === "resort" ? (
                            <>
                                <Text style={styles.itemName}>Resort: {item.name}</Text>
                                <Text>{item.description}</Text>
                                <Text style={styles.price}>Price: {item.price}</Text>
                            </>
                        ) : (
                            <Text style={styles.itemName}>Airline: {item.airline}</Text>
                        )}
                        <Text>{item.addOn ? `Add-On: ${item.addOn}` : ""}</Text>
                    </View>
                )}
            />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    itemBox: {
        marginVertical: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
    },
    itemName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    price: {
        fontSize: 16,
        color: "#636363",
    },
});

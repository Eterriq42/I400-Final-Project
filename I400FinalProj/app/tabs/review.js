import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { useCart } from "./cart";
import { useNavigation } from "expo-router";
import { useState } from "react";



export default function Review() {
    const { cart, clearCart } = useCart();
    const navigation = useNavigation();
    const [orderSubmitted, setOrderSubmitted] = useState(false);

    const calculateTotal = () => {
        return cart.reduce((total, item) => {
            if (item.type === "resort") {
                return total + item.price;
            }
            if (item.type === "airline") {
                return total + item.addOn;
            }
            return total;
        }, 0);
    };

    const totalPrice = calculateTotal();

    const handleOrderSubmit = () => {
        setOrderSubmitted(true);
    };

    const handleReturnHome = () => {
        clearCart();
        navigation.navigate("index");
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Review Your Selections</Text>

            {!orderSubmitted ? (
                <>
                    <FlatList
                        data={cart}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.itemBox}>
                                {item.type === "resort" ? (
                                    <>
                                        <Text style={styles.itemName}>Resort: {item.name}</Text>
                                        <Text>{item.description}</Text>
                                        <Text style={styles.price}>Price: ${item.price}</Text>
                                    </>
                                ) : (
                                    <Text style={styles.itemName}>Airline: {item.airline}</Text>
                                )}
                                <Text>{item.addOn ? `Add-On: +${item.addOn}` : ""}</Text>
                            </View>
                        )}
                    />
                    <Text style={styles.totalText}>Your Total will be: ${totalPrice.toFixed(2)}</Text>
                    <Button title="Submit Order" onPress={handleOrderSubmit} />
                </>
            ) : (
                <>
                    <Text style={styles.confirmationText}>Order Submitted!</Text>
                    <Button title="Return Home" onPress={handleReturnHome} />
                </>
            )}

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
        borderColor: "black",
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
    totalText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
    },
    confirmationText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "green",
        textAlign: "center",
        marginVertical: 20,
    },
});

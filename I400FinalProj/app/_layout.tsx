import { Stack } from "expo-router";
import {CartProvider} from "./tabs/cart";

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack
        screenOptions={{
          title: "JetQuest",
          headerStyle: { backgroundColor: "#cfb353" },
        }}>
        <Stack.Screen name="index" />

      </Stack>
    </CartProvider>
  );
}

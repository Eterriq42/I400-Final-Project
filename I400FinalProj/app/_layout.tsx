import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        title: "JetQuest",
        headerStyle: { backgroundColor: "#cfb353" },
      }}>
      <Stack.Screen name="index" />

    </Stack>
  );
}

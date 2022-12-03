import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another Text</Text>
      </View>
      <Text
        style={{
          margin: 16,
          borderWidth: 2,
          borderColor: "red",
          padding: 16,
        }}
      >
        Hello
      </Text>
      <Button title="Tap" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

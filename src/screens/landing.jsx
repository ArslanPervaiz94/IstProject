import { StyleSheet, Text, View } from "react-native";

function Landing() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b5e2fa",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
export { Landing };

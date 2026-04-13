import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.class1]}>Jaira April Llarenas.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  class1: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    color: "white",
    fontSize: 30
  },
});

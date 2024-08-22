import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Homescreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Password Generator</Text>
      <View style={styles.paddingBetweenButtons}>
        <Button
          title="Random"
          onPress={() => navigation.navigate("Random Password")}
          style={styles.button}
          color= "#69bdbf"
        ></Button>
      </View>
      <View style={styles.paddingBetweenButtons}>
        <Button
          title="Memorable"
          onPress={() => navigation.navigate("Memorable Password")}
          color= "#b65eff"
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b5b5b5",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#595959",
  },
  paddingBetweenButtons: {
    marginVertical: 10,
  }
});

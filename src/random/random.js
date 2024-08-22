import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from "react-native";

export default function Random() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState("12");
  const [useSymbols, setUseSymbols] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(true);

  const generatePassword = () => {
    let chars = "";
    let newPassword = "";

    if (useSymbols) chars += "!@#$%^&*()";
    if (useNumbers) chars += "0123456789";
    if (useLowerCase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (useUpperCase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < parseInt(passwordLength); i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Length:</Text>
          <TextInput
            keyboardType="numeric"
            value={passwordLength}
            onChangeText={(text) => setPasswordLength(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.switch}>
          <Switch
            trackColor={"#767577"}
            thumbColor={"#f4f3f4"}
            value={useSymbols}
            onValueChange={() => setUseSymbols(!useSymbols)}
          />
          <Text style={styles.switchLabel}>Use Symbols</Text>
        </View>
        <View style={styles.switch}>
          <Switch
            trackColor={"#767577"}
            thumbColor={"#f4f3f4"}
            value={useNumbers}
            onValueChange={() => setUseNumbers(!useNumbers)}
          />
          <Text style={styles.switchLabel}>Use Numbers</Text>
        </View>
        <View style={styles.switch}>
          <Switch
            trackColor={"#767577"}
            thumbColor={"#f4f3f4"}
            value={useLowerCase}
            onValueChange={() => setUseLowerCase(!useLowerCase)}
          />
          <Text style={styles.switchLabel}>Lowercase</Text>
        </View>
        <View style={styles.switch}>
          <Switch
            trackColor={"#767577"}
            thumbColor={"#f4f3f4"}
            value={useUpperCase}
            onValueChange={() => setUseUpperCase(!useUpperCase)}
          />
          <Text style={styles.switchLabel}>Uppercase</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={generatePassword}>
          <Text style={styles.buttonText}>Generate Password</Text>
        </TouchableOpacity>
        {password !== "" && (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password:</Text>
            <TextInput value={password} style={styles.input} />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#b5b5b5",
  },
  container: {
    margin: 20,
    marginTop: 150,
    padding: 20,
    borderColor: "#cccccc",
    borderRadius: 8,
    borderWidth: 4,
    shadowColor: "turquoise",
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 55,
    backgroundColor: "#dbdbdb",
  },
  subHeader: {
    textAlign: "center",
    fontSize: 28,
    marginBottom: 10,
    color: "#595959",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: 18,
  },
  input: {
    flex: 2.5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    fontSize: 16,
  },
  switch: {
    alignItems: "center",
  },
  switchLabel: {
    fontSize: 16,
  },
  button: {
    padding: 10,
    backgroundColor: "#69bdbf",
    borderRadius: 5,
    margin: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

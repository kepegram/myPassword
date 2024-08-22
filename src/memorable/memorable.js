import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { wordList } from "../words/wordList";

export default function Memorable() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState("4");
  const [numberLength, setNumberLength] = useState("2");
  // const [useSymbols, setUseSymbols] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(false);
  const [useSnakeCase, setUseSnakeCase] = useState(true);

  const generatePassword = () => {
    let chars = "";
    let charPassword = "";
    let newPassword = [];

    // if (useSymbols) chars += "!@#$%^&*()";
    if (useNumbers) chars += "0123456789";

    for (let i = 0; i < passwordLength; i++) {
      var randomWords = wordList[Math.floor(Math.random() * wordList.length)];
      newPassword.push(randomWords);
    }

    if (useLowerCase === true && useUpperCase === true) {
      Alert.alert(
        "Please select only one letter casing for memorable passwords"
      );
    } else if (useLowerCase === true && useUpperCase === false) {
      newPassword.join("").toLowerCase();
    } else if (useLowerCase === false && useUpperCase === true) {
      newPassword.join("").toUpperCase();
    } else {
      Alert.alert("Please select a casing option for memorable passwords");
    }

    for (let i = 0; i < numberLength; i++) {
      charPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    newPassword.push(charPassword);

    if (useSnakeCase === true) {
        setPassword(newPassword.join("_"));
    } else {
        setPassword(newPassword.join(""));
    }
  };

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Word Count:</Text>
          <TextInput
            keyboardType="numeric"
            value={passwordLength}
            onChangeText={(text) => setPasswordLength(text)}
            style={styles.input}
          />
        </View>
        {useNumbers == true && (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Number Count:</Text>
            <TextInput
              keyboardType="numeric"
              value={numberLength}
              onChangeText={(text) => setNumberLength(text)}
              style={styles.input}
            />
          </View>
        )}
        {/* <View style={styles.switch}>
          <Switch
            trackColor={{ false: "silver", true: "#b65eff" }}
            thumbColor={"#f4f3f4"}
            value={useSymbols}
            onValueChange={() => setUseSymbols(!useSymbols)}
          />
          <Text style={styles.switchLabel}>Use Symbols</Text>
        </View> */}
        <View style={styles.switch}>
          <Switch
            trackColor={{ false: "silver", true: "#b65eff" }}
            thumbColor={"#f4f3f4"}
            value={useNumbers}
            onValueChange={() => setUseNumbers(!useNumbers)}
          />
          <Text style={styles.switchLabel}>Use Numbers</Text>
        </View>
        <View style={styles.switch}>
          <Switch
            trackColor={{ false: "silver", true: "#b65eff" }}
            thumbColor={"#f4f3f4"}
            value={useLowerCase}
            onValueChange={() => setUseLowerCase(!useLowerCase)}
          />
          <Text style={styles.switchLabel}>Lowercase</Text>
        </View>
        <View style={styles.switch}>
          <Switch
            trackColor={{ false: "silver", true: "#b65eff" }}
            thumbColor={"#f4f3f4"}
            value={useUpperCase}
            onValueChange={() => setUseUpperCase(!useUpperCase)}
          />
          <Text style={styles.switchLabel}>Uppercase</Text>
        </View>
        <View style={styles.switch}>
          <Switch
            trackColor={{ false: "silver", true: "#b65eff" }}
            thumbColor={"#f4f3f4"}
            value={useSnakeCase}
            onValueChange={() => setUseSnakeCase(!useSnakeCase)}
          />
          <Text style={styles.switchLabel}>Snakecase</Text>
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
    shadowColor: "purple",
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 55,
    backgroundColor: "#dbdbdb",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: 18,
    color: "#595959",
  },
  input: {
    flex: 2.5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    fontSize: 16,
    color: "#595959",
  },
  switch: {
    alignItems: "center",
  },
  switchLabel: {
    fontSize: 16,
    color: "#595959",
  },
  button: {
    padding: 10,
    backgroundColor: "#b65eff",
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

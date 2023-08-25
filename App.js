import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const App = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    // Send the message to the server
    const { message } = this.state;
    const requestOptions = {
      method: "POST",
      url: "https://example.com/api/messages",
      body: JSON.stringify({ message }),
    };
    const response = await fetch(requestOptions);
    if (response.ok) {
      // Message sent successfully
    } else {
      // Handle error
    }
  };

  return (
      <SafeAreaView style={styles.container}>
        <TextInput
            placeholder="Let's send"
            value={message}
            onChangeText={setMessage}
            style={styles.input}
        />
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.button}>Send</Text>
        </TouchableOpacity>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#000",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

export default App;

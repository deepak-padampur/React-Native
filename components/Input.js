import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GetInput = props => {
  const [EnteredGoals, setEnteredGoal] = useState("");
  const keyStroke = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(EnteredGoals);
    //set
    setEnteredGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.input}>
        <TextInput
          placeholder="Enter your Goal...."
          style={styles.text}
          onChangeText={keyStroke}
          value={EnteredGoals}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    fontSize: 20,
    padding: 5,
    marginBottom: 10,
    borderRadius: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  button: {
    width: "30%"
  }
});
export default GetInput;

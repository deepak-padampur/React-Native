import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={style.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 5,
    backgroundColor: "#ccc",
    borderColor: "black",
    marginVertical: 10,
    borderWidth: 1
  }
});
export default GoalItem;

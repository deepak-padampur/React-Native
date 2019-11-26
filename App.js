import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import GetInput from "./components/Input";
import GoalItem from "./components/GoalItem";

export default function App() {
  //rendering the list
  const [Goals, setGoals] = useState([]);
  //modal
  const [openModal, setOpenModal] = useState(false);

  const addGoalHandler = goalTitle => {
    // console.log(EnteredGoals);
    if (goalTitle.length === 0) {
      return alert("Plase add a goal and Try!!!");
    }
    setGoals(currentGoal => [
      ...Goals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setOpenModal(false);
  };

  const deleteHandler = goalId => {
    // console.log(goalId);
    setGoals(currentGoal => {
      return currentGoal.filter(goal => goal.id !== goalId);
    });
  };
  const cancelGoalAdditionHandler = () => {
    setOpenModal(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="ADD NEW GOAL" onPress={() => setOpenModal(true)} />
      <GetInput
        visible={openModal}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />

      <FlatList
        keyExtractor={(goal, index) => goal.id}
        data={Goals}
        renderItem={dataItem => (
          <GoalItem
            title={dataItem.item.value}
            id={dataItem.item.id}
            onDelete={deleteHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

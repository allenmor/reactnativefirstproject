import { StyleSheet, View, Text, Pressable } from "react-native";
import { useState } from "react";
function GoalItem({ text, deleteGoalHandler, id }) {



    function goalClickedHandler() {
             deleteGoalHandler(id)
    }


  return (
    <Pressable onPress={goalClickedHandler} style={({pressed}) => pressed && styles.pressedItem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
      opacity: 0.5    
  },
  goalText: {
    color: "white",
  },
});

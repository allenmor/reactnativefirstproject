
import { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";


function GoalInput({ setCourseGoals}) {
    const [enteredGoal, setEnteredGoal] = useState("");

    function goalInputHandler(e) {
        setEnteredGoal(e);
      }
      function addGoalHandler() {
        setCourseGoals((prev) => [...prev, {text: enteredGoal, id: Math.random().toString()}]);
        setEnteredGoal('')
      }
    
    return (

        <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your Goal IS HERE"
          value={enteredGoal}
        />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>

    )
}


export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        alignItems: "center",
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "80%",
        marginRight: 5,
        padding: 8,
      }
  })
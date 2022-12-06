import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function deleteGoalHandler(id) {
    setCourseGoals((prev) =>
      prev.filter((el, i) => {
        return el.id !== id;
      })
    );
  }

  function handleNBAClick() {
    setCourseGoals([...courseGoals, {text: 'NBA', id: `${Math.random()}`}])
  }
  function handleResetClick(){
    setCourseGoals([])
  }
  return (
    <View style={styles.appContainer}>
      <Pressable onPress={handleNBAClick}>
        <View style={styles.nbaLogo}>
          <Text style={styles.nbaText}>NBA Report</Text>
        </View>
      </Pressable>
      <GoalInput setCourseGoals={setCourseGoals} />
      <Pressable onPress={handleResetClick}>
      <View style={styles.resetBtn}>
        <Text style={styles.resetText}>Reset</Text>
      </View>
      </Pressable>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            itemData.index;
            return (
              <GoalItem
                deleteGoalHandler={deleteGoalHandler}
                text={itemData.item.text}
                id={itemData.item.id}
              />
            );
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
  nbaLogo: {
    backgroundColor: "red",
    borderRadius: 10,
  },
  nbaText: {
    fontWeight: "bold",
    fontSize: 30,
    padding: 10,
  },
  resetBtn: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    padding: 4,
    backgroundColor: 'black',
    borderRadius: 8,
    marginBottom: 5
  },
  resetText: {
    color: 'white',
    fontWeight: 'bold',
    padding: 10
  }
});

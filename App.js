import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";



export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function deleteGoalHandler(id) {
    setCourseGoals(prev => prev.filter((el, i) => {
      return el.id !== id
    }))

  }
  return (
    <View style={styles.appContainer}>
      <View>
        <Text>NBA Report</Text>
      </View>
      <GoalInput setCourseGoals={setCourseGoals} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData => {
          itemData.index
          return (
            <GoalItem deleteGoalHandler={deleteGoalHandler} text={itemData.item.text} id={itemData.item.id} />
          )
        })} alwaysBounceVertical={false}>
        </FlatList>
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
  }
});

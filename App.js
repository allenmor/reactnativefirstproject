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





  return (
    <View style={styles.appContainer}>
      <GoalInput setCourseGoals={setCourseGoals} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData => {
          itemData.index
          return (
            <GoalItem text={itemData.item} />
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

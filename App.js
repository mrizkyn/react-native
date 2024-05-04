import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [ 
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    // console.log('Your clicked the button!');
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Course Goal!" onChangeText={goalInputHandler}/>
        <Button style={styles.Button} title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View/>
      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
        {courseGoals.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  }
  // garis: {
  //   borderBottomColor: '#cccccc',
  //   borderBottomWidth: 1,
  //   marginVertical: 24,
  //   width: '120%',
  //   alignSelf: 'center', 
  // },
  // textList: {
  //   width: '120%',
  //   alignSelf: 'center', 
  // },
});

export default App;

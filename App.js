import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { use, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={{ fontSize: 30, textAlign: "center" }}>TO-DO List</Text>
          <View style={{ flex: 1}}>
            {tasks.map((t, index) => (
              <Text key={index} style={{ fontSize: 20, padding: 10 }}>
                {t}
              </Text>
            ))}
          </View>

          <TextInput
            style={styles.input}
            placeholder="New Task"
            value={task}
            onChangeText={setTask}
            onEndEditing={() => {
              setTasks([...tasks, task]);
              setTask("");
            }}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#d3d3d3",
    width: "90%",
    fontSize: 16,
    height: 50, 
    padding: 10,
    borderRadius: 8,
  }
});

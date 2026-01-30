import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { use, useState } from 'react';

export default function App() {
  const [ tasks, setTasks ] = useState([]);
  const [ task, setTask ] = useState(''); 

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  }

  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>TO-DO List</Text>
      <ScrollView>
        {tasks.map((t, index) => (
          <Text key={index} style={{ fontSize: 20, padding: 10 }}>{t}</Text>
        ))}
      </ScrollView>

      <TextInput 
        placeholder='New Task'
        value={task}
        onChangeText={setTask}
        style={{ borderWidth: 1, margin: 20, padding: 10}}
      />
      <Button title="Add" onPress={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

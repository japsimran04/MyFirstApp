/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { useState } from 'react'


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
  Pressable,
  Modal,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';


function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // Intialize the state variable to hold the TodoList

  const [ toDoList, setToDoList] = useState([
    {id:1, text:'Do laundary', isComplete: false},
    {id:2, text:'Go to gym', isComplete: false},
    {id:3, text:'Walk dog', isComplete: false},

  ]);

  //Initialize a state variable to store the new task 
  const [newTask, setNewtask ] = useState('');

  //Define a function to add a new task to the to-do list
  const handleAddTask = () => {
    //Create a new task object
    const task = {
      id: toDoList.Length + 1,
      text: newTask,
      isComplete: false,
    }; 

     //Update the to-do-list with the new task
     setToDoList([...toDoList, task]);
    //Clear the new task input
    setNewtask('');
  }
    //Define a function to mark a task as complete
    const handleCompleteTask = (id) => {
      setToDoList( (prevList) => 
        prevList.map((task) =>
        task.id === id ? {...task, isComplete: !task.isComplete} : task)
      );
    };

  

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="To do form">
            <View>
              <TodoForm 
              newTask={newTask}
              setNewTask={setNewtask}
              handleAddTask={handleAddTask}
              ></TodoForm>
            </View>
          </Section>


          <Section title="To do List">
          <TodoList toDoList={toDoList} handleCompleteTask={handleCompleteTask}></TodoList>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

import React from "react";
import { SafeAreaView, Button } from 'react-native';

import ToDoList from "../components/ToDoList";
import TodoForm from "../components/ToDoForm";
import MainLayout from '../layouts/MainLayout';

function Home({ navigation }){
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to the gym',
        'Walk the dog'
      ]);
    
      const addTask = (taskText) => {
        setTasks([...tasks, taskText]);
      };
    return (
        <MainLayout>
        <SafeAreaView style = {styles.container}>
            <ToDoList tasks = {tasks} />
            <TodoForm addTask = {addTask} />

            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />

        </SafeAreaView>
        </MainLayout>
    );
}

export default Home;
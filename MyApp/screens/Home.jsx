import React, { useState } from "react";
import { SafeAreaView, Button, StyleSheet } from 'react-native';

import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import MainLayout from '../MainLayout';

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
            <SafeAreaView style={styles.container}>
                <ToDoList tasks={tasks} />
                <ToDoForm addTask={addTask} />

                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                />
            </SafeAreaView>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;

import React from 'react';
import { View, TextInput, Button } from 'react-native';

function TodoForm({ newTask, setNewTask, handleAddTask}) {
    return (
        <View>
            <TextInput
             placeholder='Enter a task'
             onChangeText={(text) => setNewTask(text)}
             value={newTask}
            />

            <Button
             title='Add Task'
             onPress={handleAddTask}
            />
        </View>
    );
}

export default TodoForm;
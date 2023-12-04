import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button
} from 'react-native';
import { useState } from 'react';

function ToDoForm({ addTask, tasks = [] }) {
        const [taskText, setTaskText] = useState('');
        const taskExists = tasks.some(task => task.toLowerCase() === taskText.toLowerCase());
        
        const handleAddTask = () => { 
                taskExists ? 
                alert('Task already exists!')  : 
                addTask(taskText);
                setTaskText('');
        }

        return (
        <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a new task..."
                    value={taskText}
                    onChangeText={(text) => setTaskText(text)}
                />
                <Button 
                        title="Add Task" 
                        onPress={handleAddTask} 
                />
        </View>
        )
}

const styles = StyleSheet.create({
    
        form: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
            marginTop: 20,
        },
        input: {
            flex: 1,
            borderWidth: 1,
            borderColor: '#f2f2e1',
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginRight: 10,
        },
});

export default ToDoForm;




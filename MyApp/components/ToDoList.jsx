import React from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
} from 'react-native';

function ToDoList({ tasks }) {

    return (
    <ScrollView>
        {tasks.map((task, index) => (
            <Pressable key={index}>
                <View style={[styles.task]}>
                <Text style={styles.taskText}>{task}</Text>
                </View>
            </Pressable>
        ))}

    </ScrollView>
    )

}

const styles = StyleSheet.create({

    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#424549',
        margin: 10,
        borderRadius: 4,
    },
});

export default ToDoList;
import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import { TaskItem } from '../components/TaskItem';
import { Task } from '../hooks/useTasks';

type TaskListProps = {
  status: Task['status'];
  tasks: Task[];
  onAddTask: (title: string) => void;
  onUpdateStatus: (taskId: string, status: Task['status']) => void;
  onDeleteTask: (taskId: string) => void;
};

export const TaskList = ({
  status,
  tasks,
  onAddTask,
  onUpdateStatus,
  onDeleteTask,
}: TaskListProps) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const filteredTasks = tasks.filter(task => task.status === status);

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      onAddTask(newTaskTitle.trim());
      setNewTaskTitle('');
    }
  };

  return (
    <View style={styles.container}>
      {status === 'todo' && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={newTaskTitle}
            onChangeText={setNewTaskTitle}
            placeholder="Add new task..."
            placeholderTextColor="#666"
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddTask}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={filteredTasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onStatusChange={(newStatus) => onUpdateStatus(item.id, newStatus)}
            onDelete={() => onDeleteTask(item.id)}
          />
        )}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  list: {
    flex: 1,
  },
});

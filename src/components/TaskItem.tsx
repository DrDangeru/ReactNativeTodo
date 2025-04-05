import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { Task } from '../hooks/useTasks';

type TaskItemProps = {
  task: Task;
  onStatusChange: (status: Task['status']) => void;
  onDelete: () => void;
};

export const TaskItem = ({ task, onStatusChange, onDelete }: TaskItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.taskContent}>
        <Text style={styles.title}>{task.title}</Text>
        <View style={styles.actions}>
          {task.status !== 'todo' && (
            <TouchableOpacity
              style={[styles.button, styles.todoButton]}
              onPress={() => onStatusChange('todo')}>
              <Text style={styles.buttonText}>Todo</Text>
            </TouchableOpacity>
          )}
          {task.status !== 'inProgress' && (
            <TouchableOpacity
              style={[styles.button, styles.inProgressButton]}
              onPress={() => onStatusChange('inProgress')}>
              <Text style={styles.buttonText}>In Progress</Text>
            </TouchableOpacity>
          )}
          {task.status !== 'finished' && (
            <TouchableOpacity
              style={[styles.button, styles.finishedButton]}
              onPress={() => onStatusChange('finished')}>
              <Text style={styles.buttonText}>Finished</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={onDelete}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  taskContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  todoButton: {
    backgroundColor: '#4A90E2',
  },
  inProgressButton: {
    backgroundColor: '#F5A623',
  },
  finishedButton: {
    backgroundColor: '#7ED321',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
  },
});

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TaskList } from './src/screens/TaskList';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTasks } from './src/hooks/useTasks';

const Tab = createBottomTabNavigator();

const App = () => {
  const { tasks, addTask, updateTaskStatus, deleteTask } = useTasks();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Todo">
            {() => (
              <TaskList
                status="todo"
                tasks={tasks}
                onAddTask={addTask}
                onUpdateStatus={updateTaskStatus}
                onDeleteTask={deleteTask}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="In Progress">
            {() => (
              <TaskList
                status="inProgress"
                tasks={tasks}
                onAddTask={addTask}
                onUpdateStatus={updateTaskStatus}
                onDeleteTask={deleteTask}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="Finished">
            {() => (
              <TaskList
                status="finished"
                tasks={tasks}
                onAddTask={addTask}
                onUpdateStatus={updateTaskStatus}
                onDeleteTask={deleteTask}
              />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

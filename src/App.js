// Overall - 1
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';

import {main} from './styles';
import {TodoInput, TodoCard} from './components';

const App = () => {
  const [list, setList] = useState([]);

  function addTodo(text) {
    const element = {
      id: list.length,
      todo: text,
      isDone: false,
    };
    const newArray = [element, ...list];
    // newArray.push(element)

    setList(newArray);
  }

  function doneTodo(todoId) {
    const newArray = [...list];
    const todoIndex = newArray.findIndex((item) => item.id == todoId);

    newArray[todoIndex].isDone = !newArray[todoIndex].isDone;

    setList(newArray);
  }
  function removeTodo(todoId) {
    const newArray = [...list];
    const todoIndex = newArray.findIndex((t) => t.id == todoId);

    newArray.splice(todoIndex, 1);
    setList(newArray);
  }

  const renderTodo = ({item}) => {
    return (
      <TodoCard
        data={item}
        onDone={(id) => doneTodo(id)}
        onRemove={() => removeTodo(item.id)}
      />
    );
  };

  return (
    <SafeAreaView style={main.container}>
      {/* <KeyboardAvoidingView style={main.container} behavior="padding"> */}
      <View style={main.container}>
        <View style={main.banner}>
          <Text style={main.todoText}>TODO</Text>
          <Text style={main.todoCount}>
            {list.filter((t) => t.isDone == false).length}
          </Text>
        </View>

        <FlatList
          data={list}
          renderItem={renderTodo}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() => (
            <Text style={main.emptyComponent}>Nothing to do ...</Text>
          )}
        />
        <TodoInput onTodoEnter={(todoText) => addTodo(todoText)} />
      </View>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
};
export default App;

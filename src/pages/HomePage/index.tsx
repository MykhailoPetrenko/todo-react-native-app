import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { AddTodo, NavBar, TodoItem } from "../../components";
import { ITodo } from "../../types/types";

const HomePage: React.FC<any> = ({ navigation }) => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const addTodo = (text: string) => {
    const date = new Date();
    setTodoList((prevState) => [
      ...prevState,
      {
        id: date.toString(),
        text: text,
        time: `${date.getHours()}:${
          date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
        }`,
      },
    ]);
  };
  const deleteTodo = (todoId: string) => {
    setTodoList((prev) => prev.filter((todo) => todo.id != todoId));
  };
  return (
    <View style={styles.wrapper}>
      <NavBar isBackIcon={false} pageName={null} navigation={null} />
      <View style={styles.container}>
        <AddTodo addTodo={addTodo} />
        <FlatList
          data={todoList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              deleteTodo={deleteTodo}
              navigation={navigation}
            />
          )}
          contentContainerStyle={{ paddingBottom: 120 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  wrapper: {
    flex: 1,
  },
});

export default HomePage;

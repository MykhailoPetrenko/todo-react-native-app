import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Platform, Alert } from "react-native";

interface IAddTodo {
  addTodo: (arg0: string) => void;
}
const AddTodo: React.FC<IAddTodo> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const pressHandler = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    } else {
      Alert.alert('Поле не может быть пустым!')
    }
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        onChangeText={setInputValue}
        value={inputValue}
        placeholder={"Введите название задачи"}
        style={styles.input}
        autoCorrect={false}
      />
      <Button title={"Добавить"} onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
    padding: 10,
  },
});

export default AddTodo;

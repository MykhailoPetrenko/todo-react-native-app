import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { ITodo } from "../../types/types";
interface ITodoItem {
  todo: ITodo;
  deleteTodo: (arg0: string) => void;
}
const TodoItem: React.FC<ITodoItem> = ({ todo, deleteTodo }) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.todo}>
        <Text>{todo.text}</Text>
        <View style={styles.timeWrapper}>
          <Text style={styles.time}>{todo.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 5,
    padding: 15,
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: "stretch",
  },
  timeWrapper: {
    marginLeft: "auto",
    // marginRight: 7,
    borderRadius: 18,
    backgroundColor: "#e9f5ff",
  },
  time: {
    fontSize: 14,
    fontWeight: "600",
    color: '#4294ff',
    lineHeight: 32,
    width: 70,
    textAlign: "center"
  }
});

export default TodoItem;

/*<TouchableOpacity
    style={styles.imageWrapper}
    onPress={() => deleteTodo(todo.id)}
>
  <Image style={styles.icon} source={require("../../images/trash.png")} />
</TouchableOpacity>*/

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavBar } from "../../components";

interface ITodoPage {
  route: any;
  navigation: any;
}
const TodoPage: React.FC<ITodoPage> = ({ route, navigation }) => {
  const { todo } = route.params;
  return (
    <View style={styles.wrapper}>
      <NavBar isBackIcon={true} pageName={todo.text} navigation={navigation} />
      <Text>{todo.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default TodoPage;

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.text}>Список задач</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    height: 60,
    justifyContent: "center",
    backgroundColor: "#cbe3ff",
  },
  text: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: "auto",
    marginBottom: 7,
    fontWeight: "800",
  },
});

export default NavBar;

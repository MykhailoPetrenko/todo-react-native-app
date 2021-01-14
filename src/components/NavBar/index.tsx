import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface INavBar {
  isBackIcon: boolean;
  pageName: string | null;
  navigation: any;
}
const NavBar: React.FC<INavBar> = ({ isBackIcon, pageName, navigation }) => {

  return (
    <View style={styles.navBar}>
      {isBackIcon ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign style={styles.icon} name="left" size={24} color="black" />
          </TouchableOpacity>
      ) : null}
      <Text style={styles.text}>{isBackIcon ? `Задача: ${pageName}` : "Список задач"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    height: 60,
    backgroundColor: "#cbe3ff",
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: "auto",
    marginBottom: 7,
    fontWeight: "800",
  },
  icon: {
    width: 24,
    marginTop: 'auto',
    marginBottom: 7,
    marginLeft: 5
  }
});

export default NavBar;

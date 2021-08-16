import React from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import { Input, Button } from "react-native-elements";

const Home = props => {
  const navigation = props.navigation;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Register"
        buttonStyle={{
          backgroundColor: "#8462f5",
          paddingHorizontal: 30,
          borderRadius: 40,
          marginBottom: 10
        }}
        onPress={() => navigation.navigate("Register")}
      />
      <Button
        buttonStyle={{
          backgroundColor: "#8462f5",
          paddingHorizontal: 30,
          borderRadius: 40
        }}
        title="Login"
        onPress={() => navigation.navigate("Login")}
      />
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight
  }
});
export default Home;

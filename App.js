import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import { StyleSheet, Text, View } from "react-native";
import { MainNavigator } from "./src/utils/navigation";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <MainNavigator />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});

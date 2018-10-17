import React from "react";
import { Text, View, StyleSheet, Switch } from "react-native";
import Swipeout from "react-native-swipeout";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      done: false
    };
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleSwitch = () => {
    this.props.handleSwitch(this.state.name, this.state.done);
  };
  handleDelete = () => {
    this.props.handleDelete(this.state.name, this.state.done);
  };
  render() {
    this.state = this.props.item;
    const swipeButton = [
      {
        text: "Delete",
        backgroundColor: "#ebb",
        onPress: this.handleDelete
      }
    ];
    return (
      <Swipeout close={true} right={swipeButton}>
        <View style={styles.listLine}>
          <Switch value={this.state.done} onValueChange={this.handleSwitch} />
          <Text>{this.state.name}</Text>
        </View>
      </Swipeout>
    );
  }
}
const styles = StyleSheet.create({
  listLine: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    padding: 20,
    borderWidth: 0.5,
    borderColor: "#aaa"
  }
});

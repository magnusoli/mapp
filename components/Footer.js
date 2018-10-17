import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button
} from "react-native";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textinp: false,
      text: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onPress = () => {
    this.setState({ textinp: true });
  };

  handleSubmit = () => {
    this.props.handleSubmit(this.state.text);
    this.setState({ text: "", textinp: false });
  };

  render() {
    if (!this.state.textinp) {
      return (
        <TouchableOpacity onPress={this.onPress}>
          <View style={styles.listFooter}>
            <Text>What Todo?</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={styles.listFooter}>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <Button
            disabled={
              !!this.props.list.find(obj => {
                if (obj.name === this.state.text) {
                  return true;
                }
              }) ||
              !this.state.text ||
              !this.state.text.trim()
            }
            title="Submit"
            onPress={this.handleSubmit}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  listFooter: {
    justifyContent: "center",
    backgroundColor: "#bbb",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    padding: 20
  },
  textInput: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1
  }
});

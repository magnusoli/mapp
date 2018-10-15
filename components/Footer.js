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
      footer: false,
      text: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onPress = () => {
    this.setState({ footer: true });
  };

  handleSubmit = () => {
    this.props.handleSubmit(this.state.text);
    this.setState({ text: "", footer: false });
  };
  render() {
    if (!this.state.footer) {
      return (
        <TouchableOpacity onPress={this.onPress}>
          <View style={styles.listFooter}>
            <Text>Add Todo?</Text>
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
          <Button title="Submit" onPress={this.handleSubmit} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  listFooter: {
    justifyContent: "center",
    backgroundColor: "#daa",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    padding: 30
  },
  textInput: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1
  }
});

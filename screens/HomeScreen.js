import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Text,
  Switch
} from "react-native";

import Footer from "../components/Footer";
import { connect } from "react-redux";

class HomeScreen extends React.Component {
  renderItem = ({ item }) => {
    return (
      <View style={styles.listLine}>
        <Switch
          value={item.done}
          onValueChange={() =>
            this.props.dispatch({
              type: "UPDATE_SWITCH",
              payload: { name: item.name, done: !item.done }
            })
          }
        />
        <Text>{item.name}</Text>
      </View>
    );
  };
  displayHeader = () => {
    return (
      <View style={styles.listHeader}>
        <Text>Much Ado About Nothing</Text>
      </View>
    );
  };
  handleSubmit(text) {
    this.props.dispatch({
      type: "UPDATE_LIST",
      payload: { name: text, done: false }
    });
  }

  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.container}>
          <FlatList
            data={this.props.list}
            renderItem={this.renderItem}
            ListHeaderComponent={this.displayHeader}
            ListFooterComponent={
              <Footer
                list={this.props.list}
                handleSubmit={text => this.handleSubmit(text)}
              />
            }
            keyExtractor={index => index.toString()}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  listLine: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    padding: 20,
    borderWidth: 0.5,
    borderColor: "#aaa"
  },
  listHeader: {
    justifyContent: "center",
    backgroundColor: "#ada",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    padding: 30
  }
});

const mapStateToProps = state => {
  return {
    list: state
  };
};

export default connect(mapStateToProps)(HomeScreen);

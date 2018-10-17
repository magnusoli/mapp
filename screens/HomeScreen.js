import React from "react";
import { StyleSheet, ScrollView, FlatList, Text, View } from "react-native";

import Footer from "../components/Footer";
import Item from "../components/Item";

import { connect } from "react-redux";

class HomeScreen extends React.Component {
  displayHeader = () => {
    return (
      <View style={styles.listHeader}>
        <Text>Much Ado About Nothing</Text>
      </View>
    );
  };
  handleSwitch(text, bool) {
    this.props.dispatch({
      type: "UPDATE_SWITCH",
      payload: { name: text, done: bool }
    });
  }
  handleDelete(text, bool) {
    this.props.dispatch({
      type: "UPDATE_DELETE",
      payload: { name: text, done: bool }
    });
  }
  handleSubmit(text) {
    this.props.dispatch({
      type: "UPDATE_LIST",
      payload: { name: text, done: false }
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={this.props.list}
          renderItem={({ item }) => (
            <Item
              item={item}
              handleSwitch={(text, bool) => this.handleSwitch(text, bool)}
              handleDelete={(text, bool) => this.handleDelete(text, bool)}
            />
          )}
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  listHeader: {
    justifyContent: "center",
    backgroundColor: "#aae",
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

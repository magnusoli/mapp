import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

import { MonoText } from "../components/StyledText";

class HomeScreen extends React.Component {
  renderItem = ({ item }) => {
    return (
      <View style={styles.listLine}>
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
  onPress = () => {
    console.log("working");
  };
  displayFooter = () => {
    return (
      <TouchableOpacity onPress={() => this.onPress()}>
        <View style={styles.listFooter}>
          <Text>Add Todo?</Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.container}>
          <FlatList
            data={this.props.list}
            renderItem={this.renderItem}
            ListHeaderComponent={this.displayHeader}
            ListFooterComponent={this.displayFooter}
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
    justifyContent: "center",

    width: "100%",
    flex: 1,
    flexDirection: "row",
    padding: 20,
    border: 1
  },
  listHeader: {
    justifyContent: "center",
    backgroundColor: "#ada",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    padding: 20
  },
  listFooter: {
    justifyContent: "center",
    backgroundColor: "#daa",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    padding: 20
  }
});

const mapStateToProps = state => {
  return { list: state.list };
};

export default connect(mapStateToProps)(HomeScreen);

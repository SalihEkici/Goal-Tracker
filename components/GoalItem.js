import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    width: "100%",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    textAlign: "center",
    padding: 16,
  },
});

// Counter.tsx
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomButton, ResetButton, Title } from "./components/title"; // Import without `default`

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const resetCounter = () => {
    setCount(0);
  };
  return (
    <View style={styles.container}>
      <Title Title="Counter App" />
      <View style={styles.buttonContainer}>
        <CustomButton title="Increment" onPress={increment} />
        <View style={styles.buttonSpacing} />
        <CustomButton title="Decrement" onPress={decrement} />
      </View>
      <Text style={styles.countText}>Count: {count}</Text>
      <View style={styles.buttonDelete}>
        <ResetButton title="Reset" onPress={resetCounter} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 30,
  },
  buttonSpacing: {
    width: 10,
  },
  buttonDelete: {
    position: "absolute",
    alignItems: "center",
    borderRadius: 30,
    bottom: 240,
  },
  countText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Counter;

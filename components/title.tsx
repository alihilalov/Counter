import React from "react";
import { StyleSheet, Text, Button } from "react-native";

interface ITitleProps {
  Title: string;
}
interface ICustomButton {
  title: string;
  onPress: () => void;
}

export const Title: React.FC<ITitleProps> = ({ Title }) => {
  return <Text style={styles.title}>{Title}</Text>;
};

export const CustomButton: React.FC<ICustomButton> = ({ title, onPress }) => {
  return <Button title={title} onPress={onPress} />;
};
export const ResetButton: React.FC<ICustomButton> = ({ title, onPress }) => {
  return <Button color="red" title={title} onPress={onPress} />;
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

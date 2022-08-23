import React from 'react';
import {TouchableOpacity,Text} from "react-native";
import styles from "./ButtonStyle";

function Button({text,onPress}) {
  return (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.text} onPress={onPress}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

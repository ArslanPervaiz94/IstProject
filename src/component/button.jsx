import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { color } from "../theme/system_design";

function Button({ primary, outline, title, onPress }) {
  return (
    <TouchableOpacity
      style={
        primary === true
          ? styles.primaryBtn
          : outline === true
          ? styles.btnOutline
          : styles.primaryBtn
      }
      onPress={onPress}
    >
      <Text
        style={
          primary ? styles.btnTxt : outline ? styles.btnOutline : styles.btnTxt
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const base = {
  flex: 1,
  borderRadius: 50,
  backgroundColor: color.primary,
  borderWidth: 1,
  padding: 10,
  alignItems: "center",
  marginVertical: 8,
};

const styles = StyleSheet.create({
  primaryBtn: {
    ...base,
  },
  btnTxt: {
    color: color.white,
  },
  btnOutline: {
    ...base,
    backgroundColor: color.black,
  },
  txtOutline: {
    color: color.primary,
  },
});
export { Button };

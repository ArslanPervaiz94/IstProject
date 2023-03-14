import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "./login_styles";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../../component/button";

function Login(navigation) {
  const pressMe = () => {
    alert("sign in success");
  };
  const [showPassword, setShowPassword] = useState(true);

  const onEyePressed = () => {
    if (showPassword === true) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputForm}>
        <View style={styles.form}>
          <TextInput
            placeholder="Enter Email"
            style={styles.inputBox}
          ></TextInput>
          <View style={styles.passwordCon}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={showPassword}
              placeholder={"Enter Password"}
              onChangeText={setShowPassword}
            ></TextInput>

            <Ionicons
              size={25}
              color={showPassword === true ? "green" : "red"}
              name={showPassword ? "eye" : "eye-off"}
              onPress={onEyePressed}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Button primary title={"Sign In"} onPress={pressMe}></Button>
          </View>
        </View>
      </View>
    </View>
  );
}

export { Login };

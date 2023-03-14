import { StyleSheet } from "react-native";
import { color, inputStyles } from "../../theme/system_design";

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
  },
  inputForm: {
    flex: 0.7,
    justifyContent: "center",
  },
  form: {
    padding: 10,
  },
  inputBox: {
    ...inputStyles.inputBase,
    marginVertical: 10,
  },
  passwordCon: {
    flexDirection: "row",
    alignItems: "center",
    ...inputStyles.inputBase,
  },
  passwordInput: {
    width: "93%",
  },
  bottomBox: {
    flex: 0.3,
  },
});

export { styles };

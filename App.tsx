import { Button, NativeModules, StyleSheet, View } from "react-native";
const { RNTwitterSignIn } = NativeModules;

export default function App() {
  const loginTwitter = () => {
    RNTwitterSignIn.init();
  };
  return (
    <View style={styles.container}>
      <Button onPress={loginTwitter} title="login" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

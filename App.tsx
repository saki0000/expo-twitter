import { Button, NativeModules, StyleSheet, View } from "react-native";

const twitterApi = {
  key: "aWNG9Ngbw4S2qw1iM9VTvhNZr",
  secret: "qfc5HA2bufW8aEu1QWProBKOJ2KseTcYFkprBUDq0AjEEfeef1",
};

export default function App() {
  const { RNTwitterSignIn } = NativeModules;
  const loginTwitter = () => {
    RNTwitterSignIn.init(twitterApi.key, twitterApi.secret);
    RNTwitterSignIn.logIn();
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

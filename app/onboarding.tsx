import { View, StyleSheet, Button } from "react-native";
import { theme } from "../theme";
import { useUserStore } from "../store/userStore";
import { useRouter } from "expo-router";
export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHassOnboarded = useUserStore((state) => state.toggleHasOnboarded);
  const handlePress = () => {
    toggleHassOnboarded();
    router.replace("/");
  };
  return (
    <View style={styles.container}>
      <Button title="Let me in " onPress={handlePress} />,
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});

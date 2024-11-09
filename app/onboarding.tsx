import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../theme";
import { useUserStore } from "../store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "../components/PlantlyButton";
import { StatusBar } from "expo-status-bar";
import { PlantlyImage } from "../components/PlantlyImage";
export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHassOnboarded = useUserStore((state) => state.toggleHasOnboarded);
  const handlePress = () => {
    toggleHassOnboarded();
    router.replace("/");
  };
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 3, y: 1 }}
      colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <View>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagLine}>
          Keep your plants healthy and hydrated
        </Text>
      </View>
      <PlantlyImage />
      <PlantlyButton title="Let me in " onPress={handlePress} />,
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 24,
  },
  heading: {
    fontSize: 42,
    color: theme.colorWhite,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },

  tagLine: {
    fontSize: 12,
    color: theme.colorWhite,
    textAlign: "center",
  },
});

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  View,
} from "react-native";
import { Surface, Text } from "@react-native-material/core";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Image
          source={require("../../assets/adidas-logo.jpg")}
          style={styles.image_logo}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Surface style={styles.surface} elevation={4} category="large">
          <Image
            source={require("../../assets/catalogue/id8810_2_footwear_photography_side20lateral20view_grey.jpg")}
            style={styles.image}
          />
        </Surface>
        <Text style={styles.name}>Ultraboost 5 Shoes - Grey</Text>
        <Text style={styles.price}>Rp. 3.000.000</Text>
        <Surface style={styles.surface} elevation={4} category="large">
          <Image
            source={require("../../assets/catalogue/if1479_2_footwear_photography_side20lateral20view_grey.jpg")}
            style={styles.image}
          />
        </Surface>
        <Text style={styles.name}>Ultraboost 5 Shoes - All Black</Text>
        <Text style={styles.price}>Rp. 3.000.000</Text>
        <Surface style={styles.surface} elevation={4} category="large">
          <Image
            source={require("../../assets/catalogue/ih7709_2_footwear_photography_side20lateral20view_grey.jpg")}
            style={styles.image}
          />
        </Surface>
        <Text style={styles.name}>Ultraboost 5 Shoes - Black Violet</Text>
        <Text style={styles.price}>Rp. 3.000.000</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  scrollContainer: {
    paddingBottom: 20,
    alignItems: "center",
  },
  surface: {
    width: 250,
    height: 250,
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
    height: "15%",
  },
  image_logo: {
    width: "50%",
    height: "50%",
  },
  name: {
    marginBottom: 8,
    fontSize: 16,
    color: "black",
  },
  price: {
    fontStyle: "italic",
    color: "black",
    fontSize: 14,
    marginBottom: 16,
  },
});

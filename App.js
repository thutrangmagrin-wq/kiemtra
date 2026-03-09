import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

/* HOME SCREEN */

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.contentOverlay}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.hello}>Hello 👋</Text>
            <Text style={styles.name}>Christie Doe</Text>
          </View>
          <Image
            source={require("./assets/1.png")}
            style={styles.profileImage}
          />
        </View>

        <Text style={styles.title}>Your Insights</Text>

        <View style={styles.grid}>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Scan")}
          >
            <Image
              source={require("./assets/Group 4.png")}
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>Scan new</Text>
            <Text style={styles.cardSub}>Scanned 483</Text>
          </TouchableOpacity>

          <View style={styles.card}>
            <Image
              source={require("./assets/2.png")}
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>Counterfeits</Text>
            <Text style={styles.cardSub}>Counterfeited 32</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={require("./assets/3.png")}
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>Success</Text>
            <Text style={styles.cardSub}>Checkouts 8</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={require("./assets/6.png")}
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>Directory</Text>
            <Text style={styles.cardSub}>History 26</Text>
          </View>

        </View>
      </View>
    </View>
  );
}

/* SCAN SCREEN */

function ScanScreen({ navigation }) {
  return (
    <View style={styles.scanContainer}>
      <View style={styles.scanHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require("./assets/glass-bottle-mockups-for-food-and-beverage-packaging-cover 1.png")}
        style={styles.scanImage}
      />

      <View style={styles.productCard}>
        <Image
          source={require("./assets/Group 10.png")}
          style={styles.productCardImage}
        />
      </View>
    </View>
  );
}

/* APP */

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Scan" component={ScanScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* STYLE */

const styles = StyleSheet.create({

  homeContainer: {
    flex: 1,
    position: "relative"
  },

  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },

  contentOverlay: {
    flex: 1,
    padding: 20,
    paddingTop: 50
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F4F6FA",
    paddingTop: 50
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20
  },

  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#FCD34D"
  },

  hello: {
    fontSize: 28,
    fontWeight: "bold"
  },

  name: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20
  },

  title: {
    fontSize: 20,
    marginBottom: 20
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  card: {
    width: "47%",
    height: 140,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center"
  },

  icon: {
    width: 40,
    height: 40,
    marginBottom: 10
  },

  cardTitle: {
    fontWeight: "bold"
  },

  cardSub: {
    fontSize: 12,
    color: "gray"
  },

  scanContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F1E8",
    padding: 20
  },

  scanHeader: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10
  },

  backButton: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 20,
    textAlign: "center",
    lineHeight: 40
  },

  scanImage: {
    width: 100%,
    height:100%,
    resizeMode: "contain",
    marginBottom: 30
  },

  productCard: {
    backgroundColor: "white",
    borderRadius: 15,
    width: "100%",
    borderWidth: 3,
    borderColor: "#FCD34D",
    position: "absolute",
    bottom: 30,
    overflow: "hidden"
  },

  productCardImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain"
  },

  productThumb: {
    width: 50,
    height: 50,
    marginRight: 15,
    resizeMode: "contain"
  },

  productName: {
    fontSize: 18,
    fontWeight: "600",
    flex: 1
  },

  addButton: {
    backgroundColor: "#A855F7",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },

  addButtonText: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold"
  },

});
import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import useWebSocket from "./hooks/websocket";
import { Video } from "expo-av";

export const Camara = ({ navigation }) => {
  const { videoFrame } = useWebSocket("ws://192.168.1.188:8090");

  return (
    <View style={styles.container}>
      <View style={{ margin: 30, marginTop: 50 }}>
        <Text style={{ marginLeft: 40, fontSize: 50, fontWeight: "bold" }}>
          Ver Cámara
        </Text>
        <Text style={{ margin: 100, marginTop: 200 }}>Aca iría la imagen</Text>
        {videoFrame && (
          <Video source={{ uri: videoFrame }} style={styles.video} />
        )}
      </View>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("Home screen")}
      >
        <View style={styles.backButton}>
          <Text style={styles.backButtonText}>Volver</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: 300,
  },
  backButton: {
    height: 100,
    width: "100%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
});

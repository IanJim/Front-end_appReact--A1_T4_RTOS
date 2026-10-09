import { getDatabase, ref, set } from "firebase/database";
import { Button, StyleSheet, View } from "react-native";
import { app } from "./firebaseConfig"; // Asegúrate de que esta ruta sea correcta

export default function ControlScreen() {
  const db = getDatabase(app);

  const sendCommand = async (cmd) => {
    try {
      await set(ref(db, "control/comando"), cmd);
      console.log("Comando enviado:", cmd);
    } catch (error) {
      console.error("Error enviando comando:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="RGB Default" onPress={() => sendCommand("")} />
      </View>
      <View style={styles.button}>
        <Button title="Reversa (B)" onPress={() => sendCommand("B")} />
      </View>
      <View style={styles.button}>
        <Button title="Intermitentes (I)" onPress={() => sendCommand("I")} />
      </View>
      <View style={styles.button}>
        <Button title="Izquierda (L)" onPress={() => sendCommand("L")} />
      </View>
      <View style={styles.button}>
        <Button title="Derecha (R)" onPress={() => sendCommand("R")} />
      </View>
      <View style={styles.button}>
        <Button title="Alto (S)" onPress={() => sendCommand("S")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  button: {
    marginVertical: 8,
  },
});

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { Button, StyleSheet, View } from "react-native";

// ⚡ Configuración de Firebase (copia la tuya)
const firebaseConfig = {
  apiKey: "AIzaSyCy2gWgy_AwUqDqBadUrDIDPFPBFmJjxM0",
  authDomain: "led-rgb-rainbow.firebaseapp.com",
  projectId: "led-rgb-rainbow",
  storageBucket: "led-rgb-rainbow.firebasestorage.app",
  messagingSenderId: "64136784470",
  appId: "1:64136784470:web:bcfdfec61ac0b0bb1e69f7",
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const sendCommand = async (cmd) => {
  try {
    await set(ref(db, "control/comando"), cmd);
    console.log("COMANDO ENVIADO:", cmd);
  } catch (error) {
    console.log("ERROR ENVIANDO:", error);
  }
};

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="RGB Default" onPress={() => sendCommand("RGB")} />
      <Button title="Reversa (B)" onPress={() => sendCommand("B")} />
      <Button title="Intermitentes (I)" onPress={() => sendCommand("I")} />
      <Button title="Izquierda (L)" onPress={() => sendCommand("L")} />
      <Button title="Derecha (R)" onPress={() => sendCommand("R")} />
      <Button title="Alto (S)" onPress={() => sendCommand("S")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
    padding: 20,
  }
});



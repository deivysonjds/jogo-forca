import ForcaImg from "@/components/forca";
import LetterSortedList from "@/components/letterKickList";
import { words } from "@/constants/words";
import { useState } from "react";
import { Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";

export default function Home() {
  const [errors, setErrors] = useState(0);
  const [gameInitialized, setGameInitialized] = useState(false);
  const [word, setWord] = useState("");
  const [tip, setTip] = useState("");
  const [wordKick, setWordKick] = useState("");
  const [lettersKickList, serLettersKickList] = useState([["f", true],["h",false]])

  const startGame = () => {
    if (!gameInitialized) setGameInitialized(true);

    const segment = Math.floor(Math.random() * words.length);
    const tip = String(words[segment][0]);
    setTip(tip);

    const indexWord = Math.floor(Math.random() * words[segment][1].length);
    setWord(String(words[segment][1][indexWord]));
    setErrors(0);
    setWordKick("");
  };

  const kick = () => {
    setErrors(prev => (prev === 6 ? 0 : prev + 1));
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
          {!gameInitialized ? (
            <Button onPress={startGame} title="Iniciar jogo" />
          ) : (
            <Button onPress={startGame} title="Novo jogo" />
          )}
          {gameInitialized && (
            <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
              <LetterSortedList letterKicks={lettersKickList}/>
              <Text style={styles.text}>Tema: {tip}</Text>
              <ForcaImg indexImg={errors} />
              <TextInput
                style={styles.input}
                value={wordKick}
                onChangeText={setWordKick}
                placeholder="Digite uma letra"
                maxLength={1}
              />
              <Button onPress={kick} title="Chutar" />
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 8,
    width: "50%",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    margin: 8,
  },
});

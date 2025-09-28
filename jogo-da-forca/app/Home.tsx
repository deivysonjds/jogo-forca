import ForcaImg from "@/components/forca";
import { words } from "@/constants/words";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Home() {
  const [erros, setErros] = useState(0);
  const [gameInitialized, setGameInitialized ] = useState(false)
  const [word, setWord] = useState("")
  const [tip, setTip] = useState("")
  const [wordsAttempts, setWordsAttempts] = useState()

  const startGame = ()=>{
    setGameInitialized(!gameInitialized)
    let segment = Math.floor(Math.random() * words.length)
    let tip: string = String(words[segment][0])
    setTip(tip)
    let indexWord = Math.floor(Math.random() * words[segment][1].length)
     
    setWord(String(words[segment][1][indexWord]))
  }

  const kick = ()=>{
    erros == 6 ? setErros(0) : setErros(erros+1)
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      {!gameInitialized ? <Button onPress={startGame} title="iniciar jogo" /> : <Button onPress={startGame} title="novo jogo" />}
      
      {gameInitialized ? <View>
        <Text style={styles.text}>Tema: {tip}</Text>
        <ForcaImg indexImg={erros}/>
        <TextInput
          style={styles.input}
          placeholder=""
        />
        <Button onPress={kick} title="kick" />
      </View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    borderRadius: 5,
    margin: 5, 
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    margin: 8
  }
})

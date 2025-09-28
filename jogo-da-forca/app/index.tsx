import ForcaImg from "@/components/forca";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const [erros, setErros] = useState(0);

  const aumentarErro = ()=>{
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
      <ForcaImg indexImg={erros}/>
      <Button onPress={aumentarErro} title="Clique aqui" />
      <Text>Edit app/index.tsx to edit this s</Text>
    </View>
  );
}

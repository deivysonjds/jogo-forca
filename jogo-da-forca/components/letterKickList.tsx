import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"

type props = {
    letterKicks: (string | boolean)[][]
}

export default function LetterSortedList({ letterKicks}: props){

    return (
        <View>
            <Text style={styles.text}>
                Chutes
            </Text>
            <View style={styles.container}>
                {letterKicks.map((letter, index)=>(
                    <View key={index} style={letter[1] ? {...styles.containerLetter, borderColor: "green"} : {...styles.containerLetter, borderColor: "red"}}>
                        <Text style={letter[1] ? {...styles.letter,color: "green"} : {...styles.letter, color: "red"}}>
                            {letter}
                        </Text>
                    </View>
                ))}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    letter: {
        width: 10,
        textAlign: "center"
    },
    containerLetter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 30,
        height: 30,
        padding: 5,
        margin: 5,
        borderWidth: 1,
        borderRadius: 5
    },
    container: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        margin: 10
    },
    text: {
        fontSize: 20,
        textAlign: "center"
    }
})
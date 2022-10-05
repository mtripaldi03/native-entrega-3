import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

const Categorias = ({ navigation }) => {
    return (
    <View style={styles.container}>
    <Text> Categorias </Text>
    <Button 
    title="Avanzar"
    onPress={() => navigation.navigate("Productos")} />

    </View>
    )
}

export default Categorias
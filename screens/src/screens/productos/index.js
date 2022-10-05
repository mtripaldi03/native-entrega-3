import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

const Productos = ({ navigation }) => {
    return (
    <View style={styles.container}>
    <Text> Productos</Text>
    
    <Button title="Avanzar"
    onPress={() => navigation.navigate("Producto")} />

    </View>
    )
}

export default Productos

import React from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import colors from "../constants/colors"

const styles = StyleSheet.create({
    containerImagen: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagen: {
        width: 343,
        height: 190,
    },
    container: {
        borderRadius: 8,
        backgroundColor: colors.blanco,
        borderColor: colors.verde,
        borderWidth: 3,
        paddingBottom: 7,
        width: 350,
    },
    containerInfo: {
        gap: 2,
        paddingHorizontal: 15,
        alignItems: 'flex-start',
        paddingVertical: 10
    },
    containerAtributo: {
        columnGap: 10,
        flexDirection: "row",
        justifyContent: "center"
    },
    containerBotones: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 4,
    },
    botonEliminar: {
        borderWidth: 3,
        borderColor: colors.rojo,
        borderRadius: 10,
        marginStart: 12,
        paddingVertical: 5,
        paddingHorizontal: 9,
    },
    botonEditar: {
        alignItems: "center",
        backgroundColor: colors.amarillo,
        borderRadius: 8,
        flexDirection: "row",
        gap: 4,
        marginEnd: 12,
        paddingHorizontal: 12,
        paddingVertical: 9
    }
})

const CardAuto = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerImagen}>
                <Image
                    style={styles.imagen}
                    source={require('../assets/images/car.png')}
                />
            </View>
            <View style={styles.containerInfo}>
                <View style={styles.containerAtributo}>
                    <FontAwesome name="car" size={18} color={colors.verde} />
                    <Text>Estatus: Validado y activo</Text>
                </View>
                <View style={styles.containerAtributo}>
                    <Text style={{ marginStart: 30}}>Placa: AES8798</Text>
                </View>
                <View style={styles.containerAtributo}>
                    <Text style={{ marginStart: 30}}>Marca: FORD</Text>
                </View>
                <View style={styles.containerAtributo}>
                    <Text style={{ marginStart: 30}}>Modelo: Fiesta</Text>
                </View>
                <View style={styles.containerAtributo}>
                    <Text style={{ marginStart: 30}}>Capacidad: 4</Text>
                </View>
                <View style={styles.containerAtributo}>
                    <Text style={{ marginStart: 30}}>No. de seguro: 12345678</Text>
                </View>
                
                <View style={styles.containerAtributo}>
                    <Text style={{ marginStart: 30}}>Registro: 16-05-2023</Text>
                </View>
            </View>
            <View style={styles.containerBotones}>
                <Pressable style={styles.botonEliminar}>
                    <FontAwesome name="trash" size={24} color={colors.rojo} />
                </Pressable>
                <Pressable style={styles.botonEditar}>
                    <FontAwesome name="pencil" size={16} color={colors.blanco} />
                    <Text style={{color: colors.blanco, fontWeight: 'bold'}}>Editar</Text>
                </Pressable>
            </View>
        </View>
    )
}
export default CardAuto
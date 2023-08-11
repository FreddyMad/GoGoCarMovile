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
        borderColor: colors.rojo,
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
    botonWhatsapp: {
        borderWidth: 3,
        borderColor: colors.verde,
        borderRadius: 10,
        marginStart: 12,
        paddingVertical: 4,
        paddingHorizontal: 7,
    },
    botonSolicitar: {
        alignItems: "center",
        backgroundColor: colors.rojo,
        borderRadius: 8,
        flexDirection: "row",
        gap: 4,
        marginEnd: 12,
        paddingHorizontal: 12,
        paddingVertical: 9
    }
})

const CardMiViaje = (props) => {
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
                    <FontAwesome name="circle" size={24} color={colors.rojo} />
                    <Text>Estatus: Lleno</Text>
                </View>
                <View style={styles.containerAtributo}>
                    <FontAwesome name="drivers-license" size={24} color={colors.negro} />
                    <Text>Conductor: Alfredo Madrigal Tercero</Text>
                </View>
                <View style={styles.containerAtributo}>
                    <FontAwesome name="exchange" size={24} color={colors.negro} />
                    <Text>Tipo de viaje: Redondo</Text>
                </View>
                <View style={styles.containerAtributo}>
                    <FontAwesome name="map-marker" size={24} color={colors.negro} />
                    <Text>Gómez Morin ⟷ UPQ</Text>
                </View>
                <View style={styles.containerAtributo}>
                    <FontAwesome name="calendar" size={24} color={colors.negro} />
                    <Text>Días: Jueves, Viernes</Text>
                </View>
                <View style={styles.containerAtributo}>
                    <FontAwesome name="clock-o" size={24} color={colors.negro} />
                    <Text>Horarios: 13:30, 20:40</Text>
                </View>
                <View style={styles.containerAtributo}>
                    <FontAwesome name="group" size={24} color={colors.negro} />
                    <Text>Pasajeros: 6 / 6</Text>
                </View>
                <View style={styles.containerAtributo}>
                    {/* <FontAwesome name="group" size={24} color={colors.negro} /> */}
                    <Text>Fecha publicación: {props?.fecha_pulicacion ?? null}</Text>
                </View>
            </View>
            <View style={styles.containerBotones}>
                <Pressable style={styles.botonWhatsapp}>
                    <FontAwesome name="whatsapp" size={24} color={colors.verde} />
                </Pressable>
                <Pressable style={styles.botonSolicitar}>
                    <FontAwesome name="times" size={16} color={colors.blanco} />
                    <Text style={{color: colors.blanco, fontWeight: 'bold'}}>Eliminar</Text>
                </Pressable>
            </View>
        </View>
    )
}
export default CardMiViaje
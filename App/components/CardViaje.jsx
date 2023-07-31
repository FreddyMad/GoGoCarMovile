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
        width: 200,
        height: 150,
    },
    container: {
        backgroundColor: colors.blanco,
        borderColor: colors.verde,
        borderWidth: 3,
        paddingBottom: 3,
        paddingTop: 7,
        width: 350,
    },
    containerInfo: {
        gap: 2,
        justifyContent: "flex-start"
    },
    containerAtributo: {
        flexDirection: "row",
        gap: 3,
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
        backgroundColor: colors.verde,
        borderRadius: 8,
        flexDirection: "row",
        gap: 4,
        marginEnd: 12,
        paddingHorizontal: 12,
        paddingVertical: 6
    }
})

const CardViaje = (props) => {
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
                    <FontAwesome name="circle" size={24} color={colors.verde} />
                    <Text>Estatus: {props?.estatus ?? null}</Text>
                </View>
                <View style={styles.containerAtributo}>
                    <FontAwesome name="drivers-license" size={24} color={colors.negro} />
                    <Text>Conductor: {props?.conductor ?? null}</Text>
                </View>
                <View style={styles.containerAtributo}>
                    <FontAwesome name="exchange" size={24} color={colors.negro} />
                    <Text>Tipo de viaje: {props?.tipo_viaje ?? null}</Text>
                </View>
                <View style={styles.containerAtributo}>
                    <FontAwesome name="map-marker" size={24} color={colors.negro} />
                    <Text>Lugar de salida: {props?.lugar_salida ?? null}</Text>
                </View>
                <View style={styles.containerAtributo}>
                    <FontAwesome name="calendar" size={24} color={colors.negro} />
                    <Text>Días: {props?.dias ?? null}</Text>
                </View>
                <View style={styles.containerAtributo}>
                    <FontAwesome name="clock-o" size={24} color={colors.negro} />
                    <Text>Hora salida: {props?.hora_salida ?? null}</Text>
                </View>
                <View style={styles.containerAtributo}>
                    <FontAwesome name="group" size={24} color={colors.negro} />
                    <Text>Pasajeros: {props?.pasajeros ?? null}</Text>
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
                    <FontAwesome name="car" size={16} color={colors.blanco} />
                    <Text style={{color: colors.blanco}}>Solicitar</Text>
                </Pressable>
            </View>
        </View>
    )
}
export default CardViaje
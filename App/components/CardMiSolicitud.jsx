import React from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import colors from "../constants/colors"

const styles = StyleSheet.create({
	container: {
		borderRadius: 8,
		backgroundColor: colors.blanco,
		borderColor: colors.rojo,
		borderWidth: 3,
		paddingVertical: 15,
		width: 350,
	},
	containerInfo: {
		gap: 2,
		paddingHorizontal: 15,
		paddingBottom: 10,
		alignItems: 'flex-start'
	},
	containerSeccion: {
		columnGap: 10,
		flexDirection: "row",
		justifyContent: "center"
	},
	containerAtributo: {
		columnGap: 10,
		flexDirection: "row",
		justifyContent: "center"
	},
	containerBotones: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-around",
		gap: 30,
		marginTop: 4,
	},
	botonRechazar: {
		alignItems: "center",
		backgroundColor: colors.rojo,
		borderRadius: 8,
		flexDirection: "row",
		gap: 4,
		marginEnd: 12,
		paddingHorizontal: 12,
		paddingVertical: 9
	},
	botonAceptar: {
		alignItems: "center",
		backgroundColor: colors.verde,
		borderRadius: 8,
		flexDirection: "row",
		gap: 4,
		marginEnd: 12,
		paddingHorizontal: 12,
		paddingVertical: 9
	}
})

const CardMiSolicitud = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.containerInfo}>
				<View style={styles.containerSeccion}>
					<FontAwesome name="road" size={18} />
					<Text style={{ fontWeight: 'bold' }}>Viaje</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>ID: 8152</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>Tipo: Redondo</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>Punto salida: Gómez Morín</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>Punto llegada: UPQ</Text>
				</View>
				<View style={styles.containerSeccion}>
					<FontAwesome name="car" size={17} />
					<Text style={{ fontWeight: 'bold' }}>Usuario</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>Matrícula: 109976364</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>Nombre: Ricardo Colin Maldonado</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>Correo: 109976364@upq.edu.mx</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>Teléfono: 4481786639</Text>
				</View>
			</View>
			<View style={styles.containerBotones}>
				<Pressable style={styles.botonRechazar}>
					<FontAwesome name="times" size={16} color={colors.blanco} />
					<Text style={{ color: colors.blanco, fontWeight: 'bold' }}>Rechazar</Text>
				</Pressable>
				<Pressable style={styles.botonAceptar}>
					<FontAwesome name="check" size={16} color={colors.blanco} />
					<Text style={{ color: colors.blanco, fontWeight: 'bold' }}>Aceptar</Text>
				</Pressable>
			</View>
		</View>
	)
}
export default CardMiSolicitud
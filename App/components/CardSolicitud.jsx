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
		justifyContent: "flex-end",
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
	botonCancelar: {
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

const CardSolicitud = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.containerInfo}>
				<View style={styles.containerAtributo}>
					<FontAwesome name="circle" size={18}  />
					<Text style={{fontWeight: 'bold'}}>Estatus: Rechazado</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30, marginBottom: 8 }}>Código de viaje: 4580</Text>
					</View>
				<View style={styles.containerSeccion}>
					<FontAwesome name="drivers-license" size={18}  />
					<Text style={{ fontWeight: 'bold' }}>Datos del conductor</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>Nombre: Benjamín Enríquez Téllez</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>Matrícula: 120036139</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>Correo: 120034069@upq.edu.mx</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>Teléfono: 4412396783</Text>
				</View>
				<View style={styles.containerSeccion}>
					<FontAwesome name="car" size={17}  />
					<Text style={{ fontWeight: 'bold' }}>Datos del vehículo</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>Placa: AES8791</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>Marca: Ford</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>Modelo: Fiesta</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>Capacidad: 4</Text>
				</View>
				<View style={styles.containerSeccion}>
					<FontAwesome name="user" size={18}  />
					<Text style={{ fontWeight: 'bold' }}>Tus datos</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>Nombre: Guadalupe Franco Ramírez</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>Matrícula: 120034069</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>Correo: 120034069@upq.edu.mx</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>Teléfono: 4423510534</Text>
				</View>
				<Text style={{ color: 'red', fontStyle: 'italic', fontSize: 10, fontWeight: 'bold',marginVertical: 5}}>
					*Tus datos son visibles para el conductor*
				</Text>
				<View style={styles.containerSeccion}>
					<FontAwesome name="users" size={18}  />
					<Text style={{ fontWeight: 'bold' }}>Datos de pasajeros</Text>
				</View>
				<View style={styles.containerAtributo}>
					<Text style={{ marginStart: 30 }}>Luis Fernando 120036772</Text>
				</View>
			</View>
			<View style={styles.containerBotones}>
				<Pressable style={styles.botonCancelar}>
					<FontAwesome name="times" size={16} color={colors.blanco} />
					<Text style={{ color: colors.blanco, fontWeight: 'bold' }}>Cancelar</Text>
				</Pressable>
			</View>
		</View>
	)
}
export default CardSolicitud
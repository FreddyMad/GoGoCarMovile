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
		backgroundColor: colors.blanco,
		borderColor: colors.rojo,
		borderWidth: 3,
		paddingBottom: 10,
		width: 350,
	},
	containerInfo: {
		gap: 2,
		paddingHorizontal: 15,
		alignItems: 'flex-start',
		paddingVertical: 7,
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
	botonPDF: {
		borderWidth: 3,
		borderColor: colors.rojo,
		borderRadius: 10,
		marginStart: 12,
		paddingVertical: 4,
		paddingHorizontal: 7,
	},
})

const CardHistorial = (props) => {
	return (
		<>
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
						<Text>Guadalupe Franco Ramírez</Text>
					</View>
					<View style={styles.containerAtributo}>
						<FontAwesome name="exchange" size={24} color={colors.negro} />
						<Text>Tipo de viaje: Redondo</Text>
					</View>
					<View style={styles.containerAtributo}>
						<FontAwesome name="map-marker" size={24} color={colors.negro} />
						<Text>Lugar de salida: La Piedad</Text>
					</View>
					<View style={styles.containerAtributo}>
						<FontAwesome name="map-marker" size={24} color={colors.negro} />
						<Text>Lugar de llegada: UPQ</Text>
					</View>
					<View style={styles.containerAtributo}>
						<FontAwesome name="calendar" size={24} color={colors.negro} />
						<Text>Días: Lunes, Miércoles, Viernes</Text>
					</View>
					<View style={styles.containerAtributo}>
						<FontAwesome name="clock-o" size={24} color={colors.negro} />
						<Text>Hora salida: 13:30 - 20:40</Text>
					</View>
					<View style={styles.containerAtributo}>
						<FontAwesome name="group" size={24} color={colors.negro} />
						<Text>Pasajeros: 4 / 4</Text>
					</View>
					<View style={styles.containerAtributo}>
						<Text>Fecha publicación: 16-07-2023</Text>
					</View>
					<View style={styles.containerBotones}>
						<Pressable style={styles.botonPDF}>
							<FontAwesome name="file-pdf-o" size={24} color={colors.rojo} />
						</Pressable>
					</View>
				</View>
			</View>
			<View style={[styles.container, {marginBottom: 40}]}>
				<View style={styles.containerInfo}>
					<View style={styles.containerAtributo}>
						<FontAwesome name="circle" size={18} color={colors.rojo}/>
						<Text style={{ fontWeight: 'bold' }}>Estatus: Lleno</Text>
					</View>
					<View style={styles.containerAtributo}>
						<Text style={{ marginStart: 30, marginBottom: 8 }}>Código de viaje: 4580</Text>
					</View>
					<View style={styles.containerSeccion}>
						<FontAwesome name="drivers-license" size={18} />
						<Text style={{ fontWeight: 'bold' }}>Datos del conductor</Text>
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
					<View style={styles.containerSeccion}>
						<FontAwesome name="car" size={17} />
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
						<FontAwesome name="users" size={18} />
						<Text style={{ fontWeight: 'bold' }}>Datos de pasajeros</Text>
					</View>
					<View style={styles.containerAtributo}>
						<Text style={{ marginStart: 30 }}>Mayra García Valdéz - 120036772</Text>
					</View>
					<View style={styles.containerAtributo}>
						<Text style={{ marginStart: 30 }}>Alma Cecilia Arreola Bautista - 120039073</Text>
					</View>
					<View style={styles.containerAtributo}>
						<Text style={{ marginStart: 30 }}>Diego Antonio Cruz Álvarez - 120045682</Text>
					</View>
					<View style={styles.containerAtributo}>
						<Text style={{ marginStart: 30 }}>Gabriel Galvan Niño - 120034707</Text>
					</View>
					<View style={styles.containerSeccion}>
						<FontAwesome name="star" size={18} />
						<Text style={{ fontWeight: 'bold' }}>Calificación: 4.1</Text>
					</View>
				</View>
			</View>
		</>
	)
}
export default CardHistorial
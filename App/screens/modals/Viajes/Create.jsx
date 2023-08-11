import React, { useRef, useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from "react-native"
import { Formik, useField } from 'formik'
import { Picker } from '@react-native-picker/picker';
import { FontAwesome5 } from "@expo/vector-icons"
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios'
import colors from "../../../constants/colors"
import Checkbox from 'expo-checkbox';
import InputText from '../../../components/InputText.jsx';
import Modal from "../../../components/Modal.jsx"

const initialValues = {
	auto_id: '',
	tipo_viaje_id: '',
	hora_salida: '',
	hora_llegada: '',
	punto_llegada: '',
	punto_salida: '',
	descripcion: '',
	activo: false
}

const CreateViaje = ({ modalOpen, onClose }) => {
	const [handleForm, setSubmitForm] = useState(false)

	const handleSubmitForm = () => {
		setSubmitForm(!handleForm)
	}

	return (
		<Modal isOpen={modalOpen} onClose={onClose}
			title="Crear un nuevo viaje" headerIcon='route'>
			{{
				body: <Body onClose={onClose} handleForm={handleForm} onSubmitForm={handleSubmitForm} />,
				footer: <Footer onClose={onClose} onSubmitForm={handleSubmitForm} />,
			}}
		</Modal>
	)
}

const FormikCheckValue = ({ name, ...props }) => {
	const [field, meta, helpers] = useField(name)
	return (
		<View style={styles.checkboxContainer}>
			<Text style={styles.checkboxLabel}>{props.label}</Text>
			<Checkbox style={styles.checkbox}
				value={field.value}
				onValueChange={value => helpers.setValue(value)}
				{...props}
			/>
			{meta.error &&
				<Text style={styles.errores}>{meta.error}</Text>
			}
		</View>
	)
}

const FormikInputValue = ({ name, ...props }) => {
	const [field, meta, helpers] = useField(name)
	return (
		<>
			<InputText
				error={meta.error}
				value={field.value}
				onChangeText={value => helpers.setValue(value)}
				{...props}
			/>
			{meta.error &&
				<Text style={styles.errores}>{meta.error}</Text>
			}
		</>
	)
}

const Body = ({ onClose, handleForm, onSubmitForm }) => {
	const formikRef = useRef()
	const [timePicker, setTimePicker] = useState(false);
	const [time, setTime] = useState(new Date(Date.now()));

	function onTimeSelected(event, value) {
		setTime(value);
		setTimePicker(false);
	}
	function showTimePicker() {
		setTimePicker(true);
	}

	const handleSubmit = async (values) => {
		console.log(values)
		const userID = await SecureStore.getItemAsync('user_id');
		axios.post(`http://192.168.0.6:8000/api/autos`, {
			user_id: userID,
			...values
		}).then(response => {
			if (response.data) {
				const data = response.data
				if (data.status) {
					onClose()
					Alert.alert('Éxito', `${data.message}`)
				} else {
					Alert.alert('Error', `${data.message}`);
				}
			} else {
				Alert.alert('Error', 'No se pudo completar la petición');
			}
		}).catch(error => {
			console.log(error.response)
			Alert.alert('Error', 'Error de servidor');
		});
	}

	return (
		<Formik
			innerRef={formikRef}
			initialValues={initialValues}
			onSubmit={handleSubmit}
		>
			{({ errors, values, handleChange }) => {
				return (
					<>
						<FormikInputValue
							name="descripcion"
							placeholder="Descripción"
						/>
						<View style={styles.picker}>
							<Picker
								enabled={true}
								mode="dropdown"
								selectedValue={values.auto_id}
								itemStyle={styles.pickerItem}
							>
								<Picker.Item
									label="Seleccione el tipo de viaje"
									enabled={false}
									value="" />
							</Picker>
						</View>
						<Text style={styles.subtitle}>Salida y Destino</Text>
						<View >
							<View>
								<FormikInputValue
									name="punto_salida"
									placeholder="Punto de salida"
								/>
								<FormikInputValue
									name="punto_llegada"
									placeholder="Punto de llegada"
								/>
							</View>
							<Text style={styles.subtitle}>Horarios y días</Text>
							<View style={styles.contenedor}>
								<View style={styles.contenedor}>
									<FormikInputValue
										name="hora_salida"
										placeholder="Hora de salida"
										disabled
									/>
									<Pressable onPress={() => onClose} style={{ marginStart: 2, alignItems: 'center', justifyContent: 'center' }}>
										<FontAwesome5 name="clock" size={16} color={colors.gris} />
									</Pressable>
								</View>
								<View style={styles.contenedor}>
									<FormikInputValue
										name="hora_llegada"
										placeholder="Hora de llegada"
										disabled
									/>
									<Pressable onPress={() => onClose} style={{ marginStart: 2, alignItems: 'center', justifyContent: 'center' }}>
										<FontAwesome5 name="clock" size={16} color={colors.gris} />
									</Pressable>
								</View>
							</View>
							<View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
								<FormikCheckValue
									label="L"
									name="lunes"
								/>
								<FormikCheckValue
									label="M"
									name="martes"
								/>
								<FormikCheckValue
									label="M"
									name="miercoles"
								/>
								<FormikCheckValue
									label="J"
									name="jueves"
								/>
								<FormikCheckValue
									label="V"
									name="viernes"
								/>
								<FormikCheckValue
									label="S"
									name="sabado"
								/>
							</View>
							<Text style={styles.subtitle}>Vehículo</Text>
							<View style={styles.picker}>
								<Picker
									enabled={true}
									mode="dropdown"
									selectedValue={values.auto_id}
									itemStyle={styles.pickerItem}
								>
									<Picker.Item
										label="Seleccione un auto"
										enabled={false}
										value="" />
									{/* {marcas.map(function (item) {
										return (
											<Picker.Item
												label={item.MakeName.toString()}
												value={item.MakeId.toString()}
												key={item.MakeId.toString()} />
										)
									})} */}
								</Picker>
							</View>
						</View>
					</>
				)
			}}
		</Formik>
	)
}

const Footer = ({ onClose, onSubmitForm }) => {
	return (
		<>
			<Pressable style={[styles.botones, { borderWidth: 3, borderColor: colors.gris }]}
				onPress={onClose}>
				<Text style={{ fontWeight: 'bold', fontSize: 16 }}>Cancelar</Text>
			</Pressable>
			<Pressable style={[styles.botones, { backgroundColor: colors.azul }]}
				onPress={onSubmitForm}>
				<Text style={{ fontWeight: 'bold', fontSize: 16, color: colors.blanco }}>Confirmar</Text>
			</Pressable>
		</>
	)
}

const styles = StyleSheet.create({
	contenedor: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	botones: {
		alignContent: 'center',
		justifyContent: 'center',
		paddingVertical: 6,
		paddingHorizontal: 15,
		borderRadius: 8,
	},
	errores: {
		fontSize: 12,
		color: colors.rojo,
		marginStart: 18,
		marginBottom: 4,
	},
	subtitle: {
		color: 'gray',
		fontWeight: 'bold',
		fontSize: 17,
		marginBottom: 3
	},
	checkboxContainer: {
		alignItems: 'center',
		marginLeft: 20,
		alignContent: 'center'
	},
	checkboxLabel: {
		paddingHorizontal: 10,
		alignSelf: 'center',
		textAlign: 'center',
		fontSize: 15,
		color: colors.label,
	},
	checkbox: {
		margin: 4,
		justifyContent: 'center',
	},
	picker: {
		padding: 0,
		fontSize: 12,
		fontWeight: 'bold',
		marginBottom: 8,
		borderWidth: 3,
		borderRadius: 5,
		borderColor: colors.gris,
	},
	pickerItem: {
		fontSize: 12,
		color: "blue",
	}
})

export default CreateViaje
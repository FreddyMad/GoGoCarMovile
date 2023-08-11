import React, { useRef, useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from "react-native"
import { Formik, useField } from "formik"
import { Picker } from '@react-native-picker/picker';
import axios from 'axios'
import { crearAutoValidationSchema } from '../../../validationSchemas/crearAuto.js';
import colors from "../../../constants/colors.js"
import Checkbox from 'expo-checkbox';
import InputText from '../../../components/InputText.jsx';
import ImageUpload from '../../../components/ImageUpload.jsx';
import Modal from "../../../components/Modal.jsx"

const initialValues = {
	placa: 'AES7898',
	marca: 'FORD',
	marca_id: '',
	modelo_id: '',
	modelo: '',
	capacidad: '4',
	no_seguro: '1234568',
	foto: '',
	verificado: true,
	activo: false
}

const EditAuto = ({ modalOpen, onClose, marcas }) => {
	const [handleForm, setSubmitForm] = useState(false)

	const handleSubmitForm = () => {
		setSubmitForm(!handleForm)
	}

	return (
		<Modal isOpen={modalOpen} onClose={onClose}
			title='Editar auto' iconColor={colors.amarillo} iconBackground={colors.amarilloFondo}>
			{{
				body: <Body onClose={onClose} handleForm={handleForm} onSubmitForm={handleSubmitForm} marcas={marcas} />,
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

const Body = ({ onClose, handleForm, onSubmitForm, marcas }) => {
	const [modelos, setModelos] = useState(null)
	const formikRef = useRef()

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




	useEffect(() => {
		if (handleForm) {
			var marca = marcas.find(marca => marca.MakeId == formikRef.current.values.marca_id);
			if (modelos != null) {
				var modelo = modelos.find(modelo => modelo.Model_ID == formikRef.current.values.modelo_id);
				formikRef.current.setFieldValue('modelo', modelo?.Model_Name)
				formikRef.current.setFieldValue('marca', marca?.MakeName)
				onSubmitForm()
				formikRef.current.submitForm()
			}
		}
	}, [handleForm]);

	const fetchModelos = async (id) => {
		try {
			const response = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${id}?format=json`)
			setModelos(response.data.Results)
		} catch (error) {
			console.log(error);
		}
	}

	const handleMarcaChange = async (e) => {
		setModelos(null)
		formikRef.current.setFieldValue('marca_id', e)
		const id = e
		fetchModelos(id)
	}

	return (
		<Formik
			marcas={marcas}
			innerRef={formikRef}
			initialValues={initialValues}
			validationSchema={crearAutoValidationSchema}
			onSubmit={handleSubmit}
		>
			{({ errors, values, handleChange }) => {
				return (
					<>
						<Text style={{color: 'gray', fontWeight: 'bold', fontSize: 17, marginBottom: 3}}>Datos del vehículo</Text>
						<View style={styles.contenedor}>
							<View>
								<FormikInputValue
									name="placa"
									placeholder="Placa"
								/>
								<FormikInputValue
									name="capacidad"
									placeholder="Capacidad"
									keyboardType="numeric"
								/>
							</View>
							<View style={styles.picker}>
								<Picker
									enabled={true}
									mode="dropdown"
									onValueChange={(e) => handleMarcaChange(e)}
									selectedValue={values.marca_id}
									itemStyle={styles.pickerItem}
								>
									<Picker.Item
										label="Seleccione una marca"
										enabled={false}
										value="" />
									{marcas.map(function (item) {
										return (
											<Picker.Item
												label={item.MakeName.toString()}
												value={item.MakeId.toString()}
												key={item.MakeId.toString()} />
										)
									})}
								</Picker>
								{errors.marca ? <Text style={styles.errores}>{errors.marca_id}</Text> : null}
							</View>
							<View style={styles.picker}>
								<Picker
									mode="dropdown"
									onValueChange={handleChange('modelo_id')}
									selectedValue={values.modelo_id}
								>
									<Picker.Item
										label="Seleccione un modelo"
										enabled={false}
										value="" />
									{modelos != null ? modelos.map((item) => {
										return (
											<Picker.Item
												label={item.Model_Name.toString()}
												value={item.Model_ID.toString()}
												key={item.Model_ID.toString()} />
										)
									}) : null}
								</Picker>
								{errors.modelo ? <Text style={styles.errores}>{errors.modelo_id}</Text> : null}
							</View>
							<FormikInputValue
								name="no_seguro"
								placeholder="Número de seguro"
								keyboardType="numeric"
							/>
								<ImageUpload buttonText='Sube una imagen del auto' />
							<View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
								<FormikCheckValue
									label="Verificado"
									name="verificado"
								/>
								<FormikCheckValue
									label="Activo"
									name="activo"
								/>
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
			<Pressable style={[styles.botones, { backgroundColor: colors.amarillo }]}
				onPress={onSubmitForm}>
				<Text style={{ fontWeight: 'bold', fontSize: 16, color: colors.blanco }}>Confirmar</Text>
			</Pressable>
		</>
	)
}

const styles = StyleSheet.create({
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
	checkboxContainer: {
		alignItems: 'center',
		marginLeft: 20,
		alignContent: 'center'
	},
	checkboxLabel: {
		paddingHorizontal: 10,
		alignSelf:'center',
		textAlign:'center',
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

export default EditAuto
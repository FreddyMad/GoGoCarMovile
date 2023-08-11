import React, { useRef, useState } from 'react'
import { Pressable, StyleSheet, Text } from "react-native"
import { Formik } from "formik"
import axios from 'axios'
import { crearAutoValidationSchema } from '../../../validationSchemas/crearAuto.js';
import colors from "../../../constants/colors.js"
import Modal from "../../../components/Modal.jsx"

const initialValues = {
    auto_id: ''
}

const DeleteAuto = ({ modalOpen, onClose, marcas }) => {
	const [handleForm, setSubmitForm] = useState(false)

	const handleSubmitForm = () => {
		setSubmitForm(!handleForm)
	}

	return (
		<Modal isOpen={modalOpen} onClose={onClose}
			title='¿Estás seguro de eliminar el auto?' iconColor={colors.rojo} iconBackground={colors.rojoFondo}>
			{{
				body: <Body onClose={onClose} handleForm={handleForm} onSubmitForm={handleSubmitForm}/>,
				footer: <Footer onClose={onClose} onSubmitForm={handleSubmitForm} />,
			}}
		</Modal>
	)
}

const Body = ({ onClose, handleForm, onSubmitForm }) => {
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
	return (
		<Formik
			innerRef={formikRef}
			initialValues={initialValues}
			onSubmit={handleSubmit}
		>
			{({ errors, values, handleChange }) => {
				return (
					<>
						<Text style={{color: 'gray', fontWeight: 'bold', fontSize: 17, marginBottom: 3}}>
                            Todos los viajes relacionados con este vehículo serán eliminados.
                        </Text>
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
			<Pressable style={[styles.botones, { backgroundColor: colors.rojo }]}
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
})

export default DeleteAuto
import React from 'react'
import { Modal as RNModal, Pressable, StyleSheet, Text, View } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import colors from "../constants/colors"

const Modal = ({ isOpen, onClose, children, ...props }) => {
    return (
        <RNModal
            animationType="slide"
            transparent={true}
            visible={isOpen}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalView}>
                    <View style={styles.modalHeader}>
                        <FontAwesome5 name={props?.headerIcon ?? 'car'} size={32} color={colors.azul} />
                        <Pressable onPress={() => onClose}>
                            <FontAwesome5 name="times" size={30} color={colors.rojo} />
                        </Pressable>
                    </View>
                    <View style={styles.modalBody}>
                        <Text style={styles.modalTitle}>{props.title ?? 'Titulo'}</Text>
                        {children.body}
                    </View>
                    <View style={styles.modalFooter}>
                        {children.footer}
                    </View>
                </View>
            </View>
        </RNModal>
    )
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: '90%',
        overflow: 'hidden',
        paddingVertical: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalHeader: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    modalBody: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        paddingHorizontal: 15,
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 17
    },
    modalFooter: {
        gap: 4,
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 2,
        justifyContent: 'flex-end'
    },
})

export default Modal
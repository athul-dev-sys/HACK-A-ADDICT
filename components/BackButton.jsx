import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../assets/icons'
import { theme } from '../constants/theme'
const BackButton = ({size=26,router}) => {
  return (
    <Pressable onPress={() => router.back()}>
      <Icon name="arrowLeft" strokeWidth={2.5} size={size} style={styles.button} />
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button:{
        alignSelf:'flex-start',
        padding:5,
        borderRadius:theme.radius.sm,
        backgroundColor:'rgba(0,0,0,0.07)',
    }
})
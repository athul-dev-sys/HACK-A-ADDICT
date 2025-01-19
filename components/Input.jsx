import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { theme } from '../constants/theme'; // Ensure theme is imported
import { hp } from '../helpers/common';
const Input = (props) => {
  return (
    <View style={[styles.container, props.containerStyle && props.containerStyles]}>
      {props.icon && props.icon}
      <TextInput
        style={{flex:1}} // Apply custom style if needed
        placeholderTextColor={theme.colors.textLight} 
        ref={props.inputRef && props.inputRef}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp(7.2), 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.xxl,
    borderColor: theme.colors.text,
    borderWidth: 0.4,
    paddingHorizontal: 18,
    borderCurve:'continuous',
    gap:12
  }
});

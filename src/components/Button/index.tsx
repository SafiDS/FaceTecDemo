/* eslint-disable react-native/no-inline-styles */
import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import Colors from '../../utils/colors';

interface Props {
  title: string;
  index: number;
  onButtonPress: (text: string, index: number) => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({title, index, onButtonPress, disabled}) => {
  return (
    <Pressable
      disabled={disabled}
      key={index}
      style={[
        styles.button,
        {
          backgroundColor:
            index % 2 === 0 ? Colors.primary : Colors.transparent,
          borderColor: Colors.primary,
          borderWidth: index % 2 !== 0 ? 1 : 0,
          opacity: disabled ? 0.6 : 1,
        },
      ]}
      onPress={() => onButtonPress(title, index)}>
      <Text
        style={[
          styles.buttonText,
          {color: index % 2 === 0 ? Colors.white : Colors.primary},
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 14,
    marginVertical: 8,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

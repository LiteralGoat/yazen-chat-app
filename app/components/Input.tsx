import React from 'react'
import { SafeAreaView, StyleSheet, TextInput } from 'react-native'

const Input: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  const [text, onChangeText] = React.useState('')

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={text}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    width: '100%',
    backgroundColor: '#ffff',
    borderRadius: 10,
    padding: 16,
    fontSize: 16
  },
})

export default Input;
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import { getAuth, signInAnonymously } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { FIREBASE_DB } from '../../firebaseConfig'
import LoginIllustration from '../components/LoginIllustration'
import { Margin } from '../components/helpers'

const Login = ({ navigation }: any) => {
  const auth = getAuth()

  const [name, onChangeName] = useState<string>('')

  const onSubmit = async () => {
    const { user: { uid } } = await signInAnonymously(auth);
    setDoc(doc(FIREBASE_DB, 'users', uid), { name })
    // Sends the user info as route params
    navigation.navigate('Chat', {
      name,
      uid
    })
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>Vad heter du?</Text>
          <Margin margin={12} />
          <TextInput
            style={styles.input}
            value={name}
            placeholder="Skriv ditt namn här..."
            onChangeText={onChangeName}
            onSubmitEditing={onSubmit} />
        </View>
      </View>
      <LoginIllustration />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentWrapper: {
    width: '100%',
    padding: 16
  },
  title: {
    marginTop: '30%',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#141414'
  },
  input: {
    height: 48,
    width: '100%',
    backgroundColor: '#ffff',
    borderRadius: 10,
    padding: 16,
    fontSize: 16
  }
})

export default Login
import { View, Text, TextInput, StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Timestamp, addDoc, collection, getDocs, limit, onSnapshot, orderBy, query, startAfter } from 'firebase/firestore'
import { FIREBASE_DB } from '../../firebaseConfig'
import { useHeaderHeight } from '@react-navigation/elements'

const firestoreQuery = (queryLimit: number) => {
  return query(collection(FIREBASE_DB, 'messages'), orderBy('createdAt', 'desc'), limit(queryLimit))
}

interface Message {
  text: string,
  createdAt: any,
  authorUid: string,
  authorName: string
}

// TODO: find react-navigation route type
const Chat = ({ route }: any) => {
  const keyboardOffset = useHeaderHeight()
  
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, changeNewMessage] = useState<string>('')
  // TODO: find type for fiestore ref
  const [lastMessageRef, setLastMessageRef] = useState<any>(null)

  const sendMessage = () => {
    const messageRef = collection(FIREBASE_DB, 'messages')
    addDoc(messageRef, { 
      text: newMessage,
      createdAt: Timestamp.now(),
      authorUid: route.params.uid,
      authorName: route.params.name
    })
    changeNewMessage('')
  }

  const loadOlderMessages = () => {
    if (!lastMessageRef) return
    const olderMessagesQuery = query(collection(FIREBASE_DB, 'messages'), orderBy('createdAt', 'desc'), startAfter(lastMessageRef), limit(25))
    getDocs(olderMessagesQuery).then(snapshot => {
      let olderMessages: Message[] = []
      snapshot.forEach((message) => {
        // TODO: fix typing
        // @ts-ignore
        olderMessages.push(message.data())
      })

      setLastMessageRef(snapshot.docs[snapshot.docs.length-1])  
      setMessages(currentMessages => [...currentMessages, ...olderMessages])
    })
  }

  // On initial
  useEffect(() => {
    onSnapshot(firestoreQuery(1), {
      next: (snapshot) => {
        if (messages) {
          // TODO: fix typing
          // @ts-ignore
          setMessages((currentMessages): Message[] => [snapshot.docs[0].data(), ...currentMessages])
        }
      }
    })
    if (!messages.length) {
      getDocs(firestoreQuery(25)).then(snapshot => {
        let newMessages: Message[] = []
        snapshot.forEach((message) => {
          // TODO: fix typing
          // @ts-ignore
          newMessages.push(message.data())
        })

        setLastMessageRef(snapshot.docs[snapshot.docs.length-1])  
        setMessages(newMessages)
      })
    }
  }, [])

  return (
    <View style={styles.container} >
      <KeyboardAvoidingView keyboardVerticalOffset={keyboardOffset} behavior='padding'>
        <FlatList
          style={{...styles.messages, paddingBottom: keyboardOffset + 16}}
          data={messages}
          renderItem={({item}) => (
            <View style={{...styles.message, ...(item.authorUid === route.params.uid ? {...styles.messageRightAlign} : {...styles.messageLeftAlign})}}>
              <Text>{item.text}</Text>
            </View>
          )}
          keyExtractor={(item, index) => item.authorUid + index}
          inverted={true}
          onEndReached = {loadOlderMessages}
        />
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={newMessage}
            onChangeText={(text) => changeNewMessage(text)}
            onSubmitEditing={sendMessage}
            placeholder='Meddelande' 
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff', flex: 1, justifyContent: 'flex-end'
  },
  messages: {
    paddingHorizontal: 16,
    backgroundColor: '#fffff'
  },
  message: {
    marginVertical: 16,
    padding: 16,
    borderRadius: 16,
  },
  messageLeftAlign: {
    backgroundColor: '#eeeeee',
    borderBottomLeftRadius: 0,
    textAlign: 'right',
    marginRight: 48
  },
  messageRightAlign: {
    backgroundColor: '#FEE9E2',
    borderBottomRightRadius: 0,
    marginLeft: 48
  },
  inputWrapper: {
    padding: 16,
    paddingBottom: 32,
    shadowColor: "#eeeee",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5
  },
  input: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#eeee'
  }
})

export default Chat
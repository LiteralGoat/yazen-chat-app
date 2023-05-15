import { View, Image, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={{
          uri: 'https://i.imgur.com/EoEgmX6.png',
        }}
      />
    </View>
  )
}

const loginHeader = {
  header: () => (
    <View style={styles.headerWrapper}>
      <Header />
    </View>
  )
}

const chatHeader = {
  header: () => (
    <View style={{...styles.headerWrapper, ...styles.chatHeader}}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignSelf: 'flex-start',
    minHeight: 0,
    minWidth: 128,
    paddingLeft: 16,
    paddingTop: 16
  },
  logo: {
    height: 128
  },
  headerWrapper: {
    width: '100%', 
    height: 120
  },
  chatHeader: {
    backgroundColor: '#fff',
    shadowColor: "#cccccceb",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
})

export { 
  Header as default,
  loginHeader,
  chatHeader
}
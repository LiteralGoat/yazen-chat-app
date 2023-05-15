import { View, Image, StyleSheet } from 'react-native'

const LoginIllustration = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <View style={styles.appleContainer}>
          <Image
            style={styles.apple}
            source={{
              uri: 'https://uploads-ssl.webflow.com/6368cea3faec92020dec1709/63a35fba65f8740e55e4dbdb_Yazen-apple-illustration.webp',
            }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#CFE8C9',
    zIndex: -1,
    elevation: -1
  },
  circle: {
    position: 'absolute',
    bottom: 224,
    right: '-45%',
    height: 1000,
    width: 1000,
    borderRadius: 1000 / 2,
    backgroundColor: '#FEE9E2',
    flex: 1,
    justifyContent: 'flex-end'
  },
  appleContainer: {
    minHeight: 200,
    minWidth: 200,
    transform: [{ rotate: '10deg'}]
  },
  apple: {
    marginLeft: 400,
    height: 200,
    resizeMode: 'contain',
  }
})

export default LoginIllustration
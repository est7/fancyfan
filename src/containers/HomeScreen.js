import React from 'react'
import { StyleSheet, ToastAndroid, Button, View } from 'react-native'
import AppRouter from '../AppRouter'

export default class HomeScreen extends React.Component {
  constructor (props) {
    super(props)
  }

  onTextPress = () => {
    ToastAndroid.show('点击我好疼,短时间的~', ToastAndroid.SHORT)
  }

  render () {
    return (
      <View style={styles.container}>
        <Button title="Press Me"
                onPress={ToastAndroid.show('点击我好疼,短时间的~', ToastAndroid.SHORT)}>
          have a try</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})


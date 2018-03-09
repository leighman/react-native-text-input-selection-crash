import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      text: 'Some text in the TextInput',
      // Doesn't work
      //
      // selection: {
      //   start: 7,
      //   end: 7,
      // },
    }

    // Works
    //
    // setTimeout(() => {
    //   this.setState({
    //     selection: {
    //       start: 7,
    //       end: 7,
    //     },
    //   })
    // }, 1000)
  }

  render () {
    console.log('render')
    console.log(this.state)

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.text}
          selection={this.state.selection}
          onSelectionChange={({nativeEvent}) => {
            console.log(nativeEvent.selection)
            this.setState({
              selection: nativeEvent.selection,
            })
          }}
        ></TextInput>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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
  input: {
    height: 40,
    width: 250,
  },
})

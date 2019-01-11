import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accelerometer from 'react-native-sensors';
import Vibration from 'react-native-sensors';

const Value = ({name, value}) => (
  <View style={styles.valueContainer}>
    <Text style={styles.valueName}>{name}:</Text>
    <Text style={styles.valueValue}>{new String(value).substr(0, 8)}</Text>
  </View>
)

export default class App extends React.Component {

  constructor(props) {
    super(props);

    new Accelerometer({
      updateInterval: 400 // defaults to 100ms
    })
      .then(observable => {
        observable.subscribe(({ x, y, z }) => this.setState({ x, y, z }));
      })
      .catch(error => {
        console.log("The sensor is not available");
      });

    this.state = { x: 0, y: 0, z: 0 };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is my first app on react-native and i play with accelerometer!</Text>
        <Value name="x" value={this.state.X}/>
        <Value name="y" value={this.state.Y}/>
        <Value name="z" value={this.state.Z}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

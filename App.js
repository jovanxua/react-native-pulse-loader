import React, { Component } from 'react';
import { Animated, Text, View } from 'react-native';

import styles from './styles';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomLoader style={{width: 250, height: 50, backgroundColor: '#40b217'}}/>
      </View>
    );
  }
}

class CustomLoader extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
    sizeAnim: new Animated.Value(5),
    borderRadAnim: new Animated.Value(5),
  }

  componentDidMount() {
    /* Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();  */                       // Starts the animation
    Animated.parallel([
      Animated.timing(this.state.fadeAnim, {
        toValue: 0.4,
        duration: 3000
      }),
      Animated.timing(this.state.sizeAnim, {
        toValue: 150,
        duration: 2000
      }),
      Animated.timing(this.state.borderRadAnim, {
        toValue: 150,
        duration: 2000
      })
    ]).start()
  }

  render() {
    let { fadeAnim, sizeAnim, borderRadAnim } = this.state;
    
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,
          width: sizeAnim,
          height: sizeAnim,
          borderRadius: borderRadAnim
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}


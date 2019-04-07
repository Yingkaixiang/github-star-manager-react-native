import React from 'react';
import { View, StyleSheet } from 'react-native';

class Header extends React.Component<any, any> {
  render() {
    return <View style={styles.main}></View>
  }
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 100,
  },
});

export default Header;
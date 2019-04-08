import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './App.style';

interface AppProps {}
export default class App extends React.Component<AppProps, any> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      list: [1,2,3,4,5,6,7,8,9]
    }
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <View style={styles.search}>
            <View style={styles.menu}></View>
            <View style={styles.input}></View>
            <View style={styles.avatar}></View>
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView>
            {this.state.list.map((item: number) => (
              <View style={styles.repo} key={item}>
                <Text>{item}</Text>
              </View>)
            )}
          </ScrollView>
        </View>
      </View>
    );
  }
}

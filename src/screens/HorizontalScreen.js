import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Dimensions} from 'react-native';

const DATA = [
  {
    id: 0,
    title: '1',
    color: 'red',
  },
  {
    id: 1,
    title: '2',
    color: 'green',
  },
  {
    id: 2,
    title: '3',
    color: 'blue',
  },
];

export default class HorizontalScreen extends Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        key={item => item.id}>
        {DATA.map(item => (
          <View style={[styles.itemContainer, {backgroundColor: item.color}]}>
            <Text style={styles.textTitle}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  textTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

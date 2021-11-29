import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';

const NAVIGATION = [
  {
    id: 1,
    title: 'Horizontal',
  },
];

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={NAVIGATION}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View>
              <Button
                title={item.title}
                onPress={() => this.props.navigation.navigate('Horizontal')}
              />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

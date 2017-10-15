import React, { Component, PropTypes } from 'react';
import { View, Text, Button } from 'react-native';

export default class MySceneScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Выберите игру:</Text>
        <Button
          title="Дурак"
          onPress={() =>
            navigate('Profile', { name: 'Jane' })
          }
        />
      </View>
    );
  }
}
import React, { Component, PropTypes } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Игра: Дурак',
  };
  constructor() {
    super();
    this.state = {
      cards: [
        {
            id: 15,
            label: 'Дама ♥',
            color: 'red'
        },
        {
            id: 23,
            label: '7 ♠',
            color: 'black'
        },
        {
            id: 13,
            label: 'Валет ♦',
            color: 'red'
        },
        {
            id: 16,
            label: 'Король ♥',
            color: 'red'
        },
        {
            id: 22,
            label: '9 ♠',
            color: 'black'
        },
        {
            id: 12,
            label: '10 ♦',
            color: 'red'
        },
        {
            id: 24,
            label: 'Туз ♣',
            color: 'black'
        }
      ]
    };
  };

  _logObject(obj) {
    let x = 'obj props:';
    for (y in obj) {
      x += y + '/';
    }
    return x;
  }
  _renderItemList(itemObj) {
    return (
      <FlatList
        style={{width: 108, height: 200}}
        data={[itemObj]}
        key={100 + itemObj.id}
        renderItem={({item}) => this._renderItem(item)}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index}
      />
    );
  };

  _renderItem(item) {
    return (
      <View
        style={{width: 104, height: 120, marginTop: 60, marginBottom: 60, backgroundColor: 'white', borderWidth: 2, borderRadius: 9, borderColor: 'gray', marginRight: 1, marginLeft: 1}}
        key={item.id}
        >
        <Text style={{textAlign: 'center', paddingTop: 40, color: item.color}}>{item.label}</Text>
      </View>
    );
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Ваши карты:</Text>
        <FlatList
          horizontal={true}
          data={this.state.cards}
          renderItem={({item}) => this._renderItemList(item)}
          keyExtractor={(item, index) => index}
        />
        <Button
          title="Отбой"
          onPress={() =>
            null
          }
        />
        <Button
          title="Выход"
          onPress={() =>
            navigate('Home')
          }
        />
      </View>
    );
  }
}
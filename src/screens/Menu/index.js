import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const routeConfig = [
  { navigateTo: 'DefaultHeader', title: 'Default Header' },
  { navigateTo: 'ExtraHeader', title: 'S1. Extra Header (Search Bar)' },
  { navigateTo: 'DefaultHeaderForTab', title: 'S2. Default Header With Tab' },
  { navigateTo: 'ExtraHeaderForTab', title: 'S3. Extra Header With Tab (Facebook Group)' },
];

export default class MenuScreen extends Component {
  static navigationOptions = {
    title: 'Collapsible',
  }

  render () {
    const { navigation } = this.props;

    return routeConfig.map(route => (
      <TouchableOpacity key={route.navigateTo} style={{ margin: 20 }} onPress={() => navigation.navigate(route.navigateTo)}>
        <Text>{route.title}</Text>
      </TouchableOpacity>
    ));
  }
}
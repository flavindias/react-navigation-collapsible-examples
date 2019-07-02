import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MenuScreen from './screens/Menu';
import DefaultHeader from './screens/DefaultHeader';
import ExtraHeader from './screens/ExtraHeader';
import DefaultHeaderForTab from './screens/DefaultHeaderForTab';
import ExtraHeaderForTab from './screens/ExtraHeaderForTab';
import ContextScreen from './screens/Context';

// import { setSafeBounceHeight } from 'react-navigation-collapsible';
// setSafeBounceHeight(0);

/* Support Expo */
// import { setExpoStatusBarHeight } from 'react-navigation-collapsible';
// import { Constants } from 'expo';
// setExpoStatusBarHeight(Constants.statusBarHeight);

const navigationBackgroundColor = '#061';

export default class App extends Component {
  render () {
    return (
      [
        <StatusBar key='statusbar' barStyle='light-content' />,
        <StackNavigator key='navigator' />
      ]
    )
  }
}

const routeConfig = {
  MenuScreen: { screen: MenuScreen },
  DefaultHeader: { screen: DefaultHeader },
  ExtraHeader: { screen: ExtraHeader },
  DefaultHeaderForTab: { screen: DefaultHeaderForTab },
  ExtraHeaderForTab: { screen: ExtraHeaderForTab },
  DetailScreen: { screen: ContextScreen },
};

const navigatorConfig = {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: navigationBackgroundColor, borderBottomColor: 'transparent', borderBottomWidth: 0, elevation: 0 },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white',
  },
};

const StackNavigator = createAppContainer(createStackNavigator(routeConfig, navigatorConfig));


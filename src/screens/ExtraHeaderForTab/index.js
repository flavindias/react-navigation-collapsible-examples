import React from 'react';
import { View, Image, Animated } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import TabChild from '../TabChild';
import Context from '../Context';
import { withCollapsibleForTab } from 'react-navigation-collapsible';

const TopTabNavigator = createMaterialTopTabNavigator(
  {
    Screen1: { screen: TabChild },
    Screen2: { screen: TabChild },
    Screen3: { screen: Context },
  },
  {
    animationEnabled: true,
    defaultNavigationOptions: {
      tabBarOptions: {
        indicatorStyle: { backgroundColor: 'white' },
        style: { borderTopColor: 'transparent', borderTopWidth: 0, elevation: 0, backgroundColor: '#061' },
      },
    },
    navigationOptions: {
      title: 'My Group 2'
    }
  }
);
const image = require('../../assets/img/cat.jpg');
// eslint-disable-next-line no-unused-vars
const GroupImageHeader = ({ navigation, collapsible }) => {
  // eslint-disable-next-line no-unused-vars
  const { translateY, translateOpacity, translateProgress } = collapsible;
  return (
    <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
      <Image
        source={image}
        resizeMode="cover"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0.5
        }} />
      <Animated.Image
        source={image}
        resizeMode="cover"
        style={{ transform: [ { scale: translateOpacity } ], alignSelf: 'center', width: 100, height: 100, borderWidth: 4, borderColor: 'white', borderRadius: 50 }} />
    </View>
  );
}

const collapsibleParams = {
  collapsibleComponent: GroupImageHeader,
  collapsibleBackgroundStyle: {
    height: 200,
    backgroundColor: '#061',
    disableFadeoutInnerComponent: true,
  }
}

export default withCollapsibleForTab(TopTabNavigator, collapsibleParams);
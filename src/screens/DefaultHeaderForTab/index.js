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
        indicatorStyle: {
          backgroundColor: 'white'
        },
        style: {
          borderTopColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: '#061'
        },
      },
    },
    navigationOptions: {
      title: 'My Group 1'
    }
  }
);

export default withCollapsibleForTab(TopTabNavigator, { iOSCollapsedColor: '#032' });
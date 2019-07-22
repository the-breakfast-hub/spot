import React from 'react';
import { Text, View, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  StackActions,
  NavigationActions
} from 'react-navigation';

// import Attendees from './Attendees';
import CalendarScreen from './Calendar';
import CreateEventScreen from './CreateEvent';
import HomeScreen from './Home';
import InboxScreen from './Inbox';
// import Login from './Login';
// import Profile from './Profile';
import SearchScreen from './Search';
// import SingleEvent from './SingleEvent';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const HomeNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Spot',
      headerRight: (
        <Icon
          name="plus"
          type="font-awesome"
          color="#A89898"
          onPress={() => navigation.navigate('CreateEvent')}
          size={22}
          iconStyle={{
            paddingRight: 27
          }}
        />
      )
    })
  },
  CreateEvent: {
    screen: CreateEventScreen
  }
});

const CalendarNavigator = createStackNavigator({
  Home: {
    screen: CalendarScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Calendar',
      headerRight: (
        <Icon
          name="plus"
          type="font-awesome"
          color="#A89898"
          onPress={() => navigation.navigate('CreateEvent')}
          size={22}
          iconStyle={{
            paddingRight: 27
          }}
        />
      )
    })
  },
  CreateEvent: {
    screen: CreateEventScreen
  }
});

const SearchNavigator = createStackNavigator({
  Home: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Search',
      headerRight: (
        <Icon
          name="plus"
          type="font-awesome"
          color="#A89898"
          onPress={() => navigation.navigate('CreateEvent')}
          size={22}
          iconStyle={{
            paddingRight: 27
          }}
        />
      )
    })
  },
  CreateEvent: {
    screen: CreateEventScreen
  }
});

const InboxNavigator = createStackNavigator({
  Home: {
    screen: InboxScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Inbox',
      headerRight: (
        <Icon
          name="plus"
          type="font-awesome"
          color="#A89898"
          onPress={() => navigation.navigate('CreateEvent')}
          size={22}
          iconStyle={{
            paddingRight: 27
          }}
        />
      )
    })
  },
  CreateEvent: {
    screen: CreateEventScreen
  }
});


const AppNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            style={[{ color: tintColor }]}
            size={25}
            name={'home'}
            type={'font-awesome'}
          />
        ),
        barStyle: { backgroundColor: '#FFFFFF' }
      }
    },
    Search: {
      screen: SearchNavigator,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            style={[{ color: tintColor }]}
            size={25}
            name={'search'}
            type={'font-awesome'}
          />
        ),
        barStyle: { backgroundColor: '#FFFFFF' }
      }
    },
    Calendar: {
      screen: CalendarNavigator,
      navigationOptions: {
        tabBarLabel: 'Calendar',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            style={[{ color: tintColor }]}
            size={25}
            name={'calendar'}
            type={'font-awesome'}
          />
        ),
        barStyle: { backgroundColor: '#FFFFFF' }
      }
    },
    Inbox: {
      screen: InboxNavigator,
      navigationOptions: {
        tabBarLabel: 'Inbox',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            style={[{ color: tintColor }]}
            size={25}
            name={'inbox'}
            type={'font-awesome'}
          />
        ),
        barStyle: { backgroundColor: '#FFFFFF' }
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({ navigation }) => {
        const nextRoute = navigation.state.routeName;
        const previousRoute = navigation.state.routes[0].routeName;

        navigation.dispatch(
          NavigationActions.navigate({ routeName: nextRoute })
        );

        navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: previousRoute })]
          })
        );
      }

      // tabBarOptions: {
      //   showIcon: true,
      //   showLabel: false
      //   // activeTintColor: '#A89898',
      //   // inactiveTintColor: '#262525'
      // }
    })
  }
  // {
  //   tabBarOptions: {
  //     showIcon: true,
  //     showLabel: true
  //     // activeTintColor: '#A89898',
  //     // inactiveTintColor: '#262525'
  //   }
  // }
);


export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppNavigator
    },
    {
      initialRouteName: 'App'
    }
  )
);

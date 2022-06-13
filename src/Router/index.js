import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Image} from 'react-native';
import {connect} from 'react-redux';
import Login from '@/Screens/Login';
import List from '@/Screens/List';
import Dash from '@/Screens/Dash';
import Splash from '@/Screens/Splash';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Styler as S} from '@/Utils/Styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNav = ({navigation}) => {
  const NavigationItem = (isFocused, title) => (
    <View>
      {title === 'Dash' ? (
        <Image
          style={[S.selfcenter]}
          source={
            isFocused
              ? require('@/Assets/main.png')
              : require('@/Assets/mainoff.png')
          }
        />
      ) : null}
      {title === 'List' ? (
        <Image
          style={[S.selfcenter]}
          source={
            isFocused
              ? require('@/Assets/list.png')
              : require('@/Assets/listoff.png')
          }
        />
      ) : null}
    </View>
  );

  const getTabBarVisibility = route => {
    const routeIndex = route.state ? route.state.index : 0;
    if (routeIndex > 0) {
      return false;
    }
    return true;
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="List"
        component={List}
        options={({route}) => ({
          tabBarIcon: ({focused}) => NavigationItem(focused, 'List'),
          tabBarVisible: getTabBarVisibility(route),
          title: 'List',
          headerShown: false,
          tabBarShowLabel: false,
        })}
      />
      <Tab.Screen
        name="Dash"
        component={Dash}
        options={({route}) => ({
          tabBarIcon: ({focused}) => NavigationItem(focused, 'Dash'),
          tabBarVisible: getTabBarVisibility(route),
          title: 'Dash',
          headerShown: false,
          tabBarShowLabel: false,
        })}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = state => {
  return {
    Auth: state.Auth,
  };
};

const Router = ({route, Auth}) => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 500);
  }, [isLoading]);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <Stack.Navigator>
      {Auth.data?.token ? (
        <Stack.Screen
          name="BottomNav"
          component={BottomNav}
          options={{title: 'BottomNav', headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login', headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default connect(mapStateToProps)(Router);

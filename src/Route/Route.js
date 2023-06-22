import React, {useRef, useEffect} from 'react';
// import Splash from '../screens/Splash';
// import Home from '../screens/Home';
import Home from '../screens/BottamTab/Home';
import Search from '../screens/BottamTab/Search';
import Chats from '../screens/BottamTab/Chats';
import Setting from '../screens/BottamTab/Setting';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View, StyleSheet, TouchableOpacity, Animated} from 'react-native';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const TabArr = [
  {
    labelName: 'Home',
    component: Home,
    iconName: 'home',
    activeColor: 'pink',
  },
  {
    labelName: 'Search',
    component: Search,
    iconName: 'search',
    activeColor: '#3e9e69',
  },
  {
    labelName: 'Setting',
    component: Setting,
    iconName: 'gear',
    activeColor: '#4f65c9',
  },
  {
    labelName: 'Chats',
    component: Chats,
    iconName: 'comments-o',
    activeColor: '#d4153b',
  },
];
const BottomTab1 = () => {
  const TabButton = props => {
    const {item, onPress, accessibilityState} = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      if (focused) {
        Animated.timing(viewRef, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }
    }, [focused]);
    const interpolateRotation = viewRef.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.1}
        style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Animated.View
          ref={viewRef}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            transform: [{rotate: interpolateRotation}],
          }}>
          <Icon
            name={item.iconName}
            color={focused ? item.activeColor : '#000'}
            size={focused ? 28 : 18}
          />
        </Animated.View>
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60,
          right: 20,
          left: 20,
          bottom: 25,
          position: 'absolute',
          borderRadius: 10,
        },
        tabBarShowLabel: false,
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.labelName}
            component={item.component}
            options={{
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};
const BottomTab2 = () => {
  const CustomTabBtn = ({children, onPress}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          top: -35,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            height: 10,
            width: 0,
          },
          shadowRadius: 3,
          shadowOpacity: 0.25,
          elevation: 5,
        }}>
        <View
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            backgroundColor: 'red',
          }}>
          {children}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 20,
          right: 20,
          left: 20,
          borderRadius: 10,
          height: 70,
          elevation: 3,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.iconView}>
                <Icon name="home" size={24} color={focused ? 'red' : '#000'} />
                <Text style={[styles.txt, {color: focused ? 'red' : '#000'}]}>
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.iconView}>
                <Icon
                  name="search"
                  size={24}
                  color={focused ? 'red' : '#000'}
                />
                <Text style={[styles.txt, {color: focused ? 'red' : '#000'}]}>
                  Search
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="plus"
        component={Home}
        options={{
          tabBarIcon: () => {
            return <Icon name="plus" size={24} color={'#fff'} />;
          },
          tabBarButton: props => <CustomTabBtn {...props} />,
        }}
      />

      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.iconView}>
                <Icon
                  name="comments-o"
                  size={24}
                  color={focused ? 'red' : '#000'}
                />
                <Text style={[styles.txt, {color: focused ? 'red' : '#000'}]}>
                  Chats
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.iconView}>
                <Icon name="gear" size={24} color={focused ? 'red' : '#000'} />
                <Text style={[styles.txt, {color: focused ? 'red' : '#000'}]}>
                  Setting
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
const BottomTab3 = () => {
  const TabButton2 = props => {
    const {item, onPress, accessibilityState} = props;
    const focused = accessibilityState.selected;
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.1}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: focused ? item.activeColor : null,
            padding: focused ? 8 : null,
            borderRadius: focused ? 5 : null,
          }}>
          <Icon
            name={item.iconName}
            color={focused ? '#fff' : '#000'}
            size={18}
          />
          {focused ? (
            <Text
              style={{
                color: '#fff',
                fontSize: 12,
                fontWeight: 'bold',
                marginLeft: 5,
              }}>
              {item.labelName}
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          left: 20,
          right: 20,
          bottom: 25,
          borderRadius: 10,
          height: 60,
        },
      }}>
      {TabArr.map((item, index) => (
        <Tab.Screen
          component={item.component}
          name={item.labelName}
          key={index}
          options={{
            tabBarButton: props => <TabButton2 {...props} item={item} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
const BottomTab4 = () => {
  const TabButton2 = props => {
    const {item, onPress, accessibilityState} = props;
    const focused = accessibilityState.selected;
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.1}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            alignItems: 'center',
            marginTop: focused ? -35 : 0,
          }}>
          <View
            style={
              focused
                ? {
                    backgroundColor: '#fff',
                    height: 50,
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 25,
                  }
                : null
            }>
            <View
              style={{
                backgroundColor: focused ? item.activeColor : null,
                height: 40,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Icon
                name={item.iconName}
                color={focused ? '#fff' : '#000'}
                size={18}
              />
            </View>
          </View>
          {focused ? (
            <Text
              style={{
                color: '#000',
                fontSize: 12,
                fontWeight: 'bold',
                marginLeft: 5,
              }}>
              {item.labelName}
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          left: 20,
          right: 20,
          bottom: 25,
          borderRadius: 10,
          height: 50,
          backgroundColor: '#fff',
        },
      }}>
      {TabArr.map((item, index) => (
        <Tab.Screen
          component={item.component}
          name={item.labelName}
          key={index}
          options={{
            tabBarButton: props => <TabButton2 {...props} item={item} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export const SideDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Drawerfirst">
      <Drawer.Screen name="Drawerfirst" component={BottomTab1} />
      <Drawer.Screen name="Drawersecond" component={BottomTab2} />
      <Drawer.Screen name="DrawerThird" component={BottomTab3} />
      <Drawer.Screen name="DrawerFour" component={BottomTab4} />
    </Drawer.Navigator>
  );
};

const Route = () => {
  return (
    <NavigationContainer>
      <SideDrawer />
    </NavigationContainer>
  );
};
export default Route;
const styles = StyleSheet.create({
  iconView: {alignItems: 'center'},
  txt: {
    fontWeight: 'bold',
    fontSize: 12,
  },
});

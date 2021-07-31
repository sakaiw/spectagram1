import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
        barStyle = {styles.bottomTabStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'CreatePost') {
              iconName = focused ? 'create' : 'create-outline';
            }
            return <Ionicons name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'chartreuse',
          inactiveTintColor: 'black',
        }}
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreatePost" component={CreatePost} />
      </Tab.Navigator>
    ) 
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  }
});

export default BottomTabNavigator;
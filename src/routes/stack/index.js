import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../pages/Home/index';

const { Navigator, Screen } = createNativeStackNavigator();

export default function () {
    return (
        <Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Screen name='Home' component={Home} />
        </Navigator>
    )
};
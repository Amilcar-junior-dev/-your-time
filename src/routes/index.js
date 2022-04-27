import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './stack';

import AuthProvider from '../contexts/auth'

export default function () {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Stack />
            </AuthProvider>
        </NavigationContainer>
    )
};
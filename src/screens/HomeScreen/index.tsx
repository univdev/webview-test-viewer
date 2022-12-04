import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {Styles} from './styles';
import HomeScreenProps from './types';

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView
      style={{
        ...Styles.Container,
      }}>
      <Text>Goodjob!</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

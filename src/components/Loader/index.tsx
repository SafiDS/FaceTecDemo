import {ActivityIndicator} from 'react-native';
import React from 'react';
import Colors from '../../utils/colors';

interface Props {}

const Loader: React.FC<Props> = () => {
  return <ActivityIndicator color={Colors.primary} size={'large'} />;
};

export default Loader;

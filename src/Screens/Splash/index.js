import React from 'react';
import {Image, ImageBackground} from 'react-native';
import {Styler as S} from '@/Utils/Styles';

function Splash() {
  return (
    <ImageBackground
      source={require('@/Assets/bg.png')}
      resizeMode="cover"
      style={[S.flex, S.supercenter]}>
      <Image source={require('@/Assets/main.png')} />
    </ImageBackground>
  );
}

export default Splash;

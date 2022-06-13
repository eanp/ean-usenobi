/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useCallback, useState} from 'react';
import {
  View,
  Text,
  RefreshControl,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import {getList, logout} from '@/Storages/Actions';
import {useDispatch, useSelector} from 'react-redux';
import {Styler as S} from '@/Utils/Styles';
import {useFocusEffect} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Detail() {
  const dispatch = useDispatch();
  const List = useSelector(state => state.List);

  useEffect(() => {
    dispatch(getList());
    console.log('long = ', List.data.data.length);
  }, []);

  useFocusEffect(
    useCallback(() => {
      refreshData();
    }, [dispatch]),
  );

  const toLogout = () => {
    dispatch(logout());
  };

  const refreshData = () => {
    dispatch(getList());
  };

  return (
    <ImageBackground
      source={require('@/Assets/bg.png')}
      resizeMode="cover"
      style={[S.flex]}>
      <ScrollView
        style={[S.w, S.py]}
        showsVerticalScrollIndicator={true}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={refreshData} />
        }>
        <View
          style={[
            S.mt24,
            S.row,
            {
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 8,
            },
          ]}>
          <Image style={[S.box24]} source={require('@/Assets/back.png')} />
          <View
            style={{
              backgroundColor: '#223965',
              width: '80%',
              borderRadius: 8,
              alignItems: 'center',
              flexDirection: 'row',
              height: 28,
            }}>
            <Image
              style={[{height: 12, width: 12, marginLeft: 12}]}
              source={require('@/Assets/search.png')}
            />
            <Text style={{color: 'grey', marginLeft: 8}}>Search</Text>
          </View>
          <TouchableOpacity onPress={() => toLogout()}>
            <Image style={[S.box20]} source={require('@/Assets/out.png')} />
          </TouchableOpacity>
        </View>

        {List?.data?.data
          ? List.data.data.map((item, index) => {
              return (
                <View
                  key={index + 1}
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: 'grey',
                    height: 40,
                  }}>
                  <Image style={[S.box24]} source={{uri: item.image}} />
                  <Text
                    style={{color: 'white', marginLeft: 8, fontWeight: '700'}}>
                    {item.ticker}
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'right',
                      position: 'absolute',
                      right: 0,
                    }}>
                    {item.amount}
                  </Text>
                </View>
              );
            })
          : null}
      </ScrollView>
    </ImageBackground>
  );
}

export default Detail;

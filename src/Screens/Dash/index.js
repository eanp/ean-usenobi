import React, {useEffect, useCallback, useState} from 'react';
import {
  View,
  Text,
  RefreshControl,
  ScrollView,
  Image,
  ImageBackground,
 q} from 'react-native';
import {postDashboard} from '@/Storages/Actions';
import {useDispatch, useSelector} from 'react-redux';
import {Styler as S} from '@/Utils/Styles';
import {useFocusEffect} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Detail() {
  const dispatch = useDispatch();
  const Dashboard = useSelector(state => state.Dashboard);
  const [data, setData] = useState();

  useEffect(() => {
    dispatch(postDashboard());
  }, []);

  useEffect(() => {
    if (Dashboard?.data) {
      let weird = Dashboard.data;
      let weirdData = Object.keys(weird).map(item => [weird[item]]);
      setData(weirdData);
    }
  }, [Dashboard]);

  useFocusEffect(
    useCallback(() => {
      refreshData();
    }, []),
  );

  const refreshData = () => {
    dispatch(postDashboard());
  };

  return (
    <ImageBackground
      source={require('@/Assets/bg.png')}
      resizeMode="cover"
      style={[S.flex, S.supercenter]}>
      <ScrollView
        style={[S.w]}
        showsVerticalScrollIndicator={true}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={refreshData} />
        }>
        <Image
          style={[S.selfcenter, S.mt24]}
          source={require('@/Assets/ads.png')}
        />
        <View style={[S.supercenter, S.flex,{marginTop:32}]}>
          <Text style={{color:'grey'}}>24H Changes <Text style={{color:'#00C896',fontWeight:'600',marginLeft:8}}>+ {data && data[2]}</Text></Text>
          <Text style={{marginTop:12,fontSize:40,color:'#fff',fontWeight:'700'}}>${data && data[1]}</Text>
        </View>
        <TouchableOpacity>

        <Image
          style={[S.selfcenter, S.mt24]}
          source={require('@/Assets/button.png')}
          />
          </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

export default Detail;

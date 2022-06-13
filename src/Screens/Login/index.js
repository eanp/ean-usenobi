/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import {login} from '@/Storages/Actions';
import {Styler as S} from '@/Utils/Styles';
import {useDispatch, useSelector} from 'react-redux';

function Login({navigation}) {
  const dispatch = useDispatch();
  const AuthData = useSelector(state => state.Auth);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [show, setShow] = useState(false);
  const [warning, setWarning] = useState(false);

  const Check = () => {
    if (email && pass) {
      const collection = {};
      collection.email = email;
      collection.password = pass;
      dispatch(login(collection));
      setWarning(false);
    } else {
      setWarning(true);
    }
  };

  useEffect(() => {
    if (AuthData?.data?.token) {
      navigation.navigate('BottomNav');
    }
    if (AuthData.isError) {
      setWarning(true);
    }
  }, [AuthData]);

  useEffect(() => {
    (email || pass) && setWarning(false);
  }, [email, pass]);

  return (
    <View style={[S.flex, S.col]}>
      <ImageBackground
        source={require('@/Assets/bg.png')}
        resizeMode="cover"
        style={[S.flex]}>
        <View style={[S.py, S.w, S.col, S.centered, S.mt24]}>
          <Image source={require('@/Assets/logo.png')} />
          <View style={[S.w, S.col, S.mt24, S.flexstart]}>
            <Text
              style={{
                color: '#9D9FA0',
                fontSize: 16,
                marginTop: 40,
                textAlign: 'left',
              }}>
              E-mail Address
            </Text>
            <TextInput
              style={[
                {
                  height: 40,
                  marginTop: 12,
                  padding: 12,
                  width: '100%',
                  backgroundColor: '#11203C',
                  color: '#EAEAEA',
                  borderRadius: 8,
                },
                email ? {textAlign: 'left'} : {textAlign: 'center'},
              ]}
              onChangeText={setEmail}
              value={email}
              placeholder="Enter E-mail Address"
              keyboardType="email-address"
              placeholderTextColor="#7E8593"
              autoCompleteType="email"
            />
            {warning && (
              <Text
                style={{
                  color: '#F6BC45',
                  fontSize: 14,
                  marginTop: 4,
                  textAlign: 'left',
                }}>
                Invalid E-mail Address
              </Text>
            )}

            <Text
              style={{
                color: '#9D9FA0',
                fontSize: 16,
                marginTop: 32,
                textAlign: 'left',
              }}>
              Password
            </Text>
            <View>
              <TextInput
                style={[
                  {
                    height: 40,
                    marginTop: 12,
                    padding: 12,
                    width: '100%',
                    backgroundColor: '#11203C',
                    color: '#EAEAEA',
                    borderRadius: 8,
                  },
                  pass ? {textAlign: 'left'} : {textAlign: 'center'},
                ]}
                onChangeText={setPass}
                value={pass}
                placeholder="Enter Password"
                keyboardType="default"
                placeholderTextColor="#7E8593"
                autoCompleteType="password"
                secureTextEntry={!show}
                autoCapitalize="none"
              />
              <TouchableOpacity
                onPress={() => setShow(!show)}
                style={{position: 'absolute', right: 12, top: 22}}>
                <Image
                  style={[S.box20]}
                  source={
                    show
                      ? require('@/Assets/eye.png')
                      : require('@/Assets/eye-off.png')
                  }
                />
              </TouchableOpacity>
            </View>
            {warning && (
              <Text
                style={{
                  color: '#F6BC45',
                  fontSize: 14,
                  marginTop: 4,
                  textAlign: 'left',
                }}>
                Invalid Password
              </Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          onPress={() => Check()}
          style={[
            {
              backgroundColor: 'blue',
              width: '80%',
              height: 48,
              borderRadius: 8,
              position: 'absolute',
              bottom: 24,
              alignSelf: 'center',
            },
            S.supercenter,
          ]}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default Login;

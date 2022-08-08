import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useTheme} from '@react-navigation/native';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import LinearGradient from 'react-native-linear-gradient';
import Loader from '../../App/components/Loader';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import {color} from '../../App/utils/color';


const SplashScreen = ({navigation}) => {
  const {colors} = useTheme();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      //var userData = await AsyncStorage.getItem('userData');
      setLoading(false);
      setTimeout(()=>{
        navigation.navigate('MainScreenContainer');
      },1000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Loader loading={loading} />

      <StatusBar backgroundColor={color.backgroundCol} barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="2000"
          source={require('../../App/assets/logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: color.colorWhite,
          },
        ]}
        animation="fadeInUpBig">
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}>
          Online Shopping!
        </Text>
      </Animatable.View>
    </View>
  );
};
export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: color.backgroundCol,
  },
  header: {
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: '40%',
    backgroundColor: color.colorWhite,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    resizeMode: 'stretch',
  },
  title: {
    color: '#05375a',
    fontSize: 28,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

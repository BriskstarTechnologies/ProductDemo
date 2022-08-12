import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useTheme} from '@react-navigation/native';
import Loader from '../../App/components/Loader';
import { productListApi } from '../ApiHelper/ApiCall';
import {color} from '../../App/utils/color';
import {useDispatch} from 'react-redux';
import { addProductList } from '../redux/actions/action';

//Note : This is splash screen.
   //In this screen API Product List calling and store in reducx.    
const SplashScreen = ({navigation}) => {
  const {colors} = useTheme();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    loadProductData();
  }, []);

  //Note : This fucntion is used to call Product list API & store inside redux.
  const loadProductData = async () => {
    try {
      setLoading(true);
      var getApiData = await productListApi();
      console.log("Splash Data",getApiData)
      dispatch(addProductList(getApiData));

      navigation.navigate('MainScreenContainer');
      setLoading(false);
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

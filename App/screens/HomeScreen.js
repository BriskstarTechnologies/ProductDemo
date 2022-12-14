import { useEffect, useState } from 'react';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  BackHandler,
  ActivityIndicator,
} from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import { Image, Header } from 'react-native-elements';
import { color } from '../utils/color';
import { useSelector,useDispatch } from 'react-redux';
import Loader from '../components/Loader';
import AppConstant from '../utils/AppConstant';
import {addToCart} from '../redux/actions/action';
import CommonStatusBar from '../components/CommonStatusBar';

//Note : In this screen display Product list with price and short description.
const HomeScreen = props => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartData,setCartData] = useState([]);

  //Note :This method are used to get product data from redux.
  const data = useSelector((state) => state);

  //Note : This method is used to set add to cart data to redux.
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', backAction);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, []),
  );

  useEffect(() => {
    setResult(data.productReducer.productData)
    setLoading(false)
   }, []);

  //Note : This Function is used in hardware back click. 
  const backAction = () => {
    Alert.alert(AppConstant.APP_NAME, 'Are you sure you want to go exit?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'YES', onPress: () => BackHandler.exitApp() },
    ]);
    return true;
  };

  //Note : Add to cart click
  const onClickAddToCart = (index, item) => {
    console.log("Cart Item",data.cartReducer.cartData)
 
    let addedItemToCart = data.cartReducer.cartData.find(
      item => item.id === result[index].id,
    );
   
    if (addedItemToCart == null) {
      dispatch(addToCart(item));
      Alert.alert(AppConstant.APP_NAME,"Item is added in your cart")
    }
    else{
      Alert.alert(AppConstant.APP_NAME,"This item allready added in your cart");
    }
  };

  return (
    <View style={styles.container}>
       <Loader loading={loading} />
       <CommonStatusBar backgroundColor={color.colorWhite}/>
      <Header
        centerComponent={{
          text: 'Products',
          style: { color: 'black', fontSize: 20, fontWeight: 'bold' },
        }}
        backgroundColor="white"
      />
      <FlatList
        style={{ flex: 1 }}
        data={result}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={
          ({ item, index }) => (
            <View
              key={index}
              style={styles.listItemView}
              backgroundColor="white">
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('ProductDetailScreen', { data: item })
                }>
                <Image
                  source={{ uri: item.image }}
                  style={styles.listImage}
                  PlaceholderContent={<ActivityIndicator />}
                  resizeMode="contain"
                />

                <TouchableOpacity
                  style={{ marginStart: 'auto', backgroundColor: 'orange', borderRadius: 20, padding: 6 }}
                  onPress={() => onClickAddToCart(index, item)}>
                  <Image
                    source={require('../assets/ic_cart1.png')}
                    style={{
                      height: 22,
                      width: 22,
                      tintColor: 'black',
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                <View
                  style={{
                    width: '65%',
                    backgroundColor: '#FBB871',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginEnd: 'auto',
                    padding: 2,
                    borderTopEndRadius: 15,
                    borderBottomEndRadius: 15,
                    elevation: 30,
                  }}>
                  <Text style={[styles.listText, { fontWeight: 'bold' }]}>
                    Price :
                  </Text>
                  <Text style={styles.listText}> {item.price}</Text>
                </View>

                <Text
                  numberOfLines={4}
                  style={[styles.listText, { paddingStart: 4, marginTop: 5 }]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          )
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 10,
    backgroundColor: color.colorWhite,
  },
  listItemView: {
    margin: 4,
    paddingTop: 2,
    paddingBottom: 2,
    paddingEnd: 2,
    backgroundColor: '#fff',
    borderRadius: 5,
    flex: 0.5,
    elevation: 5,
  },
  listText: {
    color: '#000',
    fontWeight: 'normal',
    fontSize: 17,
  },
  listImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    alignSelf: 'center',
  },
});
export default HomeScreen;

import React, { useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  BackHandler,
  Image,
  Alert,
} from 'react-native';
import { Text, Button } from 'react-native-elements';
import { color } from '../utils/color';
import { useFocusEffect } from '@react-navigation/native';
import Slideshow from 'react-native-image-slider-show';
import ViewMoreText from 'react-native-view-more-text';
import RenderHtml from 'react-native-render-html';

//Note : In this screen display Product description with rating and more.
const ProductDetailScreen = ({ route }) => {
  const { data } = route.params;
  const htmlText ="<p>We will train model with bidirectional LSTM on the </p>"
  
  const productImages = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree"];

  const [btnLoading, setBtnLoading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return false;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
  const onPressBuyNow = () => {
    setBtnLoading(true);
    Alert.alert('Alert!', 'Are you sure you want to buy this product?', [
      {
        text: 'Cancel', onPress: () => setBtnLoading(false)
      },
      { text: 'YES', onPress: () => setBtnLoading(false) },
    ]);
    return true;
  };

  const renderViewMore = (onPress) => {
    return (
      <Text style={{ color: 'blue', marginStart: 'auto', paddingEnd: 10 }} onPress={onPress}>View more</Text>
    )
  }
  const renderViewLess = (onPress) => {
    return (
      <Text style={{ color: 'blue', marginStart: 'auto', paddingEnd: 10 }} onPress={onPress}>View less</Text>
    )
  }
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'white' }}>
        <Slideshow
          dataSource={[
            { url: "https://source.unsplash.com/1024x768/?nature" },
            { url: "https://source.unsplash.com/1024x768/?water" },
            { url: "https://source.unsplash.com/1024x768/?girl" },
            { url: "https://source.unsplash.com/1024x768/?tree" },]} />


        <TouchableOpacity
          style={{
            margin: 10,
            marginEnd: 10,
            right: 5,
            alignSelf: 'flex-end',
            width: 45,
            borderWidth: 2,
            borderColor: '#726F6F',
            borderRadius: 45,
            position: 'absolute',
          }}>
          {/* <MaterialIcons
            name="favorite"
            color="#726F6F"
            size={30}
            style={{ padding: 5, alignSelf: 'center' }}
          /> */}
        </TouchableOpacity>

        <Text style={styles.offerStyle}>ON OFFER</Text>
      </View>

      <Text style={{ fontWeight: 'bold', fontSize: 16, padding: 5 }}>
        {data.title}
      </Text>

      <View
        style={{
          width: '14%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'green',
        }}>
        <Text
          style={{
            fontSize: 12,
            color: 'white',
            textAlign: 'center',
            padding: 3,
            fontSize: 12,
          }}>
          {data.rating.rate}
        </Text>
        <Image style={{ width: 15, height: 15 }} source={require('../assets/ic_star.png')} />
      </View>

      <View
        style={{
          padding: 8,
          flexDirection: 'row',
        }}>
        <Text h4>{'\u20B9'}</Text>
        <Text h4>{data.price}</Text>

        <Text
          style={{
            fontSize: 15,
            color: color.borderColor,
            marginStart: 10,
            alignSelf: 'center',
            textDecorationLine: 'line-through',
            textDecorationStyle: 'solid',
          }}>
          {data.price.toFixed(2) + 50}
        </Text>
        <Text style={{ marginStart: 10, color: 'green', alignSelf: 'center' }}>
          5% Off
        </Text>
      </View>
      {/* <Text style={{ padding: 6 }}>{htmlText}</Text>  */}
      
      <ViewMoreText
        numberOfLines={3}
        renderViewMore={renderViewMore}
        renderViewLess={renderViewLess}
        textStyle={{ textAlign: 'left', padding: 6 }}>
          <Text style={{ padding: 6 }}>{data.description}</Text> 
      
      </ViewMoreText>

      <View
        style={{
          marginTop: 'auto',
          flexDirection: 'row',
          alignItems: 'flex-end',
          height: '7%',
        }}>
        <Button
          fontWeight="bold"
          title="ADD TO CART"
          type="outline"
          buttonStyle={{ height: '100%' }}
          containerStyle={{ flex: 0.5 }}
        />

        <Button
          title="BUY NOW"
          loading={btnLoading}
          onPress={() => onPressBuyNow()}
          buttonStyle={{ height: '100%' }}
          containerStyle={{ flex: 0.5 }}></Button>
      </View>
    </View>
  );
};
export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  offerStyle: {
    fontSize: 12,
    maxWidth: '25%',
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    backgroundColor: 'green',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    paddingStart: 3,
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 8,
    top: 5,
  },
});

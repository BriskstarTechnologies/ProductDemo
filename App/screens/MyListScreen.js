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
} from 'react-native';

import { productListApi } from '../ApiHelper/ApiCall';
import { useFocusEffect } from '@react-navigation/native';
import { Image, Header } from 'react-native-elements';
import { color } from '../utils/color';

const MyListScreen = props => {
    const [result, setResult] = useState([]);
    useFocusEffect(
        React.useCallback(() => {

            BackHandler.addEventListener('hardwareBackPress', backAction);
            return () =>
                BackHandler.removeEventListener('hardwareBackPress', backAction);
        }, []),
    );

    useEffect(() => {
        fetchData();
    }, []);

    const backAction = () => {
        Alert.alert('Alert!', 'Are you sure you want to go exit?', [
            {
                text: 'Cancel',
                //onPress: () => null,
                style: 'cancel',
            },
            { text: 'YES', onPress: () => BackHandler.exitApp() },
        ]);
        return true;
    };

    const fetchData = async () => {
        try {
            var getApiData = await productListApi();

            setResult(getApiData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <Header
                centerComponent={{
                    text: 'My List',
                    style: { color: 'black', fontSize: 20, fontWeight: 'bold' },
                }}
                backgroundColor="white"/>

            <FlatList
                style={{ flex: 1 }}
                data={result}
                numColumns={1}
                keyExtractor={item => item.id}
                renderItem={
                    ({ item, index }) => (
                        <TouchableOpacity
                            onPress={() =>
                                props.navigation.navigate('ProductDetailScreen', { data: item })
                            }>
                            <View style={styles.listItemView}>
                                <View style={{ width: '35%', backgroundColor: 'white',alignSelf:'center' }}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={styles.listImage}
                                        resizeMode="contain"
                                    />
                                </View>
                                <View style={{ width: '65%', backgroundColor: 'white' }}>
                                    <View >
                                        <Text
                                            numberOfLines={2}
                                            style={[styles.listText, { paddingStart: 4, marginTop: 5 }]}>
                                            {item.title}
                                        </Text>
                                        <View
                                            style={{
                                                padding: 5,
                                                flexDirection: 'row',
                                            }}>
                                            <Text  style={{color: 'black',fontSize:18, fontWeight:'bold' }}>{'\u20B9'}</Text>
                                            <Text  style={{ color: 'black',fontSize:18,fontWeight:'bold' }}>{item.price}</Text>

                                            <Text
                                                style={{
                                                    fontSize: 15,
                                                    color: color.borderColor,
                                                    marginStart: 10,
                                                    alignSelf: 'center',
                                                    textDecorationLine: 'line-through',
                                                    textDecorationStyle: 'solid',
                                                }}>
                                                {item.price.toFixed(1) + 50}
                                            </Text>
                                            <Text style={{ marginStart: 10, color: 'green', alignSelf: 'center' }}>
                                                5% Off
                                            </Text>
                                        </View>
                                         <Text numberOfLines={2} marginEnd={10}  style={{ marginEnd: 10 }}>{item.description}</Text>
                                     
                                    </View>


                                </View>

                            </View>
                        </TouchableOpacity>
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
        paddingBottom: 5,
        
    },
    listItemView: {
        flexDirection: 'row',
        marginTop:1,
        paddingTop: 1,
        paddingBottom: 2,
        paddingEnd: 5,
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
        alignSelf: 'center',
    },
});
export default MyListScreen;

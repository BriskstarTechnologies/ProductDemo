import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Modal,
    ActivityIndicator
} from 'react-native';
import { color } from '../utils/color';

const Loader = props => {
    const {
        loading
    } = props;

    return (
        <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => { console.log('close modal') }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            style={{ height: 100, width: 100 }}
            color={color.backgroundCol}
            animating={loading} />
        </View>
      </View>
    </Modal>
        //    loading && <View style={styles.modalBackground}>
        //         <View style={styles.activityIndicatorWrapper}>
        //             <ActivityIndicator
        //                 size='large'
        //                 animating={loading} />
        //         </View>
        //     </View>
    );

}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        height:'100%',
        width:'100%',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040',
        position:'absolute',
        zIndex: 999

    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});

export default Loader;
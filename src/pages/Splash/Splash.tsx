import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const Splash = () => {




  return (
    <View style={styles.wrapper}>
     
     
        <Text>
          Powered By Ordering.co
        </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 80,
    width: 250,
    alignSelf: 'center',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default Splash;

import { Link, Stack } from 'expo-router';
import React from 'react';
import { Image, Text, View, StyleSheet, ImageBackground, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView from this package


export default function Home() {
  return (

    <View className="flex-1">

      <ImageBackground
        source={{ uri: "https://i.pinimg.com/originals/48/72/3f/48723f45f57d6251f3d8964ce36be720.jpg" }}
        resizeMode="cover"
        className='flex-1'
      >
        <LinearGradient
          className='flex-1'
          colors={['rgba(255,255,255,0.4)', 'rgba(0,0,0,0.1)']}
        >

          {/* SafeAreaView is used to avoid the text is rendered within the safe area boundaries of a device
          so that text is not hiddent behind round corners or frontal camera etc
          ract-native has SafeAreaView component but it is not updated asl well as the one of the lib react-native-safe-area-context
          */}
          <SafeAreaView
          // className='flex-1 justify-center items-center'
          >
            <Text
              className='text-white text-center font-bold align-center text-4xl '
            >DIOCANE</Text>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});

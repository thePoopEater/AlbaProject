import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { Video } from 'react-native-video';


const StreamScreen = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // URL del streaming de video (reemplaza con la URL de tu servidor Flask)
    const videoURL = 'http://172.20.10.2:5000/video_feed';

    if (videoRef && videoRef.current) {
      videoRef.current.seek(0);
      videoRef.current.presentFullscreenPlayer();
      videoRef.current.load(videoURL, { headers: {} });
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>Streaming de video en vivo</Text>
      <Video
        ref={videoRef}
        style={styles.video}
        resizeMode="contain"
        controls={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.6,
  },
});

export default StreamScreen;

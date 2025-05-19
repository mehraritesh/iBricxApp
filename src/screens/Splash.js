import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from '../assets/logo.svg'; // SVG imported as a component
import LinearGradient from 'react-native-linear-gradient';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={['#B24544', '#79221D']} // Customize gradient colors
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}
      style={styles.container}
    >
      <Logo width={150} height={150} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
});
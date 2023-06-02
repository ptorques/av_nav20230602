import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/kali.png")}/>
      <Text style={styles.title}>PANOPTICON SYSTEMS</Text>
      <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      <Link style={styles.link} href={"./sobre"}>Ir para Sobre</Link>
      <StatusBar style="auto" />
    </View>
  );
}
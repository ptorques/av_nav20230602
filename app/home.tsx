import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/kali.png")}/>
      <Text style={styles.title}>PANOPTICON SYSTEMS</Text>
      <View style={styles.grid}>
        <View style={styles.row}>
        <Image style={styles.image} source={require("../assets/kali.png")} />
        <Image style={styles.image} source={require("../assets/kali.png")} />
        </View>
        <View style={styles.row}>
        <Image style={styles.image} source={require("../assets/kali.png")} />
        <Image style={styles.image} source={require("../assets/kali.png")} />
        </View>
        <View style={styles.row}>
        <Image style={styles.image} source={require("../assets/kali.png")} />
        <Image style={styles.image} source={require("../assets/kali.png")} />
        </View>
        <View style={styles.row}>
        <Image style={styles.image} source={require("../assets/kali.png")} />
        <Image style={styles.image} source={require("../assets/kali.png")} />
        </View>
      </View>
      <Link style={styles.link} href={""}>Ir para index</Link>
      <StatusBar style="auto" />
    </View>
  );
}
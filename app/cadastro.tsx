import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/kali.png")} />
      <Text style={styles.title}>PANOPTICON SYSTEMS</Text>
      <TextInput style={styles.TextInput} placeholder='Nome' />
      <TextInput style={styles.TextInput} placeholder='Email' />
      <TextInput style={styles.TextInput} placeholder='Data de nascimento' />
      <TextInput style={styles.TextInput} placeholder='CPF' />
      <Link href={"home"} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: "#fff"}}>Salvar</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"sobre"} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: "#fff"}}>Voltar</Text>
        </TouchableOpacity>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
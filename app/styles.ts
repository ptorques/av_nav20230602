import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: "5%"
    },
    image: {
      resizeMode: "contain",
      width: "50%"
    },
    title: {
      fontSize: 25,
      fontWeight: "bold",
      color: "#000"
    },
    paragraph: {
      textAlign: "center"
    },
    link: {
        margin: 30,
    },
    TextInput: {
      width: "80%",
      backgroundColor: "#f7f7f8",
      padding: 15,
      borderRadius: 8,
      marginVertical: 10,
      paddingVertical: 12
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
      width: "80%",
      backgroundColor: "#228df2",
      padding: "5%",
      borderRadius: 5
    },
    grid: {
      flex: 1,
      marginBottom: 20
    },
    row: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  
  export default styles
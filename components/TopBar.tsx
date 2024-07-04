import { StyleSheet, Text, View } from "react-native";


export function TopBar() {

  return (
    <View style={styles.contTopBar}>
        <View>
            <Text style={{textAlign:"center"}}>💵 BANCO</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contTopBar:{
    position:"absolute",
    top:25,
    width:"100%",
    height:40,
    alignContent:"center",
    textAlign:"center",
    backgroundColor:"#fff",
    display:"flex",
    justifyContent:"center",
    borderBottomWidth:1,
    borderColor:"#e6e6e6",
    zIndex:10
  }
});

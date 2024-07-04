
import { Route, useNavigation } from "@react-navigation/native";
import { Button, FlatList, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { ParamListBase,  NavigationProp } from '@react-navigation/native';
import { TopBar } from "@/components/TopBar";
import { SearchInput } from "@/components/SearchInput";
import { ShowFinancialProducts } from "@/components/ShowFinancialProducts";
import { useState } from "react";

export default function HomeScreen(){

    const [searchText, setSearchText] = useState('');

    const navigation: NavigationProp<ParamListBase> = useNavigation();
    // const navigation = useNavigation<NativeStackNavigationProp>();
    return(
        <>
            <StatusBar barStyle={"dark-content"}/>
            <TopBar/>
            <View style={styles.principalContainer}>
                <SearchInput searchText={searchText} setSearchText={setSearchText}/>
                {/* <Button title="go to details" onPress={()=>navigation.navigate("screens/DetailsScreen")}/> */}
                <ShowFinancialProducts searchText={searchText}/>
                <TouchableOpacity onPress={()=>navigation.navigate("screens/AddScreen")} 
                    style={{ display:"flex", justifyContent:"center", marginBottom:20, backgroundColor:"#ffea00", 
                    paddingVertical:15, alignItems:"center", borderRadius:5  }}>
                    <Text style={{color:"#014a8e", fontWeight:800}}>ADD</Text>
                </TouchableOpacity>
                
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    principalContainer:{
        height:"100%",
        display:"flex",
        paddingHorizontal:30,
        paddingTop:70,
        backgroundColor:"#fff"

    }
})
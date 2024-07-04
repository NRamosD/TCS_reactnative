import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export function SearchInput({searchText, setSearchText}:any) {
    // const [searchText, setSearchText] = useState('');
    return (
        <View style={styles.searchContainer}>
            <View>
                <TextInput
                    style={styles.inputDesign}
                    placeholder="Search..."
                    onChangeText={newText => setSearchText(newText)}
                    defaultValue={searchText}
                />
                {
                    searchText.length>0?
                    <TouchableOpacity  onPress={()=>setSearchText("")} style={{ position:"absolute", right:10, top:15}}>
                        <Image source={require("@/assets/images/close.png")}
                            style={{width:10, height:10}}
                        />
                    </TouchableOpacity>
                    :null
                }
            </View>
            {
                searchText.length>0?
                (
                    <>
                        <View style={styles.contResults}>
                            <Text style={{padding: 5}}>
                                Results for: {searchText}
                            </Text>
                            
                        </View>
                    
                    </>
                )
                :null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer:{
        height:80
    },
    inputDesign:{
        height:40,
        borderWidth:1,
        borderColor:"#e6e6e6",
        borderRadius:5,
        padding:10,
        paddingRight:30,
        color:"#02215f"
    },
    contResults:{
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth:1,
        borderColor:"#e6e6e6",
        borderRadius:5,
        padding:5,
    },
});
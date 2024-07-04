import { FinancialProduct } from "@/app/types/financialProduct";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";



interface IProps{
    dataItem: FinancialProduct
}


export function SingleFinancialProduct({dataItem}:IProps) {
    
    console.log(dataItem)
  return (
    <View style={styles.contEachItem}>
        <View style={styles.contText}>
            <Text>
                {dataItem.name}
            </Text>
            <Text style={{fontSize:12}}>
                ID: {dataItem.id}
            </Text>
        </View>
        <View style={styles.contArrow}>
            <Image source={require('../assets/images/rightarrow.png')}
            style={{width: 10, height: 10, tintColor:"#d1d1d1"}}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contEachItem:{
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth:1,
    borderColor:"#e6e6e6",
    borderRadius:5,
    padding:5,
  },
  contText:{width:"80%"},
  contArrow:{width:"20%", display:"flex", justifyContent:"center", alignItems:"flex-end", paddingRight:5},
});

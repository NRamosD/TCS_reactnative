
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { FinancialProduct } from "../types/financialProduct";
import formatDateToYYYYMMDD from "../utils/dates";


type Movie = {
    id: string;
    title: string;
    releaseYear: string;
};

interface IDetailedData {
    detailedData: Movie
}

type FinancialProductDetailScreenProps = {
    route: {
        params: {
        financialProduct: FinancialProduct;
        };
    };
};



export default function DetailsScreen({route}:FinancialProductDetailScreenProps){
    const data = route.params.financialProduct
    const dateRelease = formatDateToYYYYMMDD(new Date(data.date_release))
    const dateRevision = formatDateToYYYYMMDD(new Date(data.date_revision))
    // console.log(route.params.financialProduct)
    return(
        <View style={styles.principalContainer}>
            <View style={styles.headerDetails}>
                <Text style={{fontSize:25, fontWeight:800}}>ID:{data.id}</Text>
                <Text>Extra information</Text>
            </View>
            <ScrollView style={{maxHeight:"80%", overflow:"scroll", padding:20}}>
                <View style={styles.row2columnView}>
                    <Text style={{width:"30%"}}>Name</Text>
                    <Text style={{width:"70%", textAlign:"right"}}>{data.name}</Text>
                </View>
                <View style={styles.row2columnView}>
                    <Text style={{width:"30%"}}>Description</Text>
                    <Text style={{width:"70%", textAlign:"right"}}>{data.description}</Text>
                </View>
                <View style={styles.row2columnView}>
                    <Text style={{width:"30%"}}>Logo</Text>
                    <Image style={{width:100, height:60}}
                    source={{uri:`${data.logo}`}}/>
                </View>
                <View style={styles.row2columnView}>
                    <Text style={{width:"30%"}}>Date Release</Text>
                    <Text style={{width:"70%", textAlign:"right"}}>{dateRelease}</Text>
                </View>
                <View style={styles.row2columnView}>
                    <Text style={{width:"30%"}}>Date Revision</Text>
                    <Text style={{width:"70%", textAlign:"right"}}>{dateRevision}</Text>
                </View>
            </ScrollView>
            <View>
                <TouchableOpacity onPress={()=>alert("jaja")} 
                        style={{ display:"flex", justifyContent:"center", marginBottom:20, backgroundColor:"#c7c7c7", 
                        paddingVertical:15, alignItems:"center", borderRadius:5  }}>
                        <Text style={{color:"#014a8e", fontWeight:600}}>EDIT</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>alert("jaja")} 
                        style={{ display:"flex", justifyContent:"center", marginBottom:20, backgroundColor:"#fa0000", 
                        paddingVertical:15, alignItems:"center", borderRadius:5  }}>
                        <Text style={{color:"#FFF", fontWeight:600}}>DELETE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    principalContainer:{
        display:"flex",
        height:"100%",
        backgroundColor:"#fff",
        padding:30
    },
    headerDetails:{
        paddingVertical:20,
        marginBottom:30,
    },
    row2columnView:{
        flexDirection: 'row',
        paddingVertical:20,
    }
})
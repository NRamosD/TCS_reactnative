import { useCallback, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { SingleFinancialProduct } from "./SingleFinancialProduct";
import { NavigationProp, ParamListBase, useFocusEffect, useNavigation } from "@react-navigation/native";
import { AUTHOR_ID, BASE_URL } from "@/constants/env";
import { FinancialProduct } from "@/app/types/financialProduct";


type Movie = {
    id: string;
    title: string;
    releaseYear: string;
  };


export function ShowFinancialProducts({searchText}:any) {
    const navigation: NavigationProp<ParamListBase> = useNavigation();


    const [isLoading, setLoading] = useState(true);
    const [searching, setSearching] = useState(false);
    const [data, setData] = useState<FinancialProduct[]>([]);
    const [filteredData, setFilteredData] = useState<FinancialProduct[]>([]);
    useEffect(()=>{
        getFinancialProduct()
    },[])

    useFocusEffect(
      useCallback(()=>{
        getFinancialProduct()
      },[])
    )

    

    useEffect(()=>{
      setSearching(true)
      setTimeout(() => {
        const auxDataCont = [...data]
        const result = auxDataCont.filter(x=>x.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredData(result)
        setSearching(false)
      }, 2000);
    },[searchText])
  
    const getFinancialProduct = async () => {
      try {
        const response = await fetch(
        BASE_URL+"/bp/products",
        {
            method:"GET",
            headers: {   
              "authorId":`${AUTHOR_ID}`,
              "Access-Control-Allow-Origin":"*",
              "content-type":"application/json"
            }
        })
        const json = await response.json();
        console.log(json)
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const navigateToDetail = (financialProduct: FinancialProduct) => {
        navigation.navigate('screens/DetailsScreen', { financialProduct });
    };

  return (
    <GestureHandlerRootView>
        <ScrollView style={styles.contScrollItems}>
            {isLoading ? (
            <Text>Loading...</Text>
        ) : (
          searchText.length>0?
          (
            searching?
              <Text>Searching...</Text>
            :(
              filteredData.map((item, index)=> 
                  <TouchableOpacity key={`item-loop-fp-${index}`} onPress={()=>navigateToDetail(item)}>
                      <SingleFinancialProduct dataItem={item}/>
                  </TouchableOpacity>
              )

            )
          )
          :
          (
            data.map((item, index)=> 
                <TouchableOpacity key={`item-loop-fp-${index}`} onPress={()=>navigateToDetail(item)}>
                    <SingleFinancialProduct dataItem={item}/>
                </TouchableOpacity>
            )
          )
            

            
        )}
        </ScrollView>
        {
          searchText.length===0?
          <Text style={{padding:10}}>Total of results: {data.length}</Text>
          :null
        }
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  contScrollItems:{
    maxHeight:"70%",
    overflow:"scroll",
    padding:5,
    borderWidth:1,
    borderColor:"#e6e6e6"
  },
  contEachItem:{
    borderBottomWidth:1,
    borderColor:"#e6e6e6",
    borderRadius:5,
    padding:5,
    display:"flex"
  },
});



/*
<FlatList
            data={data}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
                <SingleFinancialProduct dataItem={item}/>
                // <View style={styles.contEachItem}>
                //     <View>
                //         <Text>
                //             Name
                //         </Text>
                //         <Text style={{fontSize:10}}>
                //             {item.title}, {item.releaseYear}
                //         </Text>
                //     </View>
                //     <View>
                //         <Text>
                //             ➡️
                //         </Text>
                //     </View>
                // </View>
            )}
            />


*/
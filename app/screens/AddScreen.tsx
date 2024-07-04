
import { Route, useNavigation } from "@react-navigation/native";
import { Button, FlatList, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { ParamListBase,  NavigationProp } from '@react-navigation/native';
import { TopBar } from "@/components/TopBar";
import { SearchInput } from "@/components/SearchInput";
import { ShowFinancialProducts } from "@/components/ShowFinancialProducts";
import { useState } from "react";
import { AUTHOR_ID, BASE_URL } from "@/constants/env";

export default function AddScreen(){
    const today = new Date()
    const defaultInputs = {
        id:"",
        name:"",
        description:"",
        logo:"",
        date_release:"",
        date_revision:""
    }
    const [dataProduct, setDataProduct] = useState(defaultInputs);
    const [errorInputs, setErrorInputs] = useState([false,false,false,false,false,false])

    // const [form, setForm] = useState({
    //     firstName: '',
    //     lastName: '',
    // });

    const handleInputChange = (name:String, value:String) => {
        if(name==="date_release"){
            try {
                const inputDate = new Date(`${value}`)
                let revisionDateAux = new Date(inputDate)
                revisionDateAux.setFullYear(inputDate.getFullYear() + 1);
                setDataProduct({
                    ...dataProduct,
                    [`${name}`]: inputDate,
                    ["date_revision"]: revisionDateAux.toISOString(),
                });

            } catch (error) {
                const auxErrors = [...errorInputs]
                auxErrors[4] = true
                setErrorInputs(auxErrors)
            }
        }else{
            setDataProduct({
                ...dataProduct,
                [`${name}`]: value,
            });
        }
    };

    // const han = () => {
    //     console.log('Form Data:', dataProduct);
    // };













    


    // const handleChange = (name:String, value:String) => {
        
    //     console.log(value)
    //     setDataProduct({ ...dataProduct, [`${name}`]: value });

    //     const copyArray = [...errorInputs]
    //     switch(name){
    //         case "id":
    //             if(value.length<3 || value.length>10 || value===""){
    //                 copyArray[0] = true
    //             }else{copyArray[0] = false}
    //             setErrorInputs(copyArray)
    //             break;
    //         case "name":
    //             if(value.length<5 || value.length>100 || value===""){
    //                 copyArray[1] = true
    //             }else{copyArray[1] = false}
    //             setErrorInputs(copyArray)
    //             break;
    //         case "description":
    //             if(value.length<10 || value.length>200 || value===""){
    //                 copyArray[2] = true
    //             }else{copyArray[2] = false}
    //             setErrorInputs(copyArray)
    //             break;
    //         case "logo":
    //             if(value.length<5 || value===""){
    //                 copyArray[3] = true
    //             }else{copyArray[3] = false}
    //             setErrorInputs(copyArray)
    //             break;
    //         // case "date_release":
    //         //     let inputDate = new Date(value)
    //         //     inputDate.setHours(today.getHours())
    //         //     inputDate.setMinutes(today.getMinutes())
    //         //     inputDate.setDate(inputDate.getDate());
    //         //     console.log({inp:inputDate, today: today})
    //         //     //date must be today or greater
    //         //     if(inputDate.getTime() < today.getTime()){
    //         //         copyArray[4] = true
    //         //     }else{copyArray[4] = false}
    //         //     setErrorInputs(copyArray)
                
    //         //     // //add 1 year automatically
    //         //     let newDate = new Date(inputDate);
    //         //     newDate.setFullYear(newDate.getFullYear() + 1);
    //         //     setDataProduct({ ...dataProduct, [name]: value ,["date_revision"]: `${newDate.getFullYear()}-${(newDate.getMonth() + 1).toString().padStart(2, '0')}-${(newDate.getDate() + 1).toString().padStart(2, '0')}` });
    //         //     break;
    //         case "date_revision":
    //             break;
    //         default:
    //             break;
    //     }
    //     // if(name==="phone"){
    //     //     const sanitizedValue = value.replace(/[^0-9+\-]/g, '').substring(0, 20);
    //     //     setFormData({ ...formData, [name]: sanitizedValue });
    //     // }else{
    //     // }
    // };


    const handleSubmit = async () => {

        await fetch(
            BASE_URL+"/bp/products",
            {
                method:"POST",
                headers: {   
                    "authorId":`${AUTHOR_ID}`,
                    "Access-Control-Allow-Origin":"*",
                    "content-type":"application/json"
                },
                body: JSON.stringify(dataProduct)
            }).then(
                res=>res.json()
                // {
                //     if (!res.ok) throw new Error("Error en la petición")
                //     return res.json()
                // }
            ).then(data=>{
                console.log("ok",data)
                setDataProduct(defaultInputs)
                alert("New product added successfully!")
            });
    };
    // const navigation = useNavigation<NativeStackNavigationProp>();
    return(
        <>
            <StatusBar barStyle={"dark-content"}/>
            <TopBar/>
            <View style={styles.principalContainer}>
                <Text style={{ fontSize:26, fontWeight:800, paddingVertical:10, marginBottom:10}}>REGISTRATION FORM</Text>
                <ScrollView>
                    <View>
                        <Text style={{paddingVertical:10, fontWeight:800}}>ID</Text>
                        <TextInput
                            placeholder="ID"
                            value={dataProduct.id}
                            onChangeText={(value) => handleInputChange('id', value)}
                            style={{ borderColor: 'gray', borderWidth: 1, borderRadius:5, marginBottom: 10, paddingHorizontal:10, paddingVertical:5 }}
                        />
                    </View>
                    <View>
                        <Text style={{paddingVertical:10, fontWeight:800}}>Name</Text>
                        <TextInput
                            placeholder="Name"
                            value={dataProduct.name}
                            onChangeText={(value) => handleInputChange('name', value)}
                            style={{ borderColor: 'gray', borderWidth: 1, borderRadius:5, marginBottom: 10, paddingHorizontal:10, paddingVertical:5 }}
                        />
                    </View>
                    <View>
                        <Text style={{paddingVertical:10, fontWeight:800}}>Description</Text>
                        <TextInput
                            placeholder="Description"
                            value={dataProduct.description}
                            onChangeText={(value) => handleInputChange('description', value)}
                            style={{ borderColor: 'gray', borderWidth: 1, borderRadius:5, marginBottom: 10, paddingHorizontal:10, paddingVertical:5 }}
                        />
                    </View>
                    <View>
                        <Text style={{paddingVertical:10, fontWeight:800}}>Logo</Text>
                        <TextInput
                            placeholder="Logo URL"
                            value={dataProduct.logo}
                            onChangeText={(value) => handleInputChange('logo', value)}
                            style={{ borderColor: 'gray', borderWidth: 1, borderRadius:5, marginBottom: 10, paddingHorizontal:10, paddingVertical:5 }}
                        />
                    </View>
                    <View>
                        <Text style={{paddingVertical:10, fontWeight:800}}>Date Release</Text>
                        <TextInput
                            placeholder="Date Release (format:YYYY-MM-DD)"
                            value={dataProduct.date_release}
                            onChangeText={(value) => handleInputChange('date_release', value)}
                            style={{ borderColor: 'gray', borderWidth: 1, borderRadius:5, marginBottom: 10, paddingHorizontal:10, paddingVertical:5 }}
                        />
                    </View>
                    <View>
                        <Text style={{paddingVertical:10, fontWeight:800}}>Date Revision</Text>
                        <TextInput
                            editable={false}
                            placeholder="Date Revision"
                            value={dataProduct.date_revision}
                            onChangeText={(value) => handleInputChange('date_revision', value)}
                            style={{ borderColor: 'gray', borderWidth: 1, borderRadius:5, marginBottom: 10, paddingHorizontal:10, paddingVertical:5 }}
                        />
                    </View>
                </ScrollView>
                <View style={{paddingTop:40}}>
                    <TouchableOpacity onPress={()=>handleSubmit()} 
                            style={{ display:"flex", justifyContent:"center", marginBottom:20, backgroundColor:"#ffea00", 
                            paddingVertical:15, alignItems:"center", borderRadius:5  }}>
                            <Text style={{color:"#014a8e", fontWeight:600}}>SEND</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setDataProduct(defaultInputs)} 
                            style={{ display:"flex", justifyContent:"center", marginBottom:20, backgroundColor:"#e1e1e1", 
                            paddingVertical:15, alignItems:"center", borderRadius:5  }}>
                            <Text style={{color:"#014a8e", fontWeight:600}}>RESTART</Text>
                    </TouchableOpacity>
                </View>
                {/* <SearchInput searchText={searchText} setSearchText={setSearchText}/> */}
                {/* <Button title="go to details" onPress={()=>navigation.navigate("screens/DetailsScreen")}/> */}
                {/* <ShowFinancialProducts searchText={searchText}/> */}
                {/* <TouchableOpacity onPress={()=>alert("jaja")} 
                    style={{ display:"flex", justifyContent:"center", marginBottom:20, backgroundColor:"#ffea00", 
                    paddingVertical:15, alignItems:"center", borderRadius:5  }}>
                    <Text style={{color:"#014a8e", fontWeight:800}}>ADD</Text>
                </TouchableOpacity> */}
                
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
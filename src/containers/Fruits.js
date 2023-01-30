import React , {useState,useEffect} from "react";
import {Text, View,StyleSheet,FlatList,Image,RefreshControl,ScrollView} from 'react-native';


export default function Fruits() {
    const [fruits,setfruits] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const wait = (timeout) =>
 { return new Promise(resolve => 
  { setTimeout(resolve, timeout); });}
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
       wait(2000).then(() =>
        setRefreshing(false)
      )}, []);

    const fruitImages = {
      'Piña.png' : require("../imgs/Piña.png"),
      'Manzana.png' : require("../imgs/Manzana.png"),
      'Melocoton.png' : require("../imgs/Melocoton.png"),
      'Uvas.png' : require("../imgs/Uvas.png"),
      'Naranja.png' : require("../imgs/Naranja.png"),
      'Kiwi.png' : require("../imgs/Kiwi.png"),
      'Platano.png' : require("../imgs/Platano.png"),
      'Pera.png' : require("../imgs/Pera.png"),
      }
    useEffect(() => {
      fetch("http://192.168.43.137:8080/fruits")
      .then(response => response.json()) 
      .then((response) => {
        console.log("conexion realizada",response)
        setRefreshing(false)
        setfruits(response);
      })
      .catch(error => console.log(error));
    }, [])

    const renderItem = ({ item }) => (
      <View style={styles1.box}>
          <Image style={styles1.image} source={fruitImages[item.name + '.png']}/>
          <Text style={styles1.nombre}>Nombre: {item.name}</Text>
          <Text style={styles1.nombre}>Precio: {item.price}</Text>
      </View>
    )
    if(refreshing==false){
      return(

            <FlatList
        data={fruits}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
       
    ); 
    }else{
      return(
      <View>
        <Text>CARGANDO</Text>
      </View>
      )
    }
}
const styles1 = StyleSheet.create({
  box:{
    backgroundColor: '#531382',
    padding:20,
    margin:5,
    borderWidth:4,
  },
  nombre:{
    color:'#111111',
    fontSize:30,
    flex:1,
    textAlign:'center'
  },
  image:{
    borderColor:"#BB9AEE",
    backgroundColor:"#111111",
    width:200,
    height:160,
    marginLeft:75,
    marginBottom:10,
    borderWidth:1
  }
});    
import React , {useState} from "react";
import { Text, View,TextInput,StyleSheet,Button,Alert,Image} from 'react-native';

export default function PostFruit() {
    
    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null);
    const [validaName, setValidaName] = useState(null);
    const [validaPrice, setValidaPrice] = useState(null);
    const validaTexto = /[a-zA-ZÁ-ÿ\s]+$/;
    const solo_numero = /^[0-9]+([.][0-9]+)?$/;

    function validadorName(name){
      if (validaTexto.test(name)) {
        setValidaName(true)
        setName(name)
      } else {
        setValidaName(false)
        setName(name)
      }
    }
    
    function validadorPrice(price){
        if (solo_numero.test(price)) {
          setValidaPrice(true)
          setPrice(price)
        } else {
          setValidaPrice(false)
          setName(name)
        }
      }

    function validarFruta (name){
      if (validaName==true && validaPrice==true) {
        console.log(true)
        postFruit()
        Alert.alert("Fruta añadida")
      } else {
        console.log(false)
        Alert.alert("Error al intentar añadir la fruta")
      }
    }
  
      function postFruit() {
        fetch('http://192.168.1.139:8080/fruits', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            price: price,
          }),
        }) .then((response) => response.json())
           .then((responseData) => {console.log("POST Response","Response Body -> " + JSON.stringify(responseData)
          )
        }).catch();
    }

    return(
      <View style ={[styles2.body]}>
        <Text style ={[styles2.titulo]}>POST A FRUIT</Text>
          <Image style ={[styles2.image]} source={require('../imgs/Postman.png')}/>
          <View style ={[styles2.box]}>
            <Text>Nombre: </Text>
              <TextInput style ={validaName ? [styles2.validadorTrue]:[styles2.validadorFalse]}
              onChangeText={name=>validadorName(name)}/>
          </View>
          <View style ={[styles2.separador]}></View>
          <View style ={[styles2.box]}>
            <Text>Precio:    </Text>
              <TextInput style ={validaPrice ? [styles2.validadorTrue]:[styles2.validadorFalse]}
              onChangeText={price=>validadorPrice(price)}/>
          </View>
          <View style ={[styles2.separador]}></View>
          <View>
            <Button
              onPress={() => validarFruta()}
              title={"Insertar"}/>
          </View>
      </View>
    )
  }
  const styles2 = StyleSheet.create({

    body:{
      backgroundColor:"#531382",
      alignItems:"center",
      flex:1,
    },
    titulo:{
      color:"#F09749",
      borderColor:"#000000",
      padding:10,
      borderWidth:3,
      fontSize:40,
      marginTop:40,
    },
    separador:{
     marginBottom:20,
    },
    box:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      padding:20
    },
    validadorTrue:{
      color:"#3BED02",
      borderColor:"#FFFFFF",
      backgroundColor:"#000000",
      borderWidth:3,
      width:250
    },
    validadorFalse:{
      color:"#FA0505",
      borderColor:"#FFFFFF",
      backgroundColor:"#000000",
      borderWidth:3,
      width:250,
    },
    image:{
      width:200,
      height:200,
      marginTop:10,
      marginBottom:10,
    }
  });